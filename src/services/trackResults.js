import axios from 'axios'
export const trackResults = async () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/data').then((res) => {
            console.log("tracking results")
            resolve(res.data);
        }).catch((err) => {
            reject("something went rwong")
        })
    })
}