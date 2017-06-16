import React from 'react';
import ItemDetailClient from './ItemDetailClient';
import DescriptionBox from '../DescriptionBox';
import ItemMainData from '../ItemMainData';
import ItemImage from '../ItemImage';



class ItemDetailPage extends React.Component {
    state = {
        itemId: this.props.selectedItemId,
        item: {},
        showItem: false
    };

    constructor(props) {

        super(props);

        if (props.selectedItemId.length > 0) {

            this.getItemDetails(props.selectedItemId);
        }
    }

    getItemDetails = (itemid) => {

        ItemDetailClient.search(itemid, (resp) => {
            this.setState({
                item: resp.item,
                showItem: true
            });
        });

    };

    render() {
        const {item} = this.state;
        let item_html = "";

        if (this.state.showItem) {
            item_html =
                <div className="detailPage">
                    <div className="Body">



                        <ItemImage
                            image={item.picture}
                        />

                        <ItemMainData
                            title={item.title}
                            condition={item.condition}
                            free_shipping={item.free_shipping}
                            itemid={item.id}
                            sold_quantity={item.sold_quantity}
                            price={item.price}
                        />

                        <DescriptionBox
                            itemDescription={item.description}
                        />
                    </div>

                </div>;
        }

        return (
            <div className='detailContainer'>
                {item_html}
            </div>


        );
    }
}
export default ItemDetailPage;



