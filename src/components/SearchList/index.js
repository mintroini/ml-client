import React from 'react';
import SearchClient from './SearchClient';
import ItemImage from '../ItemImage';
import ListItemData from '../ListItemData';
import '../../App.scss';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import BreadCrumbs from '../BreadCrumbs';
import {Helmet} from "react-helmet";


class ItemSearch extends React.Component {
    state = {
        author: {},
        items: [],
        categories: [],

    };

    constructor(props) {
        super(props);
        if (props.searchQuery && props.searchQuery.length > 0) {

            this.searchItems(props.searchQuery);
        }
    }


    componentWillReceiveProps(props) {
        if (props.searchQuery && props.searchQuery.length > 0) {
            this.searchItems(props.searchQuery);
        }
    }

    searchItems = (value) => {
        if (value === '') {
            this.setState({
                author: {},
                categories: [],
                items: [],
            });
        } else {
            SearchClient.search(value, (resp) => {
                this.setState({
                    author: resp.author,
                    categories: resp.categories,
                    items: resp.items,
                });
            });
        }
    };


    render() {

        const {items, categories} = this.state;


        let head = categories.join(',');


        const itemsRows = items.map((item, idx) => (
            <div key={idx}>
                <Row className="itemRow no-gutters" key={idx} onClick={() => this.props.onItemClick(item.id)}>
                    <Col className="itemImage" md={2}>
                        <ItemImage
                            image={item.picture}
                        />
                    </Col>
                    <Col className="dataBox" md={6}>
                        <ListItemData
                            title={item.title}
                            price={item.price}
                            state_name={item.state_name}
                            free_shipping={item.free_shipping}
                        />


                    </Col>
                    <Col md={2}>
                        {item.state_name}
                    </Col>

                </Row>
                <div className="divider"/>
            </div>

        ));

        return (

            <Col mdOffset={1} md={10}>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{head}</title>
                </Helmet>
                <Grid>
                    <BreadCrumbs
                        crumbs={categories}
                    />
                </Grid>
                <Grid className="listMainCol">
                    {itemsRows}
                </Grid>
            </Col>

        );
    }
}

export default ItemSearch;