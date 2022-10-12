export const GetTodos = async (setData) => {
  try {
    const response = await fetch("http://localhost:5000/todos/").then((res) =>
      res.json().then((json) => setData(json))
    );
  } catch (error) {
    console.error(error.message);
  }
};
