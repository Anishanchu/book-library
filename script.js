const submitbtn = document.querySelector('#btn');
submitbtn.addEventListener('click',addBookToLibrary); 

function Book (title, author, pages, read) {

    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read;
    
    
}


let myLibrary = [];
let newBook;


function addBookToLibrary(){

    newBook = new Book(title,author,pages);
    myLibrary.push(newBook);
    render();



  
}

//creat render function
function render(){
    const display = document.getElementById('mylibrary');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
    if (title == "" && author == "" && pages == ""){
        alert("please enter any inputs");
    }

    
}

//create book Dom element to render function 
function createBook(item) {
    const library = document.querySelector('#mylibrary');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');


    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    titleDiv.classList.add('title');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')
    bookDiv.appendChild(readBtn);
    if(item.read === false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#881337';
        readBtn.style.color = "#ffffff";
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#a3e635';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    });

    //add function to read button
    readBtn.addEventListener('click', () =>{
        item.read = !item.read;
        render();
    });
};



