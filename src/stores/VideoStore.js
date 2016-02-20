import Reflux from 'reflux';
import {VideoActions} from '../Actions';

let storage     = JSON.parse(localStorage.getItem("video_library_list"));
let list        = storage !== null ? storage : [];
let nextId      = list.length ? list[list.length-1].id + 1 : 1;

const VideoController = {
    getSingle(id){
        return list.find((entry) => {
            return entry.id == id;
        });
    },

    getEmptyVideoEntry(){
        return {
            title:'',
            description:'',
            thumbnail:'',
            full_size:''
        }
    },

    getIndexByEntryId(id){
        return list.findIndex((entry) => {
            return entry.id == id
        });
    },

    addNew(entry){
        entry.id = nextId++;
        list.push(entry);
    }
};

let VideoStore = Reflux.createStore({
    listenables: [VideoActions],

    saveEntry(data){
        let entry = {
            title:data.title,
            description:data.description,
            thumbnail:data.thumbnail,
            full_size:data.full_size
        };

        if(data.id){
            let idx = VideoController.getIndexByEntryId(data.id);
            entry.id = data.id;
            if(idx){
                list[idx] = entry;
            }
        }else{
            VideoController.addNew(entry);
        }

        localStorage.setItem("video_library_list", JSON.stringify(list));
        this.trigger(list);
    },

    getList(){
        this.trigger(list);
    }
});

export {VideoController};
export default VideoStore;