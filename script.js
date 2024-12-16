document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterBtns = document.querySelectorAll('.filter-btn');

    loadTasks();

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterTasks(btn.id);
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
        });
    });

    // function addTask(taskText) {
    //     const li = document.createElement('li');
    //     const span = document.createElement('span');
    //     span.textContent = taskText;
    //     span.addEventListener('click', () => {
    //         li.classList.toggle('completed');
    //         saveTasks();
    //     });

    //     const deleteBtn = document.createElement('button');
    //     deleteBtn.textContent = 'Удалить';
    //     deleteBtn.addEventListener('click', () => {
    //         taskList.removeChild(li);
    //         saveTasks();
    //     });

    //     li.appendChild(span);
    //     li.appendChild(deleteBtn);
    //     taskList.appendChild(li);
    // }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed));
    }

    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            switch (filter) {
                case 'filterAll':
                    task.style.display = 'flex';
                    break;
                case 'filterCompleted':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                case 'filterUncompleted':
                    task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                    break;
            }
        });
    }

    function addTask(taskText, completed = false) {
        const li = document.createElement('li');
        if (completed) {
            li.classList.add('completed');
        }
        const span = document.createElement('span');
        span.textContent = taskText;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
