import "./Pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination-section">
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="page prev"
        >
          Prev
        </button>
        {generatedPages.map((page) => (
          <div
            onClick={() => setCurrentPage(page)}
            key={page}
            className={currentPage === page ? "page active" : "page"}
          >
            {page}
          </div>
        ))}
        <button
          disabled={currentPage === pages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="page next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
