import React, { useState } from 'react';
import { Home, Dumbbell, Calendar, Users, MapPin, PhoneCall } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/50/50" 
            alt="Bhadrak Health Club Logo" 
            className="h-10 w-10 mr-3 rounded-full"
          />
          <h1 className="text-xl font-bold">Bhadrak Health Club</h1>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block absolute md:relative top-full left-0 w-full md:w-auto
          bg-blue-600 md:bg-transparent
        `}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><a href="#home" className="hover:text-blue-200 flex items-center"><Home className="mr-2" size={20} /> Home</a></li>
            <li><a href="#facilities" className="hover:text-blue-200 flex items-center"><Dumbbell className="mr-2" size={20} /> Facilities</a></li>
            <li><a href="#classes" className="hover:text-blue-200 flex items-center"><Calendar className="mr-2" size={20} /> Classes</a></li>
            <li><a href="#trainers" className="hover:text-blue-200 flex items-center"><Users className="mr-2" size={20} /> Trainers</a></li>
            <li><a href="#contact" className="hover:text-blue-200 flex items-center"><PhoneCall className="mr-2" size={20} /> Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center 
      bg-cover bg-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/api/placeholder/1920/1080")'
      }}
    >
      <div className="max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Body, Elevate Your Life</h2>
        <p className="text-xl mb-8">Join Bhadrak Health Club and start your fitness journey today!</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Get Started
          </a>
          <a 
            href="#facilities" 
            className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

// Facilities Section Component
const Facilities = () => {
  const facilities = [
    { icon: <Dumbbell />, title: 'Modern Equipment', description: 'State-of-the-art fitness machines and free weights.' },
    { icon: <Users />, title: 'Group Classes', description: 'Yoga, Zumba, HIIT, and more group fitness options.' },
    { icon: <MapPin />, title: 'Prime Location', description: 'Conveniently located in the heart of Bhadrak.' }
  ];

  return (
    <section id="facilities" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-600">{facility.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Membership Plans Component
const MembershipPlans = () => {
  const plans = [
    { 
      name: 'Basic', 
      price: '999', 
      features: ['Gym Access', 'Cardio Area', 'Locker Room'] 
    },
    { 
      name: 'Premium', 
      price: '1499', 
      features: ['All Basic Features', 'Group Classes', 'Personal Training Session'] 
    },
    { 
      name: 'Ultimate', 
      price: '1999', 
      features: ['All Premium Features', 'Nutrition Consultation', 'Unlimited Classes'] 
    }
  ];

  return (
    <section id="membership" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-lg p-6 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">₹{plan.price}/month</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <PhoneCall className="mr-3 text-blue-600" /> +91 98765 43210
              </p>
              <p className="flex items-center">
                <MapPin className="mr-3 text-blue-600" /> Main Road, Bhadrak, Odisha
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2024 Bhadrak Health Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
const BhadrakHealthClubWebsite = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <Facilities />
      <MembershipPlans />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default BhadrakHealthClubWebsite;
