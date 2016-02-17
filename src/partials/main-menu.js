import React, {Component} from 'react';

export default class MainMenu extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            Lukasz Kowalski
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}