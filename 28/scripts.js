const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const daysSelect = document.getElementById("daysSelect");


/* const itemList = document.createElement("li");
itemList.textContent = "Lunes";
daysList.appendChild(itemList); */


title.innerHTML ="DOM - <span>Crear E Insertar Elementos.</span>";

const fragment = document.createDocumentFragment()

for(const day of days){
    /* daysList.innerHTML += `<li>${day}</li>` */ /* NO ES FORMA CORRECTA */
    const itemList = document.createElement("li");
    itemList.textContent = day;
    fragment.appendChild(itemList);
}

daysList.appendChild(fragment);
/* console.log(fragment); */


for(const day of days){
    const itemSelect = document.createElement("option");
    itemSelect.setAttribute("value", day.toLowerCase());
    itemSelect.textContent = day;
    fragment.appendChild(itemSelect);
}

daysSelect.appendChild(fragment);


