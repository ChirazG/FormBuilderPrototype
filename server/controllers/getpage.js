const Page = require("../models/pageSchema");


const getAllPages = () => {

    return new Promise((resolve, reject) => {

        try {
            Page.find((error, data) => {
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

const getPageById = (_id) => {

    return new Promise((resolve, reject) => {
        if (!_id) return false

        try {
            Page.findOne({ _id }, (error, data) => {
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

const getPageByNumber = (page_number) => {

    return new Promise((resolve, reject) => {
        if (!page_number) return false

        try {
            Page.findOne({ page_number }, (error, data) => {
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



module.exports = {
    getAllPages,
    getPageById,
    getPageByNumber,
};