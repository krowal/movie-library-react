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

        this.storage.setItem("video_library_list", this.list);
    }

    getPager(page = 1, limit = 2){
        let maxPages    = Math.ceil(this.list.length / limit),
            start       = (page-1) * limit,
            end         = start + limit;

        return {
            page:   page,
            limit:  limit,
            max:    maxPages,
            items:  this.list.slice(start, end)
        };
    }
}

let default_storage = new VideoStorage(LocalStorage);

export {VideoStorage}
export default default_storage;