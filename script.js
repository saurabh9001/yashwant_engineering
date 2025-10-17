// Product data with categories
const products = [
  // Trolleys
  { id: 1, name: "Heavy Duty Industrial Trolley", category: "trolleys", image: "IMG_8197.jpg", description: "Sturdy metal trolley designed for industrial use with heavy load capacity." },
  { id: 2, name: "Custom Platform Trolley", category: "trolleys", image: "IMG_8190.jpg", description: "Custom-built platform trolley with reinforced frame and smooth wheels." },
  { id: 3, name: "Multi-Level Storage Trolley", category: "trolleys", image: "IMG_8189.jpg", description: "Multi-tier trolley perfect for organized storage and transport." },
  { id: 4, name: "Welded Frame Trolley", category: "trolleys", image: "IMG_8191.jpg", description: "Professionally welded frame trolley with durable construction." },
  { id: 5, name: "Industrial Cart System", category: "trolleys", image: "IMG_8192.jpg", description: "Complete cart system designed for manufacturing environments." },

  // Equipment
  { id: 6, name: "Metal Fabrication Frame", category: "equipment", image: "IMG_8106.jpg", description: "Custom metal frame for industrial equipment and machinery." },
  { id: 7, name: "Welding Assembly", category: "equipment", image: "IMG_8107.jpg", description: "Precision welding assembly for industrial applications." },
  { id: 8, name: "Structural Support System", category: "equipment", image: "IMG_8108.jpg", description: "Heavy-duty structural support system with reinforced joints." },
  { id: 9, name: "Equipment Mounting Frame", category: "equipment", image: "IMG_8109.jpg", description: "Custom mounting frame for industrial equipment installation." },
  { id: 10, name: "Metal Processing Unit", category: "equipment", image: "IMG_8110.jpg", description: "Specialized metal processing unit with precision components." },

  // Custom Work
  { id: 11, name: "Artisan Metal Sculpture", category: "custom", image: "IMG_4500.jpg", description: "Handcrafted metal sculpture with intricate design work." },
  { id: 12, name: "Decorative Metal Work", category: "custom", image: "IMG_4502.JPG", description: "Custom decorative metal pieces for architectural applications." },
  { id: 13, name: "Precision Metal Cutting", category: "custom", image: "IMG_4503.jpg", description: "Precision cut metal components with exact specifications." },
  { id: 14, name: "Metal Art Installation", category: "custom", image: "IMG_4504.jpg", description: "Large-scale metal art installation with custom design." },
  { id: 15, name: "Specialty Metal Fabrication", category: "custom", image: "IMG_4899.jpg", description: "Specialty fabrication work for unique requirements." },

  // Additional products from the gallery
  { id: 16, name: "Industrial Metal Structure", category: "equipment", image: "IMG_5785.jpg", description: "Large industrial metal structure with robust construction." },
  { id: 17, name: "Fabrication Workshop Piece", category: "custom", image: "IMG_5786.jpg", description: "Workshop fabrication piece showcasing metalworking expertise." },
  { id: 18, name: "Metal Assembly Component", category: "equipment", image: "IMG_5787.jpg", description: "Complex metal assembly component for industrial use." },
  { id: 19, name: "Custom Metal Frame", category: "trolleys", image: "IMG_5788.jpg", description: "Custom designed metal frame for specialized applications." },
  { id: 20, name: "Precision Engineered Part", category: "equipment", image: "IMG_5789.jpg", description: "Precision engineered metal part with tight tolerances." }
];

let currentFilter = 'all';

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  card.innerHTML = `
    <div class="product-image">
      <img src="../trolly/${product.image}" alt="${product.name}" loading="lazy">
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

  img.src = `../trolly/${product.image}`;
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

  // Add loading animation to product images
  document.querySelectorAll('.product-image img').forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s';
  });
});