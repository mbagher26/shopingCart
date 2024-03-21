import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        console.log(this.props, 'props');
        return (
            <li>
                <a href="sabzlearn.ir" target="_blank">
                    <img alt='' src="Images/YouTube Logo.png" />
                </a>
            </li>
        )
    }
}
