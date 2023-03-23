import axios from "axios";

const AGS_DATABSE_RESTAPI_URL = 'http://localhost:8080/getAgsforCurrentDate';

class agsDataService{

    //GET request to load data for current date. Execuetes on site loading. 
    getAllagsData(){
        return axios.get(AGS_DATABSE_RESTAPI_URL)
    }

    //GET requests to be execueted based on search inputs.
    getAgsDataBySearch(formInput){
        var URL_LINK;

        // ---------------------------------------- ONE OF THE ENTRY IS NULL -----------------------------------------------------------
        // If end date is NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page !== '') {
            console.log("URL1");
            URL_LINK = "http://localhost:8080/getEntry?keyword="+formInput.keyword+"&websiteLink="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If start date is NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page !== '') {
            console.log("URL2");
            URL_LINK = "http://localhost:8080/getEntry?keyword="+formInput.keyword+"&websiteLink="+formInput.page+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If keyword is NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page !== '') {
            console.log("URL3");
            URL_LINK = "http://localhost:8080/getAgsforWebsiteDate?&websiteLink="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        // If WebsiteLink is NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page === '') {
            console.log("URL4");
            URL_LINK = "http://localhost:8080/getAgsforKeywordDate?keyword="+formInput.keyword+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }

        // ---------------------------------------- TWO OF THE ENTRIES ARE NULL -----------------------------------------------------------
        // If keyword, startDate are NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page !== '') {
            console.log("URL5");
            URL_LINK = "http://localhost:8080/getAgsforWebsiteDate?&websiteLink="+formInput.page+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If keyword, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page !== '') {
            console.log("URL6");
            URL_LINK = "http://localhost:8080/getAgsforWebsiteDate?&websiteLink="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If websiteLink, startDate are NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page === '') {
            console.log("URL7");
            URL_LINK = "http://localhost:8080/getAgsforKeywordDate?keyword="+formInput.keyword+"&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If websiteLink, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page === '') {
            console.log("URL8");
            URL_LINK = "http://localhost:8080/getAgsforKeywordDate?keyword="+formInput.keyword+"&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If websiteLink, keyword are NULL
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page === '') {
            console.log("URL9");
            URL_LINK = "http://localhost:8080/getAgsforBetweenDates?&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        // If startDate, endDate are NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page !== '') {
            console.log("URL10");
            URL_LINK = "http://localhost:8080/getAgsforKeywordWebsite?keyword="+formInput.keyword+"&websiteLink="+formInput.page;
        }
        
        // ---------------------------------------- THREE OF THE ENTRIES ARE NULL -----------------------------------------------------------
        // If end date is NOT NULL
        if(formInput.endDate !== '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page === '') {
            console.log("URL11");
            URL_LINK = "http://localhost:8080/getAgsforBetweenDates?&startDate="+formInput.endDate+"&endDate="+formInput.endDate;
        }
        // If start date is NOT NULL
        if(formInput.endDate === '' && formInput.startDate !== '' && formInput.keyword === '' && formInput.page === '') {
            console.log("URL12");
            URL_LINK = "http://localhost:8080/getAgsforBetweenDates?&startDate="+formInput.startDate+"&endDate="+formInput.startDate;
        }
        // If keyword is NOT NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword !== '' && formInput.page === '') {
            console.log("URL13");
            URL_LINK = "http://localhost:8080/getAgsforKeyword?keyword="+formInput.keyword;
        }
        // If websiteLink is NOT NULL
        if(formInput.endDate === '' && formInput.startDate === '' && formInput.keyword === '' && formInput.page !== '') {
            console.log("URL14");
            URL_LINK = "http://localhost:8080/getAgsforWebsite?websiteLink="+formInput.page;
        }

        // ---------------------------------------- NONE OF THE ENTRIES ARE NULL -----------------------------------------------------------
        if(formInput.endDate !== '' && formInput.startDate !== '' && formInput.keyword !== '' && formInput.page !== '') {
            console.log("URL15");
            URL_LINK = "http://localhost:8080/getEntry?keyword="+formInput.keyword+"&websiteLink="+formInput.page+"&startDate="+formInput.startDate+"&endDate="+formInput.endDate;
        }
        
        return axios.get(URL_LINK);
    }
}

export default new agsDataService();