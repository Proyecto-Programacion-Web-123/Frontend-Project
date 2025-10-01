// src/app/components/IndieFAQ.tsx
import { useState } from 'react'

export default function IndieFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => setActiveFaq(activeFaq === index ? null : index)

  return (
    <>
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
            {["Accounts", "Purchases", "Delivery & Keys"].map((cat, i) => (
              <button key={i} className={`faq-category ${activeFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>{cat}</button>
            ))}
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
          </div>
        </div>
      </section>
    </>
  )
}
