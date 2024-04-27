// import React, { Component } from 'react'

// export default class Social extends Component {
//     render() {
//         let { href, img} = this.props
//         return (
//             <li>
//                 <a href={href}>
//                     <img alt={href} src={img}/>
//                 </a>
//             </li>
//         )
//     }
// }

// ///////////////////
// refactor to function component

import React from 'react'

function Social(props) {
    let {href, img} = props
    return (
        <li>
            <a href={href}>
                <img className='img' alt={href} src={img} />
            </a>
        </li>
    )
}

export default Social
