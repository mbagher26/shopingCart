import React, { Component } from 'react'
import './styles/Product.css'


export default class Product extends Component {
    
    
    render() {

        let { title, price, img} = this.props

        return (
            <div className="shop-item">
                <span className="shop-item-title">{this.props.title}</span>
                <img className="shop-item-image" alt={title} src={img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">{price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
