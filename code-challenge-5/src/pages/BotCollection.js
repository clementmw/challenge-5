import React, { useState } from 'react';
import BotArmy from './BotArmy';

function BotCollection({ lists }) {
  // const getDefaultCart = ({ list }) => {
  //   let bot = {};
  //   for (let i = 101; i < list.length; i++) {
  //     bot[i] = 0;
  //   }
  //   return bot;
  // };

  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const getSelectedItems = () => {
    const selectedItems = [];
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const selectedItem = lists.find((item) => item.id === parseInt(id));
        selectedItems.push({ ...selectedItem, quantity: cartItems[id] });
      }
    }
    return selectedItems;
  };

  const selectedItems = getSelectedItems();

  const displayData = lists.map((list) => (
    <div key={list.id} className="col-12 col-md-4 col-lg-2 mb-4">
      <div className="card">
        <img src={list.avatar_url} className="card-img-top" alt={`${list.name}-avatar`} />
        <div className="card-body">
          <h5 className="card-title">{list.name}</h5>
          <p className="card-text">
            <strong>Bot Class:</strong> {list.bot_class} <br />
            <strong>Catchphrase:</strong> {list.catchphrase}
          </p>
          <div className="btn-group">
            <button onClick={() => addToCart(list.id)}>
              ADD TO CART {cartItems[list.id] > 0 && `(${cartItems[list.id]})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-5 g-4">{displayData}</div>
      {selectedItems.length > 0 && <BotArmy selectedItems={selectedItems} />}
    </div>
  );
}

export default BotCollection;
