import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        let { href, img} = this.props
        return (
            <li>
                <a href={href}>
                    <img alt={href} src={img} style={{width: '90px' , height: '90px'}}/>
                </a>
            </li>
        )
    }
}
