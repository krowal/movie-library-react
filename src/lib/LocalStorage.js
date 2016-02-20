export default {
    getItem(key, default_value){
        let tmp_json = JSON.parse(localStorage.getItem(key));
        return tmp_json ? tmp_json : default_value;
    },

    setItem(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }
}