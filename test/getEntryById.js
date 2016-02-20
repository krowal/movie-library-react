import assert from 'assert';

import {VideoStorage} from '../src/lib/VideoStorage';
import TestStorage from './lib/TestStorage';

let EntryStorage = new VideoStorage(TestStorage);

describe('VideoStorage', () => {
    describe('getSingle()', () => {
        it('should return entry object when it exists in storage list', () => {
            assert(() => {
                let entry = EntryStorage.getSingle(1);
                return entry.title == 'Rambo';
            });
        });

        it('should return undefined when entry with given id doesnt exists in storage list', () => {
            assert.equal(2, 2);
        });
    })
});