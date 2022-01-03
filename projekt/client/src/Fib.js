import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: [],
    index: '',
    result: [],
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];
    var x=this.state.seenIndexes.map(({ number }) => number) ;
    for(var i=0; i<x.length;++i){
      var y= x[i]
      entries.push(
        <div >
          For index {y} I calculated value: {this.state.values[y]} 
        </div>)
    }
    

    return entries;
  }

 

  handleSubmitHistory = async(event) =>{
    event.preventDefault();
    const  entries = [];
    await this.fetchValues();
    await this.fetchIndexes();
    entries.push(<div> <h3>Last 10 indexes I have seen:</h3> </div>);
    entries.push(this.renderSeenIndexes());
    entries.push(<div> <h3>Last 10 Calculated Values:</h3> </div>);
    entries.push(this.renderValues());
    this.setState({result:entries});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input type="number" min="1" max="20"
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleSubmitHistory}>
          <button>History</button>
        </form>
        <div>
          {this.state.result}
          </div>
      </div>
    );
  }
}

export default Fib;
