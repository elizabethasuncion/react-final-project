import './book-view.scss';

export const BookView = ({ book, onBackClick }) => {
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
        <span>Summary: </span>
        <span>{book.summary}</span>
      </div>

      <button
        onClick={onBackClick}
        className="back-button"
        style={{ cursor: "pointer" }}
      >
        Back
      </button>
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
