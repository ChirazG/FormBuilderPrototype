import axios from 'axios';

const urlp = "http://localhost:5000/";


export const fetchPageByNumber = (pageNumber, count) => {
    console.log("api pageNumber", pageNumber)

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlp, pageNumber);
            console.log("api res counttt", res.data[count])
            resolve(res.data[count]);

            if (res.data.status === 'success') {
                resolve(res.data[count]);
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }

    })
}
export const fetchAllPages = () => {
   

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(urlp);
            console.log("api res", res.data)
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



export const addPage= (data) => {
    console.log("fdata", data)
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(urlp + "addpage", data);
            console.log("p", res)
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