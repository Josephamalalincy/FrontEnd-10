var todos = ["buy new turtle"];

var input = prompt("what would you like you do");

while(input !== "quit"){ 
	//handle input
	if (input == "list") {
		console.log("**********")
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********")
} else if(input === "new") {
	//ask for new todo
	var newTodo = prompt("enter new todo");
	//add to todos array
	todos.push(newTodo);
} else if(input ===  "delete") {
	// ask for index of todo be deleted
	var index = prompt("enter thee index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index,1);
}
//ask again for new input
input = prompt("what would you like you do")

}
console.log("ok, you quit the app");