import assert from 'assert';

import VideoStorageBase from '../src/lib/VideoStorageBase';
import TestStorage from './lib/TestStorage';

let EntryStorage = new VideoStorageBase(TestStorage);

describe('VideoStorage', () => {
    describe('save()', () => {
        it('should add new entry to the list', () => {
            assert(() => {
                let amount = EntryStorage.getTotalAmount();
                EntryStorage.save({
                    title:"",
                    description:"",
                    thumbnail:"",
                    full_size:""
                });

                return amount == EntryStorage.getTotalAmount();
            })
        })
    })
});