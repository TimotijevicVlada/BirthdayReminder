import {useState} from 'react';
import './App.css';
import data from './data';
import List from './List';

const App = () => {

  const [person, setPerson] = useState(data);

  console.log(person)

  return (
    <div className="App">
      <h2>{person.length} birthday today</h2>
      <List person={person} setPerson={setPerson}/>
      <button className="btn" onClick={() => setPerson([])}>Clear all</button>
    </div>
  );
}

export default App;
