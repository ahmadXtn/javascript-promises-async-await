import {fetchBooks,fetchMovies,fetchWithTimeout} from "services.js";

const movies=  require('./data/movies.json');


function getBooksAndMovies(){
	return Promise.all([fetchMovies(),fetchBooks()])
		.then(([movies,books])=>{
			return {
				movies,
				books
			}
		})
		.catch(error => console.log("Error fetching books and movies", error));
}


const getBooksAndMoviesPromise=getBooksAndMovies();

getBooksAndMovies().then(results=>{
	console.log('getBooksAndMoviesPromise', results);
})
