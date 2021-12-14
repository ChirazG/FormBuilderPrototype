import { getFormPending, getFormSuccess, getFormFail, getAllFormsFail, getAllFormsSuccess, addFormSuccess, addFormFail, addFormPending, updateFormSuccess, updateFormFail} from "../reducers/formSlice";
import { fetchAllForms, fetchFormById, fetchAllFormsByFormType, fetchAllFormsOfOnePage, addForm, fetchFormByPageNumber, updateForm } from "../../api/formApi";



export const getForm = (id) => async (dispatch) => {
    console.log("fid", id)

    try {
        dispatch(getFormPending())
        const result = await fetchFormById(id);
        console.log("resssff", result)

        if (result && result._id) {
            return dispatch(getFormSuccess(result))
        }

        dispatch(getFormFail("Form is not found!"))

    } catch (error) {
        dispatch(getFormFail(error))
        console.log(error)
    }
};

export const getFormByPageNumber = (page_number) => async (dispatch) => {
    console.log("fpnumber", page_number)

    try {
        dispatch(getFormPending())
        const result = await fetchFormByPageNumber(page_number);
        console.log("resssffpppp", result)

        if (result ) {
            return dispatch(getAllFormsSuccess(result))
        }

        dispatch(getAllFormsFail("Form is not found!"))

    } catch (error) {
        dispatch(getFormFail(error))
        console.log(error)
    }
};

export const getAllForms = () => async (dispatch) => {
    try {
        const result = await fetchAllForms();
        console.log("result form", result)
        if (result) {
            return dispatch(getAllFormsSuccess(result.data))
        }
    } catch (error) {
        dispatch(getAllFormsFail(error));
    }
};

export const addNewForm = (data) => async (dispatch) => {

    console.log("ddddata", data)
    try {
        dispatch(addFormPending())
        const result = await addForm(data);
        console.log("rrresult", result)
        result.status === "success" ? dispatch(addFormSuccess(result.message)) : dispatch(addFormFail(result.message));

    } catch (error) {
        dispatch(addFormFail(error.message))
    }
}

export const updateOldForm = (_id, data) => async (dispatch) => {

    console.log("ddddata", data)
    try {
        const result = await updateForm(_id, data);
        console.log("rrresult", result)
        result.status === "success" ? dispatch(updateFormSuccess(result.message)) : dispatch(updateFormFail(result.message));

    } catch (error) {
        dispatch(updateFormFail(error.message))
    }
}

