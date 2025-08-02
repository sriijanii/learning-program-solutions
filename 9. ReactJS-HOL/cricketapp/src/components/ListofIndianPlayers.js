import React from 'react';

export default function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {
        IndianPlayers.map((item) => {
          return (
            <div>
              <li>Mr. {item}</li>
            </div>
          );
        })
      }
    </div>
  );
}
