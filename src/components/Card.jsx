import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses, getIncome, getSavings } from '../actions/actions';
import AddModal from './AddModal';

function Card({ type }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const typeOfData = useSelector((state) => {
        if (type === 'income') {
            return state.income;
        } else if (type === 'expenses') {
            return state.expenses;
        } else if (type === 'savings') {
            return state.savings;
        }
        return null;
    });
    const total = typeOfData.reduce((acc, cv) => acc + cv.amount, 0);

    const [sortedData, setSortedData] = useState(typeOfData);
    const [sortByAmount, setSortByAmount] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        if (type === 'income') {
            dispatch(getIncome());
        } else if (type === 'expenses') {
            dispatch(getExpenses());
        } else if (type === 'savings') {
            dispatch(getSavings());
        }
    }, [dispatch, type]);

    useEffect(() => {
        let filteredData = typeOfData;

        if (selectedCategory !== 'All') {
            filteredData = typeOfData.filter((item) => item.category === selectedCategory);
        }

        if (sortByAmount) {
            filteredData = [...filteredData].sort((a, b) => a.amount - b.amount);
        }

        setSortedData(filteredData);
    }, [sortByAmount, selectedCategory, typeOfData]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            {loading ? (
                <div className='text-3xl my-4 font-bold fixed top-1/2 left-1/2'>Loading Data...</div>
            ) : (
                <div className='flex flex-col w-full items-center h-[100vh] overflow-auto'>
                    <h1 className='text-3xl my-4 font-bold'>
                        {type === 'income' ? <div>Income</div> : type === 'expenses' ? <div>Expenses</div> : <div>Savings</div>}
                    </h1>
                    <button onClick={() => setShowModal(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"> {type === 'income' ? <div>Add Income</div> : type === 'expenses' ? <div>Add Expense</div> : <div>Add Saving</div>}</button>
                    <div>
                        <h1 className='text-xl my-4 font-bold'>
                            {type === 'income' ? (
                                <div>Total Income: ₹ {total}</div>
                            ) : type === 'expenses' ? (
                                <div>Total Expenses: ₹ {total}</div>
                            ) : (
                                <div>Total Savings: ₹ {total}</div>
                            )}
                        </h1>
                    </div>
                    <div className='flex gap-4 items-center justify-center flex-wrap'>
                        <div className='flex w-full items-center gap-8 justify-center'>
                            <label className='flex gap-1 h-6 items-center'>
                                Sort by Amount:
                                <input type='checkbox' className='mt-1' checked={sortByAmount} onChange={() => setSortByAmount(!sortByAmount)} />
                            </label>

                            <label className='flex gap-2'>
                                Filter by Category:
                                {type === 'income' ? (
                                    <select value={selectedCategory} onChange={handleCategoryChange}>
                                        <option value='All'>All</option>
                                        <option value='Salary'>Salary</option>
                                        <option value='Business Income'>Business Income</option>
                                        <option value='Rental Income'>Rental Income</option>
                                        <option value='Investment Income'>Investment Income</option>
                                        <option value='Side Gig Income'>Side Gig Income</option>
                                    </select>
                                ) : type === 'expenses' ? (
                                    <select value={selectedCategory} onChange={handleCategoryChange}>
                                        <option value='All'>All</option>
                                        <option value='Housing Expenses'>Housing Expenses</option>
                                        <option value='Transportation Expenses'>Transportation Expenses</option>
                                        <option value='Food and Grocery Expenses'>Food and Grocery Expenses</option>
                                        <option value='Utilities and Bills'>Utilities and Bills</option>
                                        <option value='Entertainment and Leisure Expenses'>Entertainment and Leisure Expenses</option>
                                    </select>
                                ) : (
                                    <select value={selectedCategory} onChange={handleCategoryChange}>
                                        <option value='All'>All</option>
                                        <option value='Emergency Fund'>Emergency Fund</option>
                                        <option value='Retirement Savings'>Retirement Savings</option>
                                        <option value='Vacation Fund'>Vacation Fund</option>
                                        <option value='Education Fund'>Education Fund</option>
                                        <option value='Investment Portfolio'>Investment Portfolio</option>
                                    </select>
                                )}
                            </label>
                        </div>
                        {sortedData?.map((item) => {
                            const date = new Date(item.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            });
                            return (
                                <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col items-start rounded-xl w-80 text-lg'>
                                    <div className='flex w-full flex-col justify-between'>
                                        <p className='flex justify-between'>
                                            Description: <span>{item.description}</span>
                                        </p>
                                        <p className='flex justify-between'>
                                            Amount: <span>₹ {item.amount}</span>
                                        </p>
                                        <p className='flex justify-between'>
                                            Category: <span className='w-68 text-right'>{item.category}</span>
                                        </p>
                                        <p className='flex justify-between'>
                                            Date: <span>{date}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {showModal && <AddModal setShowModal={setShowModal} type={type} />}
        </div>

    );
}

export default Card;
