import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('Counter', () => {
    test('should return values', () => {
        const state: StateSchema = {
            counter: {
                value: 0,
            },
            user: {

            },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
    });
});
