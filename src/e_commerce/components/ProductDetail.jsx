// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../../redux/eCommerceSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center text-lg">Loading...</div>;
  if (!product) return <div className="p-8 text-center text-red-500">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-blue-500 underline">&larr; Back to Home</Link>

      <div className="mt-6 flex flex-col md:flex-row gap-6 bg-white rounded shadow-md p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-contain"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </div>

          <div className="mb-2">
            <span className="font-semibold">Rating:</span> ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div>

          <div className="mb-4 text-xl font-bold text-green-600">
            ${product.price}
          </div>

          <button onClick={() => dispatch(addToCart(product))} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
