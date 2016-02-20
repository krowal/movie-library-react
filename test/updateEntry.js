import assert from 'assert';

import VideoStorageBase from '../src/lib/VideoStorageBase';
import TestStorage from './lib/TestStorage';

let EntryStorage = new VideoStorageBase(TestStorage);

describe('VideoStorage', () => {
    describe('save()', () => {
        it('should update and entry with a new title', () => {
            assert(() => {
                EntryStorage.save({
                    id:1,
                    title:"Terminator2",
                    description:"",
                    thumbnail:"",
                    full_size:""
                });

                let entry = EntryStorage.getSingle(1);
                return entry.title == "Terminator2";
            })
        })
    })
});