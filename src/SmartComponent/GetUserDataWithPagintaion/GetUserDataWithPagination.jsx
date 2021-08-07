import React, { useEffect, useState } from 'react'
import DumbComponent from '../../DumpComponent'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import "./GetUserDataWithPagination.css"
const GetUserDataWithPagination = () => {
    const [getUser, setGetUser] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=${pageNumber}`)
            .then(function (response) {
                setGetUser(response.data.data)
                setTotalPages(response.data.total_pages)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [pageNumber])

    const setPageNoFn = (number) => {
        setPageNumber(number)
    }

    if (getUser.length === 0) {
        return (
            <div className="container-fluid spinner_wrapper">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else {
        return (
            <div>
                <DumbComponent.Avatar avatarsData={getUser} />
                <DumbComponent.PaginationAvatar currentPageNumber={pageNumber} setPageFn={setPageNoFn} totalPg={totalPages} />
            </div>
        )
    }

}

export default GetUserDataWithPagination
