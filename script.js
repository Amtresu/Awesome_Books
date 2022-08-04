class Book {
  constructor(title, author){
  this.title = title
  this.author = author
  this.booksArray = []
  this.BookData = document.querySelector('#books');
  this.button = document.querySelector('#add-button');
  this.titleInput = document.querySelector('#title');
  this.authorInput = document.querySelector('#author');
  this.sectionInput = document.querySelector('#books');
  this.removeButton = document.querySelector('.remove');
  this.ul = document.querySelector('.booksList')
  }

  addBook() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      const titleValue = this.title.value;
      const authorValue = this.author.value;
      this.booksArray.push({ titleValue, authorValue });
      localStorage.setItem('book', JSON.stringify(this.booksArray));
      this.sectionInput.innerHTML += `
      <li class="book-item">
      <p  class="book-title">"${titleValue}"</p>
      <p>${authorValue}</p>
      <button class="remove" onclick='remove(${titleValue})'>Remove</button>
      </li> `;
    });
  }

}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const book = new Book(title, author);
book.addBook();  

