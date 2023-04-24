class TodoList {
	constructor() {
		this.list = [];
		this.inputElemnt = document.querySelector("#input");
		this.listElemnt = document.querySelector("#list");

		this.inputElemnt.addEventListener("keyup",(event) => {
			if (event.keyCode === 13) {
				this.addTodo();
				console.log(this.list);
			}
		});
	}
	addTodo() {
		let todoText = this.inputElemnt.value; 
		if (todoText.trim() === "") {
			return;
		}
		const newTodo = {text: todoText, completed: false}; 
		this.list.push(newTodo);
		this.inputElemnt.value = "";
		this.renderTodoList(); 
	}

	deleteTodo(i) {
		this.list.splice(i, 1);
		this.renderTodoList();
	}

	toggleCompleted(i) { 
		this.list[i].completed = !this.list[i].completed;
		this.renderTodoList();
	}

	renderTodoList() {
		this.listElemnt.innerHTML = "";
		for (let i = 0; i < this.list.length; i++) {
			const newLiElement = document.createElement("li");
			newLiElement.innerText = this.list[i].text;
			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete'; 
			deleteButton.addEventListener('click', () => {
				this.deleteTodo(i); 
			});
			newLiElement.appendChild(deleteButton);

			const completedCheckbox = document.createElement("input");
			completedCheckbox.setAttribute("type", "checkbox");
			newLiElement.appendChild(completedCheckbox);
			if (this.list[i].completed) {
				completedCheckbox.setAttribute("checked", true);
			}
			completedCheckbox.addEventListener("click", () => {
				this.toggleCompleted(i); 
			});

			this.listElemnt.appendChild(newLiElement); 
		}
	}
}

const todolist = new TodoList();
