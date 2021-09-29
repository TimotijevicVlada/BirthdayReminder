import {useState} from 'react';
import './App.css';
import {data} from './data';
import List from './List';

const App = () => {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }


  return (
    <div className="App">
      <h2>{people.length} birthday today</h2>
      <List people={people} removeItem={removeItem}/>
      <button className="btn" onClick={() => setPeople([])}>Clear all</button>
    </div>
  );
}

export default App;
