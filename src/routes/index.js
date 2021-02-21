
const {Router} = require('express');
const router = Router();
const { getMovies, getMoviesByYear, getMovieById,  addMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');
const { getDirectors, getDirectorById, addDirector, updateDirector, deleteDirector } = require('../controllers/director.controller');
const { getGenres, getGenreById, addGenre, updateGenre, deleteGenre } = require('../controllers/genre.controller');
const { getActors, getActorById, addActor, updateActor, deleteActor } = require('../controllers/actor.controller');
const { getGenresByMovieId, getAllMovieWithGenres, addGenreTo, updateGenreTo, deleteGenreTo, getMoviesByGenre} = require('../controllers/movie-genre.controller');

// movies
router.get('/movies-api/movies/all', getMovies); 
router.get('/movies-api/movies/year/:year', getMoviesByYear); 
router.get('/movies-api/movies/:id', getMovieById); 
router.post('/movies-api/movies/add', addMovie); 
router.put('/movies-api/movies/update/:id', updateMovie); 
router.delete('/movies-api/movies/delete/:id', deleteMovie);
router.get('/movies-api/movies/all/movies-and-genres', getAllMovieWithGenres); 
router.get('/movies-api/movies/:id/movie-genres', getGenresByMovieId);
router.get('/movies-api/movies/movie-genres/genre/:genreId', getMoviesByGenre);
router.post('/movies-api/movies/add-genre', addGenreTo);
router.put('/movies-api/movies/:movieId/update-genre/:genreId', updateGenreTo);
router.delete('/movies-api/movies/:movieId/delete-genre/:genreId', deleteGenreTo);
// directors
router.get('/movies-api/directors/all', getDirectors); 
router.get('/movies-api/directors/:id', getDirectorById); 
router.post('/movies-api/directors/add', addDirector); 
router.put('/movies-api/directors/update/:id', updateDirector); 
router.delete('/movies-api/directors/delete/:id', deleteDirector); 
// genres
router.get('/movies-api/genres/all', getGenres); 
router.get('/movies-api/genres/:id', getGenreById); 
router.post('/movies-api/genres/add', addGenre); 
router.put('/movies-api/genres/update/:id', updateGenre); 
router.delete('/movies-api/genres/delete/:id', deleteGenre); 
// actors
router.get('/movies-api/actors/all', getActors); 
router.get('/movies-api/actors/:id', getActorById); 
router.post('/movies-api/actors/add', addActor); 
router.put('/movies-api/actors/update/:id', updateActor); 
router.delete('/movies-api/actors/delete/:id', deleteActor); 

module.exports = router;