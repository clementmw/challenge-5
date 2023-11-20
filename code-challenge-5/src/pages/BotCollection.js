import React, { useState } from 'react';

function BotCollection({ lists }) {

  const [toggleStates, setToggleStates] = useState({});
 

  const handleMode = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
    console.log("clicked")
  };

  


  const displayData = lists.map((list) => (
    <div key={list.id} className="col-12 col-md-4 col-lg-2 mb-4">
    
     <div className="card">
        <img src={list.avatar_url} className="card-img-top" alt={`${list.name}-avatar`} />
        <div className="card-body">
          <h5 className="card-title">{list.name}</h5>
          <p className="card-text">
            <strong>Bot Class:</strong> {list.bot_class} <br />
            {/* <strong>Health:</strong> {list.health} <br />
            <strong>Damage:</strong> {list.damage} <br />
            <strong>Armor:</strong> {list.armor} <br /> */}
            <strong>Catchphrase:</strong> {list.catchphrase}
          </p>
          <div className="btn-group">
          <button
              className={`btn ${toggleStates[list.id] ? 'btn-danger' : 'btn-success'}`}
              style={{ marginRight: '10px' }}
              onClick={() => handleMode(list.id)}
            >
              {toggleStates[list.id] ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            
            
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {displayData}
    </div>
  );
}

export default BotCollection;
