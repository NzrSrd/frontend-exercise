import React, { Component } from 'react';

class ProductList extends Component {



    render() {
        // iterate over the props coming from the API call and display
        // filter by prices and display filtered price items
        return(
            <div className="flex-container">
                <div className="wrap-space">
                    <div className="product-card">
                        <div className="product-front">
                            <div className="shadow"/>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt=""/>
                            <div className="stats">
                                <div className="stats-container">
                                    <span className="product_price">P 4$$</span>
                                    <span className="product_name">Product Name</span>
                                    <div className="product_description">Product Descript</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;