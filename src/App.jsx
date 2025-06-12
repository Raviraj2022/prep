// App.jsx

import { Route, Router, Routes } from "react-router-dom";
import Counter from "./counter/Counter";
import Form from "./forms/Form";
import TabForm from "./formTab/TabForm";
import Home from "./e_commerce/pages/Home";
import CartPage from "./e_commerce/components/CartPage";
import Navbar from "./e_commerce/components/Navbar";
import ProductDetail from "./e_commerce/components/ProductDetail";

function App() {
 

  // return (
  //   <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
  //    {/* <Counter/> */}
  //    {/* <Form/> */}
  //    <TabForm/>
  //   </div>
  // );

   return (
    <>    
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    
    </>

  );
}

export default App;
