'use client'

import { useState, useEffect } from 'react'
import './globals.css'

interface Product {
  id_product: number;  // Cambiado de 'id'
  name: string;
  price: number;
  description: string;
  image_url: string;
  release_date: string;
  old_price?: number | null;
  discount?: number | null;
  is_new?: boolean;
}
export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

const fetchTrendingProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos de la API:', data);
    
    const processedProducts = data.map((product: any) => {
      let imageUrl = product.image_url || 'default-image.png';
      
      if (imageUrl && imageUrl.startsWith('/img/')) {
        imageUrl = imageUrl.replace('/img/', '');
      }
      
      return {
        ...product,
        image_url: imageUrl,
      };
    });
    
    setTrendingProducts(processedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setLoading(false);
  }
};

const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  useEffect(() => {
    fetchTrendingProducts()
  }, [])
  
  return (
    <>
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

      <section className="begin">
        <div className="begin-content">
          <section className="home" id="home">
            <img src="/logo.png" className="logo" alt="Logo TERMN" />
          </section>

          <div className="marquee-container">
            <div className="marquee-track">
              <div className="marquee-text">IT'S DANGEROUS TO GO ALONE TAKE THIS • DO A BARREL ROLL • WAR NEVER CHANGES • FINISH HIM • HADOUKEN • PRAISE THE SUN • FUS RO DAH • WOULD YOU KINDLY • THE CAKE IS A LIE • SNAKE SNAAAAKE • GET OVER HERE • I'M COMMANDER SHEPARD • OBJECTION • NOTHING IS TRUE EVERYTHING IS PERMITTED • KEPT YOU WAITING HUH • GROVE STREET HOME • WELCOME TO THE WORLD OF SURVIVAL HORROR</div>
              <div className="marquee-text">IT'S DANGEROUS TO GO ALONE TAKE THIS • DO A BARREL ROLL • WAR NEVER CHANGES • FINISH HIM • HADOUKEN • PRAISE THE SUN • FUS RO DAH • WOULD YOU KINDLY • THE CAKE IS A LIE • SNAKE SNAAAAKE • GET OVER HERE • I'M COMMANDER SHEPARD • OBJECTION • NOTHING IS TRUE EVERYTHING IS PERMITTED • KEPT YOU WAITING HUH • GROVE STREET HOME • WELCOME TO THE WORLD OF SURVIVAL HORROR</div>
            </div>
          </div>

          <div className="marquee-container">
            <div className="marquee-track reverse">
              <div className="marquee-text">NES • SEGA GENESIS • SUPER NINTENDO • VIRTUAL BOY • NINTENDO 64 • DUALSHOCK • DREAMCAST • GAMECUBE • EYE TOY • WII REMOTE • XBOX 360 • PLAYSTATION MOVE • PS VITA • KINECT • STEAM DECK • POWER GLOVE • NINTENDO LABO • GAME BOY ADVANCE SP • LIGHT GUN • DDR DANCE PAD • ANALOG POCKET • ATARI LYNX • RAZER HYDRA • SIXAXIS • JAGUAR CONTROLLER</div>
              <div className="marquee-text">NES • SEGA GENESIS • SUPER NINTENDO • VIRTUAL BOY • NINTENDO 64 • DUALSHOCK • DREAMCAST • GAMECUBE • EYE TOY • WII REMOTE • XBOX 360 • PLAYSTATION MOVE • PS VITA • KINECT • STEAM DECK • POWER GLOVE • NINTENDO LABO • GAME BOY ADVANCE SP • LIGHT GUN • DDR DANCE PAD • ANALOG POCKET • ATARI LYNX • RAZER HYDRA • SIXAXIS • JAGUAR CONTROLLER</div>
            </div>
          </div>

          <section className="hero-section" id="hero">
            <p className="hero-text">WHERE ALL GAMES CONVERGE • A TERMINAL BETWEEN WORLDS • ACCESS ALL KINDS OF GAMING CONTENT</p>
            <a href="#hab" className="btn-discover">DISCOVER GAMES</a>
          </section>
        </div>

        <div className="begin-image">
          <img src="/ilustracion.png" alt="Ilustración Elden Ring" className="eldenring" />
        </div>
      </section>

      <section className="trending" id="trending">
        <h2 className="trendingtittle">T R E N D I N G</h2>
        <p className="subtrending">Discover the most relevant titles right now</p>

        {loading ? (
          <div className="loading-container">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="trending-grid">
            {trendingProducts.map(product => (
              <div key={product.id_product} className="card">
                <div className="cardimg">
                  {product.discount && (
                    <div className="discount-badge">-{product.discount}%</div>
                  )}
                  {product.is_new && (
                    <div className="new-badge">NEW</div>
                  )}
                  <img src={product.image_url} className="doom-eternal" alt={product.name} />
                </div>
                <div className="cardtext">
                  <div className="titelcard">
                    <div className="Gamename">{product.name}</div>
                    <div className="price-group">
                      <div className="price">Q{product.price}</div>
                      {product.old_price && (
                        <div className="oldprice">Q{product.old_price}</div>
                      )}
                    </div>
                  </div>
                  <div className="Gameinfo">{product.description}</div>
                </div>
                <div className="cardbutton">
                  <a href="#hab" className="btn-cart">
                    ADD TO CART <i className="fa-solid fa-circle-plus" style={{ color: "#F9F91C" }}aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="discount">
        <div className="discountcard">
          <div className="cardimg">
            <div className="off-badge">35% OFF</div>
            <img src="/kingdom.png" className="doom-eternal" alt="Kingdom Hearts" />
          </div>
          <div className="discountcardbutton">
            <a href="#hab" className="btn-discount">SHOW MORE &gt;&gt;</a>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-header">
          <h2 className="featuretittle">C A T E G O R I E S</h2>
          <p className="subfeature">Explore our main gaming categories</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/accion.png" alt="Action games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">ACTION</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/aventura.png" alt="Adventure games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">ADVENTURE</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/estrategia.png" alt="Strategy games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">STRATEGY</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/rpg.png" alt="RPG games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">ROLEPLAYING</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/signalis.png" alt="Horror games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">HORROR</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-img-container">
              <img src="/art.png" alt="Racing games" className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">RACING</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="indies-container" id="indie">
        <section className="higlight-container-faq" id="hcf">
          <h2 className="hcf-tittle">Indie Games</h2>
          <img src="/Imagen Faqs.png" alt="sifu" className="JuegoIndie" />
          <button className="hcf-button">Find our Titles</button>
        </section>
      </section>

      <section className="faq-container" id="faq">
        <h2 className="faq-title">FAQ</h2>

        <div className="faq-content">
          <div className="faq-categories">
            <button className={`faq-category ${activeFaq === 0 ? 'active' : ''}`} onClick={() => setActiveFaq(0)}>Accounts</button>
            <button className={`faq-category ${activeFaq === 1 ? 'active' : ''}`} onClick={() => setActiveFaq(1)}>Purchases</button>
            <button className={`faq-category ${activeFaq === 2 ? 'active' : ''}`} onClick={() => setActiveFaq(2)}>Delivery & Keys</button>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <span>Do I need an account to buy games?</span>
                <span className="faq-toggle">{activeFaq === 0 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 0 ? '' : 'hidden'}`}>
                Yes, you need to create an account to complete your purchase and access your game keys.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <span>Can I request a refund?</span>
                <span className="faq-toggle">{activeFaq === 1 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? '' : 'hidden'}`}>
                Refunds are available within 14 days of purchase, as long as the game key hasn't been redeemed.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <span>What payment methods do you accept?</span>
                <span className="faq-toggle">{activeFaq === 2 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? '' : 'hidden'}`}>
                We accept credit/debit cards, PayPal, and other local payment methods depending on your region.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <span>How will I receive my game after purchase?</span>
                <span className="faq-toggle">{activeFaq === 3 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? '' : 'hidden'}`}>
                Game keys are delivered instantly via email and will also be available in your account dashboard.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <span>What platforms are the game keys for?</span>
                <span className="faq-toggle">{activeFaq === 4 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeFaq === 4 ? '' : 'hidden'}`}>
                Each product page specifies the platform (e.g. Steam, Epic Games, Origin). Please check before purchasing.
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <p className="promo-text">
              Join our program to get news & more straight to your inbox.
            </p>
            <a href="#" className="footer-shop-btn">JOIN</a>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-copy">2025 Term. All rights reserved.</p>
      </footer>
    </>
  )
}