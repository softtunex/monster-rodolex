
import './App.css';
import react, { Component } from 'react/cjs/react.production.min';
import {CardList} from './component/card-list/card-list.component';
import './component/card-list/cardlist.style.css';
import {SearchBox} from './component/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();

    this.state={
      monster: [],
      searchField: ''

    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monster: users}));
    
  }
      handleChange = e =>{
        this.setState({searchField: e.target.value})
      }
      render(){
        const {monster, searchField }= this.state
        const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(<div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder= 'search monsters'
          handleChange={this.handleChange}
          />
          <CardList monster={filteredMonster}/>
        
      </div>)
      }
    }
 


export default App;
