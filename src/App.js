import './App.css';
import {useState} from "react";
import Tours from './components/Tours';
import data from './Data';
function App() {
  const[to,setTours]=useState(data);

  function removeTours(id)
  {
    const newTours=to.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(to.length===0)
  {
return(
  <div className="refresh">
  <h2>No tours left</h2>
    <button  className="btnWhite" onClick={()=>{
      setTours(data)
    }}>Refresh Button</button>
  </div>
)
  }
  return (
    <div className="app">
      <Tours tours={to} removeTours={removeTours}></Tours>
    </div>
  );
}

export default App;
