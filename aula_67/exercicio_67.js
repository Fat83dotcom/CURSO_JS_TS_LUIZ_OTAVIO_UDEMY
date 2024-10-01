function task() {
    const inputTask = document.querySelector('#input-task');
    const btnTask = document.querySelector('#input-btn');
    const listTask = document.querySelector('#list-task');

    window.onload = () => {
        let storageItems = localStorage;
        storageItems = JSON.parse(storageItems.tasks);
    
        for (const task of storageItems) {
            createTask(task);
            clearInput();
        }
    }

    inputTask.addEventListener('keypress', (e) =>{
        if (e.keyCode === 13) {
            inputChecker();
        }
    })

    btnTask.addEventListener('click', (e) => {
        inputChecker();
    })

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('delete')) {
            el.parentElement.remove();
            saveTasks();
        }
    })

    function createElementLi() {
        return document.createElement('li');
    }

    function createDeleteBtn(li) {
        li.innerText += ' - ';
        const delBtn = document.createElement('button');
        delBtn.innerText = 'Deletar Tarefa';
        delBtn.setAttribute('class', 'delete');
        delBtn.setAttribute('title', 'Remova a tarefa.')
        li.appendChild(delBtn);
    }

    function clearInput() {
        inputTask.value = '';
        inputTask.focus();
    }

    function createTask(inputText) {
        const li = createElementLi();
        li.innerText = inputText;
        listTask.appendChild(li);
        createDeleteBtn(li);
        saveTasks();
    }

    function inputChecker() {
        if (!inputTask.value) return;
        createTask(inputTask.value);
        clearInput();
    }

    function saveTasks() {
        const arrTasks = [];
        const liTasks = listTask.querySelectorAll('li');

        for (const task of liTasks) {
            let taskText = task.innerText;
            taskText = taskText.replace('- Deletar Tarefa', '').trim();
            arrTasks.push(taskText);
        }

        const taskJSON = JSON.stringify(arrTasks);
        localStorage.setItem('tasks', taskJSON);
    }
}

task();