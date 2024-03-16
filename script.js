const listInput = document.querySelector('.addList');
const btn = document.querySelector('.add');
const list = document.querySelector(".list");

function addList(){
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    list.appendChild(newLi);
}

btn.addEventListener('click', addList);

const randomBtn = document.querySelector(".randomizer");
const header = document.querySelector(".main-title");
randomBtn = addEventListener('click', function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    header.style.color = randomColor;
})
