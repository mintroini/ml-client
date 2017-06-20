import React from 'react';
import Link from '../Link';

import logoUrl from './Logo_ML.png';
import logoUrl2x from './Logo_ML@2x.png';
import Button from 'react-bootstrap/lib/Button';

import logoSearch from './ic_Search.png';
import logoSearch2x from './ic_Search@2x.png';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import {browserHistory} from 'react-router';


class ItemSearch extends React.Component {
    state = {
        author: {},
        items: [],
        categories: [],
        searchValue: '',
    };
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            browserHistory.push('/items?search=' + e.target.value);

            this.props.onQueryChange(e.target.value);
        }
    };
    handleSearchChange = (e) => {

        const value = e.target.value;
        this.setState({
            searchValue: value,
        });
    };

    onClick = (value) => {
        browserHistory.push('/items?search=' + value);
        this.props.onQueryChange(value);

    };

    render() {

        return (

            <div className="header__Main">
                <Grid >
                    <Row className="show-grid searchBox">
                        <Col md={1} className="searchBox__Brand">
                            <Link>
                                <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre"/>
                            </Link>

                        </Col>
                        <Col md={11}>
                            <Row className="show-grid no-gutters align-middle">
                                <Col md={11}>
                                    <input
                                        className='prompt'
                                        type='text'
                                        placeholder='Nunca dejes de Buscar'
                                        value={this.state.searchValue}
                                        onChange={this.handleSearchChange}
                                        onKeyPress={this.handleEnter}
                                    />
                                </Col>
                                <Col md={1}>
                                    <Button type="button" onClick={() => this.onClick(this.state.searchValue)}>
                                        <img src={logoSearch} srcSet={`${logoSearch2x} 2x`}
                                             alt="MercadoLibre"/>
                                    </Button>
                                </Col>

                            </Row>
                        </Col>
                    </Row>


                </Grid>
            </div>



        );
    }
}

export default ItemSearch;
