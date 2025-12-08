export function temporaryData() {
    const transactions = [
        // ===== JANUARY =====
        { id: 1, date: "2025-01-03", monthAndDay: "01/03", YearAndMonth: "2025/01", type: "Income", category: "Salary", amount: 55000 },
        { id: 2, date: "2025-01-04", monthAndDay: "01/04", YearAndMonth: "2025/01", type: "Expense", category: "Groceries", amount: 2200 },
        { id: 3, date: "2025-01-05", monthAndDay: "01/05", YearAndMonth: "2025/01", type: "Income", category: "Freelance", amount: 8000 },
        { id: 4, date: "2025-01-07", monthAndDay: "01/07", YearAndMonth: "2025/01", type: "Expense", category: "Transport", amount: 300 },
        { id: 5, date: "2025-01-10", monthAndDay: "01/10", YearAndMonth: "2025/01", type: "Expense", category: "Food", amount: 1200 },
        { id: 6, date: "2025-01-12", monthAndDay: "01/12", YearAndMonth: "2025/01", type: "Income", category: "Gift", amount: 1500 },
        { id: 7, date: "2025-01-15", monthAndDay: "01/15", YearAndMonth: "2025/01", type: "Expense", category: "Shopping", amount: 4500 },
        { id: 8, date: "2025-01-20", monthAndDay: "01/20", YearAndMonth: "2025/01", type: "Income", category: "Bonus", amount: 9000 },
        { id: 9, date: "2025-01-22", monthAndDay: "01/22", YearAndMonth: "2025/01", type: "Expense", category: "Internet", amount: 1200 },
        { id: 10, date: "2025-01-27", monthAndDay: "01/27", YearAndMonth: "2025/01", type: "Expense", category: "Health", amount: 1800 },

        // ===== FEBRUARY =====
        { id: 11, date: "2025-02-01", monthAndDay: "02/01", YearAndMonth: "2025/02", type: "Income", category: "Salary", amount: 55000 },
        { id: 12, date: "2025-02-02", monthAndDay: "02/02", YearAndMonth: "2025/02", type: "Expense", category: "Groceries", amount: 2500 },
        { id: 13, date: "2025-02-05", monthAndDay: "02/05", YearAndMonth: "2025/02", type: "Income", category: "Freelance", amount: 9000 },
        { id: 14, date: "2025-02-06", monthAndDay: "02/06", YearAndMonth: "2025/02", type: "Expense", category: "Transport", amount: 280 },
        { id: 15, date: "2025-02-10", monthAndDay: "02/10", YearAndMonth: "2025/02", type: "Expense", category: "Food", amount: 1600 },
        { id: 16, date: "2025-02-13", monthAndDay: "02/13", YearAndMonth: "2025/02", type: "Expense", category: "Shopping", amount: 4200 },
        { id: 17, date: "2025-02-15", monthAndDay: "02/15", YearAndMonth: "2025/02", type: "Income", category: "Gift", amount: 2000 },
        { id: 18, date: "2025-02-20", monthAndDay: "02/20", YearAndMonth: "2025/02", type: "Expense", category: "Internet", amount: 1200 },
        { id: 19, date: "2025-02-22", monthAndDay: "02/22", YearAndMonth: "2025/02", type: "Income", category: "Bonus", amount: 7000 },
        { id: 20, date: "2025-02-27", monthAndDay: "02/27", YearAndMonth: "2025/02", type: "Expense", category: "Health", amount: 2400 },

        // ===== MARCH =====
        { id: 21, date: "2025-03-02", monthAndDay: "03/02", YearAndMonth: "2025/03", type: "Income", category: "Salary", amount: 55000 },
        { id: 22, date: "2025-03-03", monthAndDay: "03/03", YearAndMonth: "2025/03", type: "Expense", category: "Groceries", amount: 2400 },
        { id: 23, date: "2025-03-05", monthAndDay: "03/05", YearAndMonth: "2025/03", type: "Expense", category: "Shopping", amount: 3900 },
        { id: 24, date: "2025-03-06", monthAndDay: "03/06", YearAndMonth: "2025/03", type: "Income", category: "Freelance", amount: 11000 },
        { id: 25, date: "2025-03-09", monthAndDay: "03/09", YearAndMonth: "2025/03", type: "Expense", category: "Food", amount: 1500 },
        { id: 26, date: "2025-03-12", monthAndDay: "03/12", YearAndMonth: "2025/03", type: "Expense", category: "Transport", amount: 350 },
        { id: 27, date: "2025-03-15", monthAndDay: "03/15", YearAndMonth: "2025/03", type: "Income", category: "Gift", amount: 1800 },
        { id: 28, date: "2025-03-18", monthAndDay: "03/18", YearAndMonth: "2025/03", type: "Expense", category: "Internet", amount: 1200 },
        { id: 29, date: "2025-03-22", monthAndDay: "03/22", YearAndMonth: "2025/03", type: "Income", category: "Bonus", amount: 8500 },
        { id: 30, date: "2025-03-28", monthAndDay: "03/28", YearAndMonth: "2025/03", type: "Expense", category: "Health", amount: 3000 },

        // ===== APRIL =====
        { id: 31, date: "2025-04-01", monthAndDay: "04/01", YearAndMonth: "2025/04", type: "Income", category: "Salary", amount: 56000 },
        { id: 32, date: "2025-04-03", monthAndDay: "04/03", YearAndMonth: "2025/04", type: "Expense", category: "Groceries", amount: 2600 },
        { id: 33, date: "2025-04-05", monthAndDay: "04/05", YearAndMonth: "2025/04", type: "Income", category: "Freelance", amount: 9000 },
        { id: 34, date: "2025-04-07", monthAndDay: "04/07", YearAndMonth: "2025/04", type: "Expense", category: "Shopping", amount: 5500 },
        { id: 35, date: "2025-04-10", monthAndDay: "04/10", YearAndMonth: "2025/04", type: "Expense", category: "Food", amount: 1900 },
        { id: 36, date: "2025-04-14", monthAndDay: "04/14", YearAndMonth: "2025/04", type: "Income", category: "Gift", amount: 2500 },
        { id: 37, date: "2025-04-16", monthAndDay: "04/16", YearAndMonth: "2025/04", type: "Expense", category: "Transport", amount: 330 },
        { id: 38, date: "2025-04-18", monthAndDay: "04/18", YearAndMonth: "2025/04", type: "Expense", category: "Internet", amount: 1200 },
        { id: 39, date: "2025-04-23", monthAndDay: "04/23", YearAndMonth: "2025/04", type: "Income", category: "Bonus", amount: 6000 },
        { id: 40, date: "2025-04-27", monthAndDay: "04/27", YearAndMonth: "2025/04", type: "Expense", category: "Health", amount: 3200 },

        // ===== MAY =====
        { id: 41, date: "2025-05-02", monthAndDay: "05/02", YearAndMonth: "2025/05", type: "Income", category: "Salary", amount: 55000 },
        { id: 42, date: "2025-05-04", monthAndDay: "05/04", YearAndMonth: "2025/05", type: "Expense", category: "Food", amount: 1500 },
        { id: 43, date: "2025-05-06", monthAndDay: "05/06", YearAndMonth: "2025/05", type: "Expense", category: "Groceries", amount: 2700 },
        { id: 44, date: "2025-05-09", monthAndDay: "05/09", YearAndMonth: "2025/05", type: "Income", category: "Freelance", amount: 10000 },
        { id: 45, date: "2025-05-12", monthAndDay: "05/12", YearAndMonth: "2025/05", type: "Expense", category: "Shopping", amount: 3400 },
        { id: 46, date: "2025-05-15", monthAndDay: "05/15", YearAndMonth: "2025/05", type: "Income", category: "Bonus", amount: 8500 },
        { id: 47, date: "2025-05-18", monthAndDay: "05/18", YearAndMonth: "2025/05", type: "Expense", category: "Transport", amount: 350 },
        { id: 48, date: "2025-05-21", monthAndDay: "05/21", YearAndMonth: "2025/05", type: "Expense", category: "Internet", amount: 1200 },
        { id: 49, date: "2025-05-25", monthAndDay: "05/25", YearAndMonth: "2025/05", type: "Income", category: "Gift", amount: 1800 },
        { id: 50, date: "2025-05-28", monthAndDay: "05/28", YearAndMonth: "2025/05", type: "Expense", category: "Health", amount: 3100 },

        // ===== JUNE =====
        { id: 51, date: "2025-06-01", monthAndDay: "06/01", YearAndMonth: "2025/06", type: "Income", category: "Salary", amount: 55000 },
        { id: 52, date: "2025-06-03", monthAndDay: "06/03", YearAndMonth: "2025/06", type: "Expense", category: "Groceries", amount: 2600 },
        { id: 53, date: "2025-06-05", monthAndDay: "06/05", YearAndMonth: "2025/06", type: "Income", category: "Freelance", amount: 9000 },
        { id: 54, date: "2025-06-07", monthAndDay: "06/07", YearAndMonth: "2025/06", type: "Expense", category: "Shopping", amount: 4200 },
        { id: 55, date: "2025-06-10", monthAndDay: "06/10", YearAndMonth: "2025/06", type: "Expense", category: "Food", amount: 1600 },
        { id: 56, date: "2025-06-13", monthAndDay: "06/13", YearAndMonth: "2025/06", type: "Income", category: "Bonus", amount: 7000 },
        { id: 57, date: "2025-06-16", monthAndDay: "06/16", YearAndMonth: "2025/06", type: "Expense", category: "Transport", amount: 300 },
        { id: 58, date: "2025-06-18", monthAndDay: "06/18", YearAndMonth: "2025/06", type: "Expense", category: "Internet", amount: 1200 },
        { id: 59, date: "2025-06-22", monthAndDay: "06/22", YearAndMonth: "2025/06", type: "Income", category: "Gift", amount: 2000 },
        { id: 60, date: "2025-06-26", monthAndDay: "06/26", YearAndMonth: "2025/06", type: "Expense", category: "Health", amount: 2900 },
    ]
    return transactions
}