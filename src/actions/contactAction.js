import axios from 'axios';

const API = {
	BASE_URL: "http://localhost:8081/contact_view-1",
	GET_ALL_CONTACTS_URL: "/contact/all"
}

const fetchAllContactsError = () => ({
	type: 'FETCH_ALL_CONTACTS_ERROR',
	allContacts: {}
});

const fetchAllContactsSuccess = (allContacts) => ({
	type: 'FETCH_ALL_CONTACTS_SUCCESS',
	allContacts
});

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