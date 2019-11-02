import React from 'react'
import Link from 'next/link'
import Head from '../HTMLComponent/Head'

export default class Navbar extends React.Component {
    render() {
        return (
           
            <div>
                 <Head/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a class="link-navbar navbar-brand" style={{color:'#A9A9A9'}}>
                            <img src ="/static/images/github.png" className="nav-logo"/>
                             Muhammad Breda Taftayani</a>
                    </div>
                </nav>
            </div>
        )
    }
}