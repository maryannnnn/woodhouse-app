import './pagination.scss'

const Pagination = ({totalPages, pages, currentPage, setPageNumber}) => {

    // page change handler
    const handleClick = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    // render list of pages
    const renderPages = () => {
        return pages.map((pageNumber) => {
            return (
                <li key={pageNumber} className={`pagination__item-${currentPage === pageNumber ? 'active' : ''}`}>
                    <div className="pagination__link" onClick={() => handleClick(pageNumber)}>
                        {pageNumber}
                    </div>
                </li>
            );
        });
    };

    // render component
    return (
        <nav>
            <ul className="pagination">
                <li className="pagination__item" >
                    <button className="pagination__link" disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>
                        prev
                    </button>
                </li>
                {renderPages()}
                <li className="pagination__item">
                    <button className="pagination__link"  disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>
                        next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;