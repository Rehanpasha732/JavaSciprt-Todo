var list = document.getElementById("todo-list");
var arr = [];
function AddTodo(params) {
    var input = document.getElementById("input")
    var li = `
    <li> ${input.value} 
    </li>
    `;
    arr.push(input.value);
    list.innerHTML += li;
    input.value = "";
}

function dlt(params) {
    list.innerHTML += " "
}
