import React from 'react'
import "./Avatar.css"
import { Image, Button } from 'react-bootstrap'
const Avatar = ({ avatarsData }) => {
    console.log("props.avatarsData", avatarsData)
    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-5">
                {avatarsData && avatarsData.map((v, i) => {
                    console.log(v)
                    return (
                        <div className="col-md-3 mt-4" key={v.id}>
                            <div className="card avatar-card">
                                <div className="card-body">
                                    <div className="col-12 text-center">
                                        <Image width={150} height={150} className="avatar_image" src={v.avatar} roundedCircle />
                                    </div>
                                    <h4 className="avatar_name text-center mt-3">{v.first_name} {v.last_name}</h4>
                                    <div className="avatar_email">{v.email}</div>
                                    <div className="text-center mt-3"><Button variant="primary">Follow</Button></div>

                                </div>
                            </div>
                        </div>
                    )

                })}

            </div>
        </div >
    )
}

export default Avatar;
