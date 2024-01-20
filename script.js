const inputBox= document.getElementById("input-box");
const listConatiner= document.getElementById("list-conatiner");

function addTask(){
    if(inputBox.value ===''){
        alert ("You must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listConatiner.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
};

function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML);
}
function showTask(){
    listConatiner.innerHTML=localStorage.getItem("data");
}
showTask();


