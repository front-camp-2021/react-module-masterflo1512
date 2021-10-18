import './pagination.scss';
import React, { useState } from 'react'
export function Pagination(props) {
    const pages = props.pages
    const numberOfPages = []
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1)
    console.log(currentButton);


    return (
        <div className="pagination-container">
            <button className="btn-pagination" onClick={() => setCurrentButton((prev) => prev - 1)} disabled={`${currentButton === 1 ? 'disabled' : ''}`}>
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M20.0866 40C31.1801 40 40.1732 31.0457 40.1732 20C40.1732 8.9543 31.1801 0 20.0866 0C8.99308 0 0 8.9543 0 20C0 31.0457 8.99308 40 20.0866 40Z"
                        fill="#EDEDED" />
                    <path d="M23.0996 25L17.0736 19L23.0996 13" stroke="black" strokeridth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
            <ul className="pagination-list">
                {numberOfPages.map(page => {
                    let classes = 'pagination-item'
                    if (currentButton === page) {
                        classes += ' active'
                    }
                    return (
                        <li className={classes}><a href="#" onClick={(e) => {
                            e.preventDefault()
                            setCurrentButton(page)
                        }}>{page}</a></li>
                    )
                })}

            </ul>
            <button className="btn-pagination" disabled={currentButton === numberOfPages.length} onClick={() => setCurrentButton((prev) => prev + 1)}>
                <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M20.9487 40C32.0422 40 41.0353 31.0457 41.0353 20C41.0353 8.9543 32.0422 0 20.9487 0C9.85514 0 0.862061 8.9543 0.862061 20C0.862061 31.0457 9.85514 40 20.9487 40Z"
                        fill="#EDEDED" />
                    <path d="M17.9357 14L23.9616 20L17.9357 26" stroke="black" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
