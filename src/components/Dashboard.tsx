import Card from './Card';
import AddExpenseIcon from '../assets/add-expense.png';
import AddIncomeIcon from '../assets/add-income.png';
import Form from './Form';

const Dashboard = () => {
  return (
    <div className="container mx-auto flex h-[75vh] rounded-md bg-floralwhite p-8 text-dimgray">
      <div className="container flex">
        <Card title="Add expense" icon={AddExpenseIcon} />
        <Card title="Add income" icon={AddIncomeIcon} />
      </div>
      <Form />
    </div>
  );
};

export default Dashboard;
