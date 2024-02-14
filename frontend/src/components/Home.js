import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import Productlist from './Productlist';
import Todolist from './Todolist';
import Datafetch from './Datafetch';
import FetchRegistartions from './FetchRegistartions'

const Home = () => {
    
  const products = [
    { id: 1, name: 'lays', price: 10 },
    { id: 2, name: 'pepsi', price: 20 },
    { id: 3, name: 'kitkat', price: 30 },
  ];
  const todoItems = [
    { title: 'creating todolist', completed: false },
    { title: 'React the todolist', completed: true },
    
  ];

  return (
    <div>
            {/* {/* <Todolist todos={todoItems} />
      <Productlist products={products} /> 
      <Datafetch/>
      <Hello name='Watch' with id='30' price='200'/>
      <FetchRegistartions/> */}
      <Counter/>  
    </div>
  );
  

};


export default Home