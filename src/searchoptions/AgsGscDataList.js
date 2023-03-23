import React, { useEffect, useState } from 'react'
import agsDataService from '../services/agsDataService'
import gscDatasService from '../services/gscDatasService'

const AgsGscDataList = () => {

    //State declaration for AGS and GSC datatables
    const [agsDatas, setData] = useState([])
    const [gscDatas, setData2] = useState([])

    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEnddate] =useState('')

    useEffect(() => {
        getAllAgsData();
    },[])

    useEffect(() => {
        getAllGscData();
    },[])

    const getAllAgsData = () => {
        agsDataService.getAllagsData().then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    const getAllGscData = () => {
        gscDatasService.getAllgscData().then((response) => {
            setData2(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    const searchInputFormAgs = (e) => {
        e.preventDefault();
        const formInput = {keyword, page, startDate, endDate}
        agsDataService.getAgsDataBySearch(formInput).then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
        console.log(formInput);
    }

    const searchInputFormGsc = (e) => {
        e.preventDefault();
        const formInput = {keyword, page, startDate, endDate}
        gscDatasService.getGscDataBySearch(formInput).then((response) => {
            setData2(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
        console.log(formInput);
    }

    return (
        <>
        <div className="container">
            <form>
                <input type="text" placeholder="keyword" name="keyword" value={keyword} onChange = {(e) => setKeyword(e.target.value)} style = {{width:"320px"}}/>      {''}
                <input type="text" placeholder="page" name="page" value={page} onChange = {(e) => setPage(e.target.value)} style = {{width:"320px"}}/>      {''}
                Start Date: <input type="date" name="startDate" value={startDate} onChange = {(e) => setStartDate(e.target.value)}/>      {''}
                End Date: <input type="date" name="endDate" value={endDate} onChange = {(e) => setEnddate(e.target.value)}/>      {''}
                <button className="btn btn-success" onClick={(e) => {searchInputFormAgs(e);searchInputFormGsc(e)}}>Search</button>
            </form>
        </div>
        <div className="row">
            <div className="col-md-6">
                <p>AGS Table:</p>
                <table className="table-sm table-bordered" style={{display:"block", width:"865px",height:"670px",overflowY:"scroll"}}>
                    <thead style={{ position:"sticky"}}>
                        {/* <th className='text-center'>ID</th> */}
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Page</th>
                        <th className='text-center'>Keyword</th>
                        <th className='text-center'>Result no.</th>
                        <th className='text-center'>Page no.</th>
                    </thead>
                    <tbody>
                        {agsDatas.map(
                            agsData => <tr key={agsData.id}>
                                {/* <td className='text-center'>{agsData.id}</td> */}
                                <td className='text-center' style={{fontSize:"15px"}}>{agsData.dateTime}</td>
                                <td style={{fontSize:"15px", maxWidth:400}}>{agsData.websiteLink}</td>
                                <td className='text-center' style={{fontSize:"15px", maxWidth:200}}>{agsData.keyword}</td>
                                <td className='text-center' style={{fontSize:"15px"}}>{agsData.resultNo}</td>
                                <td className='text-center' style={{fontSize:"15px"}}>{agsData.pageNo}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <p>GSC Table:</p>
                <table className="table-sm table-bordered" style={{display:"block", width:"880px", height:"670px",overflowY:"scroll"}}>
                    <thead>
                        {/* <th className='text-center'>ID</th> */}
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Page</th>
                        <th className='text-center'>Keyword</th>
                        <th className='text-center'>Clicks</th>
                        <th className='text-center'>CTR</th>
                        <th className='text-center'>Impressions</th>
                        <th className='text-center'>Position</th>
                    </thead>
                    <tbody>
                        {gscDatas.map(
                            gscData => <tr key={gscData.id}>
                                {/* <td className='text-center'>{gscData.id}</td> */}
                                <td className='text-center' style={{fontSize:"15px",minWidth:100}}>{gscData.date}</td>
                                <td style={{fontSize:"15px", maxWidth:380}}>{gscData.page}</td>
                                <td className='text-center' style={{fontSize:"15px", maxWidth:200}}>{gscData.query}</td>
                                <td className='text-center' style={{fontSize:"15px",minWidth:50}}>{gscData.clicks}</td>
                                <td className='text-center' style={{fontSize:"15px",minWidth:50}}>{gscData.ctr}</td>
                                <td className='text-center' style={{fontSize:"15px"}}>{gscData.impressions}</td>
                                <td className='text-center' style={{fontSize:"15px"}}>{gscData.position}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default AgsGscDataList