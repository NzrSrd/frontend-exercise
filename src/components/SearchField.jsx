import React, { Component } from 'react';
import axios from 'axios';
import ProductList from "./ProductList";



class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            productData: null,
        };

    }

    updateInput(e) {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.priceFrom)
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state.searchQuery;
        const key = 'WandoInt-217b-42d8-a699-e79808dd505e';
        const url = `https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${key}&keywords=${data}&RESPONSE-DATA-FORMAT=JSON`;

        axios(url, {
            headers: {
                withCredentials: true
            }
        })
            .then(res => {
                this.setState({
                    productData: res.data.findItemsByKeywordsResponse[0].searchResult[0].item,
                });
                console.log(this.state);

            })
            .catch(error => console.log(error));

        document.getElementById('input-form').reset();

    }

    render() {

        return(
            <div>
                <div className="search-container">
                    <form onSubmit={e => this.handleSubmit(e)}
                          id='input-form'
                          className="search">
                        <input type="text" className="search-input"
                               onChange={e => this.updateInput(e)}
                               name='searchQuery'
                               placeholder="What are you looking for?"
                        />

                        <button type="submit"
                                className="searchButton">
                            Search
                        </button>
                    </form>
                </div>

                <ProductList data={this.state.productData}/>

            </div>
        )
    }
}

export default SearchField;