import React, { useState, useEffect } from "react";
import Edit from "./Edit";

import "./List.css";
const List = ({ data, GetTodos }) => {
  async function handleDelete(id) {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Desciption</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <Edit todo={todo} GetTodos={GetTodos} />
              </td>
              <td>
                <button
                  class="btn btnlist"
                  onClick={() => handleDelete(todo.todo_id)}
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
