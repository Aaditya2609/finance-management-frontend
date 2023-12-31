import axios from "axios";

export const getIncome = () => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.get("https://finance-management-lvbb.onrender.com/income");
        if (response.status === 200)
            dispatch({ type: "FETCH_INCOME", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
};

export const getSavings = () => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.get("https://finance-management-lvbb.onrender.com/savings");
        if (response.status === 200)
            dispatch({ type: "FETCH_SAVINGS", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
};

export const getExpenses = () => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.get("https://finance-management-lvbb.onrender.com/expenses");
        if (response.status === 200)
            dispatch({ type: "FETCH_EXPENSES", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
};
export const addIncome = (data) => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.post("https://finance-management-lvbb.onrender.com/income", data);
        dispatch({ type: "ADD_INCOME", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
};
export const addExpenses = (data) => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.post("https://finance-management-lvbb.onrender.com/expenses", data);
        dispatch({ type: "ADD_EXPENSES", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
}
export const addSavings = (data) => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.post("https://finance-management-lvbb.onrender.com/savings", data);
        dispatch({ type: "ADD_SAVINGS", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
}

