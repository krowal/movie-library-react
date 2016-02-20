import React from 'react';
import VideoForm from './partials/VideoForm';
import {VideoActions} from '../Actions';
import VideoStore, {VideoController} from '../stores/VideoStore';
import {browserHistory} from 'react-router';

export default React.createClass({
    getInitialState(){
        return {
            video:VideoController.getEmptyVideoEntry()
        }
    },

    render(){
        return (
            <div>
                <h2>
                    {this.state.video.id ? "Edit video entry" : "Add new entry"}
                </h2>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <VideoForm video={this.state.video} onSubmit={this.saveVideo} />
                    </div>
                </div>
            </div>
        )
    },

    saveVideo(data){
        VideoActions.saveEntry(data, this.state.video.id);
        browserHistory.push('/');
    },

    componentWillReceiveProps(props){
        this.updateStateByPath(props.params);
    },

    componentDidMount(){
        this.updateStateByPath();
    },

    updateStateByPath(params){
        params = params || this.props.params;
        let id = params.id ? params.id : null;

        this.setState({
            video: id !== null ? VideoController.getSingle(id) : VideoController.getEmptyVideoEntry()
        });
    }
})