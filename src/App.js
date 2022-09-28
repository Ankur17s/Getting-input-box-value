import React from 'react';
import './style.css';

export default function App() {

  const [data, setData] = React.useState(null);
  const [print, setPrint] = React.useState(false);

  function getData(e) {
    console.log(e.target.value);
    setData(e.target.value);
    setPrint(false);
  }

  return (
    <div>
      <h1>Get Input Box Value</h1>
      <input onChange={getData} />
      <br /> <br/>
      <button onClick={() => setPrint(true)}>Print Data</button>
      {
      print ? <h2>{data}</h2> : null
      }
      
    </div>
  );
}
