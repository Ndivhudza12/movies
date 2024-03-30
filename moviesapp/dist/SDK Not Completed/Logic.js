"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MovieSDK {
    static fetchRandomMovies() {
        throw new Error("Method not implemented.");
    }
    constructor(searchQuery, url) {
        this.searchQuery = searchQuery;
        this.url = url;
    }
    // Function to fetch random movies && search for movies
    searchMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}?q=${this.searchQuery}`);
                const data = yield response.json();
                return data.results;
            }
            catch (error) {
                console.error('Error fetching random movies:', error);
                return [];
            }
        });
    }
    // Function to retrieve movie details on selected movie
    getMovieDetails(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.url}?tt=${movieId}`);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error('Error fetching movie details:', error);
                return null;
            }
        });
    }
}
// 4. Integrate with State Manager (e.g., Redux)
// You can dispatch actions and manage state within your React components using Redux or any other state management solution.
exports.default = MovieSDK;
