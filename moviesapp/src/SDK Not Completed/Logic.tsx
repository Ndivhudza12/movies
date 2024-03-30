import { IMovie, IMovieDetails } from "../Types/types";

class MovieSDK {
    static fetchRandomMovies() {
        throw new Error("Method not implemented.");
    }
    private searchQuery: string;
    private url: string;

    constructor(searchQuery: string, url: string) {
        this.searchQuery = searchQuery;
        this.url = url;
    }

    // Function to fetch random movies && search for movies
    async searchMovies(): Promise<IMovie[]> {
        try {
            const response = await fetch(`${this.url}?q=${this.searchQuery}`);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching random movies:', error);
            return [];
        }
    }

    // Function to retrieve movie details on selected movie
    async getMovieDetails(movieId: string): Promise<IMovieDetails | null> {
        try {
            const response = await fetch(`${this.url}?tt=${movieId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching movie details:', error);
            return null;
        }
    }
}

// 4. Integrate with State Manager (e.g., Redux)
// You can dispatch actions and manage state within your React components using Redux or any other state management solution.

export default MovieSDK;
