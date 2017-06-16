/**
 * Created by mintroini on 6/14/17.
 */
import React, {Component} from 'react';

import { browserHistory } from 'react-router';

import SearchList from '../components/SearchList';
import SearchBox from '../components/SearchBox';
import '../App.scss';

class Home extends Component {
    state = {
        items: [],
        searchQuery: this.props.location.query.search
    };


    goToPDP = (item) => {
        browserHistory.push('/items/' + item);


    };

    showSearch = (query) => {
        debugger;
        this.setState({searchQuery: query});
    };

    render() {
        const {searchQuery} = this.state;
        return (
            <div className='listPage__Main'>
                <SearchBox
                    onQueryChange={this.showSearch}
                />

                <SearchList
                    searchQuery={searchQuery}
                    onItemClick={this.goToPDP}
                />

            </div>
        );
    }
}

export default Home;
