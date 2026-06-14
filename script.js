

const books = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", price: 12.99, genre: "Fiction", stars: 5, image: "image/pic01.jpeg", badge: "new", pages: 304, year: 2020, desc: "Between life and death there is a library. When Nora Seed finds herself there, she has a chance to make things right. A dazzling, life-affirming novel about all the choices we make — and what it means to truly live." },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", price: 15.99, genre: "History", stars: 5, image: "image/pic2.jpeg", pages: 443, year: 2011, desc: "How did Homo sapiens come to dominate the Earth? From examining the very nature of life, this groundbreaking narrative explores how biology and history have defined us and enhanced our understanding of what it means to be human." },
  { id: 3, title: "The Name of the Wind", author: "Patrick Rothfuss", price: 13.99, genre: "Fantasy", stars: 5, image: "image/pic3.jpeg", pages: 662, year: 2007, desc: "Told in Kvothe's own voice, this is the tale of a magically gifted young man who grows to be the most notorious wizard his world has ever seen. A masterful work of literary fantasy." },
  { id: 4, title: "Gone Girl", author: "Gillian Flynn", price: 11.99, genre: "Mystery", stars: 4, image: "image/pic4.jpeg", pages: 422, year: 2012, desc: "On a warm summer morning in North Carthage, Missouri, Nick Dunne's wife Amy disappears. A story full of unexpected twists, psychological depth, and unsettling revelations about marriage and identity." },
  { id: 5, title: "Atomic Habits", author: "James Clear", price: 14.99, genre: "Self-Help", stars: 5, image: "image/pic5.jpeg", badge: "new", pages: 320, year: 2018, desc: "A revolutionary system to get 1% better every day. Clear reveals exactly how tiny changes can grow into life-altering outcomes, offering a proven framework for improving every day." },
  { id: 6, title: "A Brief History of Time", author: "Stephen Hawking", price: 13.49, genre: "Science", stars: 5, image: "image/pic6.jpeg", pages: 212, year: 1988, desc: "From the Big Bang to black holes, Stephen Hawking takes us on a journey through the cosmos. Landmark popular science that changed how we think about the universe." },
  { id: 7, title: "Educated", author: "Tara Westover", price: 12.49, genre: "History", stars: 5, image: "image/pic7.jpeg", badge: "sale", salePrice: 9.99, pages: 334, year: 2018, desc: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University — a story of resilience and self-invention." },
  { id: 8, title: "Project Hail Mary", author: "Andy Weir", price: 14.49, genre: "Science", stars: 5, image: "image/pic8.jpeg", pages: 476, year: 2021, desc: "Ryland Grace wakes up alone on a spaceship, with no memory and a mission to save Earth from an extinction-level threat. A thrilling, scientifically rich space adventure." },
  { id: 9, title: "The Thursday Murder Club", author: "Richard Osman", price: 11.49, genre: "Mystery", stars: 4, image: "image/pic9.jpeg", pages: 382, year: 2020, desc: "In a peaceful retirement village, four unlikely friends meet weekly to puzzle over unsolved murders. But when a real murder occurs, their amateur sleuthing is put to the ultimate test." },
  { id: 10, title: "The Alchemist", author: "Paulo Coelho", price: 10.99, genre: "Fiction", stars: 5, image: "image/pic10.jpeg", pages: 197, year: 1988, desc: "A young shepherd's journey to follow his dream leads him across the Egyptian desert. A timeless fable about listening to your heart and following your destiny." },
  { id: 11, title: "Dune", author: "Frank Herbert", price: 13.99, genre: "Fantasy", stars: 5, image: "image/pic11.jpeg", pages: 688, year: 1965, desc: "Set in the distant future, a young nobleman becomes embroiled in a conflict over the most valuable substance in the universe. The greatest science fiction novel ever written." },
  { id: 12, title: "Think Again", author: "Adam Grant", price: 13.49, genre: "Self-Help", stars: 4, image: "image/pic12.jpeg", pages: 307, year: 2021, desc: "Intelligence is usually seen as the ability to think and learn. Adam Grant argues that in a rapidly changing world, there's another set of cognitive skills that matters — the ability to rethink and unlearn." },
  { id: 13, title: "The Silent Sea", author: "Clive Cussler", price: 12.99, genre: "Fiction", stars: 4, image: "image/pic013.jpeg", pages: 400, year: 2010, desc: "A thrilling adventure about a lost treasure hidden deep in the sea." },
  { id: 14, title: "Where the Crawdads Sing", author: "Delia Owens", price: 13.99, genre: "Fiction", stars: 5, image: "image/pic14.jpeg", pages: 384, year: 2018, desc: "A mysterious story of a girl growing up alone in the marshlands." },
  { id: 15, title: "The Book Thief", author: "Markus Zusak", price: 12.99, genre: "Fiction", stars: 5, image: "image/pic15.jpeg", pages: 552, year: 2005, desc: "A moving story set in Nazi Germany, narrated by Death, about a girl who finds comfort in stealing books and sharing stories." },
  { id: 16, title: "The Girl on the Train", author: "Paula Hawkins", price: 12.99, genre: "Mystery", stars: 5, image: "image/pic16.jpeg", pages: 336, year: 2015, desc: "A psychological thriller about a woman who becomes entangled in a missing person investigation after witnessing something suspicious from a train window." },
  { id: 17, title: "Big Little Lies", author: "Liane Moriarty", price: 13.49, genre: "Mystery", stars: 5, image: "image/pic17.jpeg", pages: 460, year: 2014, desc: "A story of three women whose lives become connected through secrets, lies, and a shocking murder at a school trivia night." },
  { id: 18, title: "The Silent Patient", author: "Alex Michaelides", price: 14.99, genre: "Mystery", stars: 5, image: "image/pic18.jpeg", pages: 336, year: 2019, desc: "A woman who shoots her husband and then stops speaking, and a psychotherapist determined to uncover the truth behind her silence." },
  { id: 19, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 13.99, genre: "Fantasy", stars: 5, image: "image/pic19.jpeg", pages: 309, year: 1997, desc: "A young boy discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry, where magic, friendship, and danger await." },
  { id: 20, title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.49, genre: "Fantasy", stars: 5, image: "image/pic20.jpeg", pages: 310, year: 1937, desc: "Bilbo Baggins is swept into an unexpected adventure with dwarves to reclaim a treasure guarded by the dragon Smaug." },
  { id: 21, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", price: 12.99, genre: "Fantasy", stars: 5, image: "image/pic21.jpeg", pages: 208, year: 1950, desc: "Four siblings enter a magical world called Narnia, where they must help defeat the White Witch and restore peace to the land." },
  { id: 22, title: "Cosmos", author: "Carl Sagan", price: 14.99, genre: "Science", stars: 5, image: "image/pic22.jpeg", pages: 365, year: 1980, desc: "A journey through space and time exploring planets, stars, and the origins of life in the universe." },
  { id: 23, title: "The Selfish Gene", author: "Richard Dawkins", price: 12.99, genre: "Science", stars: 5, image: "image/pic23.jpeg", pages: 360, year: 1976, desc: "A groundbreaking book that explains evolution from the perspective of genes and natural selection." },
  { id: 24, title: "The Diary of a Young Girl", author: "Anne Frank", price: 11.99, genre: "History", stars: 5, image: "image/pic24.jpeg", pages: 283, year: 1947, desc: "The real diary of Anne Frank, a Jewish girl hiding during World War II, sharing her hopes, fears, and life in hiding." },
  { id: 25, title: "Guns, Germs, and Steel", author: "Jared Diamond", price: 14.99, genre: "History", stars: 5, image: "image/pic25.jpeg", pages: 480, year: 1997, desc: "Explains how geography and environment shaped the modern world and why some civilizations developed faster than others." },
  { id: 26, title: "The Power of Now", author: "Eckhart Tolle", price: 13.99, genre: "Self-Help", stars: 5, image: "image/pic26.jpeg", pages: 236, year: 1997, desc: "A spiritual guide that teaches how to live fully in the present moment and reduce stress and anxiety." },
  { id: 27, title: "How to Win Friends and Influence People", author: "Dale Carnegie", price: 12.99, genre: "Self-Help", stars: 5, image: "image/pic27.jpeg", pages: 288, year: 1936, desc: "A timeless book about communication, relationships, and improving social skills for success in life." },
  { id: 28, title: "You Are a Badass", author: "Jen Sincero", price: 13.99, genre: "Self-Help", stars: 5, image: "image/pic28.jpeg", pages: 256, year: 2013, desc: "A motivational book that helps you build confidence, break self-doubt, and create a better life through positive thinking and action." },
  { id: 29, title: "Team of Rivals: The Political Genius of Abraham Lincoln", author: "Doris Kearns Goodwin", price: 16.99, genre: "History", stars: 5, image: "image/pic29.jpeg", pages: 916, year: 2005, desc: "A detailed biography showing how Abraham Lincoln managed his political rivals and led the United States through the Civil War." },
  { id: 30, title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", price: 13.99, genre: "Science", stars: 5, image: "image/pic30.jpeg", pages: 224, year: 2017, desc: "A simple and engaging introduction to the universe, explaining stars, galaxies, and cosmic mysteries in an easy way." }
];

let cart = [], activeGenre = 'All', searchQuery = '';
function starsHtml(n) { return '★'.repeat(n) + '☆'.repeat(5 - n) }

function renderBooks() {
  const grid = document.getElementById('booksGrid');
  let filtered = books.filter(b => {
    const mg = activeGenre === 'All' || b.genre === activeGenre;
    const ms = b.title.toLowerCase().includes(searchQuery) || b.author.toLowerCase().includes(searchQuery);
    return mg && ms;
  });
  if (!filtered.length) { grid.innerHTML = '<p style="color:var(--gray);grid-column:1/-1;text-align:center;padding:40px 0">No books found. Try a different search.</p>'; return; }
  grid.innerHTML = filtered.map(b => {
    const dp = b.salePrice || b.price;
    const badge = b.badge === 'new' ? '<span class="badge-new">New</span>' : b.badge === 'sale' ? '<span class="badge-sale">Sale</span>' : '';
    const bJson = JSON.stringify(b).replace(/"/g, '&quot;');
    return `<div class="book-card">
      <div class="book-cover-placeholder" onclick="openDetail(${b.id})" style="background:${b.color}">
  <img src="${b.image}" alt="${b.title}">
</div>
      <div class="book-info">
        <div class="book-genre">${b.genre}</div>
        <div class="book-title">${b.title}${badge}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-stars">${starsHtml(b.stars)} (${b.stars}.0)</div>
        <div class="book-footer">
          <span class="book-price">$${dp.toFixed(2)}</span>
          <div style="display:flex;align-items:center;gap:6px">
            <button class="view-detail-btn" onclick="openDetail(${b.id})">Details</button>
            <button class="add-btn" onclick="addToCart(${bJson})">+ Cart</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function setGenre(genre, btn) {
  activeGenre = genre;
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderBooks();
}

function filterBooks() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  renderBooks();
}

function addToCart(book) {
  const price = book.salePrice || book.price;
  const ex = cart.find(i => i.id === book.id);
  if (ex) { ex.qty++; } else { cart.push({ ...book, price, qty: 1 }); }
  updateCartCount();
  showToast(`"${book.title}" added to cart!`);
  renderCart();
}

function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartCount(); renderCart(); }

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
  const items = document.getElementById('cartItems'), totalDiv = document.getElementById('cartTotal');
  if (!cart.length) {
    items.innerHTML = '<div class="cart-empty"><div style="font-size:2.8rem;margin-bottom:12px">📚</div><p style="font-weight:600;margin-bottom:6px">Your cart is empty</p><p style="font-size:0.82rem">Browse our collection to find your next read.</p></div>';
    totalDiv.innerHTML = ''; return;
  }
  items.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-cover">
  <img src="${i.image}" alt="${i.title}">
</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${i.title}</div>
        <div class="cart-item-author">${i.author}</div>
        <div class="cart-item-price">$${i.price.toFixed(2)} × ${i.qty}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✕</button>
    </div>`).join('');
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const ship = sub > 30 ? 0 : 3.99;
  totalDiv.innerHTML = `<div class="cart-total">
    <div class="cart-total-row"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
    <div class="cart-total-row"><span>Shipping</span><span>${ship === 0 ? '<span style="color:var(--sage);font-weight:600">Free ✓</span>' : '$' + ship.toFixed(2)}</span></div>
    ${ship > 0 ? `<div style="font-size:0.76rem;color:var(--gray);margin-bottom:4px">Add $${(30 - sub).toFixed(2)} more for free shipping</div>` : ''}
    <div class="cart-total-row final"><span>Total</span><span>$${(sub + ship).toFixed(2)}</span></div>
    <button class="checkout-btn" onclick="checkout()">Proceed to Checkout →</button>
  </div>`;
}

function toggleCart() { document.getElementById('cartOverlay').classList.toggle('open'); renderCart(); }
function closeCartOnBg(e) { if (e.target.id === 'cartOverlay') toggleCart(); }
function checkout() { showToast('Checkout coming soon! Thank you. 🎉'); toggleCart(); }

/* LOGIN */
function openLogin() { document.getElementById('loginOverlay').classList.add('open'); switchTab('login', document.querySelectorAll('.login-tab')[0]); }
function openRegister() { document.getElementById('loginOverlay').classList.add('open'); switchTab('register', document.querySelectorAll('.login-tab')[1]); }
function closeLogin() { document.getElementById('loginOverlay').classList.remove('open'); }
function switchTab(tab, btn) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}
function handleLogin() { showToast('Welcome back! Signed in successfully. 📚'); closeLogin(); }
function handleRegister() { showToast('Account created! Welcome to BookWorld. 🎉'); closeLogin(); }

/* PRODUCT DETAIL */
function openDetail(id) {
  const b = books.find(x => x.id === id); if (!b) return;
  const dp = b.salePrice || b.price;
  document.getElementById('detailCover').innerHTML = `
    <div class="detail-book-cover">
  <img src="${b.image}" alt="${b.title}">
</div>
    <span class="detail-genre-badge">${b.genre}</span>
    <div style="font-size:0.8rem;color:var(--gray);text-align:center;line-height:1.6">
      <div><strong>${b.pages}</strong> pages</div>
      <div>Published <strong>${b.year}</strong></div>
    </div>`;
  const saleHtml = b.salePrice ? `<span class="detail-old-price">$${b.price.toFixed(2)}</span><span class="detail-sale-badge">SALE</span>` : '';
  const bJson = JSON.stringify(b).replace(/"/g, '&quot;');
  document.getElementById('detailInfo').innerHTML = `
    <button class="detail-close" onclick="closeDetail()">✕</button>
    <div class="detail-genre-badge" style="display:inline-block;margin-bottom:8px">${b.genre}</div>
    <div class="detail-title">${b.title}</div>
    <div class="detail-author">by <span>${b.author}</span></div>
    <div class="detail-stars">${starsHtml(b.stars)} <em>${b.stars}.0 out of 5</em></div>
    <p class="detail-desc">${b.desc}</p>
    <div class="detail-meta">
      <div class="detail-meta-item"><div class="detail-meta-label">Pages</div><div class="detail-meta-value">${b.pages}</div></div>
      <div class="detail-meta-item"><div class="detail-meta-label">Year</div><div class="detail-meta-value">${b.year}</div></div>
      <div class="detail-meta-item"><div class="detail-meta-label">Genre</div><div class="detail-meta-value">${b.genre}</div></div>
      <div class="detail-meta-item"><div class="detail-meta-label">Language</div><div class="detail-meta-value">English</div></div>
    </div>
    <div class="detail-price-row">
      <span class="detail-price">$${dp.toFixed(2)}</span>${saleHtml}
    </div>
    <div class="detail-actions">
      <button class="detail-add-btn" onclick="addToCart(${bJson});closeDetail()">🛒 Add to Cart</button>
      <button class="detail-wish-btn" onclick="showToast('Added to wishlist! 🤍')">🤍</button>
    </div>`;
  document.getElementById('detailOverlay').classList.add('open');
}
function closeDetail() { document.getElementById('detailOverlay').classList.remove('open'); }
function closeModalOnBg(e, id) { if (e.target.id === id) document.getElementById(id).classList.remove('open'); }

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function subscribe() {
  const e = document.getElementById('nlEmail').value;
  if (!e || !e.includes('@')) { showToast('Please enter a valid email.'); return; }
  document.getElementById('nlEmail').value = '';
  showToast('Subscribed! Welcome to BOOKWORLD. 📚');
}

renderBooks();
