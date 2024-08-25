
import { useState } from 'react';
import './App.css';

function App() {



  const [number , setNumber] =  useState(1)
  const arrayNumber = []

  const xuatTu1Toi10 = () => {
    for (let i = 0; i <= 10; i++) {
      arrayNumber.push(i)
    }
  }


  return (
    <div className="App">

      {xuatTu1Toi10}
      <div style={{}}>
        {arrayNumber.map(currenntValue => {
          console.log(currenntValue)
          return <p>{currenntValue}</p>
        })}
      </div>
      
    </div>
  );
}

export default App;
