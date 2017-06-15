/**
 * Created by mintroini on 6/14/17.
 */
import React, {Component} from 'react';

import SearchList from '../SearchList';
import ItemDetailPage from '../ItemDetailPage';
import SearchBox from '../SearchBox';
import '../../App.scss';

class Layout extends Component {
    state = {
        items: [],
        selectedItemId: [],
        searchQuery:""
    };



    goToPDP = (item) => {
        this.setState({selectedItemId: item});
    };

    showSearch = (query) => {
        this.setState({searchQuery: query});
    };

    render() {
        const { selectedItemId, searchQuery} = this.state;

        return (
            <div className='App'>
                <SearchBox
                    onQueryChange={this.showSearch}
                    />

                <SearchList
                    searchQuery={searchQuery}
                    onItemClick={this.goToPDP}
                />
                <ItemDetailPage
                    selectedItemId={selectedItemId}
                />
            </div>
        );
    }
}

export default Layout;
