import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetOrderSuccess, removeToCart, placeOrder } from '../../redux/eCommerceSlice';

const CartPage = () => {
    const orderSuccess = useSelector(state=> state.cart.orderSuccess);
    const cart =  useSelector(state=> state.cart.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((sum, item) => sum+ item.price, 0).toFixed(2);

    useEffect(()=>{
        if(orderSuccess){
            const timer = setTimeout(()=>{
                dispatch(resetOrderSuccess());
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [orderSuccess, dispatch]);
  return (
    <div className='p-4'>
        <h2 className='text-xl font-bold mb-4'>Your Cart</h2>
        {orderSuccess && (
           <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          ✅ Order placed successfully!
        </div>
        )}

         {cart.length === 0 && !orderSuccess && (
        <p className="text-gray-600">No items in cart.</p>
      )}

{cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-2">
          <span>{item.title}</span>
          <span>${item.price}</span>
          <button
            onClick={() => dispatch(removeToCart(item.id))}
            className="text-red-500 cursor-pointer"
          >
            ❌
          </button>
        </div>
      ))}


       {cart.length > 0 && (
        <>
          <hr className="my-4" />
          <h3 className="text-lg mb-2">Total: ${total}</h3>
          <button
            onClick={() => dispatch(placeOrder())}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📦 Place Order
          </button>
        </>
      )}
    </div>
  )
}

export default CartPage