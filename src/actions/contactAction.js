import axios from 'axios';

const API = {
	BASE_URL: "http://localhost:8081/contact_view-1",
	GET_ALL_CONTACTS_URL: "/contact/all",
	CALL_BY_NUMBER: "/contact/usagesByNumber",
	USAGES_REPORT_BY_MONTH: "/contact/usagesReportByMonth",
	ALL_USAGES_BY_MONTH: "/contact/usagesByMonth",	
}

export const getAllContacts = () => {
	return (dispatch) => {
		//console.log("ENTER");
		const promise = axios.get(API.BASE_URL + API.GET_ALL_CONTACTS_URL);
		return promise.then(response => {
			dispatch({
				type: 'FETCH_ALL_CONTACTS_SUCCESS',
				allContacts: response.data
			});
		}).catch(error => {
			dispatch({
				type: 'FETCH_ALL_CONTACTS_ERROR',
				allContacts: {}
			});
		})
	}
};

export const getAllCallsByNumber = (number) => {
	return (dispatch) => {
		let url = API.BASE_URL + API.CALL_BY_NUMBER+`?number=${number}`;
		const promise = axios.get(url);
		return promise.then(response => {
			dispatch({
				type: 'CALL_BY_NUMBER_SUCCESS',				
				list: response.data
			});
		}).catch(error => {
			dispatch({
				type: 'CALL_BY_NUMBER_ERROR',
				list: null
			});
		})
	}
};

export const getMonthlyCallReport = (month) => {
	return (dispatch) => {
		//console.log("ENTER");
		let url = API.BASE_URL + API.USAGES_REPORT_BY_MONTH+`?month=${month}`;
		const promise = axios.get(url);
		return promise.then(response => {
			dispatch({
				type: 'USAGES_REPORT_BY_MONTH_SUCCESS',				
				list: response.data
			});
		}).catch(error => {
			dispatch({
				type: 'USAGES_REPORT_BY_MONTH_ERROR',
				list: null
			});
		})
	}
}

export const getAllMonthlyUsages = (month) => {
	return (dispatch) => {
		let url = API.BASE_URL + API.ALL_USAGES_BY_MONTH+`?month=${month}`;
		const promise = axios.get(url);
		return promise.then(response => {
			dispatch({
				type: 'ALL_USAGES_BY_MONTH_SUCCESS',				
				list: response.data
			});
		}).catch(error => {
			dispatch({
				type: 'ALL_USAGES_BY_MONTH_ERROR',
				list: null
			});
		})
	}
}
