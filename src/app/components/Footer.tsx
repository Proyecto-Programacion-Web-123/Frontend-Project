// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <img src="/logo_white.png" alt="Logo de la empresa" className="footer-logo" />

        <ul className="footer-list">
          <li><span className="left">BACK TO TOP</span></li>
          <li><span className="left">SHOP</span><span className="right">FACEBOOK</span></li>
          <li><span className="left">ABOUT US</span><span className="right">INSTAGRAM</span></li>
          <li><span className="left">BLOG</span><span className="right">TWITTER</span></li>
          <li><span className="left">CONTACT US</span><span className="right">TIKTOK</span></li>
        </ul>

        <div className="footer-spacer"></div>

        <div className="footer-promo">
          <p className="promo-text">Join our program to get news & more straight to your inbox.</p>
          <a href="#" className="footer-shop-btn">JOIN</a>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-copy">2025 Term. All rights reserved.</p>
    </footer>
  )
}
