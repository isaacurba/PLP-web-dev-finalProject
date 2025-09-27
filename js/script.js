
// Main interactivity for Matt Com Solutions
document.addEventListener('DOMContentLoaded', function(){

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      if(nav.style.display === 'flex')
        nav.style.display = 'none';
      else nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
    });
  }   

  // Smooth scroll for internal links (hero CTA)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('cname');
      const email = document.getElementById('cemail');
      const message = document.getElementById('cmessage');
      // clear errors
      document.getElementById('cnameError').textContent = '';
      document.getElementById('cemailError').textContent = '';
      document.getElementById('cmessageError').textContent = '';
      document.getElementById('csuccess').textContent = '';

      if(!name.value.trim() || name.value.trim().length < 2){
        document.getElementById('cnameError').textContent = 'Please enter your name (2+ chars).';
        valid = false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email.value.trim().match(emailPattern)){
        document.getElementById('cemailError').textContent = 'Please enter a valid email.';
        valid = false;
      }
      if(!message.value.trim() || message.value.trim().length < 10){
        document.getElementById('cmessageError').textContent = 'Please enter a message (10+ chars).';
        valid = false;
      }
      if(valid){
        document.getElementById('csuccess').textContent = 'Thanks! Your message was validated locally (not sent).';
        contactForm.reset();
      }
    });
  }

  // Quote form validation on services page
  const quoteForm = document.getElementById('quote-form');
  if(quoteForm){
    quoteForm.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;
      document.getElementById('qnameError').textContent='';
      document.getElementById('qemailError').textContent='';
      document.getElementById('qdetailsError').textContent='';
      document.getElementById('qsuccess').textContent='';

      const qname = document.getElementById('qname');
      const qemail = document.getElementById('qemail');
      const qdetails = document.getElementById('qdetails');

      if(!qname.value.trim() || qname.value.trim().length < 2){
        document.getElementById('qnameError').textContent='Please enter your name (2+ chars).';
        valid = false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!qemail.value.trim().match(emailPattern)){
        document.getElementById('qemailError').textContent='Please enter a valid email.';
        valid = false;
      }
      if(!qdetails.value.trim() || qdetails.value.trim().length < 10){
        document.getElementById('qdetailsError').textContent='Please add more details (10+ chars).';
        valid = false;
      }
      if(valid){
        document.getElementById('qsuccess').textContent = 'Quote requested — your submission was validated locally.';
        quoteForm.reset();
      }
    });
  }

  // Product 'Buy now' buttons - show a quick toast
  document.querySelectorAll('.product-card .btn, .product .btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.preventDefault();
      alert('Thanks for your interest! Please contact us to complete purchases.');
    });
  });

});
