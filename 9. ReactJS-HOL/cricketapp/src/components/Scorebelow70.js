import React from 'react';

export default function Scorebelow70({ players }) {
  const players70 = [];

  players.forEach((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      {
        players70.map((item) => {
          return (
            <div>
              <li>Mr. {item.name} <span>{item.score}</span></li>
            </div>
          );
        })
      }
    </div>
  );
}
