import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {Search} from './components/search/search.component'
import './App.css';


class App extends Component {

  constructor ()
  {
    super();
      this.state = {
        monsters: [],
        searchFeild:''

    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}))
  }
  render()
  {
    const {monsters,searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase()
      .includes(searchFeild.toLowerCase())
      );
    return (
      <div className='App'>
     <h1> Monster Rolodex </h1>
      <Search placeholder='Search here...'
      onChangeHandler = {e => this.setState({searchFeild: e.target.value},() => {console.log(this.state)} )}
      />
      <br/>
      <br/>
      <br/>
        <div style={{height:300}}>
          <CardList monsters = {filteredMonsters}>
            <div>

            </div>
          </CardList>
        </div>


      </div>
    );
  }
 }

export default App;
