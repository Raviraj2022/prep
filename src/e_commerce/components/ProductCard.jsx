import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/eCommerceSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();

  return (
    <div className='border p-4 rounded shadow bg-white'>
        <img
         src={product.image} alt={product.title} className='h-32 mx-auto object-contain'/>
         <Link to={`/product/${product.id}`}>
         <h2 className='font-semibold text-sm mt-2'>
            {product.title}
         </h2>
         </Link>
         <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard