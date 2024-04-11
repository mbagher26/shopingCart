// import React, { Component } from 'react'
import Social from './Social'
import './styles/Footer.css'

// export default class Footer extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             socials: [
//                 { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
//                 { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
//                 { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
//             ],
//         }
//     }

//     render() {
//         return (
//             <>
// <footer className="main-footer">
//     <div className="container main-footer-container">
//         <h3 className="band-title">The Generics</h3>
//         <ul className="nav footer-nav">
//             {
//                 this.state.socials && this.state.socials.map((social) =>(
//                     <Social key={social.id}/>
//                 ))
//             }
//         </ul>
//     </div>
// </footer>
//             </>
//         )
//     }
// }
// //////////////////////////
// refactor to function component
import React from 'react'

function Footer() {
    const socials = [
        { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
        { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
    ]

    return (
        <footer className="main-footer">
            <div className="container main-footer-container">
                <h3 className="band-title">The Generics</h3>
                <ul className="nav footer-nav">
                    {
                        socials && socials.map((social) => (
                            <Social key={social.id} />
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer
