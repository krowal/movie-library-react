import Reflux from 'reflux';
import {VideoActions} from '../Actions';
import VideoStorage from '../lib/VideoStorage';

let VideoStore = Reflux.createStore({
    listenables: [VideoActions],

    saveEntry(data){
        VideoStorage.save(data);
        this.trigger(VideoStorage.getPager());
    },

    getList(page = 1){
        this.trigger(VideoStorage.getPager(page));
    }
});

export default VideoStore;