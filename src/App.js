import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Coin from './Coin'


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);

  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=500&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
    })
    .catch(error => console.warn(error));
  }, []);

  const division = price  =>{
   return (value / price).toFixed(7)
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filtredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="menu">
        <h1>KryptoWaluty.pl</h1>
        <i></i>
      </div>
      <div className="ask">
      <div className="search">
        <input type="text" placeholder="Szukaj" className="searchInput" onChange={handleChange} />
      </div>
      <div className="how-much">
        <input type="number" className="how-much-input" placeholder="Ile złotówek chesz zainwestować?" onChange={e => setValue(e.target.value)} />
      </div>
      </div>
      {filtredCoins.map(coin =>{
        return( 
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          price={coin.current_price}
          finalPrice={division(coin.current_price)}
          symbol={coin.symbol}
          />
        );
      })}
    </div>
  );
}

export default App;
