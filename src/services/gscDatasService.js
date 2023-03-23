import axios from "axios";

const GSC_DATABSE_RESTAPI_URL = 'http://localhost:8090/getGscforCurrentDate';

class gscDataService{

    //GET request to load data for latest available date. Execuetes on site loading. 
    getAllgscData(){
        return axios.get(GSC_DATABSE_RESTAPI_URL)
    }

    //GET requests to be execueted based on search inputs.
    getGscDataBySearch(formInput){
        var URL_LINK;

        // ---------------------------------------- ONE OF THE ENTRY IS NULL ----------------------------------------------------------------
        // If end date is NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page !== ''){
            console.log("URL1");
            URL_LINK = "http://localhost:8090/getGscEntry?query="+formInput.keyword+"&page="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If start date is NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page !== ''){
            console.log("URL2");
            URL_LINK = "http://localhost:8090/getGscEntry?query="+formInput.keyword+"&page="+formInput.page+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If query is NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page !== ''){
            console.log("URL3");
            URL_LINK = "http://localhost:8090/getGscforPageDate?page="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        // If page is NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page === ''){
            console.log("URL4");
            URL_LINK = "http://localhost:8090/getGscforQueryDate?query="+formInput.keyword+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }

        // ---------------------------------------- TWO OF THE ENTRIES ARE NULL -------------------------------------------------------------
        // If keyword, startDate are NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page !== ''){
            console.log("URL5");
            URL_LINK = "http://localhost:8090/getGscforPageDate?page="+formInput.page+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If keyword, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page !== ''){
            console.log("URL6");
            URL_LINK = "http://localhost:8090/getGscforPageDate?page="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }        
        // If websiteLink, startDate are NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page === ''){
            console.log("URL7");
            URL_LINK = "http://localhost:8090/getGscforQueryDate?query="+formInput.keyword+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If websiteLink, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page === ''){
            console.log("URL8");
            URL_LINK = "http://localhost:8090/getGscforQueryDate?query="+formInput.keyword+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If websiteLink, keyword are NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page === ''){
            console.log("URL9");
            URL_LINK = "http://localhost:8090/getGscBetweenDates?startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        // If startDate, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page !== ''){
            console.log("URL10");
            URL_LINK = "http://localhost:8090/getGscforQueryPage?query="+formInput.keyword+"&page="+formInput.page;
        }

        // ---------------------------------------- THREE OF THE ENTRIES ARE NULL -----------------------------------------------------------
        // If end date is NOT NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page === ''){
            console.log("URL11");
            URL_LINK = "http://localhost:8090/getGscBetweenDates?startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If start date is NOT NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page === ''){
            console.log("URL12");
            URL_LINK = "http://localhost:8090/getGscBetweenDates?startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If query is NOT NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page === ''){
            console.log("URL13");
            URL_LINK = "http://localhost:8090/getByQuery?query="+formInput.keyword; 
        }
        // If page is NOT NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page !== ''){
            console.log("URL14");
            URL_LINK = "http://localhost:8090/getByPage?page="+formInput.page;
        }

        // ---------------------------------------- NONE OF THE ENTRIES ARE NULL ------------------------------------------------------------
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page !== ''){
            console.log("URL15");
            URL_LINK = "http://localhost:8090/getGscEntry?query="+formInput.keyword+"&page="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        
        console.log(URL_LINK);
        return axios.get(URL_LINK);
    }
}

export default new gscDataService();