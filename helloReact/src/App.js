import { useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> setMonsters(users))
  }, [])


  const onSearchChange =(event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
         }


  
  const filteredMonsters = monsters.filter((monsters)=> {
  return monsters.name.toLocaleLowerCase().includes(searchField);
        });
      
  return (
    <div className="App">
    <h1 className='title-card'>Monster Rolodex</h1>
   
    <SearchBox 
    placeholder= 'search monsters '
    onChangeHandler={onSearchChange}/>
    <CardList  monsters={filteredMonsters}/>
  </div> 
  )
  }

// class App extends Component {
//   constructor() {
//     super();

//     this.state  = {
//       monsters: [], 
//       searchField:'',
      
//     };
//   }

  
  
//   onSearchChange =(event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=> {
//       return {searchField};
//     })
//   }

//   render() {

//     const { monsters, searchField} = this.state;
//     const { onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
  
//     });
//     return (
      
//       <div className="App">
//         <h1 className='title-card'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange}/>
//         <CardList  monsters={filteredMonsters}/>
//       </div> 
//     );
      
//   }
// }
export default App;
