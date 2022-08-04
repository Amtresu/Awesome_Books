const BookData = document.querySelector('#books');
const button = document.querySelector('#add-button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

class Storage {
  constructor() {
    this.collection = [];
  }

  static addCollection(newBook) {
    this.collection.push(newBook);
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static removeFromCollection(target) {
    const removeBook = target.previousElementSibling.firstElementChild.textContent;

    this.collection.filter((book, index) => {
      if (book.title === removeBook) {
        this.collection.splice(index, 1);
      }
      return this.collection;
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static getBooksFromStorage() {
    if (localStorage.getItem('collection') === null) {
      this.collection = [];
    } else {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    }
    return this.collection;
  }
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function UI() {}

UI.prototype.addBookToUI = function (newBook) {
  Storage.collection.forEach((book, index) => {
    if (book.title === newBook.title) {
      if (index % 2 === 0) {
        BookData.innerHTML += `
          <li class='book'>
          <div class ='info'>
            <p class='book-title'>${newBook.title}</p>
            <p class='book-author'>&nbsp by ${newBook.author}</p>
          </div>
            <button class='remove remove-btn btn' type='button'>Remove</button>
          </li>
        `;
      } else {
        BookData.innerHTML += `
          <li class='book'>
          <div class ='info'>
            <p class='book-title'>${newBook.title}</p>
            <p class='book-author'>&nbsp by ${newBook.author}</p>
          </div>
            <button class='remove remove-btn btn' type='button'>Remove</button>
          </li>
        `;
      }
    }
  });
};

UI.prototype.clearInputs = function (element1, element2) {
  element1.value = '';
  element2.value = '';
};

UI.prototype.removeBookFromUI = function (target) {
  target.parentElement.remove();
};

const ui = new UI();

function addBook(e) {
  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = new Book(title, author);

  Storage.addCollection(newBook);

  ui.addBookToUI(newBook);
  ui.clearInputs(titleInput, authorInput);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove remove-btn btn') {
    ui.removeBookFromUI(e.target);
    Storage.removeFromCollection(e.target);
  }
}

button.addEventListener('click', addBook);
BookData.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', () => {
  const allBooks = Storage.getBooksFromStorage();
  allBooks.forEach((book) => ui.addBookToUI(book));
});
