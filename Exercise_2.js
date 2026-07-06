
// Exercice 2.

const bookTracker = {
  books: [],

  addBook(title, author) {
  
    const newBook = {
      title: title,
      author: author,
      isRead: false
    };
    
    this.books.push(newBook);
  },

  markAsRead(title) {
  
    const book = this.books.find(b => b.title === title);
    
    
    if (book) {
      book.isRead = true;
    }
  },

  getUnreadBooks() {
    
    const unreadFiltered = this.books.filter(b => b.isRead === false);
    
  
    const unreadTitles = unreadFiltered.map(b => b.title);
    
    return unreadTitles;
  },
};


bookTracker.addBook("Dune", "Frank Herbert");
bookTracker.addBook("Educated", "Tara Westover");
bookTracker.markAsRead("Dune");

console.log(bookTracker.getUnreadBooks()); 
