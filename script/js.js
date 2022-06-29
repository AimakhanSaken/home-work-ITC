//sozdaem knopky x sprava y vseh zadach
let myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}
//skryvaem zadachy nazhav na x
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
//dobavlyaem galochky pri nazhatii na zadachy
let list = document.querySelector("ul");
list.addEventListener('click', function(marked) {
    if (marked.target.tagName === 'LI') {
        marked.target.classList.toggle('checked');
    }
}, false);
//dobavlyaem novyu zadachy pri nazhatii ADD
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert ("Добавьте текст задачи");
    }   else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}