import React, { Component } from "react";


class HeaderComponent extends Component {

    render() {
        return (
            <header class='title-header'>
            <div class='title-container'>
                <h1 class='page-title'>Booklet</h1>
                <p class='page-subtitle'>Your best book tracker app!</p>
            </div>
            </header>
        )
    }

}

export default HeaderComponent;