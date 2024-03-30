import React from 'react';
import MovieCard from './Movies/MoviesCard';
import { Container } from 'react-bootstrap';
import SearchMovies from './Movies/SearchMovies';
import styles from './Main.module.scss';

const Home: React.FC = () => {
    return (
        <Container className={styles.homeContainer}>
            <h4 className={styles.headerMain}>MOVIES HOME PAGE</h4>
            <div>
                <SearchMovies />
                <MovieCard />
            </div>
        </Container>
    );
}

export default Home;
