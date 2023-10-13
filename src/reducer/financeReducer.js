const initialState = {
    income: [],
    expenses: [],
    savings: [],
    loading: false
  };
  
  const financeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_INCOME":
        return {
          ...state,
          income: action.payload,
          loading: false,
        };
      case "FETCH_EXPENSES":
        return {
          ...state,
          expenses: action.payload,
          loading: false,
        };
      case "FETCH_SAVINGS":
        return {
          ...state,
          savings: action.payload,
          loading: false,
        };

      case "ADD_INCOME":
          return {
            ...state,
            income: [...state.income, action.payload],
            loading: false,
          };
          case "ADD_EXPENSES":
          return {
            ...state,
            expenses: [...state.expenses, action.payload],
            loading: false,
          };
          case "ADD_SAVINGS":
          return {
            ...state,
            savings: [...state.savings, action.payload],
            loading: false,
          };
          case "DATA_FETCH":
            return{...state,loading:true}
        case "DATA_FETCH_FAILURE":
            return{...state,loading:false}
        
      default:
        return state;
    }
  };
  
  export default financeReducer;
  