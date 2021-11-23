var books = 
    [{
        id: 0,
        title: "Lord of the rings",
        author: "J. R. R. Tolkien",
        remove: removeBook
    },
    {
        id: 1,
        title: "Harry Potter : Half-Blood Prince",
        author: "J. K. Rowling",
        remove: removeBook
    },
    {
        id: 2,
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        remove: removeBook
    }];

function removeBook(books) {
    books.splice(this.id, 1);
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