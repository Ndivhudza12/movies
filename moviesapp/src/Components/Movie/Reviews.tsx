import React from 'react';
import { IMovieDetails } from '../../Types/types';

interface MovieDetailsProps {
    selectedMovie: IMovieDetails;
}

const Reviews: React.FC<MovieDetailsProps> = ({ selectedMovie }) => {
    return (
        <div>
            <p>Author: {selectedMovie.review.author}</p>
            <h5>{selectedMovie.review.reviewTitle}</h5>
            <p>{selectedMovie.review.reviewBody}</p>
        </div>
    );
}

export default Reviews;