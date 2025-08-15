import { useEffect, useState } from 'react'; 


export const ActivityApicall = (apiURL) => {
    const [ data , setData ] = useState(null);

    useEffect (() => {
        fetch(apiURL)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.err("Error fetching data:" , err))
    },[]);



    return (
        <>
        {data ? (
            <pre>
                {JSON.stringify(data, null, 2)}</pre>
        ): (
            <p>Loading...</p>
        )}
        </>
    )
}