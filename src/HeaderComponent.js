import React, { Component } from "react";


class HeaderComponent extends Component {

    render() {
        return (
            <header className='title-header'>
            <div className='title-container'>
                <h1 className='page-title'>The Booklet</h1>
                <p className='page-subtitle'>Your best book tracker app!</p>
            </div>
            <div className="bottom-right"></div>
            <div className="bottom-left"></div>
            </header>
        )
    }

}

export default HeaderComponent;