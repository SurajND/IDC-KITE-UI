function validTodo(todo) {
    return typeof todo.title == 'string' &&
            todo.title.trim() != '' &&
            typeof todo.priority != 'undefined' &&
            !isNaN(Number(todo.priority));
}
  
function validId(id) {
    return !isNaN(id);
}

function validlogin(login) {
  return true;
}
  
module.exports = {
    validTodo,
    validId,
    validlogin
};