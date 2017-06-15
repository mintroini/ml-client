/**
 * Created by mintroini on 6/14/17.
 */
import React, {Component} from 'react';


import SearchBox from '../components/SearchBox';
import { browserHistory } from 'react-router';
import '../App.scss';

class Home extends Component {
    state = {
        items: [],
        selectedItemId: [],
        searchQuery: ""
    };


    showSearch = (query) => {

        this.setState({searchQuery: query});
        browserHistory.push('/items?search=' + query);

    };

    render() {


        return (
            <div className='App'>
                <SearchBox
                    onQueryChange={this.showSearch}
                />
                <h1>Home</h1>


            </div>
        );
    }
}

export default Home;
