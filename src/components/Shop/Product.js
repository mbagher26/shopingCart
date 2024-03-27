import React, { Component } from 'react'
import './styles/Product.css'


export default class Product extends Component {
    
    addToCartHandler(id){
        this.props.onProduct(id)
    }

    render() {

        let { id, title, price, img} = this.props

        return (
            <div className="shop-item">
                <span className="shop-item-title">{title}</span>
                <img className="shop-item-image" alt={title} src={img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">{price}</span>
                    <button
                        onClick={this.addToCartHandler.bind(this, id)}
                        className="btn btn-primary shop-item-button"
                        type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
