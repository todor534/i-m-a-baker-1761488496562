import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGallery from "./components/ProductGallery";
import { products } from "./data/products";
import styles from "./styles/global.css?inline";

function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <img
          src="@@img_bakery_hero@@"
          alt="Fresh bakery assortment"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>Welcome to Lokal Bakery</h1>
          <p>
            Discover our fresh, hand-crafted breads, waffles, pancakes and croissants. Baked daily with love in your neighborhood.
          </p>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Our Specialties</h2>
        <ProductGallery products={products} />
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="main-content">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Lokal Bakery is your neighborhood destination for delicious, fresh-baked treats. We use traditional recipes and quality ingredients to bring you the best breads, waffles, pancakes, and croissants. Visit us for a taste of home!
        </p>
        <img
          src="@@img_bakery_about@@"
          alt="Baker at work"
          className="about-img"
        />
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="main-content">
      <section className="contact-section">
        <h2>Contact</h2>
        <p>
          Visit us at 123 Main Street, YourTown.<br />
          Call: <a href="tel:+123456789">+1 234 567 89</a><br />
          Email: <a href="mailto:hello@lokalbakery.com">hello@lokalbakery.com</a>
        </p>
        <img
          src="@@img_bakery_storefront@@"
          alt="Bakery storefront"
          className="contact-img"
        />
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <style>{styles}</style>
      <div className="app-container">
        <Header />
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}