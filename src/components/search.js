import React, { useState } from 'react';
import '../App';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";

export default function Search () {
    const [search, setSearch] = useState('');
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    function validateName () {
        if (search.trim() === '') {
            setErrorText('Please enter a movie name');
        } else {
            searchMovie();
        }
    }

    async function searchMovie () {
        try {
            const response = await Axios.get(
            `https://www.omdbapi.com/?i=tt3896198&apikey=1f2cf5ec&t=${search}`,
            );
            if (response.data.Response === "True") {
                navigate('/moviedata', { state: response.data });
            } else {
                navigate('/notfound');
            }
        } catch (error) {
            }
        }

    return (
        <div>
        <h1 className='searchHeader'>Movie World</h1>
        <label className='searchLabel'>Please enter the movie name</label>
        <input className='form-control textBox' 
        placeholder='movie name...'
        type="text" value={search} 
        onChange={(e) => setSearch(e.target.value)} />
        {errorText && (
        <div className='errorText'>{errorText}</div>
        )}
        <button className='btn btn-success searchButton' onClick={validateName}>Search</button>
        </div>
    )
}