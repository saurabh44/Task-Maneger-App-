const addTask = document.querySelectorAll(".addTask");
const statuses = document.querySelectorAll(".status");
let draggable = null;



addTask.forEach((todo)=>{
    todo.addEventListener("dragstart",dragstart);
    todo.addEventListener("dragend",dragend);
});

function dragstart(){
    draggable = this
    setTimeout(()=>{
        this.style.display ='none';
    },0)
    // console.log('dragstart');
}
function dragend(){
    draggable = null
  setTimeout(() => {
    this.style.display = 'block'
  }, 0)
    // console.log('dragend');
};

statuses.forEach(status => {
    status.addEventListener('dragover',dragOver)
    status.addEventListener('dragenter',dragEnter)
    status.addEventListener('dragleave',dragLeave)
    status.addEventListener('drop',dragDrop)
})

function dragOver(e){
    e.preventDefault()
    // console.log('dragOver')
}

function dragEnter(){
    console.log('dragEnter')
}

function dragLeave() {
    this.style.border = 'none';
    console.log('dropLeave')
}
function dragDrop(){
    this.style.border = 'none';
    this.appendChild(draggable)
    console.log('dropped')
}

/* Button function */

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.targetModal).classList.add("active");
      overlay.classList.add("active");
    });
  });
  
  close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
    });
  });
  
  window.onclick = (event) => {
    if (event.target == overlay) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => modal.classList.remove("active"));
      overlay.classList.remove("active");
    }
  };




/* create todo  */
const todo_submit =document.getElementById("todo_submit");

todo_submit.addEventListener("click",createTodo);


function createTodo (){
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_app").value.trim();
    
    if (input_val === "") {
      alert("Please enter a task.");
      return;
    }


    // if (input_val === "") return;
  
    const p = document.createElement("p");
    p.classList.add("drag");
    p.innerText = input_val;
  
    const hr = document.createElement("hr");
    hr.classList.add("hr-line");
    todo_div.append(hr, p);
  
    todo_div.classList.add("todo");
    todo_div.classList.add("addtask");
    todo_div.setAttribute("draggable", "true");

    first_h();

    const Icon = document.createElement('i');
    Icon.classList.add('fa-regular');
    Icon.classList.add('fa-circle');



    /* create span */
  const span = document.createElement("span"); 
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.append(Icon,span);

  const no_status = document.querySelector("#no_status");
  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.remove();
  });

  todo_div.addEventListener("dragstart", dragstart);
  todo_div.addEventListener("dragend", dragend);

  todo_form = document.getElementById("todo_app").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");

}
const todo_input = document.getElementById("todo_app");
todo_input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    createTodo();
  }
});

/* Start program */

function first_h(){
    let container = document.getElementById("todo_app");
    console.log(container);

    container.classList.add("visible");
}
function clicked(){
    let container = document.getElementById("todo_app");
    container.classList.remove("visible");
}