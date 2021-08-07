import React from 'react'
import { Pagination } from 'react-bootstrap'
import "./PaginationAvatar.css"
const PaginationAvatar = ({ currentPageNumber, setPageFn, totalPg }) => {
    let active = currentPageNumber;
    let items = [];
    for (let number = 1; number <= totalPg; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => {
                console.log("clicks", number)
                setPageFn(number)
            }}>
                {number}
            </Pagination.Item>,
        );
    }
    console.log(items)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <Pagination>{items}</Pagination>
                </div>
            </div>
        </div>
    )
}

export default PaginationAvatar
