import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { userReducers } from 'entities/User';
import { StateSchema } from '../config/stateSchema';

export function createReduxStore(initialStore?: StateSchema) {
    const rootStore: ReducersMapObject<StateSchema> = {
        counter: counterReducers,
        user: userReducers,
    };

    return configureStore<StateSchema>({
        reducer: rootStore,
        devTools: __IS_DEV__,
        preloadedState: initialStore,
    });
}
