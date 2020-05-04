var list=document.querySelector('.todo-list');

document.querySelector('#btn').addEventListener('click',addtolist);

function addtolist(){

  event.preventDefault();

  const obj=document.createElement('div');
  obj.classList.add("list-obj");

  const value=document.createElement('li');
  value.classList.add("list-obj-value");

  const mark=document.createElement('button');
  mark.innerHTML='<i class="fas fa-check-square"></i>';
  mark.classList.add("list-obj-mark");

  const trash=document.createElement('button');
  trash.innerHTML='<i class="fas fa-trash"></i>';
  trash.classList.add("list-obj-trash");

   obj.appendChild(value);
   obj.appendChild(mark);
   obj.appendChild(trash);

  list.appendChild(obj);

}
