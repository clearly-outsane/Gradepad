import { takeEvery } from 'redux-saga';
import { Actions } from '../constants';

export function* watchForCreateClassRequest() {
    yield takeEvery(Actions.CREATE_CLASS_REQUEST, createClass);
}

function* createClass(action) {
    
}