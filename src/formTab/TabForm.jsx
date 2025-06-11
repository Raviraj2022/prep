import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, resetTabForm, updateTabForm } from '../redux/formTabSlice';
const steps = ["Personal Info", "Address",  'Review'];
const TabForm = () => {
    const  dispatch = useDispatch();
    const {currentStep, formData} = useSelector((state)=>state.tabForm);
    console.log(currentStep < steps.length - 1 );
 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    dispatch(resetTabForm());
 }
 const handleChange=(e)=>{
    dispatch(updateTabForm({name:e.target.name, value:e.target.value}));
 }
 const handleBack=()=>{
    if(currentStep>0)
        dispatch(prevStep());
 }
 const handleNext=()=>{
    if(currentStep<steps.length-1)
        dispatch(nextStep());
 }

  return (
    <div className='max-w-xl mx-auto mt-10 p-6 rounded shadow space-y-6'>
         <div className='flex justify-between border-b pb-2'>
            {steps.map((step, index)=>(
                // console.log(index);
                <button key={index} className={`py-2 px-4 font-semibold border-b-2 ${
                    currentStep===index ?'border-blue-600 text-blue-600':'border-transparent text-gray-500'
                }`} disabled>{step}</button>
            ))}
         </div>

         <form onSubmit={handleSubmit} className='space-y-4'>
            {currentStep === 0 && (
                <>

                <input name='name' value={formData.name} onChange={handleChange} placeholder='Name' className='w-full border px-4 py-2 rounded'/>
                <input name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='w-full border px-4 py-2 rounded'/>
                
                </>
            )}
            {currentStep === 1 && (
             <>
              <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border px-4 py-2 rounded"
              required
            />
             <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border px-4 py-2 rounded"
              required
            />
             </>
            )}

             {currentStep === 2 && (
          <div className="text-gray-700 space-y-2">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
          </div>
        )}

         <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
          >
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
              Submit
            </button>
          )}
        </div>
         </form>
    </div>
  )
}

export default TabForm