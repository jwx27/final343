'use client';

import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "T-Shirts"
  },
  {
    id: 2,
    name: "Black Denim Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Jeans"
  },
  {
    id: 3,
    name: "Casual Summer Dress",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Dresses"
  },
  {
    id: 4,
    name: "Sporty Hoodie",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Hoodies"
  },
  {
    id: 5,
    name: "Elegant Blazer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Jackets"
  },
  {
    id: 6,
    name: "Comfy Sweatpants",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Pants"
  }
];

export default function Products() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    const product = products.find(item => item.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    showNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const updateCartTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <>
      {/* Products */}
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="product-card bg-grey rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform">
            <img src={product.image} alt={product.name} className="product-img w-full h-48 object-cover" />
            <div className="product-info p-6">
              <h3 className="font-bold text-black mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="price font-bold text-pink-500 text-lg mb-4">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => addToCart(product.id)}
                className="add-to-cart w-full py-2 bg-gray-800 text-white rounded-md hover:bg-pink-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showModal && (
        <div className="cart-modal fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="cart-content bg-white p-8 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <span 
              onClick={() => setShowModal(false)}
              className="close-cart float-right text-2xl cursor-pointer"
            >
              &times;
            </span>
            <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
            <div className="cart-items my-4">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item flex justify-between items-center py-4 border-b">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="cart-item-info ml-4 flex-1">
                      <h4 className="font-bold">{item.name}</h4>
                      <p>${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <div className="cart-item-price font-bold text-pink-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-item text-pink-500 cursor-pointer ml-4"
                    >
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="cart-total mt-4 text-right">
              <strong className="text-xl">Total: ${updateCartTotal()}</strong>
              <button 
                onClick={() => {
                  if (cart.length === 0) {
                    showNotification('Your cart is empty!');
                  } else {
                    alert('Checkout functionality would go here!');
                    setCart([]);
                    setShowModal(false);
                  }
                }}
                className="checkout-btn bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition w-full mt-4"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className="notification fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-md animate-fade-in-out">
          {notification}
        </div>
      )}
    </>
  );
}