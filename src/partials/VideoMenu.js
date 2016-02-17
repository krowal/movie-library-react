import {Link} from 'react-router';
import React, {Component} from 'react';

export default class VideoMenu extends Component{
    render(){
        return(
            <ul className="nav nav-pills">
                <li role="presentation">
                    <Link to="/">Show library</Link>
                </li>
                <li role="presentation">
                    <Link to="/add">Add new video</Link>
                </li>
            </ul>
        )
    }
}