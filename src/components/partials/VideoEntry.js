import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render(){
        return (
            <div className="media">
                <div className="media-left">
                    <Link to={"details/" + this.props.id}>
                        <img
                            className="media-object"
                            src={this.props.thumbnail}
                            style={{
                                width:'200px'
                            }}
                        />
                    </Link>
                </div>
                <div className="media-body">
                    <h3>
                        <a className="btn btn-success pull-right" href={"/edit/" + this.props.id}>Edit</a>
                        {this.props.title}
                    </h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
})