
import React from 'react';
import Link from '../Link';

import logoUrl from './Logo_ML.png';
import logoUrl2x from './Logo_ML@2x.png';
//import logoSearch from './ic_Search.png';
//import logoSearch2x from './ic_Search@2x.png';

class ItemSearch extends React.Component {
    state = {
        author: {},
        items: [],
        categories: [],
        searchValue: '',
    };
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.onQueryChange(e.target.value);
        }
    };
    handleSearchChange = (e) => {

        const value = e.target.value;
        this.setState({
            searchValue: value,
        });
    };

    handleSearchCancel = () => {
        this.setState({
            author: {},
            categories: [],
            items: [],
            searchValue: '',
        });
    };

    render() {

        return (
            <div className='searchBoxRoot'>
        <div className='app-container'>
          <Link className='app-brand' to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre" />
          </Link>
          <div className='app-searchDiv'>
          <input
              className='prompt'
              type='text'
              placeholder='Search Items22!...'
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
              onKeyPress={this.handleEnter}
          />
          <i className='search icon'/>
          </div>
        </div>
      </div>

        );
    }
}

export default ItemSearch;
