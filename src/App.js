import React, { Component } from 'react';
import MainMenu from './partials/MainMenu';
import VideoMenu from './partials/VideoMenu';

export default class App extends Component{
    render(){
        return (
            <div className="container">
                <MainMenu />
                <VideoMenu />
                <div className="container-fluid">
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
