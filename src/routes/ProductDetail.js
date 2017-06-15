/**
 * Created by mintroini on 6/14/17.
 */
import React, {Component} from 'react';

import { browserHistory } from 'react-router';
import ItemDetailPage from '../components/ItemDetailPage';
import SearchBox from '../components/SearchBox';
import '../App.scss';

class ProductDetail extends Component {

    state = {
        //after doing exact route, if I got here this param is there
        selectedItemId: this.props.params.itemid || "",
        searchQuery:''
    };


    showSearch = (query) => {

        this.setState({searchQuery: query});
        browserHistory.push('/items?search=' + query);

    };

    render() {
        const {selectedItemId, searchQuery} = this.state;
        return (
            <div className='App'>
                <SearchBox
                    searchQuery={searchQuery}
                    onQueryChange={this.showSearch}/>
                <h1>Product Detail</h1>
                <ItemDetailPage selectedItemId={selectedItemId}/>
            </div>
        );
    }
}

export default ProductDetail;
