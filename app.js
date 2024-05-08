

let todo= ()=>{

    let  todo = document.getElementById("main")

    let trimValue =todo.value.trim()

    

    console.log(trimValue)


    if(trimValue === ""){
        alert("write something")
    }
    else{
    
    let ul = document.getElementById("todo")

    // console.log(todo.value)
    let li = document.createElement("li")
    let text = document.createTextNode(trimValue)
    
    li.appendChild(text)
    let delButton = document.createElement("button")
    let delText=document.createTextNode("Delete")
    delButton.setAttribute("onClick", "delTodo()")
    delButton.appendChild(delText)
    li.appendChild(delButton)
    let editButton = document.createElement("button")
    let editText= document.createTextNode("Edit")
    editButton.appendChild(editText)
    li.appendChild(editButton)
    ul.appendChild(li)
    editButton.onclick =editTodo;
    todo.value= ""
    console.log("the function is ruuing")
    console.log(li)
    }
}

let delTodo=()=>{
    console.log(event.target.parentNode.remove())

    console.log("the function is ruuing of del")
}
let editTodo=()=>{
    let li = event.target.parentNode;
    let textNode = li.firstChild;
    let newText = prompt("Enter new text:", textNode.textContent);
    if (newText !== null) {
        textNode.textContent = newText;
    }
}