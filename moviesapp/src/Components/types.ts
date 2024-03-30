export interface IMovie {
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#ACTORS': string;
    '#AKA': string;
    '#IMDB_URL': string;
    '#IMDB_IV': string;
    '#IMG_POSTER': string;
    '#RANK': number;
}

export interface IMovieDetails {
    title: string;
    description: string;
    type: string;
    actors: Array<{
        name: string;
        url: string;
    }>;
    aggregateRating: {
        ratingCount: number;
        ratingValue: number;
        bestRating: number;
        worstRating: number;
    };
    datePublished: string;
    genres: [];
    image: string;
    keywords: string;
    review: {
        author: string;
        reviewTitle: string;
        reviewBody: string;
        reviewRating: {
            ratingValue: number;
            bestRating: number;
            worstRating: number;
        };
    };

}

