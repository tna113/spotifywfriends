/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const getAccessToken = async (event) => {
    event.preventDefault();

    //define headers, parameters
    const axiosConfig = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    const json = {
        grant_type: "client_credentials",
        client_id: "4f75feb86a3d49adb5a7df64f4d8780d",
        client_secret: "ee257029ff0a4e999bd831c347bca096",
    };

    const data = new URLSearchParams(Object.entries(json)).toString();

    //use axios to make post request
    return axios.post('https://accounts.spotify.com/api/token', data, axiosConfig)
        .then(response => JSON.stringify(response.data.access_token))
        .catch(err => `error: ${err}`);
}

export default getAccessToken;