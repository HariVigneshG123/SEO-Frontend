import React, { useEffect, useState } from 'react'
import agsGscDataService from '../services/agsGscDataService'

const AgsGscDataList2 = () => {
    const [agsDatas, setData] = useState([])

    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEnddate] =useState('')

    useEffect(() => {
        getAllAgsData();
    },[])

    const getAllAgsData = () => {
        agsGscDataService.getAllAgsGsc().then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    const searchInputFormAgsGsc = (e) => {
        e.preventDefault();
        const formInput = {keyword, page, startDate, endDate}
        console.log(formInput)
        agsGscDataService.getAgsGscDataBySearch(formInput).then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <>
        <div className="container">
            <form>
                <input type="text" placeholder="keyword" name="keyword" value={keyword} onChange = {(e) => setKeyword(e.target.value)} style = {{width:"320px"}}/>      {''}
                <input type="text" placeholder="page" name="page" value={page} onChange = {(e) => setPage(e.target.value)} style = {{width:"320px"}}/>      {''}
                Start Date: <input type="date" name="startDate" value={startDate} onChange = {(e) => setStartDate(e.target.value)}/>      {''}
                End Date: <input type="date" name="endDate" value={endDate} onChange = {(e) => setEnddate(e.target.value)}/>      {''}
                <button className="btn btn-success" onClick={(e) => {searchInputFormAgsGsc(e)}}>Search</button>
            </form>
        </div>
        <div>
            {/* <h2 className = "text-center"> GSC vs AGS </h2> */}
            <table className="table-sm table-bordered">
                <thead>
                    {/* <th className='text-center'>ID</th> */}
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Page</th>
                    <th className='text-center'>Query</th>
                    <th className='text-center'>Clicks</th>
                    <th className='text-center'>Impressions</th>
                    <th className='text-center'>CTR</th>
                    <th className='text-center'>Overall Position</th>
                    <th className='text-center'>Result no.</th>
                    <th className='text-center'>Page no.</th>
                    <th className='text-center'>Average Position</th>
                </thead>
                <tbody>
                {
                    agsDatas.map(
                        agsData =>
                        <tr key={agsData.id}>
                            {/* <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.id}</td> */}
                            <td className='text-center' style={{fontSize:"15px",minWidth:100, color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.date}</td>
                            <td style={{fontSize:"14.5px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.page}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.query}</td>
                            <td className='text-center' style={{fontSize:"15px",minWidth:100, color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.clicks}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.impressions}</td>
                            <td className='text-center' style={{fontSize:"15px",minWidth:100, color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.ctr}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.position}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.resultNo}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.pageNo}</td>
                            <td className='text-center' style={{fontSize:"15px", color: agsData.isSERPFalling === "False"?'black':'red'}}>{agsData.averageposition}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default AgsGscDataList2
