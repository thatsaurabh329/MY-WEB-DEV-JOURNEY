let todo=[];
let req=prompt("please enter your request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quting todo")
        break;
    }
  if(req=="list"){
        console.log("____________")
        for(task of todo){
            console.log("task");
        }
        onsole.log("____________")
    }
   else if(req=="add"){
  let task=prompt("please enter your task you wants to add")
todo.push(task);
console.log("your task added");
        }
 req=prompt("please enter your request");
    }
