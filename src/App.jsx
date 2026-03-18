import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ModelSection from './components/ModelSection';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <ModelSection />
        <Testimonials />
        <Booking />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
