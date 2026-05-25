// import { useEffect, useState } from 'react';
import { token } from '../config';
// // const useFetchData = (url) => {
// //     console.log(url)
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         setLoading(true)
// //         const fetchData = async () => {
// //             const token = localStorage.getItem("token");
// //             try {
// //                 const res = await fetch(url, {  
// //                     headers: { Authorization: `Bearer ${token}`},
// //                 });
// //                 const result = await res.json();
// //                 console.log("Result is", result)
// //                 if (!res.ok) {
// //                     throw new Error(result.message || 'Error fetching data');
// //                 }
// //                 setData(result.data);
// //                 setLoading(false);
// //             } catch (err) {
// //                 setLoading(false);
// //                 setError(err.message);
// //                 // toast.error(err.message);// Displaying error using react-toastify
// //             }
// //         };

// //         fetchData();
// //     }, [url]);

// //     return { data, loading, error }; // Return an object with data, loading, and error
// // };
// // export default useFetchData;
// const useFetchData = (url) => {
//     console.log(url)
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async ()=>{
//             setLoading(true)
//             try {
//                 const res = await fetch(url, {
//                     headers:{Authorization :`Bearer ${token}`}
//                 })
    
//                 const result = await res.json()
//                 if(!res.ok){
//                     throw new Error(result.message + 'Errrrrrrrror')
//                 }

//                 setData(result.data)
//                 setLoading(false)

//             } catch (err) {
//                 setLoading(false)
//                 setError(err.message)
//             }
//         }
//         fetchData
//     }, [url]);

//     return { data, loading, error }; // Return an object with data, loading, and error
// };
// export default useFetchData;
import { useEffect, useState } from 'react';
// import { token } from '../config';

const useFetchData = (url) => {
    console.log(url);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("token"); // Ensure token is retrieved from localStorage
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message || 'Error fetching data');
                }

                setData(result.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        };

        fetchData(); // Call the fetchData function

    }, [url]);

    return { data, loading, error }; // Return an object with data, loading, and error
};

export default useFetchData;
