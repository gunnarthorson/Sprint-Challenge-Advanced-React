import React from 'react'
import axios from 'axios'
import Navigation from './components/Navigation'
import List from './components/List'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      name: '',
      country: ''
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({ 
        data: res.data
      })
    })
    .catch(err => console.log(err))
  }
render(){
  return(
    <div className="App">
      <Navigation />
      <List data={this.state.data}/> 
    </div>
  )
}
}
export default App;