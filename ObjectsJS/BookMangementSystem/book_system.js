







let bookArray = [];

function addBook() {

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);


    if( bookName === '' || authorName === '' || bookDescription === '' || isNaN(pagesNumber) ){
        alert('Please fill all the fields');
        return;
    }
    const book = {
        name: bookName,
        authorName: authorName,
        bookDescription: bookDescription,
        pagesNumber: pagesNumber
    };
    bookArray.push(book);

    showbooks();
    clearFields();
    
}


function showbooks(){
    const allBooks = bookArray.map( (book,index) => {
        return `
        <h1>Book ${index + 1}</h1>
        <div class="book">
            <h2>${book.name}</h2>
            <h3>${book.authorName}</h3>
            <p>${book.bookDescription}</p>
            <p>${book.pagesNumber}</p>
        </div>
        <button onclick="editbooks(${index})"><a href="#">Edit</a></button>
        <button onclick="deletebooks(${index})"><a href="#">Delete</a></button>
        `;
    });
     document.getElementById('books').innerHTML = allBooks.join('');
}


function deletebooks(index){
    if(confirm('Are you sure you want to delete this book?'))
    
        bookArray.splice(index,1);
    
    
}
function clearFields(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

