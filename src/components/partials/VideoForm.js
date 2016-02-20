import React from 'react';
import VideoStorage from '../../lib/VideoStorage';

export default React.createClass({
    getInitialState(){
        return {
            video: VideoStorage.getEmptyVideoEntry()
        }
    },

    render(){
        return (
            <form onSubmit={this.submit} className="form-horizontal" role="form">
                <fieldset>
                    <legend>Video details</legend>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="title">Title</label>
                        <div className="col-sm-10">
                            <input
                                placeholder="Title"
                                ref="title"
                                className="form-control"
                                id="title"
                                onChange={this.fieldChange}
                                value={this.state.video.title}
                            />
                        </div>

                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="description">Description</label>
                        <div className="col-sm-10">
                            <textarea
                                placeholder="Description"
                                ref="description"
                                className="form-control"
                                id="description"
                                onChange={this.fieldChange}
                                value={this.state.video.description}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Video images</legend>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="thumbnail">Thumbnail</label>
                        <div className="col-sm-10">
                            <input
                                placeholder="Thumbnail url"
                                ref="thumbnail"
                                className="form-control"
                                id="thumbnail"
                                onChange={this.fieldChange}
                                value={this.state.video.thumbnail}
                            />
                        </div>

                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="full_size">Full size</label>
                        <div className="col-sm-10">
                            <input
                                placeholder="Full size url"
                                ref="full_size"
                                className="form-control"
                                id="full_size"
                                onChange={this.fieldChange}
                                value={this.state.video.full_size}
                            />
                        </div>
                    </div>
                </fieldset>
                <div className="col-sm-10 col-sm-offset-2">
                    <button type="submit" className="btn btn-default">Save</button>
                </div>
            </form>
        )
    },

    fieldChange(e){
        let video = this.state.video;
        video[e.target.id] = this.refs[e.target.id].value;

        this.setState({
            video:video
        });
    },

    componentWillReceiveProps(props){
        this.setState({
            video:props.video
        });
    },

    submit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.video);
    }
})