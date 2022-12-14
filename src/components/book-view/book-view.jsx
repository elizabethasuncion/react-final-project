import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./book-view.scss";

export const BookView = ({ books }) => {
  const { bookId } = useParams();

  const book = books.find((b) => b.id === bookId);

  return (
    <div>
      <div>
        <img className="w-100" src={book.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <div>
        <span>Details: </span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
