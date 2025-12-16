// Small UI helpers: set current year, handle form UX and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('currentYear');
  if(el) el.textContent = y;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // Move focus for accessibility
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
      }
    });
  });

  // Simple form submit handling (works with Formspree or similar)
  const form = document.getElementById('contactForm');
  if(form){
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', function(e){
      // Let the browser handle the POST to the action URL, but show UX while submitting.
      if(status){
        status.hidden = false;
        status.textContent = 'Enviando...';
      }
      // After submit, Formspree redirects or returns 200. We don't intercept to preserve compatibility.
      // If you want AJAX submit, replace this behavior with fetch to the endpoint.
      setTimeout(()=> {
        if(status && status.textContent === 'Enviando...') status.textContent = '';
      }, 5000);
    });
  }
});
