import React from 'react';
import Reflux from 'reflux';

import VideoEntry from './partials/VideoEntry';
import VideoStore from '../stores/VideoStore';
import {VideoActions} from '../Actions';

export default React.createClass({
    mixins: [Reflux.connect(VideoStore, "list")],

    getInitialState(){
        return {
            list:[]
        }
    },

    render(){
        return (
            <div>
                <h2>Video library list</h2>
                {this.state.list.length ? this.renderList() : ''}
            </div>
        )
    },

    renderList(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {this.state.list.map((video, idx) => {
                        return <VideoEntry key={idx} {...video}/>
                    })}
                </div>
            </div>
        )
    },

    addNew(){
        VideoActions.addNew({
            title:"new video title",
            description:"new video description",
            thumbnail:"",
            full_size:""
        })
    },

    componentDidMount(){
        VideoActions.getList();
    }
})