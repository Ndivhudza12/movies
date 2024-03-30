import React from 'react';
import { IMovieDetails } from '../types';
import styles from './Movie.module.scss';

interface MovieDetailsProps {
    selectedMovie: IMovieDetails;
}

const Overview: React.FC<MovieDetailsProps> = ({ selectedMovie }) => {
    return (
        <div>
            <em>Type : {selectedMovie?.type} <div>Date Published : {selectedMovie.datePublished}</div></em>
            <div className={styles.overviewDetails}>
                <strong>Keywords</strong>
                <div>  {selectedMovie.keywords}</div>
            </div>
            <div className={styles.overviewDetails}>
                <strong>Description</strong>
                <div> {selectedMovie.description}</div>
            </div>
            <div className={styles.overviewDetails}>
                <strong>Actors</strong>
                <div>
                    {selectedMovie.actors.map((actor, index) => (
                        <a key={actor.url} href={actor.url} target="_blank" rel="noreferrer" className={styles.actorsLink}>
                            {actor.name}
                        </a>
                    ))}</div>
            </div>
            <div className={styles.overviewDetails}>
                <strong>Genres</strong>
                <div>
                    {selectedMovie.genres.map((genre, index) => (
                        <span>{genre}  </span>
                    ))}</div>
            </div>
        </div>
    );
}

export default Overview;

