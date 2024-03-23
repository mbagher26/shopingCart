import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
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
                    <h1 className="band-name band-name-large">SabzLearn Shop</h1>
                </header>
            </>
        )
    }
}
