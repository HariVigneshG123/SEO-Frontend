import React, { useEffect, useState } from 'react'
import agsDataService from '../services/agsDataService'

const AgsDataList = () => {

    const [agsDatas, setData] = useState([])

    useEffect(() => {
        getAllAgsData();
    },[])

    const getAllAgsData = () => {
        agsDataService.getAllagsData().then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            {/* <h2 className = "text-center"> GSC vs AGS </h2> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Page</th>
                    <th className='text-center'>Keyword</th>
                    <th className='text-center'>Result no.</th>
                    <th className='text-center'>Page no.</th>
                </thead>
                <tbody>
                {
                    agsDatas.map(
                        agsData =>
                        <tr key={agsData.id}>
                            <td className='text-center'>{agsData.id}</td>
                            <td className='text-center'>{agsData.date}</td>
                            <td>{agsData.page}</td>
                            <td className='text-center'>{agsData.query}</td>
                            <td className='text-center'>{agsData.clicks}</td>
                            <td className='text-center'>{agsData.ctr}</td>
                            <td className='text-center'>{agsData.impressions}</td>
                            <td className='text-center'>{agsData.position}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AgsDataList

