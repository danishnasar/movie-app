import React from 'react';
import '../App';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function NoData () {

    return (
        <div>
            <h2 className='notFoundTitle'>Movie Not Found</h2>
            <p className='notFoundText'>Please go back to Home screen</p>
            <Link to='/'>
            <button className='btn btn-secondary notFoundButton'>Back</button>
            </Link>
        </div>
    )
}