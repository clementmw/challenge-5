import React from 'react';
import { useParams } from 'react-router-dom';

function BotArmy() {
  const { id } = useParams();
  const addedBots = JSON.parse(localStorage.getItem('addedBots')) || [];

  // Find the selected bot from the array
  const selectedBot = addedBots.find((bot) => bot.id === parseInt(id));

  return (
    <div>
      <h2>Bot Army</h2>
      {selectedBot ? (
        <div>
          <p>Selected Bot ID: {selectedBot.id}</p>
          <p>Bot Name: {selectedBot.name}</p>
          {/* Include other bot details as needed */}
        </div>
      ) : (
        <p>Bot not found in the Bot Army.</p>
      )}
    </div>
  );
}

export default BotArmy;
