export default class Storage {

    setIndex() {
        let uniqueId = new Date();
        return uniqueId.getTime();
    }

    addItem(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    getItem(name) {
        let data = localStorage.getItem(name);
        return JSON.parse(data);
    }

    getAllItems() {
        let data = [];

        for (let i = 0; i < localStorage.length; i++) {

            let item = localStorage.getItem(localStorage.key(i));
            data.push(JSON.parse(item));
        }
        return data;
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }

    removeAllItems() {
        localStorage.clear();
    }
}