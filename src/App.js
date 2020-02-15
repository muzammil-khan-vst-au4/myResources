import React from 'react';
import Card from './components/Card'
import resources from './resources'
import Header from "./components/Header"

class App extends React.Component {  
  state = {
    query : ""
  }

  handleChange = (e) => {
    this.setState({
      query : e.target.value
    })
  }
  
  render() {
    let filtered = resources.filter((resource) => {
      return resource.name.toLowerCase().includes(this.state.query.toLowerCase())
    })
    return (
      <div className="grey lighten-4">
      <div className="tc container">
        <Header />
        <input onChange={this.handleChange} placeholder="Search Resources" className="input-field"></input> <br />
        <Card resources={filtered}/>
      </div> 
      </div>
    );
  }
}

export default App;