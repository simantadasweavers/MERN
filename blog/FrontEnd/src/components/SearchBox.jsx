
const SearchBox = () => {
    return (
        <div>
            <div className="search__box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 m-auto col-md-8 col-sm-11">
                            <div className="search__content ">
                                <button type="button" className="search__box-btn-close">
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <form className="search__form" action="https://assiagroupe.vercel.app/noonpost/html/search-page.html">
                                    <input type="search" className="search__form-input" value="" placeholder="What are you looking for?" />
                                    <button type="submit" className="search__form-btn-search">search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;