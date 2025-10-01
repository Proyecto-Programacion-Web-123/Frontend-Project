// src/app/components/TrendingProducts.tsx
interface Product {
  id_product: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  old_price?: number | null;
  discount?: number | null;
  is_new?: boolean;
}

interface Props {
  products: Product[];
  loading: boolean;
}

export default function TrendingProducts({ products, loading }: Props) {
  return (
    <section className="trending" id="trending">
      <h2 className="trendingtittle">T R E N D I N G</h2>
      <p className="subtrending">Discover the most relevant titles right now</p>

      {loading ? (
        <div className="loading-container">
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="trending-grid">
          {products.map(product => (
            <div key={product.id_product} className="card">
              <div className="cardimg">
                {product.discount && <div className="discount-badge">-{product.discount}%</div>}
                {product.is_new && <div className="new-badge">NEW</div>}
                <img src={product.image_url} className="doom-eternal" alt={product.name} />
              </div>
              <div className="cardtext">
                <div className="titelcard">
                  <div className="Gamename">{product.name}</div>
                  <div className="price-group">
                    <div className="price">Q{product.price}</div>
                    {product.old_price && <div className="oldprice">Q{product.old_price}</div>}
                  </div>
                </div>
                <div className="Gameinfo">{product.description}</div>
              </div>
              <div className="cardbutton">
                <a href="#hab" className="btn-cart">
                  ADD TO CART <i className="fa-solid fa-circle-plus" style={{ color: "#F9F91C" }} aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
