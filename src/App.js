import "./App.css";
import data from "./data.json";
import { useState } from "react";
import Main from "./Main";
function App() {
  
  const {name,overview,images} = data[0]
  const [Data,setData] = useState({
    name:name,
    overview:overview.content,
    image:images.planet
    
  })
  const Overview = () => {
    
  }
  return (
    <>
    <div className="App">
      <header>
        <h1 className="header_title antonio">THE PLANETS</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </header>
      <nav>
        <p className="spartan btn" onClick={Overview}>OVERVIEW</p>
        <p className="spartan btn">Structure</p>
        <p className="spartan btn">Surface </p>
        
      </nav>
    </div>
    <Main data={Data} />
    </>
  );
}

export default App;
