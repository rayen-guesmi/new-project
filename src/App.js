//import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar.js";
import { Data } from "./component/Movies/movies.js";

const data = Data.results;

function App() {
  const [isAddMovieShowing, setIsAddMovieShowing] = useState(false);
  const [Data, setData] = useState(data);
  const addMovie = (myMovie) => {
    setData([...Data, myMovie]);
  };


  return (
    <div>
    <Navbar
    setIsAddMovieShowing={setIsAddMovieShowing}
    isAddMovieShowing={isAddMovieShowing}
    /> 
      <Movies/>
    </div>

  );
  }

export default app ;