export default function Home() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">AVANI'S<br />KITCHEN</div>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer">
          <button className="btn-cta">Order Now</button>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              NO CAP,
              <br />
              JUST <span>FLAVOUR</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Cloud Kitchen in Yewale Wadi, Pune. Homestyle North Indian, Maharashtrian, Street Food & more —
              fresh, wholesome, and delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Order on Zomato
                </button>
              </a>
              <a href="#menu">
                <button className="btn-cta" style={{ background: "white" }}>
                  View Menu
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "none", backgroundColor: "#f0e6d8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="placeholder-text">PHOTO COMING SOON</span>
            <div className="sticker">
              HOME
              <br />
              COOKED
              <br />
              DAILY
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #CLOUDKITCHEN
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              4.0★ ZOMATO
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ HOMESTYLE NORTH INDIAN ★ FRESH PARATHAS DAILY ★ CLOUD KITCHEN PUNE ★ ORDER ON ZOMATO ★ MAHARASHTRIAN SPECIALS ★ HEALTHY & WHOLESOME ★ HOMESTYLE NORTH INDIAN ★ FRESH PARATHAS DAILY ★ CLOUD KITCHEN PUNE ★ ORDER ON ZOMATO ★ MAHARASHTRIAN SPECIALS ★ HEALTHY & WHOLESOME
          </div>
        </div>

        <section id="menu" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">CHEF'S PICKS</h2>
            <a
              href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Full Menu on Zomato →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Best Seller</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>2 Aloo Paratha</h3>
                  <span className="price">₹80</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Home cooked aloo paratha, served fresh daily.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Gluten Free</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Bhagar Amti</h3>
                  <span className="price">₹160</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Bhagar with amti and aloo sabzi — a wholesome fasting special.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Popular</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>2 Thalipeeth</h3>
                  <span className="price">₹161</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Spiced multi-grain thalipeeth in desi style, with curd & pickle.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="menu-card">
              <span className="menu-tag">Breakfast</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Egg Bhurji</h3>
                  <span className="price">₹60</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Double egg bhurji, spiced and cooked homestyle.</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Vegan</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Poha</h3>
                  <span className="price">₹50</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Light and flavourful Indian breakfast, made fresh every morning.</p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Snack</span>
              <div className="menu-placeholder-img" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>French Fries</h3>
                  <span className="price">₹80</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Yummy fries, fresh and home cooked — because everyone deserves a treat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Menu */}
        <section className="section-padding full-menu-section">
          <h2 className="section-title" style={{ marginBottom: "40px" }}>FULL MENU</h2>
          <div className="full-menu-grid">
            <div className="menu-category">
              <h3 className="category-title">🍳 Meals</h3>
              <ul className="menu-list">
                <li><span>Double Egg Omlet</span><span>₹50</span></li>
                <li><span>Egg Bhurji</span><span>₹60</span></li>
                <li><span>2 Aloo Paratha</span><span>₹80</span></li>
              </ul>
            </div>
            <div className="menu-category">
              <h3 className="category-title">🍛 Main Course</h3>
              <ul className="menu-list">
                <li><span>Bhagar Amti <em style={{ fontSize: "11px", opacity: 0.7 }}>(Gluten Free)</em></span><span>₹160</span></li>
              </ul>
            </div>
            <div className="menu-category">
              <h3 className="category-title">🫓 Breads</h3>
              <ul className="menu-list">
                <li><span>2 Methi Paratha</span><span>₹99</span></li>
                <li><span>2 Onion Paratha</span><span>₹99</span></li>
                <li><span>2 Palak Paratha</span><span>₹99</span></li>
                <li><span>2 Thalipeeth</span><span>₹161</span></li>
                <li><span>2 Whole Wheat Chapati <em style={{ fontSize: "11px", opacity: 0.7 }}>(Vegan)</em></span><span>₹25</span></li>
                <li><span>2 Jowar Bhakri</span><span>₹50</span></li>
                <li><span>2 Bajra Bhakri</span><span>₹50</span></li>
              </ul>
            </div>
            <div className="menu-category">
              <h3 className="category-title">🍟 Snacks</h3>
              <ul className="menu-list">
                <li><span>Poha</span><span>₹50</span></li>
                <li><span>French Fries</span><span>₹80</span></li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Order Full Menu on Zomato →
              </button>
            </a>
          </div>
        </section>

        <section id="about" className="retro-vibe">
          <div>
            <h2 className="vibe-title">HOMESTYLE FOOD. CLOUD DELIVERED.</h2>
            <p className="vibe-text">
              Avani's Kitchen is a delivery-only cloud kitchen in Yewale Wadi, Pune. We believe great food
              doesn't need a fancy restaurant — just good ingredients, real recipes, and love in every dish.
              From wholesome parathas to Maharashtrian thalipeeth, everything is made fresh, daily.
            </p>
            <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Order Now
              </button>
            </a>
          </div>
          <div className="vibe-img" style={{ backgroundImage: "none", backgroundColor: "#e8d5c0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="placeholder-text">PHOTO COMING SOON</span>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>OUR FOOD</h2>
          <div className="social-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="social-item social-placeholder">
                <span className="placeholder-text">PHOTO COMING SOON</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div>
          <div className="footer-logo">AVANI'S KITCHEN</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Cloud Kitchen · Yewale Wadi, Pune<br />
            44/3/3, Flat A-301, Yewale Wadi, Pune<br />
            Delivery only · No dine-in<br />
            <span style={{ fontSize: "12px" }}>FSSAI Lic. No. 21525080001267</span>
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Menu</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>Our Story</a></li>
            <li>
              <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                Order on Zomato
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Hours</h4>
          <ul>
            <li>Mon – Sun: 9 AM – 9 PM</li>
            <li>Delivery Only</li>
            <li style={{ marginTop: "10px" }}>
              <a href="tel:+919860990532" style={{ color: "inherit", textDecoration: "none" }}>📞 +91 98609 90532</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AVANI'S KITCHEN</span>
          <span>YEWALE WADI, PUNE</span>
          <span>
            <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>ORDER ON ZOMATO</a>
          </span>
        </div>
      </footer>
    </>
  )
}
