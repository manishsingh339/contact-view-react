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
    case 'CALL_BY_NUMBER_SUCCESS': 
      return {
        ...state,
        userCalls: action.list
      }
    case 'CALL_BY_NUMBER_ERROR': {
      return {
        ...state,
        userCalls: null
      }
    }
    default:
      return state
  }
}

export default contacts;