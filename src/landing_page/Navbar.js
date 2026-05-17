import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColour: "#f5f5f8" }}>
            <div class="container p-2">
                <Link class="navbar-brand " to="/"><img src="media/logo.svg" alt="logo" style={{ width: "25%" }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="https://kite.zerodha.com/">Kite</a></li>
                        <li><a className="dropdown-item" href="https://console.zerodha.com/">Console</a></li>
                        <li><a className="dropdown-item" href="https://zerodha.com/products/api/">Kite Connect</a></li>
                        <li><a className="dropdown-item" href="https://coin.zerodha.com/">Coin</a></li>
                    </ul>
                </div>

            </div>
        </nav>


    );
}

export default Navbar;