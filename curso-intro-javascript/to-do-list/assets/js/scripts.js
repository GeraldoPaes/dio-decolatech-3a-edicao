var list = document.getElementById('to-do-list')

function addToDo(todo) {
    if (todo.value == '') return

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(todo.value));

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var item = document.createElement('li');
    item.classList.add('to-do');
    item.appendChild(checkbox);
    item.appendChild(label);

    list.appendChild(item);
    todo.value = '';
}