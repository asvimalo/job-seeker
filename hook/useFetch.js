import {useState, useEffect } from "react"
import axios from "axios"


const rapidAPIKey = process.env.RAPID_API_KEY

export default useFetch = ({endpoint, query}) => {
    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'x-rapidapi-key': rapidAPIKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            //console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
            alert(error)
            //console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(()=> {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch }
}