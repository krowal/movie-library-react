import Reflux from 'reflux';
import {VideoActions} from '../Actions';

let list = localStorage.getItem("video_library_list");

let VideoStore = Reflux.createStore({
    listenables: [VideoActions],

    addNew(data){
        list.push({
            title:data.title,
            description:data.description,
            snapshot:{
                thumbnail:data.thumbnail,
                full_size:data.full_size
            }
        });

        localStorage.setItem("video_library_list", list);

        this.trigger(list);
    },

    getList(){
        this.trigger(list);
    }
});

export default VideoStore;