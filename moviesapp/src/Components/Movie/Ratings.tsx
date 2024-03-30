import React from 'react';
import { Row } from 'react-bootstrap';
import { IMovieDetails } from '../../Types/types';
import styles from './Movie.module.scss';

interface MovieDetailsProps {
    selectedMovie: IMovieDetails;
}

const Ratings: React.FC<MovieDetailsProps> = ({ selectedMovie }) => {
    return (
        <div>
            <div className={styles.stats}>
                <h5>Review Rating</h5>
                <Row xs={2} md={2} xl={2}>
                    <div>Rating Value</div>
                    <strong className={styles.ratings}>{selectedMovie.review.reviewRating.ratingValue}</strong>
                    <div>Best Rating</div>
                    <strong className={styles.ratings}>{selectedMovie.review.reviewRating.bestRating}</strong>
                    <div>Worst Rating</div>
                    <strong className={styles.ratings}>{selectedMovie.review.reviewRating.worstRating}</strong>
                </Row>
            </div>
            <div className={styles.stats}>
                <h5>Aggregate Rating</h5>
                <Row xs={2} md={2} xl={2}>
                    <div>Rating Count</div>
                    <strong className={styles.ratings}>{selectedMovie.aggregateRating.ratingCount}</strong>
                    <div>Rating Value</div>
                    <strong className={styles.ratings}>{selectedMovie.aggregateRating.ratingValue}</strong>
                    <div>Best Rating</div>
                    <strong className={styles.ratings}>{selectedMovie.aggregateRating.bestRating}</strong>
                    <div>Worst Rating</div>
                    <strong className={styles.ratings}>{selectedMovie.aggregateRating.worstRating}</strong>
                </Row>
            </div>
        </div>
    );
}

export default Ratings;
