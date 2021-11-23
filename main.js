var books = 
    [{
        title: "Lord of the rings",
        author: "J. R. R. Tolkien",
    },
    {
        title: "Harry Potter : Half-Blood Prince",
        author: "J. K. Rowling",
    },
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
    }];

function displayBooks() {
    const container = document.getElementById('container')
    container.innerHTML = "";
    for (let book of books) {
        let title = document.createElement('p');
        let author = document.createElement('p');
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute("data-id", books.indexOf(book))
        removeBtn.innerText = 'Remove';

        title.innerHTML = book.title;
        author.innerHTML = book.author;

        container.append(title, author, removeBtn)
    }
}

function removeBook(id) {
    books.splice(id, 1);
    displayBooks()
    return books;
}

function createBook(title, author) {
    const book = {}
    book.id = books.length;
    book.title = title;
    book.author = author;
    book.remove = removeBook;

    books.push(book);
    return books
}

document.addEventListener("submit", (e)=> {
    const form = e.target
    const title = document.getElementById("titleInput").value;
    const author = document.getElementById("authorInput").value;
    createBook(title, author);
    
    // To clear the form fields after submission
    form.reset()
    e.preventDefault()
})

document.addEventListener("click", (e)=> {
    if (e.target.innerText == 'Remove') {
        const id = e.target.getAttribute("data-id");
        removeBook(id)
    }
    e.preventDefault()
})

displayBooks()
