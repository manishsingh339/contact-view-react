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
    case 'USAGES_REPORT_BY_MONTH_SUCCESS':
      return {
        ...state,
        monthlyCallReport: action.list
      }
    case 'USAGES_REPORT_BY_MONTH_ERROR': 
      return {
        ...state,
        monthlyCallReport: null
      }
    case 'ALL_USAGES_BY_MONTH_SUCCESS': 
      return {
        ...state,
        monthlyAllCallReport: action.list
      }
    case 'ALL_USAGES_BY_MONTH_ERROR': 
      return {
        ...state,
        monthlyAllCallReport: null
      }
    default:
      return state
  }
}

export default contacts;