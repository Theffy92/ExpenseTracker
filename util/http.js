import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post(
        'https://learning-project-rn-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
};

