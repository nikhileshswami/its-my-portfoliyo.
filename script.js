
    // ── INTERSECTION OBSERVER ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Animate skill bars
          const fills = e.target.querySelectorAll('.skill-fill');
          fills.forEach(f => {
            f.style.width = f.dataset.pct + '%';
          });
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
    });

    // Animate skill fills in active panel on page load too
    function animateVisibleBars() {
      document.querySelectorAll('.skills-panel.active .skill-fill').forEach(f => {
        setTimeout(() => f.style.width = f.dataset.pct + '%', 200);
      });
    }

    // ── TABS ──
    function switchTab(btn, panelId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('panel-' + panelId);
      panel.classList.add('active');
      panel.querySelectorAll('.skill-fill').forEach(f => {
        f.style.width = '0%';
        setTimeout(() => f.style.width = f.dataset.pct + '%', 100);
      });
    }

    // ── MOBILE NAV ──
    function toggleMobileNav() {
      document.getElementById('mobileNav').classList.toggle('open');
    }

    function closeMobileNav() {
      document.getElementById('mobileNav').classList.remove('open');
    }

    // ── CONTACT FORM ──
    function handleForm() {
      const name = document.getElementById('fname').value.trim();
      const email = document.getElementById('femail').value.trim();
      const msg = document.getElementById('fmessage').value.trim();

      if (!name || !email || !msg) {
        alert('Please fill in all fields.');
        return;
      }

      const mailtoLink = `mailto:nikhileshswami123@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(
        "Email: " + email + "\n\nMessage: " + msg
      )}`;

      window.location.href = mailtoLink;

      // optional UI success (keep it nice)
      document.getElementById('formSuccess').style.display = 'block';

      setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
      }, 4000);

      // clear form
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fmessage').value = '';
    }



    // function handleForm() {
    //   const name = document.getElementById('fname').value.trim();
    //   const email = document.getElementById('femail').value.trim();
    //   const msg = document.getElementById('fmessage').value.trim();
    // if (!name || !email || !msg) {
    //   alert('Please fill in all fields.');
    //   return;
    // }
    //   document.getElementById('formSuccess').style.display = 'block';
    //   document.getElementById('fname').value = '';
    //   document.getElementById('femail').value = '';
    //   document.getElementById('fmessage').value = '';
    //   setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 4000);
    // }

    // ── NAV SHADOW ON SCROLL ──
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });

    // Initial load animation for hero
    document.querySelectorAll('#hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 120);
    });

    animateVisibleBars();
  