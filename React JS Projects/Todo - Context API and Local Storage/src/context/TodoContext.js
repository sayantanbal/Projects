import { createContext, useContext } from "react";
// we structure our context like this - 1.  what we expect properties to have 2. what functionality we're adding to it 3. now here in this file we're not defing the functionality but we're defining the structure of the context, so we add the functionality where we're using the context. such as App.jsx
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
