import { makeAutoObservable } from 'mobx';

class LogStore {
    events = [];

    constructor() {
        makeAutoObservable(this);
    }

    logEvent(event) {
        this.events.push(event);
    }
}

const logStore = new LogStore();
export default logStore;