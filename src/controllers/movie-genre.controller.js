const { connection } = require('../index');

const getAllMovieWithGenres = (req, res) => {
    const sql = `SELECT 
    movie_genre.id as id, 
    movie.id as movieId, 
    movie.name as movieName, 
    genre.id as genreId, 
    genre.name as genreName
    from movie_genre 
        left join movie on movie_genre.movieId = movie.id 
        left join genre on genre.id = movie_genre.genreId order by movie.name`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Movie and genres: No results');
        }
    });
}

const getMoviesByGenre = (req, res) => {
    const { genreId } = req.params;
    const sql = `SELECT 
    movie.id as movieId, movie.name as movieName, movie.year, movie.imgPath, movie.duration, movie.rating, movie.synopsis, movie.link, genre.name as genreNanme
    FROM movie_genre 
    inner join movie
    inner join genre 
    on movie.id = movie_genre.movieId and genre.id = movie_genre.genreId
    WHERE movie_genre.genreId = ${genreId} ORDER BY movie.name`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send(`Movies from genre ID ${year}: No results`);
        }
    });
}


const getGenresByMovieId = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT  genre.name as genres 
    from movie inner join movie_genre inner join genre
     on movie.id = ${id} and movie_genre.movieId = movie.id and movie_genre.genreId = genre.id;`
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Get movie genres: No results');
        }
    });
}


const addGenreTo = (req, res) => {
    const sql = 'INSERT INTO movie_genre SET ?';
    const object = {
        movieId: req.body.movieId,
        genreId: req.body.genreId
    }

    connection.query(sql, object, error => {
        if (error) throw error;
        res.send(`New genre added to movie ID : ${object.movieId}`);
    });
}

const updateGenreTo = (req, res) => {
    const { movieId, genreId } = req.params;
    const object = {
        genreId: req.body.genreId
    }
    const sql = `UPDATE movie_genre SET ? WHERE movie_genre.movieId = ${movieId} AND movie_genre.genreId = ${genreId}`
    connection.query(sql, object, error => {
        if (error) throw error;
        res.send(`Movie ID:${movieId} updated genre ID:${genreId} to genre ID:${object.genreId}`);
    });
}

const deleteGenreTo = (req, res) => {
    const { movieId, genreId } = req.params;
    const sql = `DELETE FROM movie_genre WHERE movie_genre.movieId = ${movieId} AND movie_genre.genreId = ${genreId}`
    connection.query(sql, error => {
        if (error) throw error;
        res.send(`Movie ID:${movieId} delete genre ID:${genreId}`);
    });
}
module.exports = {
    getAllMovieWithGenres,
    getGenresByMovieId,
    addGenreTo,
    updateGenreTo,
    deleteGenreTo,
    getMoviesByGenre
}



