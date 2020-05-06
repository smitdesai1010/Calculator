var list=document.querySelector('.todo-list');
document.querySelector('#btn').addEventListener('click',addtolist);


function addtolist(){

  event.preventDefault();

  const obj=document.createElement('div');
  obj.classList.add('list-obj');

  const value=document.createElement('li');
  value.classList.add('list-obj-value');
  value.innerText=getvalue();

  const mark=document.createElement('button');
  mark.innerHTML='<i class="fas fa-check-square"></i>';
  mark.classList.add('list-obj-mark');
  mark.setAttribute('onclick' ,'checked(this.previousSibling)');

  const trash=document.createElement('button');
  trash.innerHTML='<i class="fas fa-trash"></i>';
  trash.classList.add('list-obj-trash');
  trash.setAttribute('onclick' ,'trash(this.parentNode)');

   obj.appendChild(value);
   obj.appendChild(mark);
   obj.appendChild(trash);

  list.appendChild(obj);
}

function getvalue(){

  var value=document.querySelector('#input-value').value;
  document.querySelector('#input-value').value='';

  return value;
}


function checked(doc){
  console.log(doc);
  doc.classList.toggle('checked');
}



function trash(element){
  console.log(element);
  element.classList.toggle('delete-animation');

  //Stopped Event bubbling by event capturing 'transitionend' on parent element
  //set 'transitionend' to not to propgate upwards on parentNode. Then used
  //event capturing on that so to pass that feature on all childNodes
  //otherwise it was event bubbling was taking place.
  element.addEventListener('transitionend',()=>{ event.stopPropagation(); },true);

  element.addEventListener('transitionend',()=>{
    element.remove();
  });

}
