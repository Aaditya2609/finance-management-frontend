import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Reports() {
    const income = useSelector((state) => state.income);
    const expenses = useSelector((state) => state.expenses);
    const savings = useSelector((state) => state.savings);

    const [reportType, setReportType] = useState('Income vs. Expenses');
    const [reportData, setReportData] = useState(null);

    const generateReport = () => {
        if (reportType === 'Income vs. Expenses') {
            const totalIncome = income.reduce((total, item) => total + item.amount, 0);
            const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);
            const totalSavings = savings.reduce((total, item) => total + item.amount, 0);

            setReportData({
                type: 'Income vs. Expenses',
                totalIncome,
                totalExpenses,
                totalSavings,
            });
        } else if (reportType === 'Expense Breakdown') {
            const expenseCategories = {};
            expenses.forEach((expense) => {
                if (!expenseCategories[expense.category]) {
                    expenseCategories[expense.category] = 0;
                }
                expenseCategories[expense.category] += expense.amount;
            });

            setReportData({
                type: 'Expense Breakdown',
                breakdown: expenseCategories,
            });
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl my-4 font-bold'>Reports</h1>
            <div className='font-bold text-xl'>
                <label>Select Report Type:</label>
                <select className="border-2 border-black rounded-md mx-4 px-2 py-1" value={reportType} onChange={(e) => setReportType(e.target.value)}>
                    <option value="Income vs. Expenses">Income vs. Expenses</option>
                    <option value="Expense Breakdown">Expense Breakdown</option>
                </select>
            </div>
            <button className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap" onClick={generateReport}>Generate Report</button>

            {reportData && (
                <div className='flex flex-col items-center border-2 p-4 rounded-xl border-[#00CED1]'>
                    <h2 className='text-2xl font-bold'>Report: {reportData.type}</h2>
                    {reportData.type === 'Income vs. Expenses' && (
                        <div className='w-60 text-xl font-semibold'>
                            <p className='flex justify-between'>Total Income: <span>₹ {reportData.totalIncome}</span></p>
                            <p className='flex justify-between'>Total Expenses: <span>₹ {reportData.totalExpenses}</span></p>
                            <p className='flex justify-between'>Savings: <span>₹ {reportData.totalSavings}</span></p>
                        </div>
                    )}

                    {reportData.type === 'Expense Breakdown' && (
                        <div className='flex flex-col items-center border-2 p-4 rounded-xl border-[#00CED1]'>
                            <h3 className='text-2xl font-bold' >Expense Breakdown by Category:</h3>
                            <ul>
                                {Object.entries(reportData.breakdown).map(([category, amount]) => (
                                    <li key={category} className='w-[25rem] text-lg font-semibold'>
                                        <p className='flex justify-between'>{category}: <span>₹ {amount}</span></p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Reports;
