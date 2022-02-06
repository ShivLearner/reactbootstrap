import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.imgsrc} alt="Service" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title} </h5>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to='/' className='btn btn-outline-secondary btn-sm'>Go Anywhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;