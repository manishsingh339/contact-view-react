const contacts = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CONTACTS_SUCCESS':
      return {
        ...state,
        allContacts: action.allContacts
      };
    case 'FETCH_ALL_CONTACTS_ERROR':
      return {
        ...state,
        allContacts: {}
      }
    default:
      return state
  }
}

export default contacts;