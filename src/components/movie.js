import React, { useState } from 'react';
import '../App';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Movie () {
    const location = useLocation();
    const plotData = location.state.Plot.replace("&amp;", '&');

    return (
        <div>
        <div className='movieHeading'>Movie Details</div>
        < img className='poster' src = {location.state.Poster} />
        <div className='movieData'>
        <div>Title: {location.state.Title}</div>
        <div>Year: {location.state.Year}</div>
        <div>Release Date: {location.state.Released}</div>
        <div>Director: {location.state.Director}</div>
        <div>Actors: {location.state.Actors}</div>
        <div>Writer: {location.state.Writer}</div>
        <div>Genre: {location.state.Genre}</div>
        <div>Languages: {location.state.Language}</div>
        <div>Rated: {location.state.Rated}</div>
        <div>Duration: {location.state.Runtime}</div>
        <div>IMDb Rating: {location.state.imdbRating}</div>
        <div>IMDb Votes: {location.state.imdbVotes}</div>
        <div>Awards: {location.state.Awards}</div>
        <div className='plot'>Plot: {plotData}</div>
        </div>
        <Link to='/'>
            <button className='btn btn-secondary notFoundButton'>Back</button>
        </Link>
        </div>
    )
}