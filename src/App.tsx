import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes"
import Navbar from './Navbar';
import { useMutation } from '@apollo/client';



function App() {

  // function submit(mutation: string, variables: Record<string, any>) {
  //   addNew({ variables });
  // }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}


export default App;
