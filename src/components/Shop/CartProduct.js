// import React, { Component } from 'react'

// export default class CartProduct extends Component {

//     removeHamdler(id){
//         this.props.onRemove(id)
//     }

//     render() {

//         return (
            // <div className="cart-row">
            //     <div className="cart-item cart-column">
            //         <img className="cart-item-image" alt='' src={this.props.img} width="100" height="100" />
            //         <span className="cart-item-title">{this.props.title}</span>
            //     </div>
            //     <span className="cart-price cart-column">{this.props.price}</span>
            //     <div className="cart-quantity cart-column">

            //         <button className="btn btn-danger" type="button" onClick={this.removeHamdler.bind(this, this.props.id)}>REMOVE</button>
            //     </div>
            // </div>
//         )
//     }
// }
// ////////////////////
// refactor to function component

function CartProduct(props) {
    let { img, title, price, id } = props
    
    const removeHamdler = (id) => {
        props.onRemove(id)
    }
    
  return (
      <div className="cart-row">
          <div className="cart-item cart-column">
              <img className="cart-item-image" alt='' src={img} width='100px' height='80px'/>
              <span className="cart-item-title">{title}</span>
          </div>
          <span className="cart-price cart-column">{price}</span>
          <div className="cart-quantity cart-column">

              <button className="btn btn-danger" type="button" onClick={() => removeHamdler(id)}>REMOVE</button>
          </div>
      </div>
  )
}

export default CartProduct