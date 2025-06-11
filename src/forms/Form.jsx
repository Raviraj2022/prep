import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetForm, updateForm } from '../redux/formSlice';

const Form = () => {
    const formData  =  useSelector((state)=>state.form);
    const dispatch = useDispatch();

    const handleChange =(e)=>{
        // console.log(e.target.name);
     dispatch(updateForm({name:e.target.name, value:e.target.value}));
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
console.log(formData);
        dispatch(resetForm());
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4'>
         <input name='name' value={formData.name} onChange={handleChange} placeholder='Name' className='w-full border px-4 py-2 rounded'/>
          <input name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='w-full border px-4 py-2 rounded'/>
       <input name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone' className='w-full border px-4 py-2 rounded'/>
     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Submit
      </button>
        </form>
    </div>
  )
}

export default Form