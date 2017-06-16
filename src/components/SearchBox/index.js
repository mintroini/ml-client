import React from 'react';
import Link from '../Link';

import logoUrl from './Logo_ML.png';
import logoUrl2x from './Logo_ML@2x.png';

import logoSearch from './ic_Search.png';
import logoSearch2x from './ic_Search@2x.png';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import { browserHistory } from 'react-router';


class ItemSearch extends React.Component {
    state = {
        author: {},
        items: [],
        categories: [],
        searchValue: '',
    };
    handleEnter = (e) => {
        if (e.key === 'Enter') {
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

            <div className="searchBox">
                <Row className="show-grid">
                    <Col xsOffset={0} mdOffset={1} xs={1} md={1} className="searchBox__Brand">
                        <Link>
                            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre"/>
                        </Link>

                    </Col>
                    <Col md={10} xs={8}>
                        <Row className="show-grid">
                            <Col xs={8} md={10}>
                                <input
                                    className='prompt'
                                    type='text'
                                    placeholder='Nunca dejes de Buscar'
                                    value={this.state.searchValue}
                                    onChange={this.handleSearchChange}
                                    onKeyPress={this.handleEnter}
                                />
                            </Col>
                            <button type="button" onClick={()=>this.onClick(this.state.searchValue)}>
                                <img className="searchIcon" src={logoSearch} srcSet={`${logoSearch2x} 2x`}
                                     alt="MercadoLibre"/>
                            </button>
                        </Row>
                    </Col>
                </Row>


            </div>



        );
    }
}

export default ItemSearch;
