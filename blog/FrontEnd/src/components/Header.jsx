function Header() {
    return (
        <div>
            <header className="header fixed-top navbar-expand-xl">
                <div className="container-fluid">
                    <div className="header__main">
                        <div className="logo">
                            <a className="logo__link logo--dark" href="index.html">
                                <img src="assets/img/logo/logo-dark.png" alt="" className="logo__img" />
                            </a>
                            <a className="logo__link logo--light" href="index.html">
                                <img src="assets/img/logo/logo-white.png" alt="" className="logo__img" />
                            </a>
                        </div>

                        <div className="header__navbar">
                            <nav className="navbar">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle active" href="javascript:void(0)" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="index.html">homepage 1 </a></li>
                                                <li><a className="dropdown-item " href="index-2.html">homepage 2</a></li>
                                                <li><a className="dropdown-item " href="index-3.html">homepage 3</a></li>
                                                <li><a className="dropdown-item active" href="index-4.html">homepage 4 </a></li>
                                                <li><a className="dropdown-item" href="index-5.html">homepage 5 </a></li>
                                                <li><a className="dropdown-item" href="index-6.html">homepage 6 </a></li>
                                                <li><a className="dropdown-item" href="index-7.html">homepage 7 </a></li>
                                                <li><a className="dropdown-item" href="index-8.html">homepage 8 </a></li>
                                                <li><a className="dropdown-item" href="index-9.html">homepage 9</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle " href="javascript:void(0)" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Post features</a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="post-default.html">post default </a></li>
                                                <li><a className="dropdown-item" href="post-left-sidebar.html">post left sidebar </a></li>
                                                <li><a className="dropdown-item" href="post-no-sidebar.html">post no sidebar</a></li>
                                                <li><a className="dropdown-item" href="post-video.html">post video </a></li>
                                                <li><a className="dropdown-item" href="post-audio.html">post audio </a></li>
                                                <li><a className="dropdown-item" href="post-gallery.html">post gallery </a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link  dropdown-toggle" href="javascript:void(0)" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false"> blogs </a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="blog-grid.html">Blog grid</a></li>
                                                <li><a className="dropdown-item" href="blog-masonry.html">Blog masonry</a></li>
                                                <li><a className="dropdown-item" href="blog-list.html">Blog list</a></li>
                                                <li><a className="dropdown-item" href="blog-classNameic.html">Blog classNameic</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false"> pages </a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item" href="author.html">author </a></li>
                                                <li><a className="dropdown-item" href="about.html">about us </a> </li>
                                                <li><a className="dropdown-item" href="contact.html">contact us</a></li>
                                                <li><a className="dropdown-item" href="login.html">login</a></li>
                                                <li><a className="dropdown-item" href="signup.html">Sign up</a></li>
                                                <li><a className="dropdown-item" href="page404.html">404 page</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html"> contact </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="header__action-items">
                            <ul className="list-inline social-media social-media--layout-one">
                                <li className="social-media__item">
                                    <a href="index-4.html#" className="social-media__link" >
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>

                                <li className="social-media__item">
                                    <a href="index-4.html#" className="social-media__link">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li className="social-media__item">
                                    <a href="index-4.html#" className="social-media__link"><i className="bi bi-twitter-x"></i></a>
                                </li>
                                <li className="social-media__item">
                                    <a href="index-4.html#" className="social-media__link"><i className="bi bi-youtube"></i></a>
                                </li>
                            </ul>

                            <div className="theme-switch">
                                <label className="theme-switch__label" for="checkbox">
                                    <input type="checkbox" id="checkbox" className="theme-switch__checkbox" />
                                    <span className="theme-switch__slider round ">
                                        <i className="bi bi-sun icon-light theme-switch__icon theme-switch__icon--light"></i>
                                        <i className="bi bi-moon icon-dark theme-switch__icon theme-switch__icon--dark"></i>
                                    </span>
                                </label>
                            </div>

                            <div className="search-icon">
                                <a href="index-4.html#search" className="search-icon__link">
                                    <i className="bi bi-search search-icon__icon"></i>
                                </a>
                            </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler__icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header;