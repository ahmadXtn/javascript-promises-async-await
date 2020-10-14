import {fetchWithTimeout} from "./services";

const movies=  require('movies');
export function fetchMovies() {
	const resolveFunction = () => movies;
	return fetchWithTimeout(1000).then(resolveFunction)
}




let moviePromise=fetchMovies()
	.then(result=>console.log(result))
