function addTask() {
	// Get the input values
	const taskInput = document.getElementById("taskInput");
	const taskText = taskInput.value.trim();
	const taskDateTimeInput = document.getElementById("taskDateTime");
	const taskDateTime = taskDateTimeInput.value;

	// Check if the input is not empty
	if (taskText !== "") {
		// Create a new list item
		const newTask = document.createElement("li");
		newTask.textContent = taskText;

		// Add the task completion date and time as a separate element
		const taskDateTimeElement = document.createElement("span");
		taskDateTimeElement.textContent = "Task due on: " + taskDateTime;
		newTask.appendChild(taskDateTimeElement);

		// Delete button
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete Task";
		deleteButton.addEventListener("click", () => {
			newTask.remove(); // Remove the task when the delete button is clicked
		});
		newTask.appendChild(deleteButton);

		// Add the task to the task list
		const taskList = document.getElementById("taskList");
		taskList.appendChild(newTask);

		// Create a button for marking the task as completed
		const completeButton = document.createElement("button");
		completeButton.textContent = "Completed";
		completeButton.addEventListener("click", () => {
			markTaskAsCompleted(newTask);
		});
		newTask.appendChild(completeButton);

		// Clear the input fields
		taskInput.value = "";
		taskDateTimeInput.value = "";
	}
}

// Toggle the "completed" class on the task item
function markTaskAsCompleted(taskItem) {
	taskItem.classList.toggle("completed");
}
