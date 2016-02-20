import React from 'react';
import Reflux from 'reflux';

import VideoEntry from './partials/VideoEntry';
import Pagination from './partials/Pagination';
import VideoStore from '../stores/VideoStore';
import {VideoActions} from '../Actions';

export default React.createClass({
    mixins: [Reflux.connect(VideoStore, "pager")],

    getInitialState(){
        return {
            pager: null
        }
    },

    render(){
        return (
            <div>
                <h2>Video library list</h2>
                {this.state.pager ? this.renderList() : ''}
            </div>
        )
    },

    renderList(){
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.state.pager.items.map((video, idx) => {
                            return <VideoEntry key={idx} {...video}/>
                        })}
                    </div>
                </div>
                <Pagination pager={this.state.pager}/>
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
        VideoActions.getList(this.props.params.page);
    },

    componentWillReceiveProps(props){
        VideoActions.getList(props.params.page)
    }
})