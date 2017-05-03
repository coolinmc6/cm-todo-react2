// Generate a random ID for each
export const generateID = () => Math.floor(Math.random()*1000000);

export const findByID = (id, list) => list.find(item => item.ID === id)
// const todoIndex = list.findIndex((item) => item.id === id);

export const toggleTodo = (todo) => ({...todo, complete: !todo.complete})