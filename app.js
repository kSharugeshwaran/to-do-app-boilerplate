//input tag
var inputText = document.getElementById("input")

//add button tag
var subBtn = document.getElementById("button")

//to do list
var todoListTag = document.getElementById("todolist")

//& array to store all todo elements,intiall
var todoArr = []

subBtn.addEventListener("click",addItemToArray)

//if input is on focus and when enter is clicked additemtoarray should be called to add element to array 
inputText.addEventListener("keypress",(event)=>{
    if (event.key=="Enter"){
        addItemToArray()
        
    }
})

function addItemToArray(){
    //push the value to array
    if (inputText.value!=""){
    todoArr.push(inputText.value)
    }//reset the value to empty string
    inputText.value=""
    
    display()
}

function display(){
    //clear out the previous old ones everytime we add one item to array and display it 
    todoListTag.innerHTML="";
    todoArr.map((curr,i)=>{
        var listItem = `<li id="item ${i}">
        <div>${curr}</div>
        
      <div>
      <span onclick="deleteItem(${i})">&times;</span>
        <span>|</span>
        <span onclick="addItem(${i})">Edit</span>
      </div>
    
    </li>`

        todoListTag.innerHTML += listItem;

    });
}

function deleteItem(i){
    todoArr.splice(i,1);
    display();
}

function addItem(i){
   var newValue = prompt("Pls Edit")
   todoArr.splice(i,1,newValue);
   display()
}
 document.getElementById("reset").addEventListener
 ("click",()=>{
    todoArr=[]
    display()
 })