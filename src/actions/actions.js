import axios from "axios";

export const getIncome = () => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.get("http://localhost:9000/income");
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
        const response = await axios.get("http://localhost:9000/savings");
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
        const response = await axios.get("http://localhost:9000/expenses");
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
        const response = await axios.post("http://localhost:9000/income", data);
        dispatch({ type: "ADD_INCOME", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
};
export const addExpenses = (data) => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.post("http://localhost:9000/expenses", data);
        dispatch({ type: "ADD_EXPENSES", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
}
export const addSavings = (data) => async (dispatch) => {
    try {
        dispatch({ type: "DATA_FETCH" })
        const response = await axios.post("http://localhost:9000/savings", data);
        dispatch({ type: "ADD_SAVINGS", payload: response.data });
    } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" })
        console.error(error);
    }
}

