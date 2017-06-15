import React from 'react';
import ItemDetailClient from './ItemDetailClient';
import DescriptionBox from '../DescriptionBox';
import PriceBox from '../PriceBox';


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

    /*    componentWillReceiveProps(props) {
     debugger;
     if (props.selectedItemId.length > 0) {
     this.getItemDetails(props.selectedItemId);
     }
     }
     */
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
                        <p>{item.picture}</p>

                        <h1>{item.title}</h1>
                        <p>{item.condition}</p>
                        <p>{item.free_shipping}</p>
                        <p>{item.id}</p>

                        <p>{item.sold_quantity}</p>

                        <button>Comprar
                        </button>

                        <PriceBox
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



