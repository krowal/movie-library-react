import LocalStorage from './LocalStorage';

class VideoStorage {
    constructor(storage){
        this.storage    = storage;
        this.list       = this.storage.getItem("video_library_list", []);
        this.nextId     = this.list.length ? this.list[this.list.length-1].id + 1 : 1;
    }

    getSingle(id){
        return this.list.find((entry) => {
            return entry.id == id;
        });
    }

    getEmptyVideoEntry(){
        return {
            title:'',
            description:'',
            thumbnail:'',
            full_size:''
        }
    }

    getIndexByEntryId(id){
        return this.list.findIndex((entry) => {
            return entry.id == id
        });
    }

    save(data){
        if(data.id){
            let idx = this.getIndexByEntryId(data.id);
            if(idx){
                this.list[idx] = data;
            }
        }else{
            data.id = this.nextId++;
            this.list.push(data);
        }

        this.storage.setItem("video_library_list", JSON.stringify(this.list));

        return this.list;
    }

    getList(){
        return this.list;
    }
}

let default_storage = new VideoStorage(LocalStorage);

export {VideoStorage}
export default default_storage;