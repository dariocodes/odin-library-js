function newBook(title, author, pages, finished = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

let booklist = [];

function addBook(title, author, pages, finished) {
  const book = new newBook(title, author, pages, finished);
  booklist.unshift(book);
}

addBook('test', 'cock', 23, true);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);
addBook('fuck', 'bock', 633);

const bookSection = document.querySelector('main');

function addBookDisplay(div) {
  bookSection.appendChild(div);
}

function clearBookDisplay() {
  const collection = document.querySelectorAll('.bookDiv');

  for (const elem of collection) {
    elem.parentNode.removeChild(elem);
  }
}

function displayBooks() {
  booklist.forEach((book, index) => {
    const NewBookDiv = document.createElement('div');

    const titleParagraph = document.createElement('p');
    titleParagraph.innerText = `Title: ${book.title}`;
    NewBookDiv.appendChild(titleParagraph);

    const authorP = document.createElement('p');
    authorP.innerText = `Author: ${book.author}`;
    NewBookDiv.appendChild(authorP);

    const pagesP = document.createElement('p');
    pagesP.innerText = `Total Pages: ${book.pages}`;
    NewBookDiv.appendChild(pagesP);

    const readP = document.createElement('p');
    readP.innerText = 'Not read';
    readP.classList.add('readingStatus');

    if (book.finished) {
      readP.innerText = 'Read';
      readP.classList.toggle('readP');
    }

    readP.addEventListener('click', () => {
      readP.classList.toggle('readP');
      console.log(book.finished);
      if (book.finished) {
        book.finished = false;
        readP.innerText = 'Not read';
      } else {
        book.finished = true;
        readP.innerText = 'Read';
      }
    });

    NewBookDiv.appendChild(readP);

    const deleteBtn = document.createElement('p');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.dataset.index = index;
    deleteBtn.addEventListener('click', () => {
      booklist.splice(deleteBtn.dataset.index, 1);
      clearBookDisplay();
      displayBooks();
    });
    NewBookDiv.appendChild(deleteBtn);

    NewBookDiv.classList.add('bookDiv');
    addBookDisplay(NewBookDiv);
  });
}

displayBooks();

const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const totalPages = document.getElementById('pages');

addBtn.addEventListener('click', () => {
  addBook(titleInput.value, authorInput.value, totalPages.value);
  clearBookDisplay();
  displayBooks();
});
