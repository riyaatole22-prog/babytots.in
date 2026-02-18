import { useState } from "react";
import "./App.css";

function App() {
  const [isNight, setIsNight] = useState(false);

  const toggleTheme = () => {
    setIsNight(prev => !prev);
  };

  return (
    <div className={`app ${isNight ? "night" : "day"}`}>

      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="overlay"></div>
        <div className="warm-glow"></div>

        <div
          className="lamp-click"
          onClick={toggleTheme}
        ></div>

        <div className="hero-content">
          <h1>BabyTots Day Care</h1>
          <p>Where tiny dreams grow big ✨</p>
          <a href="#enquiry" className="cta">Enroll Now</a>

        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="about section">
        <div className="container">
          <h2 className="about-title">
            About Baby Tots <span className="rainbow">🌈</span>
          </h2>

          <p className="about-sub">
            A nurturing haven where your little ones learn, play, and grow
            in a joyful and secure environment.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <div className="icon">💗</div>
              <h3>Loving Care</h3>
              <p>
                Every child receives personalized attention with warmth,
                patience, and emotional support.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">🛡️</div>
              <h3>Safe Environment</h3>
              <p>
                Secure facilities, trained caregivers, and constant supervision
                ensure complete peace of mind.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">✨</div>
              <h3>Fun Learning</h3>
              <p>
                Play-based activities designed to boost creativity,
                confidence, and developmental growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <h2>Our Happy Moments</h2>

        <div className="gallery-grid">
          <div className="gallery-card"><img src="/dc10.jpeg" alt="" /></div>
          <div className="gallery-card"><img src="/dc11.jpeg" alt="" /></div>
          <div className="gallery-card"><img src="/dc12.jpeg" alt="" /></div>
          <div className="gallery-card"><img src="/dc13.jpeg" alt="" /></div>
          <div className="gallery-card"><img src="/dc18.jpeg" alt="" /></div>
          <div className="gallery-card"><img src="/dc19.jpeg" alt="" /></div>
        </div>
      </section>

      {/* ================= VISIT ================= */}
      <section className="visit-section">
        <div className="visit-container">

          <div className="visit-left">
            <h3>📍 Visit Us</h3>

            <p>
              Purandare Colony, Yashada B 102, Syndicate,
              Murbad Road, Kalyan West – 421301
            </p>

            <a
              href="https://maps.app.goo.gl/nSDiBGVxjjJBbzt46"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="visit-right">
            <h3>Your Child, Our Responsibility</h3>
            <p>
              We are committed to providing a nurturing, stimulating,
              and secure environment where your little one can thrive.
              Our caregivers treat each child with love, fostering growth,
              curiosity, and happiness every single day.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
    <section id="enquiry" className="contact-section">

        <div className="contact-container">

          <div className="contact-left">

            <div className="contact-card">
              <h3>📞 Call Us</h3>
              <a href="tel:+919021633489" className="contact-link">
                +91 9021633489
              </a>
              <p>Tap to call directly.</p>
            </div>

            <div className="contact-card">
              <h3>📸 Follow Us</h3>
              <a
                href="https://instagram.com/babytots012"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @babytots012 👉
              </a>
              <p>See our daily adventures on Instagram!</p>
            </div>

            <div className="contact-card">
              <h3>⏰ Opening Hours</h3>
              <p>Monday – Saturday: 8:30 AM – 7:30 PM</p>
              <p>Sunday: Closed</p>
            </div>

          </div>

          <div className="contact-form-card">
            <h3>Enquiry Form ✨</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const address = e.target.address.value;
                const phone = e.target.phone.value;
                const message = e.target.message.value;

                const whatsappMessage =
                  `Hello BabyTots Day Care,%0A%0A` +
                  `Name: ${name}%0A` +
                  `Address: ${address}%0A` +
                  `Phone: ${phone}%0A` +
                  `Message: ${message}`;

                window.open(
                  `https://wa.me/919021633489?text=${whatsappMessage}`,
                  "_blank"
                );
              }}
            >
              <input name="name" type="text" placeholder="Your name" required />
              <input name="address" type="text" placeholder="Your address" required />
              <input name="phone" type="tel" placeholder="Your phone number" required />
              <textarea name="message" placeholder="Message" rows="4" required></textarea>

              <button type="submit" className="whatsapp-btn">
                💬 Send Enquiry on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>BabyTots Day Care</h3>
            <p>Where tiny dreams grow big ✨</p>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-copy">
            © 2026 BabyTots Day Care. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
