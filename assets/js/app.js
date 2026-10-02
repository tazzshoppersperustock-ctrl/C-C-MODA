// CIC Moda — E-commerce Engine & State Management

const DEFAULT_PRODUCTS = [
  // --- POLOS HOMBRE ---
  {
    id: "polo-hombre-noir",
    title: "Polo Pima Oversize Boxy Noir",
    category: "polos-hombre",
    price: 89.00,
    cost: 38.00,
    fabric: "100% Algodón Pima Peruano 24/1 • 220 GSM • Cuello cerrado acanalado",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/polo_negro_pima_front.jpg",
    imgBack: "assets/images/polo_negro_pima_back.jpg",
    stock: { S: 14, M: 20, L: 12, XL: 6 }
  },
  {
    id: "polo-hombre-blanco",
    title: "Polo Pima Boxy Chalk White",
    category: "polos-hombre",
    price: 89.00,
    cost: 38.00,
    fabric: "100% Algodón Pima Peinado 230 GSM • Corte boxy estructurado",
    origin: "Algodón Valle de Piura",
    imgFront: "assets/images/polo_hombre_blanco.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 16, M: 18, L: 10, XL: 4 }
  },
  {
    id: "polo-hombre-oliva",
    title: "Polo Minimal Earth Olive Pima",
    category: "polos-hombre",
    price: 95.00,
    cost: 41.00,
    fabric: "Pima teñido reactivo en frío • Tacto ultra sedoso anti-pilling",
    origin: "Hilado Nacional 50/1",
    imgFront: "assets/images/polo_verde_oliva.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 10, M: 15, L: 8, XL: 5 }
  },

  // --- POLOS MUJER ---
  {
    id: "polo-mujer-crop-white",
    title: "Polo Pima Baby Tee Off-White",
    category: "polos-mujer",
    price: 79.00,
    cost: 32.00,
    fabric: "100% Algodón Pima Peinado 210 GSM • Rib acanalado suave de ajuste fino",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/polo_mujer_blanco.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 15, M: 18, L: 12, XL: 5 }
  },
  {
    id: "polo-mujer-noir",
    title: "Polo Pima Relaxed Fit Noir Drop",
    category: "polos-mujer",
    price: 85.00,
    cost: 35.00,
    fabric: "100% Pima Extra Largo 220 GSM • Silueta fluida de caída natural",
    origin: "Algodón Piura Certificado",
    imgFront: "assets/images/polo_mujer_negro_clean.jpg",
    imgBack: "assets/images/polo_negro_pima_back.jpg",
    stock: { S: 12, M: 16, L: 10, XL: 4 }
  },
  {
    id: "polo-mujer-terracota",
    title: "Polo Pima Earth Terracota",
    category: "polos-mujer",
    price: 85.00,
    cost: 36.00,
    fabric: "Algodón Pima teñido botánico • Cuello acanalado y corte contemporáneo",
    origin: "Confección Artesanal Lima",
    imgFront: "assets/images/polo_mujer_terracota.jpg",
    imgBack: "assets/images/polo_blanco_oversize_detail.jpg",
    stock: { S: 14, M: 15, L: 8, XL: 3 }
  },

  // --- JEANS HOMBRE ---
  {
    id: "jeans-hombre-indigo",
    title: "Jeans Straight Raw Indigo 14 oz",
    category: "jeans-hombre",
    price: 179.00,
    cost: 76.00,
    fabric: "Denim rígido 14 oz 100% algodón peruano • Tiro medio y corte recto tradicional",
    origin: "Denim Premium Peruano",
    imgFront: "assets/images/jeans_hombre_indigo.jpg",
    imgBack: "assets/images/pantalon_denim_vintage.jpg",
    stock: { S: 8, M: 14, L: 10, XL: 4 }
  },
  {
    id: "jeans-hombre-stonewash",
    title: "Jeans Wide-Leg Vintage Stone Wash",
    category: "jeans-hombre",
    price: 189.00,
    cost: 82.00,
    fabric: "Denim 13.5 oz algodón nacional • Lavado vintage claro con desgaste suave",
    origin: "Lavandería Textil Lima",
    imgFront: "assets/images/jeans_hombre_denim.jpg",
    imgBack: "assets/images/pantalon_denim_vintage.jpg",
    stock: { S: 7, M: 12, L: 9, XL: 3 }
  },

  // --- JEANS MUJER ---
  {
    id: "jeans-mujer-highwaist",
    title: "Jeans Wide-Leg High Waist Sky Blue",
    category: "jeans-mujer",
    price: 179.00,
    cost: 75.00,
    fabric: "Denim 12.5 oz con 2% confort stretch • Tiro alto estilizador y pierna ancha",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/jeans_mujer_denim.jpg",
    imgBack: "assets/images/pantalon_denim_vintage.jpg",
    stock: { S: 10, M: 16, L: 11, XL: 4 }
  },
  {
    id: "jeans-mujer-vintage",
    title: "Jeans Mom Fit Vintage Mid-Blue",
    category: "jeans-mujer",
    price: 169.00,
    cost: 72.00,
    fabric: "100% Algodón rígido premium • Corte clásico noventero tiro alto y tobillo ajustado",
    origin: "Denim Nacional Peruano",
    imgFront: "assets/images/jeans_mujer_vintage.jpg",
    imgBack: "assets/images/pantalon_denim_vintage.jpg",
    stock: { S: 9, M: 15, L: 8, XL: 2 }
  },
  {
    id: "jeans-mujer-straight",
    title: "Jeans Straight Leg Deep Indigo",
    category: "jeans-mujer",
    price: 175.00,
    cost: 74.00,
    fabric: "Denim índigo profundo con acabado siliconado suave • Ajuste recto favorecedor",
    origin: "Confección Lima, Perú",
    imgFront: "assets/images/jeans_mujer_straight.jpg",
    imgBack: "assets/images/pantalon_denim_vintage.jpg",
    stock: { S: 11, M: 14, L: 9, XL: 3 }
  }
];

const SIZE_CHARTS = {
  "polos-hombre": {
    name: "Polos Hombre (Corte Boxy / Oversize)",
    headers: ["Talla", "Pecho (cm)", "Largo (cm)", "Hombro (cm)", "Manga (cm)"],
    rows: [
      ["S", "106 cm", "71 cm", "49 cm", "22 cm"],
      ["M", "112 cm", "73 cm", "51 cm", "23 cm"],
      ["L", "118 cm", "75 cm", "53 cm", "24 cm"],
      ["XL", "124 cm", "77 cm", "55 cm", "25 cm"]
    ]
  },
  "polos-mujer": {
    name: "Polos Mujer (Corte Regular / Baby Tee)",
    headers: ["Talla", "Busto (cm)", "Largo (cm)", "Hombro (cm)", "Cintura (cm)"],
    rows: [
      ["S", "88 - 92 cm", "54 cm", "38 cm", "68 - 72 cm"],
      ["M", "93 - 97 cm", "56 cm", "40 cm", "73 - 77 cm"],
      ["L", "98 - 104 cm", "58 cm", "42 cm", "78 - 84 cm"],
      ["XL", "105 - 110 cm", "60 cm", "44 cm", "85 - 90 cm"]
    ]
  },
  "jeans-hombre": {
    name: "Jeans Hombre (Straight & Wide-Leg)",
    headers: ["Talla (US)", "Cintura (cm)", "Cadera (cm)", "Largo Total (cm)", "Tiro (cm)"],
    rows: [
      ["S (30)", "78 - 81 cm", "102 cm", "104 cm", "30 cm"],
      ["M (32)", "82 - 85 cm", "106 cm", "106 cm", "31 cm"],
      ["L (34)", "86 - 90 cm", "110 cm", "108 cm", "32 cm"],
      ["XL (36)", "91 - 96 cm", "115 cm", "110 cm", "33 cm"]
    ]
  },
  "jeans-mujer": {
    name: "Jeans Mujer (High Waist & Mom Fit)",
    headers: ["Talla (US)", "Cintura (cm)", "Cadera (cm)", "Largo Total (cm)", "Tiro (cm)"],
    rows: [
      ["S (26-28)", "64 - 68 cm", "92 - 96 cm", "102 cm", "31 cm"],
      ["M (28-30)", "69 - 73 cm", "97 - 101 cm", "104 cm", "32 cm"],
      ["L (30-32)", "74 - 78 cm", "102 - 106 cm", "106 cm", "33 cm"],
      ["XL (32-34)", "79 - 84 cm", "107 - 112 cm", "107 cm", "34 cm"]
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
  const version = localStorage.getItem("cic_moda_catalog_v3");
  if (!version) {
    appState.products = DEFAULT_PRODUCTS;
    saveProducts();
    localStorage.setItem("cic_moda_catalog_v3", "true");
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
    // Initial benchmark demo orders for Admin backoffice
    appState.orders = [
      {
        id: "CC-PE-88491",
        date: "2026-10-01",
        customer: "Mateo Silva",
        country: "Perú (Arequipa)",
        items: [{ title: "Jeans Straight Raw Indigo 14 oz", size: "L", qty: 1, price: 179 }],
        total: 197.00,
        costTotal: 76.00,
        margin: 121.00,
        status: "En tránsito Serpost",
        trackingCode: "SERPOST-PE-7892144"
      },
      {
        id: "CC-EC-10924",
        date: "2026-10-02",
        customer: "Carla Mendoza",
        country: "Ecuador (Quito)",
        items: [{ title: "Polo Pima Baby Tee Off-White", size: "M", qty: 2, price: 79 }],
        total: 203.00,
        costTotal: 64.00,
        margin: 139.00,
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
}

// Currency Conversion & Formatting (Clean Proportional Numbers)
function formatPrice(amountInPEN) {
  const rate = appState.exchangeRates[appState.currency] || 1;
  const converted = amountInPEN * rate;

  if (appState.currency === "PEN") {
    return `S/ ${converted.toFixed(2)}`;
  } else if (appState.currency === "USD") {
    return `$ ${converted.toFixed(2)} USD`;
  } else if (appState.currency === "CLP") {
    return `$ ${Math.round(converted).toLocaleString("es-CL")} CLP`;
  }
  return `S/ ${amountInPEN.toFixed(2)}`;
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  const filtered = appState.activeCategory === "all"
    ? appState.products
    : appState.products.filter(p => p.category === appState.activeCategory);

  container.innerHTML = filtered.map(p => {
    const totalStock = Object.values(p.stock).reduce((a, b) => a + b, 0);
    const isOutOfStock = totalStock === 0;
    const isLowStock = totalStock > 0 && totalStock <= 15;

    let stockBadge = "";
    if (isOutOfStock) {
      stockBadge = `<span class="product-badge badge-out-of-stock">Agotado</span>`;
    } else if (isLowStock) {
      stockBadge = `<span class="product-badge badge-low-stock">Últimas ${totalStock} unid.</span>`;
    } else {
      stockBadge = `<span class="product-badge badge-in-stock">En Stock</span>`;
    }

    const sizesHtml = ["S", "M", "L", "XL"].map(sz => {
      const available = p.stock[sz] > 0;
      return `
        <button 
          class="size-chip ${!available ? 'disabled' : ''}" 
          data-size="${sz}"
          ${!available ? 'disabled' : ''}
          onclick="event.stopPropagation(); selectProductSize('${p.id}', '${sz}', this)"
          title="${available ? `Talla ${sz} (${p.stock[sz]} disp.)` : 'Agotado'}">
          ${sz}
        </button>
      `;
    }).join("");

    const categoryNames = {
      "polos-hombre": "Polos Hombre • Algodón Pima",
      "polos-mujer": "Polos Mujer • Algodón Pima",
      "jeans-hombre": "Jeans Hombre • Denim Peruano",
      "jeans-mujer": "Jeans Mujer • Denim Peruano"
    };

    return `
      <article class="product-card" id="card-${p.id}">
        <div class="product-media" onclick="openProductQuickView('${p.id}')">
          <img src="${p.imgFront}" alt="${p.title}" class="product-img" loading="lazy">
          <div class="product-origin-chip">🇵🇪 Confección Peruana</div>
          ${stockBadge}
        </div>

        <div class="product-body">
          <div>
            <div class="product-category-meta">${categoryNames[p.category] || p.category}</div>
            <h3 class="product-title" onclick="openProductQuickView('${p.id}')">${p.title}</h3>
            <p class="product-fabric-spec">${p.fabric}</p>
          </div>

          <div>
            <div class="product-pricing-row">
              <span class="price-main">${formatPrice(p.price)}</span>
              <div class="size-chips-preview" id="sizes-${p.id}">
                ${sizesHtml}
              </div>
            </div>

            <div class="product-card-actions">
              <button 
                class="btn-card-add" 
                id="btn-add-${p.id}"
                ${isOutOfStock ? 'disabled' : ''}
                onclick="handleCardAddClick('${p.id}')">
                ${isOutOfStock ? 'Agotado' : 'Seleccionar Talla'}
              </button>
              <button 
                class="btn-card-guide" 
                onclick="openSizeGuide('${p.category}', '${p.title}')" 
                title="Ver Tabla de Medidas Exactas">
                📏 Medidas
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Temporary selected sizes per card
const selectedSizes = {};

function selectProductSize(productId, size, btnEl) {
  selectedSizes[productId] = size;
  const card = document.getElementById(`card-${productId}`);
  if (!card) return;

  card.querySelectorAll(".size-chip").forEach(c => c.classList.remove("active"));
  btnEl.classList.add("active");

  const addBtn = document.getElementById(`btn-add-${productId}`);
  if (addBtn) {
    addBtn.innerHTML = `Agregar Talla <strong>${size}</strong> a la Bolsa 🛒`;
    addBtn.style.background = "var(--accent-black)";
  }
}

function handleCardAddClick(productId) {
  const selectedSize = selectedSizes[productId];
  if (!selectedSize) {
    showToast("📏 Por favor selecciona una talla (S, M, L o XL).");
    const container = document.getElementById(`sizes-${productId}`);
    if (container) {
      container.style.animation = "shake 0.4s ease";
      setTimeout(() => container.style.animation = "", 400);
    }
    return;
  }

  addToCart(productId, selectedSize);
}

// Cart Logic
function addToCart(productId, size, quantity = 1) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  const currentStock = product.stock[size] || 0;
  const existingInCart = appState.cart.find(item => item.id === productId && item.size === size);
  const currentInCartQty = existingInCart ? existingInCart.qty : 0;

  if (currentInCartQty + quantity > currentStock) {
    showToast(`⚠️ Stock insuficiente. Solo quedan ${currentStock} unidades en talla ${size}.`);
    return;
  }

  if (existingInCart) {
    existingInCart.qty += quantity;
  } else {
    appState.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      cost: product.cost,
      category: product.category,
      size: size,
      qty: quantity,
      img: product.imgFront
    });
  }

  saveCart();
  showToast(`✅ "${product.title}" (${size}) agregado a tu bolsa.`);
  openCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.innerText = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

function changeCartItemQty(index, delta) {
  const item = appState.cart[index];
  if (!item) return;

  const prod = appState.products.find(p => p.id === item.id);
  const stockLimit = prod ? prod.stock[item.size] : 99;

  item.qty += delta;

  if (item.qty > stockLimit) {
    item.qty = stockLimit;
    showToast(`⚠️ Máximo de stock disponible alcanzado (${stockLimit} unid).`);
  }

  if (item.qty <= 0) {
    appState.cart.splice(index, 1);
  }

  saveCart();
  renderCartDrawer();
}

function removeCartItem(index) {
  appState.cart.splice(index, 1);
  saveCart();
  renderCartDrawer();
}

// Modals: QuickView & Size Guide
function openProductQuickView(productId) {
  const p = appState.products.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  const totalStock = Object.values(p.stock).reduce((a, b) => a + b, 0);

  modalBody.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1.1fr; gap: 2rem;">
      <div>
        <img src="${p.imgFront}" alt="${p.title}" style="width:100%; border-radius:12px; object-fit:cover; aspect-ratio:3/4;">
      </div>
      <div style="display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <span style="font-size:0.8rem; font-weight:700; color:var(--text-tertiary); text-transform:uppercase;">
            ${p.origin}
          </span>
          <h2 style="font-size:1.8rem; font-weight:800; margin:6px 0 10px;">${p.title}</h2>
          <div style="font-size:1.5rem; font-weight:800; color:var(--text-primary); margin-bottom:1rem;">
            ${formatPrice(p.price)}
          </div>
          <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1.2rem;">
            ${p.fabric}
          </p>

          <label style="display:block; font-size:0.85rem; font-weight:700; text-transform:uppercase; margin-bottom:8px;">
            Selecciona tu Talla:
          </label>
          <div style="display:flex; gap:8px; margin-bottom:1.5rem;">
            ${["S", "M", "L", "XL"].map(sz => {
              const count = p.stock[sz];
              return `
                <button 
                  class="size-chip" 
                  style="width:44px; height:44px; font-size:0.9rem;"
                  ${count === 0 ? 'disabled' : ''}
                  onclick="selectModalSize('${sz}', this)">
                  ${sz}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <div>
          <button class="btn-checkout-now" onclick="addModalItemToCart('${p.id}')">
            Agregar a la Bolsa
          </button>
          <button class="btn-card-guide" style="width:100%; margin-top:8px; padding:12px;" onclick="openSizeGuide('${p.category}', '${p.title}')">
            📏 Consultar Tabla de Medidas en cm
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

let modalSelectedSize = null;
function selectModalSize(size, el) {
  modalSelectedSize = size;
  document.querySelectorAll("#modal-body-content .size-chip").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
}

function addModalItemToCart(productId) {
  if (!modalSelectedSize) {
    showToast("📏 Selecciona una talla antes de agregar a la bolsa.");
    return;
  }
  addToCart(productId, modalSelectedSize);
  closeModal();
}

function openSizeGuide(categoryKey, productTitle) {
  const chart = SIZE_CHARTS[categoryKey] || SIZE_CHARTS["polos-hombre"];
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  modalBody.innerHTML = `
    <div>
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:1rem;">
        <div>
          <span style="font-size:0.75rem; font-weight:700; color:var(--text-tertiary); text-transform:uppercase;">
            Guía Oficial de Patronaje Textil Peruano
          </span>
          <h2 style="font-size:1.6rem; font-weight:800; margin-top:4px;">
            Tabla de Medidas (${chart.name})
          </h2>
        </div>
      </div>

      <div style="display:flex; gap:8px; margin: 1.2rem 0; flex-wrap:wrap;">
        <button class="filter-pill ${categoryKey === 'polos-hombre' ? 'active' : ''}" onclick="openSizeGuide('polos-hombre', '${productTitle}')">Polos Hombre</button>
        <button class="filter-pill ${categoryKey === 'polos-mujer' ? 'active' : ''}" onclick="openSizeGuide('polos-mujer', '${productTitle}')">Polos Mujer</button>
        <button class="filter-pill ${categoryKey === 'jeans-hombre' ? 'active' : ''}" onclick="openSizeGuide('jeans-hombre', '${productTitle}')">Jeans Hombre</button>
        <button class="filter-pill ${categoryKey === 'jeans-mujer' ? 'active' : ''}" onclick="openSizeGuide('jeans-mujer', '${productTitle}')">Jeans Mujer</button>
      </div>

      <table class="size-table">
        <thead>
          <tr>
            ${chart.headers.map(h => `<th>${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${chart.rows.map(r => `
            <tr>
              ${r.map((cell, idx) => `<td style="${idx === 0 ? 'font-weight:700;' : ''}">${cell}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div style="background: var(--canvas-alt); border-radius: 8px; padding: 14px; margin-top: 1.5rem; font-size: 0.85rem; color: var(--text-secondary);">
        <strong>💡 Consejo de ajuste CIC Moda:</strong> Todas las medidas están expresadas en centímetros sobre prenda plana. Para polos oversize, recomendamos elegir tu talla habitual; para jeans denim rígido, recomendamos medir tu cintura y contrastar con la tabla.
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("active");
}

// Cart Drawer Mechanics
function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer) drawer.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const shippingEl = document.getElementById("cart-shipping-cost");
  const totalEl = document.getElementById("cart-total");

  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-tertiary);">
        <p style="font-size: 2.5rem; margin-bottom: 10px;">🛍️</p>
        <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 6px;">Tu bolsa está vacía</h4>
        <p style="font-size: 0.85rem;">Explora nuestros polos Pima y jeans denim con envíos nacionales e internacionales.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = formatPrice(0);
    if (shippingEl) shippingEl.innerText = formatPrice(0);
    if (totalEl) totalEl.innerText = formatPrice(0);
    return;
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shippingCost = SHIPPING_RATES[appState.selectedShipping].cost;
  const total = subtotal + shippingCost;

  container.innerHTML = appState.cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-meta">Talla: <strong>${item.size}</strong> • Confección Peruana</div>
        <div class="cart-item-meta" style="color:var(--text-primary); font-weight:700;">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeCartItemQty(${idx}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartItemQty(${idx}, 1)">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeCartItem(${idx})">Eliminar</button>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
  if (shippingEl) shippingEl.innerText = formatPrice(shippingCost);
  if (totalEl) totalEl.innerText = formatPrice(total);
}

function onShippingOptionChange(newOptionKey) {
  appState.selectedShipping = newOptionKey;
  renderCartDrawer();
}

// Checkout & Payment Simulation
function proceedToCheckout() {
  if (appState.cart.length === 0) {
    showToast("🛍️ Tu bolsa está vacía. Selecciona una prenda para comprar.");
    return;
  }

  closeCartDrawer();

  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shippingCost = SHIPPING_RATES[appState.selectedShipping].cost;
  const total = subtotal + shippingCost;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");

  modalBody.innerHTML = `
    <div>
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <span style="font-size:0.75rem; font-weight:700; color:var(--badge-in-stock); text-transform:uppercase;">
          🔒 Pasarela de Pago Segura • Conexión Cifrada SSL
        </span>
        <h2 style="font-size: 1.7rem; font-weight: 800; margin-top: 4px;">
          Finalizar Pedido — CIC Moda
        </h2>
      </div>

      <div style="background:var(--canvas-alt); border-radius:10px; padding:16px; margin-bottom:1.5rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:6px;">
          <span>Subtotal (${appState.cart.reduce((a,b)=>a+b.qty, 0)} prendas):</span>
          <strong>${formatPrice(subtotal)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:6px;">
          <span>Envío (${SHIPPING_RATES[appState.selectedShipping].carrier}):</span>
          <strong>${formatPrice(shippingCost)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.15rem; font-weight:800; border-top:1px solid #d1d5db; padding-top:8px; margin-top:8px;">
          <span>Total a Pagar:</span>
          <span>${formatPrice(total)}</span>
        </div>
      </div>

      <form onsubmit="processPayment(event, ${total})">
        <h4 style="font-size:0.95rem; font-weight:700; text-transform:uppercase; margin-bottom:12px;">Datos de Envío:</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Nombres y Apellidos</label>
            <input type="text" required class="tracking-input" style="width:100%; padding:10px;" placeholder="Ej: Mateo Silva">
          </div>
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Teléfono / WhatsApp</label>
            <input type="tel" required class="tracking-input" style="width:100%; padding:10px;" placeholder="+51 987 654 321">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:1.5rem;">
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">País / Destino</label>
            <select class="tracking-input" style="width:100%; padding:10px;" onchange="onShippingOptionChange(this.value); proceedToCheckout();">
              <option value="lima" ${appState.selectedShipping === 'lima' ? 'selected' : ''}>🇵🇪 Perú - Lima Metropolitana (S/ 10)</option>
              <option value="provincias" ${appState.selectedShipping === 'provincias' ? 'selected' : ''}>🇵🇪 Perú - Provincias (S/ 18)</option>
              <option value="ecuador" ${appState.selectedShipping === 'ecuador' ? 'selected' : ''}>🇪🇨 Ecuador - Postal Internacional (S/ 45)</option>
              <option value="chile" ${appState.selectedShipping === 'chile' ? 'selected' : ''}>🇨🇱 Chile - Postal Internacional (S/ 55)</option>
            </select>
          </div>
          <div>
            <label style="display:block; font-size:0.8rem; font-weight:700; margin-bottom:4px;">Dirección Completa & Ciudad</label>
            <input type="text" required class="tracking-input" style="width:100%; padding:10px;" placeholder="Av. Principal 450, Dpto 301">
          </div>
        </div>

        <label style="display:block; font-size:0.85rem; font-weight:700; text-transform:uppercase; margin:1.5rem 0 8px;">
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
          🔒 Confirmar Pago de ${formatPrice(total)}
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

  // 3. Create Order
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const countryPrefix = appState.selectedShipping === "ecuador" ? "EC" : (appState.selectedShipping === "chile" ? "CL" : "PE");
  const orderId = `CIC-${countryPrefix}-${randomNum}`;
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
    status: "Pagado - En Preparación",
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
      <span style="color:var(--badge-in-stock); font-weight:700; letter-spacing:0.06em; text-transform:uppercase;">
        ¡Pago Aprobado y Orden Confirmada!
      </span>
      <h2 style="font-size:1.8rem; font-weight:800; margin:8px 0 14px;">Pedido ${orderId}</h2>
      <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 1.5rem; font-size:0.92rem; line-height:1.6;">
        Tu pago ha sido procesado automáticamente. Tus prendas de confección peruana están siendo embaladas para su despacho oficial por <strong>Serpost</strong>.
      </p>

      <div style="background:var(--canvas-alt); border:1.5px dashed #000; border-radius:10px; padding:18px; max-width:440px; margin:0 auto 2rem; text-align:left;">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-secondary);">Código Postal Serpost Asignado:</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--text-primary); margin:4px 0;">${trackingNumber}</div>
        <div style="font-size:0.78rem; color:var(--badge-in-stock); font-weight:600;">Estado: En preparación para recojo postal en Lima</div>
      </div>

      <div style="display:flex; gap:12px; justify-content:center;">
        <button class="btn-primary" onclick="closeModal()">
          Seguir Comprando 🛍️
        </button>
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
              ${["S", "M", "L", "XL"].map(sz => `
                <div style="text-align:center; background:var(--canvas-alt); padding:3px 6px; border-radius:4px; font-size:0.75rem;">
                  <span style="font-weight:700;">${sz}:</span> ${p.stock[sz]}
                </div>
              `).join("")}
            </div>
          </td>
          <td>
            <button class="btn-card-guide" style="padding:6px 10px;" onclick="replenishProductStock('${p.id}')">
              ➕ Reabastecer (+10)
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Render Orders Queue
  const ordersTbody = document.getElementById("admin-orders-tbody");
  if (ordersTbody) {
    ordersTbody.innerHTML = appState.orders.map(o => `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.date}</td>
        <td>${o.customer}</td>
        <td>${o.country}</td>
        <td>
          <ul style="list-style:none; font-size:0.8rem; padding:0;">
            ${o.items.map(it => `<li>${it.qty}x ${it.title} (${it.size})</li>`).join("")}
          </ul>
        </td>
        <td><strong>S/ ${o.total.toFixed(2)}</strong></td>
        <td><span style="color:#059669; font-weight:700;">+S/ ${o.margin.toFixed(2)}</span></td>
        <td>
          <span class="stock-tag stock-ok">${o.status}</span>
          <div style="font-size:0.72rem; color:var(--text-tertiary); margin-top:2px;">${o.trackingCode || '—'}</div>
        </td>
        <td>
          <button class="btn-card-guide" style="font-size:0.75rem; padding:4px 8px;" onclick="cycleOrderStatus('${o.id}')">
            Cambiar Estado
          </button>
        </td>
      </tr>
    `).join("");
  }
}

function replenishProductStock(productId) {
  const prod = appState.products.find(p => p.id === productId);
  if (!prod) return;

  ["S", "M", "L", "XL"].forEach(sz => {
    prod.stock[sz] = (prod.stock[sz] || 0) + 10;
  });

  saveProducts();
  renderProducts();
  renderAdminPanel();
  showToast(`📦 Inventario de "${prod.title}" incrementado (+10 por talla).`);
}

function cycleOrderStatus(orderId) {
  const order = appState.orders.find(o => o.id === orderId);
  if (!order) return;

  const states = [
    "Pagado - En preparación",
    "Admitido en Serpost Tomás Valle",
    "Despacho Postal en Tránsito",
    "Entregado al Cliente con Éxito"
  ];

  const currentIdx = states.indexOf(order.status);
  const nextIdx = (currentIdx + 1) % states.length;
  order.status = states[nextIdx];

  saveOrders();
  renderAdminPanel();
  showToast(`🚚 Estado de orden ${orderId} actualizado a: "${order.status}".`);
}

// Secure Admin Access (Prompt for PIN or Toggle)
function openAdminSecure() {
  const pin = prompt("🔐 Acceso Administrador CIC Moda\nIngresa tu clave de acceso (por defecto: 2026):");
  if (pin === "2026" || pin === "1234" || pin === "admin") {
    toggleAdminView();
  } else if (pin !== null) {
    alert("❌ Clave incorrecta.");
  }
}

function toggleAdminView() {
  const storeView = document.getElementById("store-view-wrapper");
  const adminView = document.getElementById("admin-view-wrapper");

  if (adminView.classList.contains("active")) {
    adminView.classList.remove("active");
    storeView.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    adminView.classList.add("active");
    storeView.style.display = "none";
    renderAdminPanel();
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  // Keyboard shortcut for Admin: Ctrl + Shift + A
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      openAdminSecure();
    }
  });

  // Check URL hash for direct admin link (#admin)
  if (window.location.hash === "#admin") {
    setTimeout(openAdminSecure, 300);
  }
}

// Run on load
document.addEventListener("DOMContentLoaded", initStore);
