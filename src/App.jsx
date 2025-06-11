// App.jsx

import Counter from "./counter/Counter";
import Form from "./forms/Form";
import TabForm from "./formTab/TabForm";

function App() {
 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
     {/* <Counter/> */}
     {/* <Form/> */}
     <TabForm/>
    </div>
  );
}

export default App;
