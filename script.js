class Book {
  constructor(title, author){
  this.title = title
  this.author = author
  this.booksArray = []
  this.BookData = document.querySelector('#books');
  this.button = document.querySelector('#btn');
  this.titleInput = document.querySelector('#title');
  this.authorInput = document.querySelector('#author');
  this.sectionInput = document.querySelector('#books');
  this.removeButton = document.querySelector('.remove')
  }

  addBook() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      const titleValue = this.title.value;
      const authorValue = this.author.value;
      this.booksArray.push({ titleValue, authorValue });
      localStorage.setItem('book', JSON.stringify(this.booksArray));
      this.sectionInput.innerHTML += `
      <p>${titleValue}</p>
      <p>${authorValue}</p>
      <button onclick='remove(${titleValue})'>Remove</button>
      <hr>
                   `;
    });
  }
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const book = new Book(title, author);
book.addBook();
book.storedData();
