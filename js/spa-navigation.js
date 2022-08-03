const navLinks = document.querySelectorAll('.nav-link a');

const bookList = document.querySelector('.books-display');
const bookAction = document.querySelector('.books-action');
const contactSection = document.querySelector('.contact-us');

navLinks.forEach((link) => {
  link.onclick = () => {
    if (link.classList.contains('listBook')) {
      bookList.classList.remove('hide-section');
      bookAction.classList.add('hide-section');
      contactSection.classList.add('hide-section');
    } else if (link.classList.contains('addBook')) {
      bookList.classList.add('hide-section');
      bookAction.classList.remove('hide-section');
      contactSection.classList.add('hide-section');
    } else {
      bookList.classList.add('hide-section');
      bookAction.classList.add('hide-section');
      contactSection.classList.remove('hide-section');
    }
  };
});
