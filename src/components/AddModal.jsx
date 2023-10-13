import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpenses, addIncome, addSavings } from '../actions/actions';

function AddModal({ setShowModal, type }) {
    const [newData, setNewData] = useState({
        description: "",
        amount: 0,
        category: ""
    })
    const dispatch = useDispatch();
    const handleAdd=()=>{
        if(newData.description!=="" && newData.amount!==0&& newData.category!==""&&newData.category!=="All")
        {
        if (type === 'income') {
            dispatch(addIncome(newData));
        } 
        else if (type === 'expenses') {
            dispatch(addExpenses(newData));
        } else if (type === 'savings') {
            dispatch(addSavings(newData));
        }
        setShowModal(false)
    }
    else alert("Please Fill All The Fields")

    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-[rgba(255,255,255,1)] p-4 rounded-xl w-[35%]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl self-start px-4 my-4 font-bold text-black">
                            {type === 'income' ? <div>Add Income</div> : type === 'expenses' ? <div>Add Expense</div> : <div>Add Saving</div>}
                        </h1>
                        <button
                            className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-1 px-2 border-2 border-[#00CED1] rounded-sm whitespace-nowrap"
                            onClick={() => setShowModal(false)}
                        >
                            X
                        </button>

                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex gap-4 m-2 w-8/12 justify-between">
                            Description
                            <input
                                className="border-2 border-black rounded-md px-2 py-1"
                                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                            ></input>
                        </label>
                        <label className="flex gap-4 m-2 w-8/12 justify-between">
                            Amount
                            <input
                                className="border-2 border-black rounded-md px-2 py-1" type='number'
                                onChange={(e) => setNewData({ ...newData, amount: e.target.value })}
                            ></input>
                        </label>

                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Category
                            {type === 'income' ? (
                                <select className="border-2 border-black rounded-md px-2 py-1" onChange={(e) => setNewData({ ...newData, category: e.target.value })}>
                                    <option value='All'>All</option>
                                    <option value='Salary'>Salary</option>
                                    <option value='Business Income'>Business Income</option>
                                    <option value='Rental Income'>Rental Income</option>
                                    <option value='Investment Income'>Investment Income</option>
                                    <option value='Side Gig Income'>Side Gig Income</option>
                                </select>
                            ) : type === 'expenses' ? (
                                <select className="border-2 border-black rounded-md px-2 py-1" onChange={(e) => setNewData({ ...newData, category: e.target.value })}>
                                    <option value='All'>All</option>
                                    <option value='Housing Expenses'>Housing Expenses</option>
                                    <option value='Transportation Expenses'>Transportation Expenses</option>
                                    <option value='Food and Grocery Expenses'>Food and Grocery Expenses</option>
                                    <option value='Utilities and Bills'>Utilities and Bills</option>
                                    <option value='Entertainment and Leisure Expenses'>Entertainment and Leisure Expenses</option>
                                </select>
                            ) : (
                                <select className="border-2 border-black rounded-md px-2 py-1" onChange={(e) => setNewData({ ...newData, category: e.target.value })}>
                                    <option value='All'>All</option>
                                    <option value='Emergency Fund'>Emergency Fund</option>
                                    <option value='Retirement Savings'>Retirement Savings</option>
                                    <option value='Vacation Fund'>Vacation Fund</option>
                                    <option value='Education Fund'>Education Fund</option>
                                    <option value='Investment Portfolio'>Investment Portfolio</option>
                                </select>
                            )}
                        </label>
                        <button
                        className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                        onClick={() => handleAdd()}
                    >
                        {type === 'income' ? <div>Add Income</div> : type === 'expenses' ? <div>Add Expense</div> : <div>Add Saving</div>}
                    </button>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default AddModal