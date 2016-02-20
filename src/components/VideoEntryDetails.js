import React from 'react';
import {VideoController} from '../stores/VideoStore';

export default React.createClass({
    getInitialState(){
        return {
            video:VideoController.getEmptyVideoEntry()
        }
    },

    render(){
        return (
            <div className="panel panel-default clearfix">
                <div className="panel-heading">
                    <h4>Full size snapshot for {this.state.video.title}</h4>
                </div>
                <div className="panel-body">
                    <img className="img-responsive" src={this.state.video.full_size} />
                </div>
            </div>
        )
    },

    componentDidMount(){
        let id = this.props.params.id ? this.props.params.id : null;

        if(id){
            this.setState({
                video: VideoController.getSingle(id)
            });
        }
    }
})