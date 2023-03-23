import React, { useEffect, useState } from 'react'
import gscDatasService from '../services/gscDatasService'

const GscDataList = () => {

    const [gscDatas, setData] = useState([])

    useEffect(() => {
        getAllGscData();
    },[])

    const getAllGscData = () => {
        gscDatasService.getAllgscData().then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }
    
    return (
        <div className = "container overflow-scroll">
            {/* <h2 className = "text-center"> GSC vs AGS </h2> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Page</th>
                    <th className='text-center'>Keyword</th>
                    <th className='text-center'>Clicks</th>
                    <th className='text-center'>CTR</th>
                    <th className='text-center'>Impressions</th>
                    <th className='text-center'>Position</th>
                </thead>
                <tbody>
                {
                    gscDatas.map(
                        gscData =>
                        <tr key={gscData.id}>
                            <td className='text-center'>{gscData.id}</td>
                            <td className='text-center'>{gscData.date}</td>
                            <td>{gscData.page}</td>
                            <td className='text-center'>{gscData.query}</td>
                            <td className='text-center'>{gscData.clicks}</td>
                            <td className='text-center'>{gscData.ctr}</td>
                            <td className='text-center'>{gscData.impressions}</td>
                            <td className='text-center'>{gscData.position}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default GscDataList

