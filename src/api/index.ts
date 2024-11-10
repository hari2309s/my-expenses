import { MY_EXPENSES_API_BASE_URL } from '../constants';
import { Expense } from './types';

export const getExpenses = async () => {
  return await fetch(`${MY_EXPENSES_API_BASE_URL}/expenses`)
    .then(data => data.json())
    .catch(error => Promise.reject(error));
};

export const addExpense = async (expense: Partial<Expense>) => {
  return await fetch(`${MY_EXPENSES_API_BASE_URL}/expenses`, {
    method: 'POST',
    body: JSON.stringify({
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
    }),
  })
    .then(data => data.json())
    .catch(error => Promise.reject(error));
};
