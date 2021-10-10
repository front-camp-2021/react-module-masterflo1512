import logo from './logo.png';
import './header.scss';

export function Header() {
    return (
        <div>
            <div className="logo-block">
                <img src={logo} alt="logo" width="80px " />
                <h1 className="header-name-logo">Online Store</h1>
            </div>
            <div className="navigation">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1 6.25L8.61984 1L16.2397 6.25V14.5C16.2397 15.3284 15.4816 16 14.5464 16H2.6933C1.75811 16 1 15.3284 1 14.5V6.25Z"
                        stroke="#7E72F2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.68909 16V8H11.5505V16" stroke="#7E72F2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.8576 9L13.5467 5L8.8576 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.651611 9L5.34074 5L0.651611 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="breadcrumb">eCommerce</span>
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.8576 9L13.5467 5L8.8576 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.651611 9L5.34074 5L0.651611 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="breadcrumb">Electronics</span>
            </div>
        </div>
    );
}
