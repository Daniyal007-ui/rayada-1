// pages/index.js

import React, { useState, useEffect } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);  // Default is 1
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(105);  // Default price for 1 piece
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission status

  useEffect(() => {
    if (quantity === 1) {
      setPrice(105);
    } else if (quantity === 2) {
      setPrice(120);
    } else if (quantity === 3) {
      setPrice(240);
    } else {
      // If quantity is not 1, 2, or 3, handle it as a custom case (you could add more rules here)
      setPrice(quantity * 105);  // For simplicity, assuming each extra piece costs 105
    }
  }, [quantity]);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('contact', contact);
    formData.append('size', size);
    formData.append('quantity', quantity.toString());
    formData.append('address', address);
    formData.append('price', price.toString());

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mannlpvr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // Handle success or failure
      if (response.ok) {
        setStatus('Your order has been sent!');
        setIsSubmitted(true);  // Set to true to show the thank-you message

      } else {
        setStatus('Something went wrong. Please try again.');
        setIsSubmitted(false);  // Set to true to show the thank-you message

      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again.');
      setIsSubmitted(false);  // Set to true to show the thank-you message

    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4">
      <h2 className="text-xl text-center underline font-bold mb-4">Order Form</h2>
      {isSubmitted && (
        <div className="text-green-700 mb-4">Thank you for placing your order!</div>
      )}
      {!isSubmitted && (
        <form onSubmit={handleSubmit} >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className="font-semibold">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="size" className="font-semibold">Size</label>
            <select
              id="size"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
              className="border p-2 rounded"
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-semibold">Quantity</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
              className="border p-2 rounded"
            >
              <option value="1">1 Piece</option>
              <option value="2">2 Pieces</option>
              <option value="3">3 Pieces</option>
            </select>
          </div>



          <div className="flex flex-col">
            <label htmlFor="price" className="font-semibold">Price</label>

            <p>{`Price for ${quantity} piece SAR: ${price}`}</p>

          </div>

          <div>
            <button type="submit" className="w-full bg-gray-500 border border-black text-white p-2 rounded mt-4">Place Order</button>
          </div>
        </form>
      )}
      {status && <p>{status}</p>}

    </div>
  );
}
export default OrderForm;
