import React, {Component}from 'react';
import CardList from '../components/CardList'
import { robots } from '../components/robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
class App extends Component {
  constructor(){
    super()
    this.state={
      robots: robots,
      searchfield: ''
    }
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
   })
   .then(users =>{
     this.setState({robots:users})
   })
  this.setState({ robots:robots });
 }
  onSeachChange = (event) => {
     this.setState({searchfield: event.target.value})


  }
render(){
  const filteredRobots=this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

  })
  if(this.state.robots.length===0){
    return <h1>Loading</h1>
  }
  else{
  return (
    <div className='tc'>
      <h1 className='f1'>Robofriends</h1>
      <SearchBox searchChange={this.onSeachChange}/>
      <Scroll>
    <CardList robots={filteredRobots}/>
    </Scroll>
    </div>
  );
}
}
}

export default App;
