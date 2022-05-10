const book1 = new Book('Clue of the wooden footprint','Hadyn Kisembo','mystery', 10,13,420,1984, 'Adelphi Edizioni',0);
const book2 = new Book('2132: decimation', ' Bình Ren', 'sci-fi', 14, 6, 234, 1967, 'Rizzoli', 5);
const book3 = new Book('Long past dawn', 'Amag Omega', 'romance', 10, 5, 199, 1935, 'Rusconi libri editori', 7);
const book4 = new Book('Cry of steel', 'Yong Tenzin', 'crime', 20, 15, 201, 2008, 'Cairo editore', 50);
const book5 = new Book("Dragon's tears", 'Sinclair Durga', 'fantasy', 39, 30, 162, 2018, 'Fandango', 49);
const book6 = new Book('Sign of the burnt violin', 'Kei Bilge', 'mistery', 8, 6, 137, 1866, 'Fazi editore', 27);
const book7 = new Book('Crimson colony', 'Sal Arden', 'sci-fi', 50, 12, 264, 1801, 'La Corte editori', 31);
const book8 = new Book('Black lace', 'romance', 'Liwin Nor', 49, 4, 132, 1945, 'De Agostini editore', 24);
const book9 = new Book('The man in the vale', 'Safaa Terry', 'crime', 11, 8, 255, 2002, 'Giulio Einaudi editore', 21)
const book10 = new Book('Smoke and the rose', 'Amora Duha', 'fantasy', 39, 15, 464, 1942, 'Giunti editore', 7);


let book_list = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
const inStorageContainer = "libri-disponibili-div";
const templateDisponibili = `
<div class="book-container">
    <h3 class="title">#TITOLO</h3>
    <h5 class="type">#GENERE</h5>
    <h5 class="price">#PREZZO$</h5>
    <h5 class="copies">Copie:#NUMEROCOPIE</h5>
    <button class="button">Venduto</button>
</div>`

let notAvailableBooks = [];
const notInStorageContainer = "libri-non-disponibili-div";
const templateNonDisponibili = `
    <div class="book-container">
        <h3>#TITOLO</h3>
        <h4>#AUTORE</h4>
        <h5>#GENERE</h5>
        <h5>#PREZZO</h5>
    </div>`


function removeCopy(book) {
       book.copies -- 
       if (book.copies === 0) {
           book_list = book_list.filter(b => b.title !== book.title)
           notAvailableBooks.push(book);
           console.log('FHFHFH')
           console.log(book_list)
           console.log(notAvailableBooks)
       }
       updateHTML();
} 


function updateHTML() {
    displayBooks(book_list, templateDisponibili, inStorageContainer);
    displayBooks(notAvailableBooks, templateNonDisponibili, notInStorageContainer);
}


function displayBooks(bookArray, template, containerName) {
    const container = document.getElementById(containerName);
    container.innerHTML = "";

    for (let i = 0; i < bookArray.length; i++) {
        const book = bookArray[i];
        const bookTemplate = template.replace("#TITOLO", book.title)
                                                .replace("#AUTORE", book.author)
                                                .replace("#GENERE", book.type)
                                                .replace("#PREZZO", book.round_number(book.get_public_price(), 2))
                                                .replace("#NUMEROCOPIE", book.copies);
        const div = document.createElement("div");

        div.innerHTML = bookTemplate;
        container.appendChild(div);

        const button = div.querySelector("button");
        if (button) button.onclick = () => removeCopy(book);
    }

}
updateHTML();