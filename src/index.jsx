import { createRoot } from 'react-dom/client';
import "./index.scss";
const MyBooksApplication = () => {
  return (
    <div className="my-books">
      <div>Good morning</div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyBooksApplication />);