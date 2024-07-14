import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  //post ajax request
  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api,
        {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
      }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return <>
       <button onClick={getProducts()}>Get API data</button>
       <button onClick={addProducts()}>Post API datA</button>
   </>;
}

export default App;
