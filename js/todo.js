const addTask = document.querySelector(".task-input button")

function completeTaskEvent() {
	const completeTask = document.querySelectorAll(".tick-icon")
		completeTask.forEach( ele => {
			ele.addEventListener( "click", (e) => {
				e.target.classList.toggle("fa-solid");
				e.target.parentNode.classList.toggle("li-bg");
				e.target.parentNode.querySelector("span").classList.toggle("span-line");
				localStorage.setItem("tasklist", document.querySelector(".task-list ul").innerHTML);
			})
		});
}

function removeTaskEvent() {
	const removeTask = document.querySelectorAll(".delete-icon")
		removeTask.forEach( ele => {
			ele.addEventListener( "click", (e) => {
				e.target.parentNode.classList.toggle("del-animate");
				setTimeout( () => {
					e.target.parentNode.remove();
					localStorage.setItem("tasklist", document.querySelector(".task-list ul").innerHTML);
				} , 1000)
				// e.target.parentNode.remove()
			})
		});
}

function addTaskEvent() {
	addTask.addEventListener( "click", () => {
		if (document.querySelector("#input-task").value) {
			document.querySelector(".task-list ul").innerHTML += `
			<li>
			    <div class="border"></div>
			    <span class="task-words">${document.querySelector("#input-task").value}</span>
			    <i class="tick-icon fa-regular fa-circle-check fa-fw"></i>
			    <i class="delete-icon fa fa-trash-arrow-up"></i>
			</li>
			`
		}

		completeTaskEvent();
		removeTaskEvent();
		localStorage.setItem("tasklist", document.querySelector(".task-list ul").innerHTML);

	})
}

addTaskEvent();

document.querySelector(".task-list ul").innerHTML = localStorage.getItem("tasklist");
completeTaskEvent();
removeTaskEvent();

