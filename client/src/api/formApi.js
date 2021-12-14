import axios from 'axios';

const urlf = "http://localhost:5000/form";

export const fetchAllForms = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlf);
            resolve(res);

        } catch (error) {
            console.log(error);
            reject(error.message);
        }

    })
};

export const fetchFormById = (_id) => {

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlf + '/?id=' + _id);
            resolve(res);

        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
};

export const fetchAllFormsByFormType = (formType) => {

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlf);
            resolve(res);

            if (res.data.status === 'success') {
                resolve(res);
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
}

export const fetchFormByPageNumber = (page_number) => {
    console.log("pagenumberrrr", page_number)

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlf + '/pagenumber?page_number=' + page_number);
            console.log("respagenumber", res)
            resolve(res.data.result);

            if (res.data.status === 'success') {
                resolve(res.data.result);
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
}

export const addForm = (data) => {
    console.log("fdata", data)
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(urlf + "/addform", data);
            console.log("f res", res.data)
            resolve(res.data);

            if (res.data.status === 'success') {
                resolve(res.data);
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
}

export const updateForm= (_id, data) => {
    console.log("fdata", data)
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.put(urlf + "/updateform?id="+_id ,data);
            console.log("f res", res.data)
            resolve(res.data);

            if (res.data.status === 'success') {
                resolve(res.data);
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
}
