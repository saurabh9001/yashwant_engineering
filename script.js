// Product data mapped to `img/<id>/` folders provided by the user
const products = [
  { id: 1, name: "Phalka Trolly", category: "trolleys", image: "img/1pt/photo_6312248491190717653_y.jpg", description: "Size: 6 x 4 — Blue. Price: ₹18000 + ₹20000" },
  { id: 2, name: "Box Trolly", category: "trolleys", image: "img/2bt/photo_6312248491190717672_y.jpg", description: "Size: 6 x 4 — Blue. Price: ₹17000 + ₹19000" },
  { id: 3, name: "Tal Trolly", category: "trolleys", image: "img/3tt/photo_6312248491190717678_y.jpg", description: "Size: 6 x 4 — Blue. Price: ₹16000 + ₹18000" },
  { id: 4, name: "Patte Trolly", category: "trolleys", image: "img/4pat/photo_6312248491190717689_y.jpg", description: "Size: 6 x 4 — Blue. Price: ₹12000 + ₹16000" },
  { id: 5, name: "Khurt 5 Phane", category: "trolleys", image: "img/5k5p/photo_6312248491190717700_y.jpg", description: "Size: 6 x 4 — Blue. Price: ₹15000 + ₹18000" },
  { id: 6, name: "Khurut 7 Phane", category: "trolleys", image: "img/6k7p/photo_6312248491190717700_y.jpg", description: "Size: 3 x 5 — Blue. Price: ₹15000 + ₹18000" },
  { id: 7, name: "Grapes Gada", category: "trolleys", image: "img/7gg/photo_6312248491190717716_y.jpg", description: "Size: 3 x 7 — Blue. Price: ₹10000 + ₹12000" },
  { id: 8, name: "Veetbatii Gada", category: "trolleys", image: "img/8vg/photo_6312248491190717725_y.jpg", description: "Size: 3 x 8 — Blue. Price: ₹11000 + ₹14000" }
];

let currentFilter = 'all';

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-desc">${product.description}</p>
    </div>
  `;

  card.addEventListener('click', () => openProductModal(product));
  return card;
}

// Filter products
function filterProducts(category) {
  currentFilter = category;

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${category}"]`).classList.add('active');

  // Filter products
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Open product modal
function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const img = document.getElementById('modalImg');
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');

  img.src = product.image;
  title.textContent = product.name;
  desc.textContent = product.description;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
  const modal = document.getElementById('productModal');
  const img = document.getElementById('modalImg');

  img.src = '';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Contact form handling
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;

  // Basic validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showFormMessage('Please fill in all required fields.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    return;
  }

  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Simulate form submission (in a real app, this would send to a server)
  setTimeout(() => {
    // Reset form
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    // Show success message
    showFormMessage('Thank you for your message! We\'ll get back to you soon via Instagram.', 'success');

    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', {
      name,
      email,
      phone: form.phone.value,
      product: form.product.value,
      message
    });
  }, 1500);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormMessage(message, type) {
  // Remove existing message
  const existingMsg = document.querySelector('.form-message');
  if (existingMsg) existingMsg.remove();

  // Create new message
  const msg = document.createElement('div');
  msg.className = `form-message ${type}`;
  msg.textContent = message;
  msg.style.cssText = `
    padding: 12px 16px;
    border-radius: 6px;
    margin-top: 16px;
    font-weight: 500;
    ${type === 'success' ?
      'background-color: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2);' :
      'background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);'}
  `;

  const form = document.getElementById('contactForm');
  form.appendChild(msg);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (msg.parentNode) msg.remove();
  }, 5000);
}

// Smooth scrolling for navigation
function handleNavClick(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');

  // Create product cards
  products.forEach(product => {
    const card = createProductCard(product);
    productsGrid.appendChild(card);
  });

  // Filter button event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');
      filterProducts(filter);
    });
  });

  // Modal event listeners
  const modal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  modalClose.addEventListener('click', closeProductModal);
  modalBackdrop.addEventListener('click', closeProductModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Navigation smooth scrolling
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', handleNavClick);
  });

  // Mobile nav toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navWrap = document.querySelector('.nav-wrap');
  if (mobileToggle && navWrap) {
    mobileToggle.addEventListener('click', () => {
      navWrap.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navWrap.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navWrap.classList.remove('open');
      });
    });
  }

  // Add loading animation to product images
  document.querySelectorAll('.product-image img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s';
    // When image finishes loading, fade it in. If it's already loaded (from cache), show immediately.
    img.addEventListener('load', () => { img.style.opacity = '1'; });
    if (img.complete && img.naturalWidth !== 0) {
      // already loaded (cached) — ensure it's visible
      img.style.opacity = '1';
    }
  });
});