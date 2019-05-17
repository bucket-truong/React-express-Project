import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import '../css/style.css';


class ResultsContainer extends Component {
  constructor(){
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount(){
    this.searchResults({search:''});
  }

  searchResults = async (formData) => {
    console.log(formData)
    try {
       const res = await fetch(`http://localhost:9000/search?location=${formData.search}`, {
        method: 'GET'
      })
      const results = await res.json();
      this.setState({
        results: results.businesses
      })
    } catch(err){
    console.log(err);
    }
  }
  render(){
    let resultsList
    if (Array.isArray(this.state.results)) {
      resultsList = this.state.results.map((result) => {
        console.log(result)
        return(
          <div>
            <ul>
              <h3>{result.name}</h3><br />
              <img src={result.image_url} alt='img'></img><br /><br />
              
            </ul>
          </div>
        )
      })
    }
    return (
      <div>
      <h2>Nearby Dispensaries</h2>
      <SearchForm searchResults={this.searchResults}/>
      {resultsList}
      </div>
    )
  }
}
export default ResultsContainer
