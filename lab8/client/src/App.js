import './App.css';
import React from'react';
import PutPerson from './components/PutPerson';
import SearchPerson from './components/SearchPerson';

export default function App() {
  return (
    <div>
    <div className="App">
      <PutPerson/>
      <SearchPerson/>  
    </div>
    </div>
  );
}