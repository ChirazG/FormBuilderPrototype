const Form = require("../models/formSchema");


const getAllForms = () => {

    return new Promise((resolve, reject) => {

        try {
            Form.find((error, data) => {
                if (error) {
                    console.log(error)
                    reject(error)
                }
                resolve(data)
            })

        } catch (error) {
            console.log(error)
            reject(error)
        }

    });
};

const getFormById = (_id) => {

    return new Promise((resolve, reject) => {
        if (!_id) return false

        try {
            Form.findOne({ _id }, (error, data) => {
                if (error) {
                    reject(error)
                }
                resolve(data)
            })

        } catch (error) {
            reject(error)
        }
    });
};

const getFormByFormType = (formType) => {

    return new Promise((resolve, reject) => {
        try {
            Form.find({ form_type: formType }, (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            })
        } catch (error) {
            reject(error);
        }
    });
};

const getFormByPageNumber = (page_number) => {
    console.log("backp", page_number)

    return new Promise((resolve, reject) => {
        try {
            Form.find({ page_number: page_number }, (error, data) => {
                if (error) {
                    reject(error);
                    console.log(error)
                }
                resolve(data);
                console.log("databack", data)
            })
        } catch (error) {
            reject(error);
            console.log(error)
        }
    });
};

module.exports = {
    getAllForms,
    getFormById,
    getFormByFormType,
    getFormByPageNumber
};