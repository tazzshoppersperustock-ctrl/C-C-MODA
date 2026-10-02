// C&C Studio - E-commerce Engine & State Management

const DEFAULT_PRODUCTS = [
  {
    id: "polo-pima-raw-black",
    title: "Polo Pima Oversize Noir Raw",
    category: "polos",
    price: 89.00,
    cost: 38.00,
    fabric: "100% Algodón Pima Peruano 24/1 • 220 GSM • Cuello cerrado acanalado",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/polo_negro_pima_front.jpg",
    imgBack: "assets/images/polo_negro_pima_back.jpg",
    stock: { S: 12, M: 18, L: 8, XL: 4 }
  },
  {
    id: "polo-pima-chalk-white",
    title: "Polo Pima Boxy Chalk White",
    category: "polos",
    price: 89.00,
    cost: 38.00,
    fabric: "100% Algodón Pima Peinado 230 GSM • Corte cuadrado y caída densa",
    origin: "Algodón Valle de Piura",
    imgFront: "assets/images/polo_blanco_oversize.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 15, M: 12, L: 6, XL: 2 }
  },
  {
    id: "polo-pima-olive",
    title: "Polo Minimal Earth Olive Pima",
    category: "polos",
    price: 95.00,
    cost: 41.00,
    fabric: "Pima teñido en frío reactivo • Tacto ultra sedoso anti-pilling",
    origin: "Hilado Nacional 50/1",
    imgFront: "assets/images/polo_verde_oliva.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 8, M: 14, L: 10, XL: 5 }
  },
  {
    id: "hoodie-heavy-anthracite",
    title: "Hoodie Heavyweight 450 GSM Anthracite",
    category: "poleras",
    price: 179.00,
    cost: 78.00,
    fabric: "Franela pesada 100% algodón peruano • Capucha doble tela sin cordones",
    origin: "Gamarra Premium Export",
    imgFront: "assets/images/polera_hoodie_antracita.jpg",
    imgBack: "assets/images/polera_hoodie_arena.jpg",
    stock: { S: 9, M: 15, L: 7, XL: 3 }
  },
  {
    id: "hoodie-desert-sand",
    title: "Hoodie Dune Desert Sand 420 GSM",
    category: "poleras",
    price: 179.00,
    cost: 78.00,
    fabric: "Algodón perchado grueso • Bolsillo canguro invisible con costura francesa",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/polera_hoodie_arena.jpg",
    imgBack: "assets/images/polera_hoodie_antracita.jpg",
    stock: { S: 14, M: 8, L: 4, XL: 2 }
  },
  {
    id: "crewneck-deep-night",
    title: "Crewneck Heavy Rib Deep Night",
    category: "poleras",
    price: 149.00,
    cost: 65.00,
    fabric: "Franela reactiva 400 GSM • Ribs 2x2 elásticos reforzados en cuello y puños",
    origin: "100% Algodón Peruano",
    imgFront: "assets/images/polera_crewneck_negro.jpg",
    imgBack: "assets/images/polera_hoodie_antracita.jpg",
    stock: { S: 11, M: 16, L: 12, XL: 6 }
  },
  {
    id: "pant-cargo-heavy",
    title: "Pantalón Cargo Heavy Utility Raven",
    category: "pantalones",
    price: 169.00,
    cost: 72.00,
    fabric: "Dril pesado 100% algodón • 6 bolsillos funcionales con fuelle • Regulador en botapie",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/pantalon_cargo_heavy.jpg",
    imgBack: "assets/images/pantalon_parachute_negro.jpg",
    stock: { S: 7, M: 12, L: 5, XL: 1 }
  },
  {
    id: "pant-denim-stone",
    title: "Pantalón Wide-Leg Denim Stone Wash",
    category: "pantalones",
    price: 189.00,
    cost: 82.00,
    fabric: "Denim rígido 13.5 oz algodón peruano • Lavado ácido artesanal y tiro relajado",
    origin: "Hecho en Perú",
    imgFront: "assets/images/pantalon_denim_vintage.jpg",
    imgBack: "assets/images/pantalon_cargo_heavy.jpg",
    stock: { S: 6, M: 10, L: 8, XL: 3 }
  },
  {
    id: "pant-parachute-obsidian",
    title: "Pantalón Parachute Ripstop Obsidian",
    category: "pantalones",
    price: 159.00,
    cost: 68.00,
    fabric: "Tejido técnico ligero antidesgarro • Cintura elástica con tanca y rodillas preformadas",
    origin: "Diseño Contemporáneo C&C",
    imgFront: "assets/images/pantalon_parachute_negro.jpg",
    imgBack: "assets/images/pantalon_cargo_heavy.jpg",
    stock: { S: 10, M: 14, L: 6, XL: 4 }
  }
];

const SIZE_CHARTS = {
  polos: {
    headers: ["Talla", "Pecho (cm)", "Largo (cm)", "Hombro (cm)", "Manga (cm)"],
    rows: [
      ["S", "108 cm", "72 cm", "50 cm", "22 cm"],
      ["M", "114 cm", "74 cm", "52 cm", "23 cm"],
      ["L", "120 cm", "76 cm", "54 cm", "24 cm"],
      ["XL", "126 cm", "78 cm", "56 cm", "25 cm"]
    ]
  },
  poleras: {
    headers: ["Talla", "Pecho (cm)", "Largo (cm)", "Hombro (cm)", "Manga (cm)"],
    rows: [
      ["S", "118 cm", "68 cm", "56 cm", "60 cm"],
      ["M", "124 cm", "70 cm", "58 cm", "62 cm"],
      ["L", "130 cm", "73 cm", "60 cm", "64 cm"],
      ["XL", "136 cm", "76 cm", "62 cm", "66 cm"]
    ]
  },
  pantalones: {
    headers: ["Talla (US)", "Cintura (cm)", "Cadera (cm)", "Largo (cm)", "Tiro (cm)"],
    rows: [
      ["S (30)", "78 - 82 cm", "104 cm", "104 cm", "32 cm"],
      ["M (32)", "82 - 86 cm", "108 cm", "106 cm", "33 cm"],
      ["L (34)", "86 - 90 cm", "112 cm", "108 cm", "34 cm"],
      ["XL (36)", "90 - 96 cm", "116 cm", "110 cm", "35 cm"]
    ]
  }
};

const SHIPPING_RATES = {
  lima: { name: "Lima Metropolitana (Express 24-48h)", cost: 10.00, currency: "PEN", carrier: "Serpost / Courier Directo" },
  provincias: { name: "Provincias del Perú (Serpost 3-5 días)", cost: 18.00, currency: "PEN", carrier: "Serpost Postal Nacional" },
  ecuador: { name: "Ecuador (Envío Internacional Serpost 5-8 días)", cost: 45.00, currency: "PEN", carrier: "Serpost Export / Correos del Ecuador" },
  chile: { name: "Chile (Envío Internacional Serpost 5-8 días)", cost: 55.00, currency: "PEN", carrier: "Serpost Export / CorreosChile" }
};

// Application State
let appState = {
  products: [],
  cart: [],
  orders: [],
  currency: "PEN",
  exchangeRates: { PEN: 1, USD: 0.27, CLP: 260 },
  selectedShipping: "lima",
  activeCategory: "all"
};

// Initialize LocalStorage Data
function initStore() {
  const version = localStorage.getItem("cic_v2_synced");
  if (!version) {
    appState.products = DEFAULT_PRODUCTS;
    saveProducts();
    localStorage.setItem("cic_v2_synced", "true");
  } else {
    const savedProducts = localStorage.getItem("cic_products");
    appState.products = savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS;
  }

  const savedCart = localStorage.getItem("cic_cart");
  if (savedCart) appState.cart = JSON.parse(savedCart);

  const savedOrders = localStorage.getItem("cic_orders");
  if (savedOrders) {
    appState.orders = JSON.parse(savedOrders);
  } else {
    // Initial benchmark demo orders
    appState.orders = [
      {
        id: "CC-PE-88491",
        date: "2026-10-01",
        customer: "Mateo Silva",
        country: "Perú (Arequipa)",
        items: [{ title: "Hoodie Heavyweight 450 GSM Anthracite", size: "L", qty: 1, price: 179 }],
        total: 197.00,
        costTotal: 78.00,
        margin: 119.00,
        status: "En tránsito Serpost",
        trackingCode: "SERPOST-PE-7892144"
      },
      {
        id: "CC-EC-10924",
        date: "2026-10-02",
        customer: "Carla Mendoza",
        country: "Ecuador (Quito)",
        items: [{ title: "Polo Pima Oversize Noir Raw", size: "M", qty: 2, price: 89 }],
        total: 223.00,
        costTotal: 76.00,
        margin: 147.00,
        status: "Despacho Aéreo Internacional",
        trackingCode: "SERPOST-INT-EC44019"
      }
    ];
    saveOrders();
  }

  renderProducts();
  updateCartBadge();
  setupEventListeners();
  renderAdminPanel();
}

function saveProducts() {
  localStorage.setItem("cic_products", JSON.stringify(appState.products));
}

function saveCart() {
  localStorage.setItem("cic_cart", JSON.stringify(appState.cart));
  updateCartBadge();
}

function saveOrders() {
  localStorage.setItem("cic_orders", JSON.stringify(appState.orders));
  renderAdminPanel();
}

// Formatting helpers
function formatPrice(amountPEN) {
  const currency = appState.currency;
  const rate = appState.exchangeRates[currency] || 1;
  const converted = amountPEN * rate;

  if (currency === "USD") {
    return `$ ${converted.toFixed(2)} USD`;
  } else if (currency === "CLP") {
    return `$ ${Math.round(converted).toLocaleString()} CLP`;
  }
  return `S/ ${converted.toFixed(2)}`;
}

// Render Products Catalog
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  const filtered = appState.activeCategory === "all" 
    ? appState.products 
    : appState.products.filter(p => p.category === appState.activeCategory);

  container.innerHTML = filtered.map(product => {
    const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);
    const stockClass = totalStock > 10 ? "badge-in-stock" : (totalStock > 0 ? "badge-low-stock" : "badge-out-of-stock");
    const stockText = totalStock > 10 ? `${totalStock} disponibles` : (totalStock > 0 ? `¡Últimas ${totalStock} unid!` : "Agotado");

    const sizePills = Object.entries(product.stock).map(([size, count]) => `
      <span class="size-chip ${count === 0 ? 'disabled' : ''}" title="${count} en stock">${size}</span>
    `).join("");

    return `
      <div class="product-card" data-category="${product.category}">
        <div class="product-media">
          <img src="${product.imgFront}" alt="${product.title}" class="product-img" 
               onmouseover="this.src='${product.imgBack}'" 
               onmouseout="this.src='${product.imgFront}'" loading="lazy">
          <span class="product-badge-origin">🇵🇪 ${product.origin}</span>
          <span class="product-badge-stock ${stockClass}">${stockText}</span>
        </div>
        <div class="product-body">
          <div>
            <div class="product-category-meta">${product.category} • Algodón Pima Peruano</div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-fabric-spec">${product.fabric}</p>
          </div>
          <div>
            <div class="product-pricing-row">
              <span class="price-main">${formatPrice(product.price)}</span>
              <div class="size-chips-preview">${sizePills}</div>
            </div>
            <div class="product-card-actions">
              <button class="btn-card-add" onclick="openProductQuickSelect('${product.id}')">
                Seleccionar Talla & Comprar
              </button>
              <button class="btn-card-guide" onclick="openSizeGuide('${product.category}', '${product.title}')" title="Ver medidas en cm">
                📏 Medidas
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Quick Select Modal
function openProductQuickSelect(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  const sizeOptions = Object.entries(product.stock).map(([size, count]) => `
    <button class="btn-size-selector ${count === 0 ? 'disabled' : ''}" 
            onclick="selectSizeInModal('${size}', ${count})" 
            data-size="${size}" ${count === 0 ? 'disabled' : ''}
            style="padding: 12px 18px; border: 1.5px solid #d1d5db; background: ${count === 0 ? '#f3f4f6' : '#fff'}; border-radius: 8px; font-weight: 700; cursor: ${count === 0 ? 'not-allowed' : 'pointer'};">
      Talla ${size} <span style="font-size:0.75rem; color:${count === 0 ? '#ef4444' : '#10b981'}; font-weight:600;">(${count > 0 ? count + ' disp.' : 'Agotado'})</span>
    </button>
  `).join("");

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start;">
      <img src="${product.imgFront}" alt="${product.title}" style="width: 100%; border-radius: 12px; object-fit: cover; aspect-ratio: 4/5;">
      <div>
        <span style="font-family: var(--font-tech); font-size: 0.78rem; color: var(--accent-peru); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">
          🇵🇪 ${product.origin}
        </span>
        <h2 style="font-size: 1.6rem; font-weight: 800; margin: 6px 0 10px;">${product.title}</h2>
        <p style="font-size: 1.4rem; font-family: var(--font-display); font-weight: 800; margin-bottom: 14px;">${formatPrice(product.price)}</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">${product.fabric}</p>
        
        <label style="display: block; font-weight: 700; font-size: 0.85rem; margin-bottom: 8px; text-transform: uppercase;">
          1. Elige tu Talla:
        </label>
        <div style="display: flex; gap: 10px; margin-bottom: 1.5rem; flex-wrap: wrap;">
          ${sizeOptions}
        </div>

        <input type="hidden" id="selected-size-val" value="">

        <div style="display: flex; gap: 12px; align-items: center; margin-top: 1.5rem;">
          <button class="btn-primary" style="flex-grow: 1; justify-content: center; padding: 16px;" onclick="confirmAddToCart('${product.id}')">
            🛒 Agregar al Carrito
          </button>
          <button class="btn-secondary" onclick="openSizeGuide('${product.category}', '${product.title}')" style="padding: 16px 20px;">
            📏 Tabla de Medidas
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function selectSizeInModal(size, count) {
  if (count === 0) return;
  document.querySelectorAll(".btn-size-selector").forEach(b => {
    b.style.borderColor = "#d1d5db";
    b.style.background = "#fff";
    b.style.color = "#000";
  });

  const selectedBtn = document.querySelector(`.btn-size-selector[data-size="${size}"]`);
  if (selectedBtn) {
    selectedBtn.style.borderColor = "#000";
    selectedBtn.style.background = "#0c0d0f";
    selectedBtn.style.color = "#fff";
  }

  document.getElementById("selected-size-val").value = size;
}

function confirmAddToCart(productId) {
  const size = document.getElementById("selected-size-val").value;
  if (!size) {
    showToast("⚠️ Por favor selecciona una talla antes de agregar al carrito.");
    return;
  }

  const product = appState.products.find(p => p.id === productId);
  if (!product || product.stock[size] <= 0) {
    showToast("⚠️ Lo sentimos, esta talla se encuentra agotada.");
    return;
  }

  // Check if already in cart
  const existingIndex = appState.cart.findIndex(i => i.id === productId && i.size === size);
  if (existingIndex > -1) {
    if (appState.cart[existingIndex].qty < product.stock[size]) {
      appState.cart[existingIndex].qty += 1;
    } else {
      showToast(`⚠️ Has alcanzado el límite de stock disponible (${product.stock[size]} unid).`);
      return;
    }
  } else {
    appState.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      cost: product.cost,
      size: size,
      img: product.imgFront,
      qty: 1
    });
  }

  saveCart();
  closeModal();
  openCartDrawer();
  showToast(`✅ "${product.title}" (Talla ${size}) agregado al carrito.`);
}

// Size Guide Modal
function openSizeGuide(category, productTitle) {
  const chart = SIZE_CHARTS[category] || SIZE_CHARTS.polos;
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  modalBody.innerHTML = `
    <div>
      <span style="font-family: var(--font-tech); font-size: 0.8rem; color: var(--accent-peru); font-weight: 700; text-transform: uppercase;">
        Guía Oficial de Patronaje Textil C&C
      </span>
      <h2 style="font-size: 1.6rem; font-weight: 800; margin: 4px 0 10px;">Tabla de Medidas Exactas (${category.toUpperCase()})</h2>
      <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">
        Nuestras prendas de algodón peruano están diseñadas con patronaje regular/oversize pre-encogido al calor. Toma las medidas de tu prenda favorita sobre una superficie plana para elegir con certeza:
      </p>

      <table class="size-table">
        <thead>
          <tr>
            ${chart.headers.map(h => `<th>${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${chart.rows.map(r => `
            <tr>
              ${r.map((cell, idx) => `<td style="${idx === 0 ? 'font-weight:800;' : ''}">${cell}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div style="background: var(--canvas-alt); border-radius: 8px; padding: 14px; margin-top: 1.5rem; font-size: 0.85rem; color: var(--text-secondary);">
        <strong>💡 Consejo de ajuste C&C:</strong> Si buscas un fit clásico y entallado, elige tu talla habitual. Si deseas la caída holgada contemporánea (Drop-shoulder / Boxy fit), sube una talla.
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("active");
}

// Cart Drawer Mechanics
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cart-drawer").classList.add("active");
  document.getElementById("cart-backdrop").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("active");
  document.getElementById("cart-backdrop").classList.remove("active");
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const shippingEl = document.getElementById("cart-shipping-cost");
  const totalEl = document.getElementById("cart-total");

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-tertiary);">
        <p style="font-size: 2.5rem; margin-bottom: 10px;">🛍️</p>
        <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 6px;">Tu carrito está vacío</h4>
        <p style="font-size: 0.85rem;">Explora nuestros polos Pima, poleras heavyweight y pantalones con envíos Serpost.</p>
      </div>
    `;
    subtotalEl.innerText = formatPrice(0);
    shippingEl.innerText = formatPrice(0);
    totalEl.innerText = formatPrice(0);
    return;
  }

  container.innerHTML = appState.cart.map((item, idx) => `
    <div class="cart-item-card">
      <img src="${item.img}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <div class="cart-item-meta">Talla: <strong>${item.size}</strong> • 100% Algodón Peruano</div>
        <div class="cart-qty-ctrls">
          <button class="cart-qty-btn" onclick="updateItemQty(${idx}, -1)">-</button>
          <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateItemQty(${idx}, 1)">+</button>
          <button onclick="removeCartItem(${idx})" style="background:none; border:none; color:#ef4444; font-size:0.75rem; margin-left:8px; cursor:pointer; text-decoration:underline;">Eliminar</button>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join("");

  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const rate = SHIPPING_RATES[appState.selectedShipping] || SHIPPING_RATES.lima;
  const total = subtotal + rate.cost;

  subtotalEl.innerText = formatPrice(subtotal);
  shippingEl.innerText = formatPrice(rate.cost);
  totalEl.innerText = formatPrice(total);
}

function updateItemQty(index, delta) {
  const item = appState.cart[index];
  const product = appState.products.find(p => p.id === item.id);
  const maxStock = product ? product.stock[item.size] : 99;

  const newQty = item.qty + delta;
  if (newQty <= 0) {
    removeCartItem(index);
    return;
  }
  if (newQty > maxStock) {
    showToast(`⚠️ Solo quedan ${maxStock} unidades disponibles en talla ${item.size}.`);
    return;
  }

  item.qty = newQty;
  saveCart();
  renderCartDrawer();
}

function removeCartItem(index) {
  appState.cart.splice(index, 1);
  saveCart();
  renderCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = appState.cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) badge.innerText = count;
}

function onShippingOptionChange(val) {
  appState.selectedShipping = val;
  renderCartDrawer();
}

// Checkout Process (Pasarela Automatizada)
function proceedToCheckout() {
  if (appState.cart.length === 0) {
    showToast("⚠️ Tu carrito está vacío.");
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const rate = SHIPPING_RATES[appState.selectedShipping] || SHIPPING_RATES.lima;
  const total = subtotal + rate.cost;

  modalBody.innerHTML = `
    <div>
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:12px; margin-bottom:1.5rem;">
        <div>
          <h2 style="font-size:1.5rem; font-weight:800; text-transform:uppercase;">Pasarela de Pago Segura C&amp;C</h2>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Envíos con seguimiento certificado vía Serpost</p>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.75rem; color:var(--text-tertiary); text-transform:uppercase; font-weight:700;">Total a Pagar:</span>
          <div style="font-size:1.6rem; font-family:var(--font-display); font-weight:800; color:var(--accent-peru);">${formatPrice(total)}</div>
        </div>
      </div>

      <form id="checkout-form" onsubmit="processPayment(event, ${total})">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-bottom:1.2rem;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Nombre y Apellidos</label>
            <input type="text" required class="tracking-input" style="width:100%; padding:10px;" placeholder="Ej. Sebastián Morales">
          </div>
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Correo Electrónico</label>
            <input type="email" required class="tracking-input" style="width:100%; padding:10px;" placeholder="tu-email@gmail.com">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-bottom:1.2rem;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">País / Destino de Entrega</label>
            <select class="tracking-input" style="width:100%; padding:10px;" onchange="onShippingOptionChange(this.value); proceedToCheckout();">
              <option value="lima" ${appState.selectedShipping === 'lima' ? 'selected' : ''}>🇵🇪 Perú - Lima Metropolitana (S/ 10)</option>
              <option value="provincias" ${appState.selectedShipping === 'provincias' ? 'selected' : ''}>🇵🇪 Perú - Provincias (S/ 18)</option>
              <option value="ecuador" ${appState.selectedShipping === 'ecuador' ? 'selected' : ''}>🇪🇨 Ecuador - Serpost Internacional (S/ 45 - $12 USD)</option>
              <option value="chile" ${appState.selectedShipping === 'chile' ? 'selected' : ''}>🇨🇱 Chile - Serpost Internacional (S/ 55 - $15 USD)</option>
            </select>
          </div>
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Dirección Completa & Ciudad</label>
            <input type="text" required class="tracking-input" style="width:100%; padding:10px;" placeholder="Av. Principal 450, Dpto 301">
          </div>
        </div>

        <label style="display:block; font-size:0.85rem; font-weight:800; text-transform:uppercase; margin:1.5rem 0 8px;">
          Selecciona tu Método de Pago:
        </label>
        
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-bottom:1.5rem;">
          <label style="border:1.5px solid #000; border-radius:8px; padding:10px; cursor:pointer; text-align:center; font-size:0.8rem; font-weight:700;">
            <input type="radio" name="pay-method" value="tarjeta" checked style="display:none;">
            💳 Tarjeta Déb./Créd.
          </label>
          <label style="border:1px solid #d1d5db; border-radius:8px; padding:10px; cursor:pointer; text-align:center; font-size:0.8rem; font-weight:700;">
            <input type="radio" name="pay-method" value="yape" style="display:none;">
            📱 Yape / Plin
          </label>
          <label style="border:1px solid #d1d5db; border-radius:8px; padding:10px; cursor:pointer; text-align:center; font-size:0.8rem; font-weight:700;">
            <input type="radio" name="pay-method" value="pagoefectivo" style="display:none;">
            🏦 Transferencia BCP
          </label>
          <label style="border:1px solid #d1d5db; border-radius:8px; padding:10px; cursor:pointer; text-align:center; font-size:0.8rem; font-weight:700;">
            <input type="radio" name="pay-method" value="paypal" style="display:none;">
            🌐 PayPal Int.
          </label>
        </div>

        <div id="card-fields-box" style="background:var(--canvas-alt); border-radius:8px; padding:16px; margin-bottom:1.5rem;">
          <div style="margin-bottom:10px;">
            <label style="display:block; font-size:0.75rem; font-weight:700; margin-bottom:4px;">Número de Tarjeta</label>
            <input type="text" class="tracking-input" style="width:100%; padding:8px 12px; background:#fff;" placeholder="4557 •••• •••• 8912" maxlength="19">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <label style="display:block; font-size:0.75rem; font-weight:700; margin-bottom:4px;">Vencimiento</label>
              <input type="text" class="tracking-input" style="width:100%; padding:8px 12px; background:#fff;" placeholder="MM/AA" maxlength="5">
            </div>
            <div>
              <label style="display:block; font-size:0.75rem; font-weight:700; margin-bottom:4px;">CVV</label>
              <input type="password" class="tracking-input" style="width:100%; padding:8px 12px; background:#fff;" placeholder="•••" maxlength="4">
            </div>
          </div>
        </div>

        <button type="submit" class="btn-checkout-now" style="font-size:1.05rem;">
          🔒 Confirmar Pago de ${formatPrice(total)} y Generar Envío Serpost
        </button>
      </form>
    </div>
  `;

  modal.classList.add("active");
}

function processPayment(e, totalAmount) {
  e.preventDefault();
  
  // 1. Deduct Stock in inventory
  appState.cart.forEach(cartItem => {
    const prod = appState.products.find(p => p.id === cartItem.id);
    if (prod && prod.stock[cartItem.size]) {
      prod.stock[cartItem.size] = Math.max(0, prod.stock[cartItem.size] - cartItem.qty);
    }
  });
  saveProducts();

  // 2. Calculate Costs & Profits
  const totalCost = appState.cart.reduce((sum, item) => sum + (item.cost * item.qty), 0);
  const netMargin = totalAmount - totalCost;

  // 3. Create Serpost Order
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const countryPrefix = appState.selectedShipping === "ecuador" ? "EC" : (appState.selectedShipping === "chile" ? "CL" : "PE");
  const orderId = `CC-${countryPrefix}-${randomNum}`;
  const trackingNumber = `SERPOST-${countryPrefix}-${Date.now().toString().slice(-6)}`;

  const newOrder = {
    id: orderId,
    date: new Date().toISOString().split("T")[0],
    customer: "Cliente Web Verificado",
    country: SHIPPING_RATES[appState.selectedShipping].name,
    items: [...appState.cart],
    total: totalAmount,
    costTotal: totalCost,
    margin: netMargin,
    status: "Pagado - Asignado a Serpost",
    trackingCode: trackingNumber
  };

  appState.orders.unshift(newOrder);
  saveOrders();

  // 4. Clear Cart
  appState.cart = [];
  saveCart();
  renderProducts();

  // 5. Show Success Screen
  const modalBody = document.getElementById("modal-body-content");
  modalBody.innerHTML = `
    <div style="text-align:center; padding:2rem 1rem;">
      <div style="font-size:3.5rem; margin-bottom:12px;">🎉</div>
      <span style="font-family:var(--font-tech); color:var(--badge-in-stock); font-weight:800; letter-spacing:0.1em; text-transform:uppercase;">
        ¡Pago Aprobado y Orden Confirmada!
      </span>
      <h2 style="font-size:1.8rem; font-weight:800; margin:8px 0 14px;">Pedido ${orderId}</h2>
      <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 1.5rem; font-size:0.92rem; line-height:1.6;">
        Tu pago ha sido procesado automáticamente. Tu paquete ha ingresado a la central de despacho para su rotulado y envío certificado por <strong>Serpost</strong>.
      </p>

      <div style="background:var(--canvas-alt); border:1.5px dashed #000; border-radius:10px; padding:18px; max-width:440px; margin:0 auto 2rem; text-align:left;">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-secondary);">Código de Seguimiento Serpost:</div>
        <div style="font-family:var(--font-tech); font-size:1.3rem; font-weight:800; color:var(--text-primary); margin:4px 0;">${trackingNumber}</div>
        <div style="font-size:0.78rem; color:var(--badge-in-stock); font-weight:600;">Estado: Listo para recojo postal en Tomás Valle, Lima</div>
      </div>

      <div style="display:flex; gap:12px; justify-content:center;">
        <button class="btn-primary" onclick="closeModal(); checkSerpostTracking('${orderId}')">
          📍 Ver Rastreo de Mi Envío
        </button>
        <button class="btn-secondary" onclick="closeModal()">
          Volver a la Tienda
        </button>
      </div>
    </div>
  `;
}

// Serpost Tracking Search Function
function checkSerpostTracking(orderIdInput) {
  const input = orderIdInput || document.getElementById("tracking-query-input").value.trim();
  if (!input) {
    showToast("⚠️ Ingresa un número de pedido (ej: CC-PE-88491 o CC-EC-10924).");
    return;
  }

  const order = appState.orders.find(o => o.id.toLowerCase() === input.toLowerCase() || (o.trackingCode && o.trackingCode.toLowerCase() === input.toLowerCase()));
  const container = document.getElementById("tracking-result-box");

  if (!order) {
    container.innerHTML = `
      <div style="background:#fee2e2; border:1px solid #ef4444; border-radius:8px; padding:16px; color:#991b1b; font-size:0.9rem;">
        ❌ No encontramos un envío con el código <strong>${input}</strong>. Verifica el número en tu correo o prueba con los códigos de ejemplo: <code>CC-PE-88491</code> o <code>CC-EC-10924</code>.
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:24px; box-shadow:var(--shadow-md);">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e5e7eb; padding-bottom:14px; margin-bottom:16px;">
        <div>
          <span style="font-size:0.75rem; font-weight:700; color:var(--accent-peru); text-transform:uppercase;">Envío Postal Certificado</span>
          <h3 style="font-size:1.3rem; font-weight:800;">${order.id}</h3>
        </div>
        <div style="text-align:right;">
          <span class="stock-tag stock-ok">${order.status}</span>
          <div style="font-family:var(--font-tech); font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">Guía: ${order.trackingCode}</div>
        </div>
      </div>

      <div class="tracking-timeline">
        <div class="timeline-step completed">
          <h5 style="font-size:0.9rem; font-weight:700;">1. Pago Confirmado y Embalado C&amp;C Studio</h5>
          <p style="font-size:0.78rem; color:var(--text-secondary);">Prendas de algodón peruano inspeccionadas y selladas en bolsa hermética.</p>
        </div>
        <div class="timeline-step completed">
          <h5 style="font-size:0.9rem; font-weight:700;">2. Admitido en Centro de Clasificación Serpost</h5>
          <p style="font-size:0.78rem; color:var(--text-secondary);">Tomás Valle (Callao, Lima) - Clasificación aduanera y peso certificado.</p>
        </div>
        <div class="timeline-step active">
          <h5 style="font-size:0.9rem; font-weight:700;">3. ${order.status}</h5>
          <p style="font-size:0.78rem; color:var(--badge-in-stock); font-weight:600;">Destino: ${order.country} • Código Postal asignado.</p>
        </div>
        <div class="timeline-step">
          <h5 style="font-size:0.9rem; font-weight:700;">4. Entrega Final a Domicilio</h5>
          <p style="font-size:0.78rem; color:var(--text-secondary);">Entrega con acuse de recibo y firma del destinatario.</p>
        </div>
      </div>
    </div>
  `;
}

// Admin / Backoffice Operations
function renderAdminPanel() {
  const totalRevenue = appState.orders.reduce((sum, o) => sum + o.total, 0);
  const totalCost = appState.orders.reduce((sum, o) => sum + o.costTotal, 0);
  const netProfit = totalRevenue - totalCost;
  const marginPct = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : 0;
  const totalUnitsInStock = appState.products.reduce((sum, p) => sum + Object.values(p.stock).reduce((a, b) => a + b, 0), 0);

  // Update KPIs
  const kpiRev = document.getElementById("admin-kpi-revenue");
  const kpiCost = document.getElementById("admin-kpi-cost");
  const kpiProfit = document.getElementById("admin-kpi-profit");
  const kpiStock = document.getElementById("admin-kpi-stock");

  if (kpiRev) kpiRev.innerText = `S/ ${totalRevenue.toFixed(2)}`;
  if (kpiCost) kpiCost.innerText = `S/ ${totalCost.toFixed(2)}`;
  if (kpiProfit) kpiProfit.innerText = `S/ ${netProfit.toFixed(2)} (${marginPct}%)`;
  if (kpiStock) kpiStock.innerText = `${totalUnitsInStock} prendas`;

  // Render Inventory Table
  const inventoryTbody = document.getElementById("admin-inventory-tbody");
  if (inventoryTbody) {
    inventoryTbody.innerHTML = appState.products.map(p => {
      const marginItem = (p.price - p.cost).toFixed(2);
      const marginItemPct = (((p.price - p.cost) / p.price) * 100).toFixed(0);
      return `
        <tr>
          <td>
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="${p.imgFront}" style="width:40px; height:48px; object-fit:cover; border-radius:4px;">
              <div>
                <strong>${p.title}</strong>
                <div style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase;">${p.category}</div>
              </div>
            </div>
          </td>
          <td><strong>S/ ${p.price.toFixed(2)}</strong></td>
          <td style="color:#6b7280;">S/ ${p.cost.toFixed(2)}</td>
          <td><span style="color:#059669; font-weight:700;">+S/ ${marginItem} (${marginItemPct}%)</span></td>
          <td>
            <div style="display:flex; gap:6px;">
              ${Object.entries(p.stock).map(([sz, qty]) => `
                <span style="padding:2px 6px; background:#f3f4f6; border-radius:4px; font-size:0.75rem; ${qty < 5 ? 'color:#d97706; font-weight:bold;' : ''}">
                  ${sz}: ${qty}
                </span>
              `).join("")}
            </div>
          </td>
          <td>
            <button onclick="replenishStock('${p.id}')" style="background:#0c0d0f; color:#fff; border:none; padding:6px 10px; border-radius:4px; font-size:0.75rem; font-weight:600; cursor:pointer;">
              + Reponer +5
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Render Orders Table
  const ordersTbody = document.getElementById("admin-orders-tbody");
  if (ordersTbody) {
    ordersTbody.innerHTML = appState.orders.map(o => `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.date}</td>
        <td>${o.customer}</td>
        <td>${o.country}</td>
        <td><strong>S/ ${o.total.toFixed(2)}</strong></td>
        <td><span style="color:#059669; font-weight:700;">+S/ ${o.margin.toFixed(2)}</span></td>
        <td><span class="stock-tag stock-ok">${o.status}</span></td>
        <td>
          <button onclick="updateOrderStatus('${o.id}')" style="background:#f3f4f6; border:1px solid #d1d5db; padding:4px 8px; border-radius:4px; font-size:0.72rem; cursor:pointer; font-weight:600;">
            Avanzar Envío
          </button>
        </td>
      </tr>
    `).join("");
  }
}

function replenishStock(productId) {
  const prod = appState.products.find(p => p.id === productId);
  if (!prod) return;

  Object.keys(prod.stock).forEach(size => {
    prod.stock[size] += 5;
  });

  saveProducts();
  renderProducts();
  renderAdminPanel();
  showToast(`✅ Se agregaron +5 unidades a todas las tallas de "${prod.title}".`);
}

function updateOrderStatus(orderId) {
  const order = appState.orders.find(o => o.id === orderId);
  if (!order) return;

  const states = [
    "Pagado - En preparación",
    "Admitido en Serpost Tomás Valle",
    "Despacho Aéreo Internacional",
    "En Aduana Destino",
    "Entregado al Cliente con Éxito"
  ];

  const currentIdx = states.indexOf(order.status);
  const nextIdx = (currentIdx + 1) % states.length;
  order.status = states[nextIdx];

  saveOrders();
  renderAdminPanel();
  showToast(`🚚 Estado de orden ${orderId} actualizado a: "${order.status}".`);
}

function toggleAdminView() {
  const storeView = document.getElementById("store-view-wrapper");
  const adminView = document.getElementById("admin-view-wrapper");
  const toggleBtn = document.getElementById("admin-toggle-btn");

  if (adminView.classList.contains("active")) {
    adminView.classList.remove("active");
    storeView.style.display = "block";
    toggleBtn.innerHTML = "⚙️ Panel Negocio C&amp;C";
  } else {
    adminView.classList.add("active");
    storeView.style.display = "none";
    toggleBtn.innerHTML = "🛍️ Volver a la Tienda";
    renderAdminPanel();
  }
}

// Toast notification
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Event Listeners Setup
function setupEventListeners() {
  // Category Pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.activeCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Currency select
  const currSelect = document.getElementById("currency-select");
  if (currSelect) {
    currSelect.addEventListener("change", (e) => {
      appState.currency = e.target.value;
      renderProducts();
      renderCartDrawer();
    });
  }
}

// Run on load
document.addEventListener("DOMContentLoaded", initStore);
