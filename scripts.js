document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksContainer = document.getElementById('tasks-container');
    const motivationalImage = document.getElementById('motivational-image');

    // Define array of motivational images
    const motivationalImages = [
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe',
        'https://images.unsplash.com/photo-1494173853739-c21f58b16055',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
    ];

    // Function to display a random motivational image
    function displayRandomImage() {
        const randomIndex = Math.floor(Math.random() * motivationalImages.length);
        motivationalImage.src = motivationalImages[randomIndex];
    }

    // Display a random motivational image
    displayRandomImage();

    // Function to add a new task
    function addTask(text) {
        // Create a new div for the task
        const task = document.createElement('div');
        task.classList.add('task');

        // Create a new span for the task text
        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = text;

        // Create a new button for deleting the task
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        // Add the task text and delete button to the task div
        task.appendChild(taskText);
        task.appendChild(deleteButton);

        // Add the task div to the tasks container
        tasksContainer.appendChild(task);

        // Log the added task to the console
        console.log('Added task:', text);
    }

    // Add event listener to add task button
    addTaskButton.addEventListener('click', () => {
        // Get the text of the new task input
        const taskText = newTaskInput.value.trim();

        // Only add the task if there is text in the input
        if (taskText !== '') {
            // Call the addTask function to add the new task
            addTask(taskText);

            // Clear the input field
            newTaskInput.value = '';
        }
    });

    // Add event listener to tasks container
    tasksContainer.addEventListener('click', (e) => {
        // If the clicked element has class delete-btn
        if (e.target.classList.contains('delete-btn')) {
            // Remove the parent element (the task) from the DOM
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('task-text')) {
            // If the clicked element is the task text
            // Toggle the complete class on the text
            e.target.classList.toggle('complete');
        }
    });
});
