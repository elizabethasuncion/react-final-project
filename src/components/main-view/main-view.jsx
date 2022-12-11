import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginView />;
  }

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Trespasses",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645482825l/60470234._SY475_.jpg",
      author: "Louise Kennedy"
    },
    {
      id: 2,
      title: "The Candy House",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630968683l/58939642._SY475_.jpg",
      author: "Jennifer Egan"
    },
    {
      id: 3,
      title: "Free: Coming of Age at the End of History",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      author: "Lea Ypi"
    },
    {
      id: 4,
      title: "The Lies of Locke Lamora",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Scott Lynch"
    },
    {
      id: 5,
      title: "The Heart Principle",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
      author: "The Heart Principle"
    },
    {
      id: 6,
      title: "A Darker Shade of Magic",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "V.E. Schwab"
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />;
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onBookClick={(newSelectedBook) => {
            setSelectedBook(newSelectedBook);
          }}
        />
      ))}
    </div>
  );
}