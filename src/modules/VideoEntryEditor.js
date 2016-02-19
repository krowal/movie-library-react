import React from 'react';

export default React.createClass({


    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Create new video entry</div>
                <div className="panel-body">
                    <form className="form-horizontal" role="form">
                        <fieldset>
                            <legend>Video details</legend>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="title">Title</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="email" id="title" />
                                </div>

                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="description">Description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" type="password" id="description" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Video images</legend>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="thumbnail">Thumbnail</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="email" id="thumbnail" />
                                </div>

                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="full_size">Full size</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="password" id="full_size" />
                                </div>
                            </div>
                        </fieldset>
                        <div className="col-sm-10 col-sm-offset-2">
                            <button type="submit" className="btn btn-default">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
})