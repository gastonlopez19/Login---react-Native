import axios from 'axios';
import { useEffect, useState } from 'react';

export const API = (url, peticion, val) => {
    const [apis, setApi] = useState([]);

    const queryAPI = async () => {
        const api = await peticion(`https://serverless.miguelangelmo.vercel.app/api/${url}`, val);
        setApi(api.data);
    }

    useEffect(() => {
        queryAPI();
    }, [])

    return apis;
}