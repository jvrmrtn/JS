const title = document.getElementById("title");
const list = document.getElementById("list");
const son1 = document.getElementById("son1");
const son2 = document.getElementById("son2");

const itemList = document.createElement("li");
itemList.textContent = "Elemento nuevo";

/* list.insertBefore(itemList, list.children[1]); */

/* list.insertAdjacentElement("beforebegin", itemList);
list.insertAdjacentElement("afterbegin", itemList);
list.insertAdjacentElement("beforeend", itemList);
list.children[1].insertAdjacentElement("afterend", itemList); */

/* list.children[1].insertAdjacentHTML("afterend", "<li>Elemento HTML</li>");

list.children[1].insertAdjacentText("afterend", "Texto Prueba"); */

/* list.replaceChild(itemList, list.children[0]); */

/* list.before(itemList);
list.after(itemList);
list.prepend(itemList);
list.append(itemList); */

/* list.children[1].replaceWith(itemList);
son2.replaceWith(itemList); */

/* list.after(list.cloneNode(true)); */
/* list.after(list.cloneNode(true)); */

/* list.children[0].remove(); */

/* list.removeChild(list.children[2]); */

