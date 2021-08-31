import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Sound panels",
      amount: 340,
      date: new Date(2020, 8, 17),
    },
    {
      id: "e3",
      title: "Sound card",
      amount: 600,
      date: new Date(2020, 9, 25),
    },
    {
      id: "e4",
      title: "Monitor screen",
      amount: 500,
      date: new Date(2020, 10, 14),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
