import  {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
    name:"form",
        initialState:{
            name:"",
            email:"",
            phone :""
        }, 
        reducers:{
            updateForm:(state, action)=>{
                const {name, value} = action.payload;
                state[name] = value;
            },
            resetForm:()=>({
                name:"",
                email:"",
                phone:""

            })
        }
});
export const {updateForm, resetForm} = formSlice.actions;
export default formSlice.reducer;