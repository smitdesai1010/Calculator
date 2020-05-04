var list=document.querySelector('.todo-list');

document.querySelector('#btn').addEventListener('click',addtolist);

function addtolist(){

  event.preventDefault();

  console.log("linked");
  var obj=document.createElement('div');
  obj.classList.add("list-obj");

  var value=document.createElement('li');
  value.classList.add("list-obj-value");

  var mark=document.createElement('button');
  mark.classList.add("list-obj-mark");

  var trash=document.createElement('button');
  trash.classList.add("list-obj-trash");

   obj.appendChild(value);
   obj.appendChild(mark);
   obj.appendChild(trash);

  list.appendChild(obj);

}
