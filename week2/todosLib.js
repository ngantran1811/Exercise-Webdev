let todosArray = [];
let nextId = 1;

function addOne(task, dueDate) {
    if (!task || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++,  
        task,
        dueDate,
        completed: false
    };

    todosArray.push(newTodo); 
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id); 
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false; 
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id));
        return todosArray.length < initialLength; }
    return false; }

if (require.main === module) {
    let result = addOne("Buy groceries", "2025-08-30");
    console.log(result);
    result = addOne("Complete project", "2025-09-05");
    console.log(result);

    console.log("\ngetAll called:", getAll());

    console.log("\nfindById called:", findById(1));

    console.log("\nupdateOneById called:", updateOneById(1, { completed: true, dueDate: "2025-09-10" }));
    console.log("findById called after item updated:", findById(1));

    console.log("\ndeleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}


const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;