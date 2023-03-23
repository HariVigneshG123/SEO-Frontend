import React,{ useState } from "react"

const SearchInputs = () => {

    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEnddate] =useState('')

    const searchInputsForm = (e) => {
        e.preventDefault();
        const formInput = {keyword, page, startDate, endDate}
        console.log(formInput);
    }

    return ( 
            <div className="container">
                <form>
                    <input type="text" placeholder="keyword" name="keyword" value={keyword} onChange = {(e) => setKeyword(e.target.value)} />      {''}
                    <input type="text" placeholder="page" name="page" value={page} onChange = {(e) => setPage(e.target.value)}/>      {''}
                    Start Date: <input type="date" name="startDate" value={startDate} onChange = {(e) => setStartDate(e.target.value)}/>      {''}
                    End Date: <input type="date" name="endDate" value={endDate} onChange = {(e) => setEnddate(e.target.value)}/>      {''}
                    <button className="btn btn-success" onClick={(e) => searchInputsForm(e)}>Search</button>
                </form>
            </div>
        )
}

export default SearchInputs