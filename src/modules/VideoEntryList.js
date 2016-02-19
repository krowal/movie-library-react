import React from 'react';
import Reflux from 'reflux';

import VideoEntry from '../partials/VideoEntry';
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
                <h1>Video library list</h1>
                <div>
                    {this.state.list.map((video, idx) => {
                        return <VideoEntry key={idx} {...video}/>
                    })}
                </div>
            </div>
        )
    },

    componentDidMount(){
        VideoActions.getList();
    }
})