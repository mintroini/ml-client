/*
 import React from 'react';
 import ItemDetailClient from './ItemDetailSearch';


 export default function ItemDetailPage(props) {
 const {selectedItemId} = props;
 let item = {};
 debugger;
 ItemDetailClient.search('iphone', (resp) => {
 item = {
 author: resp.author,
 categories: resp.categories,
 items: resp.items,
 };
 });
 debugger;

 return (
 <div className='ui selectable structured large table'>
 <h3>Item Detail Page</h3>
 <h1> hello</h1>
 <p>{selectedItemId}</p>
 </div>


 );
 }*/

import React from 'react';
import ItemDetailClient from './ItemDetailClient';


class ItemDetailPage extends React.Component {
    state = {
        itemId: this.props.selectedItemId,
        item: {},
        showItem:false
    };

    constructor(props) {
        super(props);
        if (props.selectedItemId.length > 0) {
            this.handleItemSearch();
        }
    }

    componentWillReceiveProps(props){
        if (props.selectedItemId.length > 0) {
            this.handleItemSearch(props.selectedItemId);
        }
    }

    handleItemSearch = (itemid) => {
        ItemDetailClient.search(itemid, (resp) => {
            this.setState({
                item: resp.item,
                showItem: true
            });
        });

    };

    render() {
        const {item} = this.state;
        let item_html="";

        if(this.state.showItem){
            item_html =
                <div>
                    <h1>{item.title}</h1>

                    <p>{item.condition}</p>
                    <p>{item.description}</p>
                    <p>{item.free_shipping}</p>
                    <p>{item.id}</p>
                    <p>{item.price.currency}</p>
                    <p>{item.price.amount}</p>
                    <p>{item.price.decimals}</p>
                    <p>{item.sold_quantity}</p>
                    <p>{item.picture}</p>
                </div>;
        }

        return (
            <div className='ui selectable structured large table'>

                <div>
                    {item_html}
                </div>
            </div>


        );
    }
}
export default ItemDetailPage;



