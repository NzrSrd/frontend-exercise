import React, { Component } from 'react';
// import ProductList from "./ProductList";
import axios from 'axios';
import ProductList from "./ProductList";
import PriceInput from "./PriceInput";


class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: '',
            price: React.createRef(),
        }
    }

    updateSearch(event) {
        event.preventDefault();
        this.setState({
            searchItem: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state.searchItem;
        //Axios Call
        const key = 'WandoInt-217b-42d8-a699-e79808dd505e';
        const url = `https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${key}&keywords=${data}&RESPONSE-DATA-FORMAT=JSON`;

        axios(url, {method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
            crossdomain: true,
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error))

    }

    render() {
        return(
            <div>
                <div className="search-container">
                    <form onSubmit={e => this.handleSubmit(e)}
                          className="search">
                        <input type="text" className="search-input"
                               onChange={e => this.updateSearch(e)}
                               name='search'
                               placeholder="What are you looking for?"
                        />
                        <button type="submit"
                                className="searchButton">
                            Search
                        </button>
                    </form>
                </div>


                {/* // pass the data to ProductList component */}
                <PriceInput/>
                <ProductList />
            </div>
        )
    }
}

export default SearchField;