import React, { Component } from 'react';

class PriceInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            priceFrom: '',
            priceTo: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    render() {
        const { priceFrom, priceTo } = this.state;
        return (
            <div className="price-container">
                <form onSubmit={ e => this.handleChange(e)}>
                    <div className='price-container'>
                        <label htmlFor="price-from">Price from</label>
                    </div>
                    <input
                        type="number"
                        min="0"
                        max="10000000"
                        id="price-from"
                        name="priceFrom"
                        placeholder="£1,000,000"
                        value={priceFrom}
                        onChange={ e => this.handleChange(e)}
                    />
                    <div className='price-container'>
                        <label htmlFor="price-to">Price to</label>
                    </div>
                    <input
                        type="number"
                        min="0"
                        max="10000000"
                        id="price-to"
                        name="priceTo"
                        placeholder="£1,000,000"
                        value={priceTo}
                        onChange={e => this.handleChange(e)}
                    />
                </form>
                {priceFrom && (
                    <p className='price-container'>
                        The price from is; {priceFrom}. The price to is; {priceTo}
                    </p>
                )}
            </div>
        )
    }
}

export default PriceInput;