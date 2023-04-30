const todoInput = document.querySelector(".todo-input");
const btnEl = document.querySelector(".btn");
const listEl = document.querySelector(".list");
const sectionEl = document.querySelector("select");


btnEl.addEventListener("click" , event => {
         event.preventDefault();
         let newDiv = document.createElement("div");
         newDiv.classList.add("todo" , "sm:w-[300px]" , "w-[150px]" , "h-[50px]" , "bg-pink-300" , "rounded-full" , "mt-5" );
         let newLi = document.createElement("li");
         newLi.innerText = todoInput.value;
         newLi.classList.add("item","pl-5" );
         newDiv.appendChild(newLi);

         const buttonEl = document.createElement("button");
         buttonEl.innerHTML = '<i class="fas fa-check-circle"></li>';
         buttonEl.classList.add("complete-btn");
         newDiv.appendChild(buttonEl);

         const trashEl = document.createElement("button");
         trashEl.innerHTML = '<i class="fas fa-trash"></li>';
         trashEl.classList.add("trash-btn");
         newDiv.appendChild(trashEl);

         listEl.appendChild(newDiv);
         
         todoInput.value = ""

         console.log(listEl);
})


listEl.addEventListener("click" ,e => {
         const items = e.target;
        //  e.preventDefault()

         if(items.classList[0] === "complete-btn") {
            const todo = items.parentElement;
            todo.classList.add("slide")
         }

         if(items.classList[0] === "trash-btn") {
             const todo1 = items.parentElement;
             todo1.classList.toggle("completed");
         }
 console.log(items);

 
})

sectionEl.addEventListener("change" , () => {
  const selectedOption = sectionEl.value;

  const todoItems = listEl.querySelectorAll(".todo");

  todoItems.forEach(item => {
    if (selectedOption === "all") {
      item.style.display = "flex";
    } else if (selectedOption === "completed" && item.classList.contains("completed")) {
      item.style.display = "flex";
    } else if (selectedOption === "incomplete" && !item.classList.contains("completed")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
})

//  document.addEventListener("DOMContentLoaded" , () => {

// })

