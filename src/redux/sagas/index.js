import { all } from 'redux-saga/effects';
import { watchForCreateClassRequest } from './classSagas';


export default function* sagas() {
    yield all([
        watchForCreateClassRequest
    ])
}