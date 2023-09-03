const task_arr = localStorage.getItem("tasklist") ? JSON.parse(localStorage.getItem("tasklist")) : [];

display_list();

function addTask() {
    task_arr.push(
        {
            'task_name': document.getElementById('input_task').value,
            'due_date': document.getElementById('input_due_date').value,
            'due_time': document.getElementById('input_due_time').value
        }
    );

    localStorage.setItem("tasklist", JSON.stringify(task_arr));

    document.getElementById('input_task').value = "";
    document.getElementById('input_due_date').value = "";
    document.getElementById('input_due_time').value = "";
    display_list();
}

function display_list() {
    let todolist_html = '';
    for (let i = 0; i < task_arr.length; i++) {
        todolist_html += 
        `<div class="todolist_styles">${task_arr[i].task_name}</div>
        <div class="todolist_styles">${task_arr[i].due_date}</div>
        <div class="todolist_styles">${task_arr[i].due_time}</div>
        <button class="todolist_styles delete_task" onclick="remove_from_list(${i})">Delete</button>`;
    }

    document.getElementById('todolist').innerHTML = todolist_html;
}

function remove_from_list(index) {
    task_arr.splice(index, 1);
    display_list();
}

