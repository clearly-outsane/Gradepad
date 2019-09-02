import { Actions } from "../constants";

export const createClassRequest = (formData) => ({
    type: Actions.CREATE_CLASS_REQUEST,
    payload: formData
})

export const createClassSuccess = (classData) => ({
    type: Actions.CREATE_CLASS_SUCCESS,
    payload: classData
})

export const createClassFailure = () => ({
    type: Actions.CREATE_CLASS_FAILURE,
})