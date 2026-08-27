using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class RemoveBlackBackground
{
    public static void Run(string srcPath, string dstPath)
    {
        using (var src = new Bitmap(srcPath))
        {
            int w = src.Width;
            int h = src.Height;
            using (var bmp = src.Clone(new Rectangle(0, 0, w, h), PixelFormat.Format32bppArgb))
            {
                var rect = new Rectangle(0, 0, w, h);
                var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                int stride = data.Stride;
                int bytes = Math.Abs(stride) * h;
                byte[] px = new byte[bytes];
                Marshal.Copy(data.Scan0, px, 0, bytes);

                bool[] visited = new bool[w * h];
                var queue = new Queue<int>();

                Action<int, int> enqueueIfBg = (x, y) =>
                {
                    if (x < 0 || y < 0 || x >= w || y >= h) return;
                    int i = y * w + x;
                    if (visited[i]) return;
                    int o = y * stride + x * 4;
                    byte b = px[o], g = px[o + 1], r = px[o + 2];
                    int mx = Math.Max(r, Math.Max(g, b));
                    int mn = Math.Min(r, Math.Min(g, b));
                    if (mx <= 18 && (mx - mn) <= 8)
                    {
                        visited[i] = true;
                        queue.Enqueue(i);
                    }
                };

                for (int x = 0; x < w; x++)
                {
                    enqueueIfBg(x, 0);
                    enqueueIfBg(x, h - 1);
                }
                for (int y = 0; y < h; y++)
                {
                    enqueueIfBg(0, y);
                    enqueueIfBg(w - 1, y);
                }

                int[] dx = { -1, 1, 0, 0 };
                int[] dy = { 0, 0, -1, 1 };
                while (queue.Count > 0)
                {
                    int i = queue.Dequeue();
                    int x = i % w;
                    int y = i / w;
                    for (int k = 0; k < 4; k++) enqueueIfBg(x + dx[k], y + dy[k]);
                }

                int textStartY = (int)(h * 0.50);
                int bgCount = 0, textLifted = 0;

                for (int y = 0; y < h; y++)
                {
                    for (int x = 0; x < w; x++)
                    {
                        int i = y * w + x;
                        int o = y * stride + x * 4;
                        byte b = px[o], g = px[o + 1], r = px[o + 2];
                        double lum = 0.299 * r + 0.587 * g + 0.114 * b;

                        if (visited[i])
                        {
                            px[o] = 0; px[o + 1] = 0; px[o + 2] = 0; px[o + 3] = 0;
                            bgCount++;
                            continue;
                        }

                        if (lum < 28)
                        {
                            int alpha = (int)Math.Max(0, Math.Min(255, (lum / 28.0) * 255));
                            if (alpha < 12)
                            {
                                px[o] = 0; px[o + 1] = 0; px[o + 2] = 0; px[o + 3] = 0;
                                continue;
                            }
                            if (y >= textStartY)
                            {
                                byte nr = (byte)Math.Min(255, 210 + (int)(lum * 1.5));
                                px[o] = nr; px[o + 1] = nr; px[o + 2] = nr; px[o + 3] = (byte)alpha;
                                textLifted++;
                                continue;
                            }
                            px[o + 3] = (byte)alpha;
                            continue;
                        }

                        if (y >= textStartY && lum < 95)
                        {
                            double t = Math.Max(0.0, Math.Min(1.0, lum / 95.0));
                            byte nr = (byte)(185 + (70 * t));
                            byte alpha = (byte)(160 + (95 * t));
                            px[o] = nr; px[o + 1] = nr; px[o + 2] = nr; px[o + 3] = alpha;
                            textLifted++;
                            continue;
                        }
                    }
                }

                Marshal.Copy(px, 0, data.Scan0, bytes);
                bmp.UnlockBits(data);
                bmp.Save(dstPath, ImageFormat.Png);
                Console.WriteLine("Saved " + dstPath);
                Console.WriteLine("Size " + w + "x" + h);
                Console.WriteLine("Background pixels made transparent: " + bgCount);
                Console.WriteLine("Text pixels lifted: " + textLifted);
            }
        }
    }
}
