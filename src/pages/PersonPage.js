
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import choresData from '../choses.json';

function PersonPage() {
  const { name } = useParams();
  const [chores, setChores] = useState([]);

  useEffect(() => {
    const personChores = choresData.chores.filter(chore => chore.assignedTo.includes(name));
    setChores(personChores);
  }, [name]);

  const handleCountChange = (choreName, increment) => {
    setChores(prevChores =>
      prevChores.map(chore =>
        chore.name === choreName
          ? {
              ...chore,
              count: {
                ...chore.count,
                [name]: chore.count[name] + increment
              }
            }
          : chore
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{name}'s Chores</h1>
      <ul>
        {chores.map(chore => (
          <li key={chore.name} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{chore.name}: {chore.count[name]}</span>
              <div>
                <button
                  onClick={() => handleCountChange(chore.name, 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleCountChange(chore.name, -1)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonPage;