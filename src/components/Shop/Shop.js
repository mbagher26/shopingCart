import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import './styles/Shop.css'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
            ],
            
            shoppingCart: [],
            
        }
        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
    }

    addProduct(productId) {
        
        let Products = [...this.state.products]
        
        let newProduct = Products.find((Product) => {
            return Product.id === productId
        })
        
        this.setState({
            shoppingCart: [...this.state.shoppingCart,newProduct]
        })
    }
    
    removeProduct(productId){
        let newProducts = this.state.shoppingCart.filter((product) =>{
            return product.id !== productId
        })
        this.setState({
            shoppingCart : [...newProducts]
        })
    }
    
    render() {
        return (
            <>{
                this.state.products && this.state.products.map(product => (

                    <section key={product.id} className="container content-section">
                        <div className="shop-items">
                            <Product {...product} onProduct={this.addProduct} />
                        </div>
                    </section>
                ))
            }
                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">PRICE</span>
                        <span className="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div className="cart-items">

                        {
                            this.state.shoppingCart && this.state.shoppingCart.map(item => (
                                <>
                                    <CartProduct {...item}  onRemove={this.removeProduct}/>
                                </>
                            ))
                        }
                    </div>
                    <button className="btn btn-primary btn-purchase" type="button">
                        Empty Cart
                    </button>
                </section>



            </>
        )
    }
}