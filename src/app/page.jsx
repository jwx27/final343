import Products from './components/Products';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">Xie, Jiawei</h2>
        <h3 className="text-xl text-gray-600 mb-8">Spring 2025</h3>
        
        {/* Fashion Boutique App */}
        <div className="fashion-boutique">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="logo">
              <h1 className="text-2xl font-bold text-pink-500">Fashion Boutique</h1>
            </div>
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-pink-500 transition">Home</a></li>
              <li><a href="#shop" className="text-gray-700 hover:text-pink-500 transition">Shop</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-pink-500 transition">About</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a></li>
            </ul>
            <div className="cart-icon relative cursor-pointer">
              <i className="fas fa-shopping-cart text-gray-700"></i>
              <span className="cart-count absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="hero h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white mt-16" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
            <div className="hero-content">
              <h2 className="text-5xl font-bold mb-4">New Collection 2024</h2>
              <p className="text-xl mb-8">Discover the latest trends in fashion</p>
              <a href="#shop" className="btn bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition">Shop Now</a>
            </div>
          </section>

          {/* Shop Section */}
          <section id="shop" className="shop py-20 px-4 text-center">
            <h2 className="text-4xl font-bold text-black mb-12">Our Products</h2>
            <Products />
          </section>

          {/* About Section */}
          <section id="about" className="about py-20 px-4 text-center bg-black">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="max-w-4xl mx-auto leading-relaxed">
              Welcome to Fashion Boutique, where style meets comfort. We offer high-quality clothing for men, women, and kids at affordable prices.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact py-20 px-4 text-center bg-black">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4">
              <input type="text" placeholder="Your Name" required className="p-3 border rounded-md" />
              <input type="email" placeholder="Your Email" required className="p-3 border rounded-md" />
              <textarea placeholder="Your Message" required className="p-3 border rounded-md h-40"></textarea>
              <button type="submit" className="btn bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition">Send Message</button>
            </form>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 bg-gray-800 text-white">
            <p>&copy; 2024 Fashion Boutique. All rights reserved.</p>
            <div className="social-icons mt-4 space-x-4">
              <a href="#" className="text-white hover:text-pink-500"><i className="fab fa-facebook text-2xl"></i></a>
              <a href="#" className="text-white hover:text-pink-500"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" className="text-white hover:text-pink-500"><i className="fab fa-twitter text-2xl"></i></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}