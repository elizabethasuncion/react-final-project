import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [books, setBooks] = useState([]);
  // const [selectedBook, setSelectedBook] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          // setToken(null);
          // localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {books.map((book) => (
                      <Col className="mb-4" key={book.id} md={3}>
                        <BookCard book={book} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

 // if (!user) {
  //   return (
  //     <>
  //       <LoginView onLoggedIn={(user) => setUser(user)} />
  //       or
  //       <SignupView />
  //     </>
  //   );
  // }

  //   if (selectedBook) {
  //     return <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />;
  //   }

  //   if (books.length === 0) {
  //     return <div>The list is empty!</div>;
  //   }

  //   return (
  //     <div>
  //       {books.map((book) => (
  //         <BookCard
  //           key={book.id}
  //           book={book}
  //           onBookClick={(newSelectedBook) => {
  //             setSelectedBook(newSelectedBook);
  //           }}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

   // const [books, setBooks] = useState([
  //   {
  //     id: 1,
  //     title: "Trespasses",
  //     image:
  //       "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645482825l/60470234._SY475_.jpg",
  //     author: "Louise Kennedy"
  //   },
  //   {
  //     id: 2,
  //     title: "The Candy House",
  //     image:
  //       "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630968683l/58939642._SY475_.jpg",
  //     author: "Jennifer Egan"
  //   },
  //   {
  //     id: 3,
  //     title: "Free: Coming of Age at the End of History",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
  //     author: "Lea Ypi"
  //   },
  //   {
  //     id: 4,
  //     title: "The Lies of Locke Lamora",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //     author: "Scott Lynch"
  //   },
  //   {
  //     id: 5,
  //     title: "The Heart Principle",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
  //     author: "The Heart Principle"
  //   },
  //   {
  //     id: 6,
  //     title: "A Darker Shade of Magic",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //     author: "V.E. Schwab"
  //   }
  // ]);

  // const [selectedBook, setSelectedBook] = useState(null);

  // return (
  //   <Row className="justify-content-md-center">
  //     {!user ? (
  //       <Col md={5}>
  //         <LoginView onLoggedIn={(user) => setUser(user)} />
  //         or
  //         <SignupView />
  //       </Col>
  //     ) : selectedBook ? (
  //       <Col md={8}>
  //         <BookView
  //           book={selectedBook}
  //           onBackClick={() => setSelectedBook(null)}
  //         />
  //       </Col>
  //     ) : books.length === 0 ? (
  //       <div>The list is empty!</div>
  //     ) : (
  //       <>
  //         {books.map((book) => (
  //           <Col className="mb-4" key={book.id} md={3}>
  //             <BookCard
  //               book={book}
  //               onBookClick={(newSelectedBook) => {
  //                 setSelectedBook(newSelectedBook);
  //               }}
  //             />
  //           </Col>
  //         ))}
  //       </>
  //     )}
  //   </Row>
  // );
