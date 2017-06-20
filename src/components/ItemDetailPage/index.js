import React from 'react';
import ItemDetailClient from './ItemDetailClient';
import DescriptionBox from '../DescriptionBox';
import ItemMainData from '../ItemMainData';
import ItemImage from '../ItemImage';
import BreadCrumbs from '../BreadCrumbs';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';


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
        let categories = item.categories || [];

        let item_html = "";

        if (this.state.showItem) {
            item_html =


                <Grid >
                    <Row className="show-grid no-gutters">

                        <Col mdOffset={1} md={7}>
                            <ItemImage
                                image={item.picture}
                            />
                        </Col>
                        <Col md={3}>
                            <ItemMainData
                                title={item.title}
                                condition={item.condition}
                                free_shipping={item.free_shipping}
                                itemid={item.id}
                                sold_quantity={item.sold_quantity}
                                price={item.price}
                            />

                        </Col>
                    </Row>

                    <Row className="show-grid">

                        <Col mdOffset={1} md={10}>

                            <div className="descriptionBox">
                                <div className="descTitle">Descripción del Producto</div>
                                <DescriptionBox
                                    itemDescription={item.description}
                                />
                            </div>
                        </Col>
                    </Row>
                </Grid>;
        }

        return (

            <Grid>
                <BreadCrumbs
                    crumbs={categories}
                />
                <div className='itemDetailPage'>
                    {item_html}
                </div>
            </Grid>


        );
    }
}
export default ItemDetailPage;



