class Book{
    constructor(title, author, year, gender){
        this.title = title;
        this.author = author;
        this.year = year;
        this.gender = gender;
    }

    showInfo(){
        return `el libro titulado "${this.title}" es de ${this.gender}, 
                lo escribiío ${this.author} en el año ${this.year}.`
    }
}

let books = [];
let indice = 1;

while(books.length < 3){

    let title = prompt(`Introduce el TITULO nº${indice}:`);
    if(title != ""){

        let author = prompt(`Introduce el AUTOR del libro nº${indice}:`);
        if(author != ""){

            let year = prompt(`Introduce el AÑO del libro nº${indice}:`);
            if(!isNaN(year) && year.length == 4){

                let gender = prompt(`Introduce el GENERO del libro nº${indice}:`);
                if(gender == "aventuras" ||
                   gender == "terror" ||
                   gender == "fantasia"){                

                    books.push(new Book(title, author, year, gender));
                    indice++;
                    alert("Libro guardado correctamente.")

                }else{
                    alert("El genero introducido no es valido.")
                }

            }else{
                alert("La fecha tiene que ser un número de 4 digitos.")
            }
        }else{
            alert("El campo no puede quedar vacio.");           
        }
    }else{
        alert("El campo no puede quedar vacio.");
    }

}

const showBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = [];

    for(let book of books){
        authors.push(book.author);
    }

    console.log(authors.sort());
}

const getGender = () => {
    let gender = prompt("Introduzca genero a buscar:");

    for(book of books){
        if(gender == book.gender){
            console.log(book.showInfo());
        }
    }

}

showBooks();

showAuthors();

getGender();

