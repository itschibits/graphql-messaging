import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes"
import Navbar from './Navbar';
import { useMutation } from '@apollo/client';



function App() {

  function submit(mutation,variable){
    const [addNew, {data}] = useMutation(mutation);
    addNew({variables:...variable});
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes submit={submit}/>
    </BrowserRouter>
  );
}


export default App;
