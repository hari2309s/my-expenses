import AddExpenseForm from './AddExpenseForm';
import AddIncomeForm from './AddIncomeForm';

const Dashboard = () => {
  return (
    <div className="container mx-auto flex h-[75vh] min-w-[80vw] justify-between rounded-md bg-floralwhite p-8 text-dimgray">
      <AddExpenseForm />
      <AddIncomeForm />
    </div>
  );
};

export default Dashboard;
