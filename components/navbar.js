class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          transition: all 0.3s ease;
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #D4AF37;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .mobile-menu {
            display: none;
          }
          .mobile-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #FFF8F0;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        }
      </style>
      <nav class="bg-cream shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <i data-feather="heart" class="text-blush mr-2"></i>
              <span class="font-heading text-2xl font-bold">Cake Basket</span>
            </div>
            <div class="hidden md:flex space-x-8">
              <a href="#" class="nav-link hover:text-gold transition">Home</a>
              <a href="#" class="nav-link hover:text-gold transition">Our Cakes</a>
              <a href="#" class="nav-link hover:text-gold transition">Occasions</a>
              <a href="#" class="nav-link hover:text-gold transition">About</a>
              <a href="#" class="nav-link hover:text-gold transition">Contact</a>
            </div>
            <button class="md:hidden focus:outline-none" aria-label="mobile menu" aria-expanded="false">
              <i data-feather="menu"></i>
            </button>
          </div>
          <div id="mobile-menu" class="mobile-menu hidden">
            <a href="#" class="py-2 hover:text-gold transition">Home</a>
            <a href="#" class="py-2 hover:text-gold transition">Our Cakes</a>
            <a href="#" class="py-2 hover:text-gold transition">Occasions</a>
            <a href="#" class="py-2 hover:text-gold transition">About</a>
            <a href="#" class="py-2 hover:text-gold transition">Contact</a>
          </div>
        </div>
      </nav>
    `;
    
    // Initialize feather icons
    if (window.feather) {
      window.feather.replace({ class: 'feather-inline' });
    }
    
    // Mobile menu toggle
    const mobileMenuButton = this.shadowRoot.querySelector('button[aria-label="mobile menu"]');
    const mobileMenu = this.shadowRoot.querySelector('#mobile-menu');
    
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);