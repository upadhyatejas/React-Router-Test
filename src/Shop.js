import React, { useEffect } from 'react';
import './App.css';

function Shop() {
    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br');
        const items = await data.json();
        console.log(items);
    }
  return (
    <div>
        <h1>About Shop</h1>
    </div>
  );
}

export default Shop;