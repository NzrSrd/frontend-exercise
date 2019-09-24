import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            priceFrom: 0,
            priceTo: 100000
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(this.state)
    };

    render() {

        const { priceFrom, priceTo } = this.state;

        const priceInput = () => {
            return <div className="price-container">
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
                        placeholder="€10"
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
                        placeholder="€1,000,000"
                        value={priceTo}
                        onChange={e => this.handleChange(e)}
                    />
                </form>
            </div>
        };

        const product = () => {
            if(this.props.data !== null) {
                // eslint-disable-next-line array-callback-return
                return this.props.data.map( (item, i) => {

                    const price = item.sellingStatus[0].currentPrice[0].__value__;

                    if (!this.state.priceFrom || !this.state.priceTo ) {
                        return (
                            <div key={i} className="wrap-space">
                                <div className="product-card">
                                    <div className="product-front">
                                        <div className="shadow"/>
                                        <img src={item.imageURL} alt=""/>
                                        <div className="stats">
                                            <div className="stats-container">
                                                <span className="product_price">{price}</span>
                                                <span className="product_name">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    if (this.state.priceFrom <= parseFloat(price) &&
                        this.state.priceTo >= parseFloat(price) ){
                        console.log(price, item.title);
                        return(
                            <div key={i} className="wrap-space">
                                <div className="product-card">
                                    <div className="product-front">
                                        <div className="shadow"/>
                                        <img src={item.imageURL} alt=""/>
                                        <div className="stats">
                                            <div className="stats-container">
                                                <span className="product_price">{price}</span>
                                                <span className="product_name">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                });
            }
        };

        return(
            <div>
                <div>{priceInput()}</div>
                <div className="flex-container">{product()}</div>
            </div>
        )
    }
}

export default ProductList;