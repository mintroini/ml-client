/**
 * Created by mintroini on 6/14/17.
 */
import React, {Component} from 'react';


import SearchList from '../components/SearchList';
import ItemDetailPage from '../components/ItemDetailPage';
import SearchBox from '../components/SearchBox';
import '../App.scss';

class ProductDetail extends Component {
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
                <h1>Product Detail</h1>
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

export default ProductDetail;
