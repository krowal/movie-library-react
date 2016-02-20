import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render(){
        return (
            <nav className="text-center">
                <ul className="pagination">
                    {Array.from(new Array(this.props.pager.max), (x,i) => i).map((i) => {
                        return (
                            <li className={this.props.pager.page == (i+1) ? 'active' : ''} key={i}>
                                <Link to={"/page/" + (i+1)}>{i+1}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
})