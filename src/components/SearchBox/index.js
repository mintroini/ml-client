import React from 'react';

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
            <div className='ui fluid search'>
                <div className='ui icon input'>
                    <input
                        className='prompt'
                        type='text'
                        placeholder='Search Items22!...'
                        value={this.state.searchValue}
                        onChange={this.handleSearchChange}
                        onKeyPress={this.handleEnter}
                    />
                    <i className='search icon'/>
                </div>
                <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}

                />
            </div>

        );
    }
}

export default ItemSearch;
