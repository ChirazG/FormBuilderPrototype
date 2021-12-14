import { getPagePending, getPageSuccess, getPageFail, getAllPagesFail, getAllPagesSuccess, createPageSuccess, createPageFail, createPagePending} from "../reducers/pageSlice";
import { addPage, fetchAllPages, fetchPageByNumber } from "../../api/pageApi";


export const getPageByNumber = (pageNumber, count) => async (dispatch) => {
    console.log("pageNumber", pageNumber)

    try {
        dispatch(getPagePending())
        const result = await fetchPageByNumber(pageNumber, count);
        console.log("result page number",result)

        if (result && result._id) {
            return dispatch(getPageSuccess(result))
        }

        dispatch(getPageFail("Page is not found!"))

    } catch (error) {
        dispatch(getPageFail(error))
        console.log(error)
    }
};

export const getAllPages = () => async (dispatch) => {
    try {
        const result = await fetchAllPages();
        if (result) {
            return dispatch(getAllPagesSuccess(result))
        }
    } catch (error) {
        dispatch(getAllPagesFail(error));
    }
};

export const addNewPage = (data) => async (dispatch) => {

    console.log("pageee", data)
    try {
        dispatch(createPagePending())
        const result = await addPage(data);
        console.log("rrresult", result)
        result.status === "success" ? dispatch(createPageSuccess(result.message)) : dispatch(createPageFail(result.message));

    } catch (error) {
        dispatch(createPageFail(error.message))
    }
}