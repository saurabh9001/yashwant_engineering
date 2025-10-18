// Product data mapped to `img/<id>/` folders provided by the user
const products = [
  { id: 1, code: '1pt', name: "फाळका ट्रॉली (Phalka Trolly)", category: "trolleys", image: "img/1pt/photo_6312248491190717653_y.jpg", images: [
      "img/1pt/photo_6312248491190717653_y.jpg",
      "img/1pt/photo_6312248491190717654_y.jpg",
      "img/1pt/photo_6312248491190717655_y.jpg",
      "img/1pt/photo_6312248491190717656_y.jpg",
      "img/1pt/photo_6312248491190717657_y.jpg",
      "img/1pt/photo_6312248491190717658_y.jpg"
    ], size: '6 x 4', color: 'Blue', quantity: 1, priceLow: 18000, priceHigh: 20000, description: '' },
  { id: 2, code: '2bt', name: "बॉक्स ट्रॉली (Box Trolly)", category: "trolleys", image: "img/2bt/photo_6312248491190717672_y.jpg", images: [
      "img/2bt/photo_6312248491190717672_y.jpg",
      "img/2bt/photo_6312248491190717673_y.jpg",
      "img/2bt/photo_6312248491190717674_y.jpg",
      "img/2bt/photo_6312248491190717675_y.jpg",
      "img/2bt/photo_6312248491190717676_y.jpg"
    ], size: '6 x 4', color: 'Blue', quantity: 1, priceLow: 17000, priceHigh: 19000, description: '' },
  { id: 3, code: '3tt', name: "तळ ट्रॉली (Tal Trolly)", category: "trolleys", image: "img/3tt/photo_6312248491190717678_y.jpg", images: [
      "img/3tt/photo_6312248491190717678_y.jpg",
      "img/3tt/photo_6312248491190717679_y.jpg",
      "img/3tt/photo_6312248491190717680_y.jpg",
      "img/3tt/photo_6312248491190717681_y.jpg",
      "img/3tt/photo_6312248491190717682_y.jpg"
    ], size: '6 x 4', color: 'Blue', quantity: 1, priceLow: 16000, priceHigh: 18000, description: '' },
  { id: 4, code: '4pat', name: "पटी ट्रॉली (Patte Trolly)", category: "trolleys", image: "img/4pat/photo_6312248491190717689_y.jpg", images: [
      "img/4pat/photo_6312248491190717689_y.jpg",
      "img/4pat/photo_6312248491190717690_y.jpg",
      "img/4pat/photo_6312248491190717691_y.jpg",
      "img/4pat/photo_6312248491190717692_y.jpg"
    ], size: '6 x 4', color: 'Blue', quantity: 1, priceLow: 12000, priceHigh: 16000, description: '' },
  { id: 5, code: '5k5p', name: "खुरूट 5 फणी (Khurt 5 Phane)", category: "trolleys", image: "img/5k5p/photo_6312248491190717700_y.jpg", images: [
      "img/5k5p/photo_6312248491190717700_y.jpg",
      "img/5k5p/photo_6312248491190717701_y.jpg",
      "img/5k5p/photo_6312248491190717702_y.jpg",
      "img/5k5p/photo_6312248491190717703_y.jpg",
      "img/5k5p/photo_6312248491190717704_y.jpg"
    ], size: '6 x 4', color: 'Blue', quantity: 1, priceLow: 15000, priceHigh: 18000, description: '' },
  { id: 6, code: '6k7p', name: "खुरूट 7 फणी (Khurut 7 Phane)", category: "trolleys", image: "img/6k7p/photo_6312248491190717700_y.jpg", images: [
      "img/6k7p/photo_6312248491190717700_y.jpg",
      "img/6k7p/photo_6312248491190717701_y.jpg",
      "img/6k7p/photo_6312248491190717702_y.jpg",
      "img/6k7p/photo_6312248491190717703_y.jpg",
      "img/6k7p/photo_6312248491190717704_y.jpg"
    ], size: '3 x 5', color: 'Blue', quantity: 1, priceLow: 15000, priceHigh: 18000, description: '' },
  { id: 7, code: '7gg', name: "द्राक्षबागेचा गाडा (Grapes Gada)", category: "trolleys", image: "img/7gg/photo_6312248491190717716_y.jpg", images: [
      "img/7gg/photo_6312248491190717716_y.jpg",
      "img/7gg/photo_6312248491190717717_y.jpg",
      "img/7gg/photo_6312248491190717718_y.jpg",
      "img/7gg/photo_6312248491190717719_y.jpg",
      "img/7gg/photo_6312248491190717720_y.jpg"
    ], size: '3 x 7', color: 'Blue', quantity: 1, priceLow: 10000, priceHigh: 12000, description: '' },
  { id: 8, code: '8vg', name: "विटभट्टी सप्लाय गाडा (Veetbatii Gada)", category: "trolleys", image: "img/8vg/photo_6312248491190717725_y.jpg", images: [
      "img/8vg/photo_6312248491190717725_y.jpg",
      "img/8vg/photo_6312248491190717726_y.jpg",
      "img/8vg/photo_6312248491190717727_y.jpg",
      "img/8vg/photo_6312248491190717728_y.jpg",
      "img/8vg/photo_6312248491190717729_y.jpg"
    ], size: '3 x 8', color: 'Blue', quantity: 1, priceLow: 11000, priceHigh: 14000, description: '' }
];

let currentFilter = 'all';
// Autoplay interval id for modal slideshow
let modalAutoplayIntervalId = null;

// Simple translations map
const translations = {
  mr: {
    logo_subtitle: 'हाताने बनवलेली धातू उत्पादने',
    nav_products: 'उत्पादने',
    nav_about: 'आमच्याबद्दल',
    nav_contact: 'संपर्क',
    order_now: 'आता ऑर्डर करा',
    hero_title: 'उत्तम दर्जाचे हाताने बनवलेले धातू उत्पादने',
    hero_desc: 'सानुकूल ट्रॉली, औद्योगिक उपकरणे आणि धातूचे काम - पालुसमध्ये कौशल्याने तयार केले.',
    view_products: 'आमची उत्पादने पहा',
    our_products: 'आमची उत्पादने',
    products_intro: 'आमच्या हस्तनिर्मित धातू उत्पादने शोधा. प्रत्येक वस्तू गुणवत्ता साहित्य वापरून बनविली जाते.',
    filter_all: 'सर्व उत्पादने',
    filter_trolleys: 'ट्रोलीज',
    filter_equipment: 'उपकरणे',
    filter_custom: 'कस्टम काम',
    ready_order: 'ऑर्डर करण्यासाठी तयार आहात?',
    contact_intro: 'कस्टम कोट्स, मोठ्या प्रमाणात ऑर्डर्स किंवा चौकशीसाठी संपर्क करा.',
    contact_send: 'आम्हाला संदेश पाठवा',
    label_name: 'नाव *',
    label_email: 'ईमेल *',
    label_phone: 'फोन',
    label_product: 'उत्पादन आवड',
    prod_1: '1 — फालका ट्रॉली',
    prod_2: '2 — बॉक्स ट्रॉली',
    prod_3: '3 — टाळ ट्रॉली',
    prod_4: '4 — पाट्टे ट्रॉली',
    prod_5: '5 — खुर्ट 5 फने',
    prod_6: '6 — खुirut 7 फने',
    prod_7: '7 — द्राक्ष गाडा',
    prod_8: '8 — विटबती गाडा',
    send_message: 'संदेश पाठवा'
  },
  hi: {
    logo_subtitle: 'हैंडक्राफ्टेड मेटल प्रोडक्ट्स',
    nav_products: 'उत्पाद',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क',
    order_now: 'अब ऑर्डर करें',
    hero_title: 'प्रीमियम हस्तनिर्मित धातु उत्पाद',
    hero_desc: 'कस्टम ट्रॉली, औद्योगिक उपकरण और धातु कार्य - पालुस में कौशलपूर्वक निर्मित।',
    view_products: 'हमारे उत्पाद देखें',
    our_products: 'हमारे उत्पाद',
    products_intro: 'हमारे हस्तनिर्मित धातु उत्पादों का अन्वेषण करें। हर आइटम गुणवत्ता वाली सामग्री से बना है।',
    filter_all: 'सभी उत्पाद',
    filter_trolleys: 'ट्रॉली',
    filter_equipment: 'उपकरण',
    filter_custom: 'कस्टम वर्क',
    ready_order: 'क्या आप आर्डर करने के लिए तैयार हैं?',
    contact_intro: 'कस्टम कोट्स, बल्क ऑर्डर, या प्रश्नों के लिए संपर्क करें।',
    contact_send: 'हमें संदेश भेजें',
    label_name: 'नाम *',
    label_email: 'ईमेल *',
    label_phone: 'फ़ोन',
    label_product: 'उत्पाद रुचि',
    prod_1: '1 — Phalka Trolly',
    prod_2: '2 — Box Trolly',
    prod_3: '3 — Tal Trolly',
    prod_4: '4 — Patte Trolly',
    prod_5: '5 — Khurt 5 Phane',
    prod_6: '6 — Khurut 7 Phane',
    prod_7: '7 — Grapes Gada',
    prod_8: '8 — Veetbatii Gada',
    send_message: 'संदेश भेजें'
  },
  en: {
    logo_subtitle: 'Handcrafted Metal Products',
    nav_products: 'Products',
    nav_about: 'About',
    nav_contact: 'Contact',
    order_now: 'Order Now',
    hero_title: 'Premium Handcrafted Metal Products',
    hero_desc: 'Custom trolleys, industrial equipment, and metalwork crafted with precision in Palus, India',
    view_products: 'View Our Products',
    our_products: 'Our Products',
    products_intro: 'Explore our collection of handcrafted metal products. Each item is made with quality materials and attention to detail.',
    filter_all: 'All Products',
    filter_trolleys: 'Trolleys',
    filter_equipment: 'Equipment',
    filter_custom: 'Custom Work',
    ready_order: 'Ready to Order?',
    contact_intro: 'Get in touch for custom quotes, bulk orders, or inquiries about our products.',
    contact_send: 'Send us a Message',
    label_name: 'Name *',
    label_email: 'Email *',
    label_phone: 'Phone',
    label_product: 'Product Interest',
    prod_1: '1 — Phalka Trolly',
    prod_2: '2 — Box Trolly',
    prod_3: '3 — Tal Trolly',
    prod_4: '4 — Patte Trolly',
    prod_5: '5 — Khurt 5 Phane',
    prod_6: '6 — Khurut 7 Phane',
    prod_7: '7 — Grapes Gada',
    prod_8: '8 — Veetbatii Gada',
    send_message: 'Send Message'
  }
};

// Current language (default Marathi 'mr')
let currentLang = 'mr';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// Apply translations to elements with data-i18n attribute
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'select') return;
    if (el.tagName.toLowerCase() === 'option') {
      const val = el.getAttribute('data-i18n');
      if (val) el.textContent = t(val);
      return;
    }
    el.textContent = t(k);
  });
}

// wire language select control
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    // set default
    currentLang = 'mr';
    langSelect.value = currentLang;
    applyTranslations();
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      applyTranslations();
    });
  }
});

// Show a specific slide for a product
function showSlide(product, index) {
  const modal = document.getElementById('productModal');
  const img = document.getElementById('modalImg');
  const indicators = document.getElementById('slideIndicators');

  const images = product.images && product.images.length ? product.images : [product.image];
  const clamped = ((index % images.length) + images.length) % images.length;
  img.src = images[clamped];
  modal.dataset.currentIndex = clamped;

  // update indicators
  if (indicators) {
    Array.from(indicators.children).forEach((dot, i) => {
      dot.classList.toggle('active', i === clamped);
    });
  }
}

function nextSlide() {
  const modal = document.getElementById('productModal');
  const id = Number(modal.dataset.productId);
  const product = products.find(p => p.id === id);
  if (!product) return;
  const idx = Number(modal.dataset.currentIndex) || 0;
  showSlide(product, idx + 1);
}

function prevSlide() {
  const modal = document.getElementById('productModal');
  const id = Number(modal.dataset.productId);
  const product = products.find(p => p.id === id);
  if (!product) return;
  const idx = Number(modal.dataset.currentIndex) || 0;
  showSlide(product, idx - 1);
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  const priceText = product.priceLow && product.priceHigh ? `₹${product.priceLow.toLocaleString()} - ₹${product.priceHigh.toLocaleString()}` : '';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-meta">
        <span class="meta-item">Size: ${product.size}</span>
        <span class="meta-item">Color: ${product.color}</span>
        <span class="meta-item">Qty: ${product.quantity}</span>
      </div>
      <p class="product-desc">${product.description}</p>
      <div class="product-footer">
        <div class="price-tag">${priceText}</div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openProductModal(product));
  // expose product id and current image index for autoplay
  card.setAttribute('data-product-id', product.id);
  card.dataset.currentIndex = 0;
  return card;
}

// Start autoplay for product cards: cycle through each product's images every 2s
function startCardsAutoplay() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const pid = Number(card.getAttribute('data-product-id'));
    const product = products.find(p => p.id === pid);
    if (!product) return;
    const imgs = product.images && product.images.length ? product.images : [product.image];
    if (imgs.length <= 1) return; // nothing to cycle

    // set interval id on element so we can clear later
    let idx = 0;
    function tick() {
      idx = (idx + 1) % imgs.length;
      const imgEl = card.querySelector('.product-image img');
      if (imgEl) imgEl.src = imgs[idx];
      card.dataset.currentIndex = idx;
    }

    const id = setInterval(tick, 2000);
    card._autoplayId = id;

    // pause on hover
    card.addEventListener('mouseenter', () => {
      if (card._autoplayId) clearInterval(card._autoplayId);
    });
    card.addEventListener('mouseleave', () => {
      if (card._autoplayId) clearInterval(card._autoplayId);
      card._autoplayId = setInterval(tick, 2000);
    });
  });
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
  title.textContent = `${product.name} (${product.code})`;
  // build details
  const priceText = product.priceLow && product.priceHigh ? `Price: ₹${product.priceLow.toLocaleString()} - ₹${product.priceHigh.toLocaleString()}` : '';
  desc.innerHTML = `
    <strong>Size:</strong> ${product.size}<br>
    <strong>Color:</strong> ${product.color}<br>
    <strong>Quantity:</strong> ${product.quantity}<br>
    <strong>${priceText}</strong><br>
    <p style="margin-top:8px;color:var(--text-light);">${product.description || ''}</p>
  `;

  // setup slideshow indicators
  modal.dataset.currentIndex = 0;
  modal.dataset.productId = product.id;
  const indicators = document.getElementById('slideIndicators');
  if (indicators) {
    indicators.innerHTML = '';
    const imgs = product.images && product.images.length ? product.images : [product.image];
    imgs.forEach((src, idx) => {
      const dot = document.createElement('button');
      dot.className = 'slide-dot';
      dot.setAttribute('data-index', idx);
      dot.addEventListener('click', () => showSlide(product, idx));
      indicators.appendChild(dot);
    });
  }

  // show first image and start autoplay
  showSlide(product, 0);
  if (modalAutoplayIntervalId) {
    clearInterval(modalAutoplayIntervalId);
  }
  modalAutoplayIntervalId = setInterval(() => nextSlide(), 2000);

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// When 'Order' inside modal is clicked, pre-select product in contact form and scroll
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('order-btn')) {
    const modal = document.getElementById('productModal');
    const pid = modal.dataset.productId;
    if (pid) {
      const productSelect = document.getElementById('product');
      if (productSelect) {
        productSelect.value = products.find(p => String(p.id) === String(pid))?.code || '';
      }
      // close modal and scroll to contact
      closeProductModal();
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({behavior: 'smooth'});
    }
  }
});

// Close product modal
function closeProductModal() {
  const modal = document.getElementById('productModal');
  const img = document.getElementById('modalImg');

  img.src = '';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (modalAutoplayIntervalId) {
    clearInterval(modalAutoplayIntervalId);
    modalAutoplayIntervalId = null;
  }
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

  // modal slideshow controls (prev/next)
  const modalPrevBtn = document.getElementById('modalPrev');
  const modalNextBtn = document.getElementById('modalNext');
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevSlide);
  if (modalNextBtn) modalNextBtn.addEventListener('click', nextSlide);

  // keyboard navigation for modal slideshow + close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
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

  // Start autoplay on product cards
  startCardsAutoplay();

  // Hero slideshow: prefer images from img/store/ but only use those that successfully load
  const heroImg = document.getElementById('heroSlideshowImg');
  if (heroImg) {
    const candidateStore = ['img/store/s1.jpg', 'img/store/s2.jpg', 'img/store/s3.jpg', 'img/store/s4.jpg'];

    // helper: preload image and resolve with success flag
    function preload(src) {
      return new Promise(resolve => {
        const i = new Image();
        let settled = false;
        i.onload = () => { if (!settled) { settled = true; resolve({src, ok:true}); } };
        i.onerror = () => { if (!settled) { settled = true; resolve({src, ok:false}); } };
        // set a short timeout in case of hanging
        setTimeout(() => { if (!settled) { settled = true; resolve({src, ok:false}); } }, 3000);
        i.src = src;
      });
    }

    // try to load all store images in parallel, then pick those that loaded
    Promise.all(candidateStore.map(preload)).then(results => {
      const loadedStore = results.filter(r => r.ok).map(r => r.src);

      // flatten images from products as fallback
      const allImages = products.reduce((acc, p) => {
        if (Array.isArray(p.images) && p.images.length) acc.push(...p.images);
        else if (p.image) acc.push(p.image);
        return acc;
      }, []);

      const heroImagePool = (loadedStore.length ? loadedStore : allImages).filter(Boolean);
      if (!heroImagePool.length) return;

      let heroIndex = 0;
      function showHero(index) {
        const src = heroImagePool[index % heroImagePool.length];
        if (!src) return;
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = src;
          heroImg.onload = () => { heroImg.style.opacity = '1'; };
        }, 120);
      }

      showHero(0);
      setInterval(() => {
        heroIndex = (heroIndex + 1) % heroImagePool.length;
        showHero(heroIndex);
      }, 2000);
    }).catch(() => {
      // on error fallback to product images
      const allImages = products.reduce((acc, p) => {
        if (Array.isArray(p.images) && p.images.length) acc.push(...p.images);
        else if (p.image) acc.push(p.image);
        return acc;
      }, []);
      if (!allImages.length) return;
      let heroIndex = 0;
      function showHero(index) {
        const src = allImages[index % allImages.length];
        if (!src) return;
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = src;
          heroImg.onload = () => { heroImg.style.opacity = '1'; };
        }, 120);
      }
      showHero(0);
      setInterval(() => {
        heroIndex = (heroIndex + 1) % allImages.length;
        showHero(heroIndex);
      }, 2000);
    });
  }
});