
const express = require("express");

const app = express();
const PORT = 3000;

// Books stored in an array in the code
const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Animal Farm", author: "George Orwell", year: 1945 },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// GET / - Welcome message
app.get("/", (req, res) => {
  res.type("text").send("Welcome to the Books API");
});

// GET /books/count - Count books
// This route must come before /books/:id
app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

// GET /books - All books or filtered books
app.get("/books", (req, res) => {
  const { author, year } = req.query;

  let result = books;

  if (author) {
    result = result.filter(
      (book) => book.author.toLowerCase() === String(author).toLowerCase()
    );
  }

  if (year !== undefined) {
    result = result.filter(
      (book) => book.year === Number(year)
    );
  }

  res.json(result);
});

// GET /books/:id - Find one book by ID
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  res.json(book);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Books API is running at http://localhost:${PORT}`);
});
