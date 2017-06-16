import React from 'react';
import Link from '../Link';

import logoUrl from './Logo_ML.png';
import logoUrl2x from './Logo_ML@2x.png';

import logoSearch from './ic_Search.png';
import logoSearch2x from './ic_Search@2x.png';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

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

    handleSearchCancel = () => {
        this.setState({
            author: {},
            categories: [],
            items: [],
            searchValue: '',
        });
    };

    render() {

        return (
            <div>
                <div className='searchBox__Main'>

                    <Grid className='searchBox__Main'>
                        <Row className="show-grid">
                            <Col className="searchBox__Brand" xs={1} md={2}>
                                    <Link>
                                        <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre"/>
                                    </Link>

                            </Col>
                            <Col className='searchBox__Search' xs={11} md={10}>

                                    <input
                                        className='prompt'
                                        type='text'
                                        placeholder='Nunca dejes de Buscar'
                                        value={this.state.searchValue}
                                        onChange={this.handleSearchChange}
                                        onKeyPress={this.handleEnter}
                                    />
                                    <button type="button" onClick={this.onClick}>
                                        <img className="searchIcon" src={logoSearch} srcSet={`${logoSearch2x} 2x`}
                                             alt="MercadoLibre"/>
                                    </button>

                            </Col>
                        </Row>


                    </Grid>
                </div>
                <br/><br/>
                <div className='searchBox__Main'>

                    <div className="searchBox__Brand">
                        <Link>
                            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre"/>
                        </Link>
                    </div>
                    <div className='searchBox__Search'>
                        <input
                            className='prompt'
                            type='text'
                            placeholder='Nunca dejes de Buscar'
                            value={this.state.searchValue}
                            onChange={this.handleSearchChange}
                            onKeyPress={this.handleEnter}
                        />
                        <button type="button" onClick={this.onClick}>
                            <img className="searchIcon" src={logoSearch} srcSet={`${logoSearch2x} 2x`}
                                 alt="MercadoLibre"/>
                        </button>

                    </div>

                </div>
            </div>
        );
    }
}

export default ItemSearch;
