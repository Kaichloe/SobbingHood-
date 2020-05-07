import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchAllCompanies } from '../../util/company_api_util';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      companies: [],
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    fetchAllCompanies().then(companies => this.setState({companies: companies}))
  }

  results(){
    const results = [];
    let companies = Object.values(this.state.companies);
    let input = this.state.input.toUpperCase()
    let length = input.length; 

    if (length === 0) return null

    for (let i = 0; i < companies.length; i++) {
      let company_name = companies[i].name.slice(0,length).toUpperCase();
      let company_ticker = companies[i].ticker.slice(0, length).toUpperCase();

      if (input === company_name || input == company_ticker){
        results.push([companies[i].ticker, companies[i].name]);
      }
      if (results.length === 7){
        return results;
      }
    }

    if (results.length === 0){
      results.push(["We were unable to find any results matching your search"])
    }
    return results;
  }

  resultsLinks(){
    let matchResults = this.results();
    let matchLinks;

    if(matchResults){
      matchLinks = matchResults.map(result =>{
        return (
          <Link
            key={result[0]}
            className="search-links"
            to={`/profile/stocks/${result[0]}`}
          >
            <div className="first-column">
              <p>{result[0]}</p>
              <p>{result[1]}</p>
            </div>
          </Link>
        )
      })
    }
    return matchLinks;
  }

  handleInput(e){
    this.setState({input: e.target.value})
  }

  render(){
    return(
    <div className="search-container">
      <input
        className="searchbar"
        type="text"
        value={this.state.input}
        onChange={this.handleInput}
      />
      <div className="search-results-container">
        {this.resultsLinks()}
      </div>
    </div>
    )
  }
}

export default withRouter(Search);

