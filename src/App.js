import React, { Component } from 'react';
import MainMenu from "./partials/main-menu";

export default class App extends Component{
    render(){
        return (
            <div>
                <MainMenu />
                <h1>This is video library app</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
