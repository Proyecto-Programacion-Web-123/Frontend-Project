// src/app/components/Discount.tsx
export default function Discount() {
  return (
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
  )
}
