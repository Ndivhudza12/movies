import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { setSearchTerm } from '../../Store/moviesReducers';
import { getMovies } from '../../Store/actions';
import styles from './Movies.module.scss';

const SearchMovies: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchTerm } = useAppSelector((state) => state.movies);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value));
    };

    useEffect(() => {
        dispatch(getMovies(searchTerm));
    }, [dispatch, searchTerm])

    return (<input
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search movies"
        className={styles.searchBox}
    />)

};

export default SearchMovies;
