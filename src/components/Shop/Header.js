// import React, { Component } from 'react'
import './styles/Header.css'

// export default class Header extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <>
//                 <header className="main-header">
//                     <nav className="main-nav nav">
//                         <ul>
//                             <li><a href="javascript">HOME</a></li>
//                             <li><a href="/#">STORE</a></li>
//                             <li><a href="/#">ABOUT</a></li>
//                         </ul>
//                     </nav>
//                     <h1 className="band-name band-name-large">Superstore</h1>
//                 </header>
//             </>
//         )
//     }
// }
// ////////////////////
// refactor to function component
import React from 'react'

function Header() {
    return (
        <>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                        <li><a href="javascript">HOME</a></li>
                        <li><a href="/#">STORE</a></li>
                        <li><a href="/#">ABOUT</a></li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">Superstore</h1>
            </header>
        </>
    )
}

export default Header

