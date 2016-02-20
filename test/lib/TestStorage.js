export default {
    items:{
        video_library_list:[
            {
                id:1,
                title:'Rambo',
                description:'no desc',
                thumbnail:'',
                full_size:''
            },{
                id:2,
                title:'Terminator',
                description:'no desc',
                thumbnail:'',
                full_size:''
            }
        ]
    },

    setItem(key, value){
        this.items[key] = value;
    },

    getItem(key, default_value){
        return this.items[key] !== undefined ? this.items[key] : default_value;
    }
}