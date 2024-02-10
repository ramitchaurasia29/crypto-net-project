import React, { useEffect, useState } from 'react'
import './style/Info.css'

const Info = () => {

    const [name, setName] = useState([]);

    const fetchApi = async () => {
        const url = 'https://randomuser.me/api/?page=1&results=1&seed=abc';

        const response = await fetch(url);
        const dataJson = await response.json();
        console.log(dataJson.results);
        setName(dataJson.results);

    }

    useEffect(() => {
        fetchApi()
    }, []);
    
    return (
        <> 
        <div className='flex items-center justify-center h-screen'>
            {name.map(data => ( 
                <div className='holder h-72 w-1/3 m-5 p-5 flex justify-around rounded-lg  '>
                    <div className='imgbg '>
                        <img className='h-32 w-32 bg-no-repeat bg-contain rounded-md mt-14' src={data.picture.large} alt={data.picture.thumbnail}/>
                    </div>
                    <div className='info h-36 w-56 mt-11 pl-5 rounded-lg p-1 font-bold flex flex-col justify-around backdrop-blur-sm'>
                        <div className='name w-44  flex  text-xl'>
                            <div className='n1 w-20  '>
                                {data.name.first}
                            </div>
                            <div className='n2 w-20 '>
                            {data.name.last}
                            </div>
                        </div>
                        <div className='gender mt-2.5'>
                            {data.gender}
                        </div>
                        <div className='number mt-2.5 '>
                            {data.phone}
                        </div>
                        
                    </div>

                </div>
            ))
            }
    </div>
        </>


    )
}

export default Info