import React from 'react';
import SearchClient from './SearchClient';

class ItemSearch extends React.Component {
    state = {
        author: {},
        items: [],
        categories: [],
        searchValue: '',
    };
    componentWillReceiveProps(props){
        if (props.searchQuery && props.searchQuery.length > 0) {
            this.handleSearchChange(props.searchQuery);
        }
    }

    handleSearchChange = (value) => {
        this.setState({
            searchValue: value,
        });

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

    handleSearchCancel = () => {
        this.setState({
            author: {},
            categories: [],
            items: [],
            searchValue: '',
        });
    };

    render() {
        const {items} = this.state;

        const itemsRows = items.map((item, idx) => (
            <tr key={idx} onClick={() => this.props.onItemClick(item.id)}>
                <td className='right aligned'>{item.id}</td>
                <td className='right aligned'>{item.title}</td>
            </tr>
        ));

        return (
            <div id='food-search'>
                <table className='ui selectable structured large table'>
                    <tbody>
                    {itemsRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ItemSearch;
