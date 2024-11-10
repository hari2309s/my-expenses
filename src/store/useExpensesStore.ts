import { create } from 'zustand';
import { addExpense, getExpenses } from '../api';
import { Expense } from '../api/types';

interface ExpensesState {
  expenses: Expense[];
  loading: boolean;
  error: Error | null;
  fetchExpenses: () => Promise<void>;
  addExpense: (newExpense: Omit<Expense, 'id' | 'date'>) => Promise<void>;
}

const useExpensesStore = create<ExpensesState>(set => ({
  expenses: [],
  loading: false,
  error: null,
  fetchExpenses: async () => {
    try {
      set({ loading: true, error: null });
      const response = await getExpenses();
      set({ expenses: response, loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },
  addExpense: async (newExpense: Omit<Expense, 'id' | 'date'>) => {
    try {
      set({ loading: true, error: null });
      const response = await addExpense(newExpense);
      set(state => ({
        expenses: [...state.expenses, response],
        loading: false,
      }));
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },
}));

export default useExpensesStore;
