// import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import './styles/Shop.css'
import  {useState}  from 'react'
// export default class Shop extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             products: [
                // { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
                // { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
                // { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
                // { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
                // { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
                // { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
//             ],

//             shoppingCart: [],

//         }
//         this.addProduct = this.addProduct.bind(this)
//         this.removeProduct = this.removeProduct.bind(this)
//     }

//     addProduct(productId) {

        // let Products = [...this.state.products]

        // let newProduct = Products.find((Product) => {
        //     return Product.id === productId
        // })

        // this.setState({
        //     shoppingCart: [...this.state.shoppingCart, newProduct]
        // })
//     }

//     removeProduct(productId) {
        // let newProducts = this.state.shoppingCart.filter((product) => {
        //     return product.id !== productId
        // })
        // this.setState({
        //     shoppingCart: newProducts
        // })
//     }

//     emptyHandler() {
//         this.setState({
//             shoppingCart: []
//         })
//     }
//     render() {
//         return (
//             <>

//                 <section className="container">
//                     {
//                         this.state.products && this.state.products.map((product) => (
//                             <div key={product.id} className="shop-items">
//                                 <Product {...product} onProduct={this.addProduct} />
//                             </div>
//                         ))
//                     }
//                 </section>


//                 <section className="content-section">
//                     <h2 className="section-header">CART</h2>
//                     <div className="cart-row">
//                         <span className="cart-item cart-header cart-column">ITEM</span>
//                         <span className="cart-price cart-header cart-column">PRICE</span>
//                         <span className="cart-quantity cart-header cart-column">Doing</span>
//                     </div>
//                     <div className="cart-items">

//                         {
//                             this.state.shoppingCart && this.state.shoppingCart.map(item => (
//                                 <>
//                                     <CartProduct key={item.id} {...item} onRemove={this.removeProduct} />
//                                 </>
//                             ))
//                         }
//                     </div>
//                     <button className="btn btn-primary btn-purchase" type="button" onClick={(event) => this.emptyHandler(event)}>
//                         Empty Cart
//                     </button>
//                 </section>



//             </>
//         )
//     }
// }

// ////////////////
// refoctor to function component

function Shop() {

    const [products, setProducts] = useState(
        [
            { id: 1, title: 'Album 1', price: 5, img: '/Images/Album 1.png' },
            { id: 2, title: 'Album 2', price: 15, img: '/Images/Album 2.png' },
            { id: 3, title: 'Album 3', price: 20, img: '/Images/Album 3.png' },
            { id: 4, title: 'Album 4', price: 100, img: '/Images/Album 4.png' },
            { id: 5, title: 'Coffee', price: 5, img: '/Images/Cofee.png' },
            { id: 6, title: 'Shirt', price: 50, img: '/Images/Shirt.png' },
        ]);
    // console.log(products);

    const [shoppingCart, setShoppingCart] = useState([])
    const addProduct = (productId) => {

        let Products = [...products]

        let newProduct = Products.find((Product) => {
            return Product.id === productId
        })

        setShoppingCart([...shoppingCart, newProduct])
    }

    const removeProduct = (productId) => {

        let newProducts = shoppingCart.filter((product) => {
            return product.id !== productId
        })
        
        setShoppingCart(newProducts)
    }

    const emptyHandler = () => {
        setShoppingCart()
    }

    return (
        <>
            
            <section className="container">
                {   
                    products && products.map((product) => (
                        <div key={product.id} className="shop-items">
                            <Product {...product} onProduct={addProduct} />
                        </div>
                    ))
                }
            </section>


            <section className="content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">ITEM</span>
                    <span className="cart-price cart-header cart-column">PRICE</span>
                    <span className="cart-quantity cart-header cart-column">Doing</span>
                </div>
                <div className="cart-items">

                    {
                        shoppingCart && shoppingCart.map(item => (
                            <>
                                <CartProduct key={item.id} {...item} onRemove={removeProduct} />
                            </>
                        ))
                    }
                </div>
                <button className="btn btn-primary btn-purchase" type="button" onClick={(event) => emptyHandler(event)}>
                    Empty Cart
                </button>
            </section>
        </>
    )
}

export default Shop