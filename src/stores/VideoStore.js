import Reflux from 'reflux';
import {VideoActions} from '../Actions';
import VideoStorage from '../lib/VideoStorage';

let VideoStore = Reflux.createStore({
    listenables: [VideoActions],

    saveEntry(data){
        VideoStorage.save(data);
        this.trigger(VideoStorage.getList());
    },

    getList(){
        this.trigger(VideoStorage.getList());
    }
});

export default VideoStore;