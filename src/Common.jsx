import React from "react";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <div className='container-fluid my-3'>
                <div className='row d-flex align-items-center text-center text-md-start'
                    style={{ height: 'calc(100vh - 6rem)' }}>
                    <div className='col-md-7'>
                        <h1 className='display-4'>{props.name}<br />
                            <span className='fw-bold text-primary'>React Bootstrap</span>
                        </h1>
                        <p className='lead'>{props.content} </p>
                        <NavLink type='button' to={props.visit} className='btn btn-outline-light text-dark border rounded btn-lg shadow-sm my-4'>{props.btname} </NavLink>
                    </div>
                    <div className='col-md-5 position-relative text-end'>
                        <img src={props.imgsrc} className='img-fluid Main-logo position-absolute top-0 start-0 w-50' alt='Logo' />
                        <img src={props.imgsrc2} alt='React Bootstrap' className='img-fluid w-100' />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Common;