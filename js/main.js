(function () {
  'use strict';

  // --- Header scroll effect ---
  const header = document.querySelector('.site-header');

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile navigation ---
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('open');
    document.body.classList.toggle('nav-open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // --- FAQ accordion ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const item = question.closest('.faq-item');
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Close all other items
      faqQuestions.forEach(function (q) {
        q.setAttribute('aria-expanded', 'false');
        q.closest('.faq-item').classList.remove('active');
      });

      // Toggle current item
      if (!isExpanded) {
        question.setAttribute('aria-expanded', 'true');
        item.classList.add('active');
      }
    });
  });

  // --- Quote form (mailto) ---
  const quoteForm = document.getElementById('quote-form');

  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const numModels = document.getElementById('num-models').value;
    const packageType = document.getElementById('package').value;
    const details = document.getElementById('details').value.trim();

    if (!name || !company || !email) {
      alert('Please fill in your name, company and email address.');
      return;
    }

    const subject = encodeURIComponent('Quote Request — ' + company);
    const body = encodeURIComponent(
      'Quote Request from Home Vision Models Website\n\n' +
      'Name: ' + name + '\n' +
      'Company: ' + company + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + (phone || 'Not provided') + '\n' +
      'Number of Models: ' + numModels + '\n' +
      'Package: ' + packageType + '\n\n' +
      'Project Details:\n' + (details || 'Not provided')
    );

    window.location.href = 'mailto:sales@homevisionmodels.com?subject=' + subject + '&body=' + body;
  });

  // --- Footer year ---
  document.getElementById('year').textContent = new Date().getFullYear();
})();
