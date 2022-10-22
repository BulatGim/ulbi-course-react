import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { StateSchema } from '../config/stateSchema';

export function createReduxStore(initialStore?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducers,
        },
        devTools: __IS_DEV__,
        preloadedState: initialStore,
    });
}
