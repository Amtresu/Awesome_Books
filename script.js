const BookData = document.querySelector('#books');
const button = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

// Fire event when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', () => {
  let str = '';

  const showData = () => {
    if (localStorage.getItem('book') === null) {
      const booksArray = [];
      localStorage.setItem('book', JSON.stringify(booksArray));
    } else {
      const booksArrayStr = localStorage.getItem('book');
      booksArray = JSON.parse(booksArrayStr);
    }
    booksArray.map((data, index) => { 
      str += `
              <p>${data[0]}</p>
              <p>${data[1]}</p>
              <button onclick='remove(${index})'>Remove</button>
              <hr>
          `;
    
      return (data);
    });
    BookData.innerHTML = str;
  };

  button.addEventListener('click', function () {
    if (titleInput.value === '' && authorInput.value === '') {
      alert('Please enter a title and author');
    } else {
      const bookTitle = titleInput.value;
      const bookAuthor = authorInput.value;
      if (localStorage.getItem('book') === null) {
        const booksArray = [];
        booksArray.push([bookTitle, bookAuthor]);
        localStorage.setItem('book', JSON.stringify(booksArray));
      } else {
        let booksArrayStr = localStorage.getItem('book');
        booksArray = JSON.parse(booksArrayStr);
        booksArray.push([bookTitle, bookAuthor]);
        localStorage.setItem('book', JSON.stringify(booksArray));
      }
      titleInput.value = '';
      authorInput.value = '';
      str = '';
      BookData.innerHTML = str;
      showData();
    }
    });

  remove = (id) => {
    let booksArrayStr = localStorage.getItem('book');
    booksArray = JSON.parse(booksArrayStr);
    booksArray.splice(id, 1);
    localStorage.setItem('book', JSON.stringify(booksArray));
    str = '';
    BookData.innerHTML = str;
    showData();
  };
  showData();
});