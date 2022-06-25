import React from 'react';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#FFB800'}}>
                <div className="logo"><img src="../logo192.png" alt="" width={'50px'} height={'50px'}/></div>
                <a className="navbar-brand" href="#">Pet Rescue</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Tìm kiếm <i className="fas fa-search "></i></button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;