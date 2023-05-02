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
                <li className={`pagination__item-${currentPage === 1 ? 'disabled' : ''}`}>
                    <div className="pagination__link" onClick={() => handleClick(currentPage - 1)}>
                        prev
                    </div>
                </li>
                {renderPages()}
                <li className={`pagination__item-${currentPage === totalPages ? 'disabled' : ''}`}>
                    <div className="pagination__link" onClick={() => handleClick(currentPage + 1)}>
                        next
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;