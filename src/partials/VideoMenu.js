import {Router, Link} from 'react-router';
import React, {Component} from 'react';

let menu = [
    {
        path:'/',
        name:'Show library'
    },
    {
        path:'/add',
        name:'Add new Video'
    }
];

export default class VideoMenu extends Component{
    render(){
        return(
            <ul className="nav nav-pills">
                {menu.map(function(item){
                    return (
                        <li className={item.path == location.pathname ? "active" : ""} role="presentation">
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
}