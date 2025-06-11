import {createSlice} from '@reduxjs/toolkit'

const fromTabSlice  = createSlice({
    name: "tabForm",
    initialState: {
        currentStep:0,
        formData:{
            name:'',
            email:'',
            address:'',
            city:''
        }
    },
    reducers:{
        // nextStep :(state)=>{state.currentStep += 1},
        // prevStep :(state)=>{state.currentStep -= 1},

        nextStep: (state) => {
  if (state.currentStep < 2) { // steps.length - 1
    state.currentStep += 1;
  }
},
prevStep: (state) => {
  if (state.currentStep > 0) {
    state.currentStep -= 1;
  }
},

        updateTabForm:(state, action)=>{
            const {name, value} = action.payload;
            state.formData[name] = value;
        },
        resetTabForm: ()=>({
            currentStep: 0,
            formData: {name:'', email:'', address:'', city:''}
        })
    }
})

export const {nextStep, prevStep, updateTabForm, resetTabForm} = fromTabSlice.actions;
export default fromTabSlice.reducer;