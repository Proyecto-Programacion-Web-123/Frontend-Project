// src/app/components/Header.tsx
export default function Header() {
  return (
    <header className="header">
      <img src="/icono2.png" className="icon2" alt="icon2term" />
      <nav className="nav-desktop">
        <ul>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
      </nav>

      <div id="menuToggle">
        <input type="checkbox" id="menuCheckbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><a href="#"><label htmlFor="menuCheckbox">HOME</label></a></li>
          <li><a href="#about"><label htmlFor="menuCheckbox">SHOP</label></a></li>
          <li><a><label htmlFor="menuCheckbox">ABOUT US</label></a></li>
          <li><a><label htmlFor="menuCheckbox">BLOG</label></a></li>
          <li className="menulogin"><label htmlFor="menuCheckbox"><a className="login-btn">LOG IN</a></label></li>
        </ul>
      </div>

      <img src="/icono2.png" className="icon" alt="icon term" />
      <i className="fa-solid fa-bag-shopping shop-icon" aria-hidden="true"></i>
    </header>
  )
}
