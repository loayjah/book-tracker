import React, { Component } from "react";


class HeaderComponent extends Component {

    render() {
        return (
            <header className='title-header'>
            <div className='title-container'>
                <h1 className='page-title'>Booklet</h1>
                <p className='page-subtitle'>Your best book tracker app!</p>
            </div>
            </header>
        )
    }

}

export default HeaderComponent;