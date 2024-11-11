import React from 'react';
import Card from './Card';
import AddExpenseIcon from '../assets/add-expense.png';
import AddIncomeIcon from '../assets/add-income.png';

const Dashboard = () => {
  return (
    <div className="container mx-auto h-[80vh] rounded-md bg-floralwhite p-8 text-dimgray">
      <div className="container flex">
        <Card title="Add expense" icon={AddExpenseIcon} />
        <Card title="Add income" icon={AddIncomeIcon} />
      </div>
    </div>
  );
};

export default Dashboard;
