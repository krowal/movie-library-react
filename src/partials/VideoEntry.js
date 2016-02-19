import React from 'react';

export default React.createClass({
    render(){
        return (
            <div className="media">
                <div className="media-left">
                    <img
                        className="media-object"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Thumbnail&w=200&h=100"
                    />
                </div>
                <div className="media-body">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
})