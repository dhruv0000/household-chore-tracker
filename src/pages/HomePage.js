
import React from 'react';
import { Link } from 'react-router-dom';

const people = ['Dhruv', 'Nidhi', 'Arshika'];

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Person</h1>
      <ul>
        {people.map(person => (
          <li key={person} className="mb-2">
            <Link to={`/${person}`} className="text-blue-500 hover:underline">
              {person}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;