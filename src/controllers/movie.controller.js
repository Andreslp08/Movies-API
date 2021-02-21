
const {connection} = require('../index');

const getMovies = (req, res) => {
    const sql = 'SELECT * FROM movie';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Movies: No results');
        }
    });
}

const getMoviesByYear = (req, res) => {
    const { year } = req.params;
    const sql = `SELECT * FROM movie WHERE movie.year = ${year};`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send(`Movies of ${year}: No results`);
        }
    });
}

const getMovieById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM movie WHERE id = ${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('No results');
        }
    });
}


const addMovie = (req, res) => {
    const sql = 'INSERT INTO movie SET ?';
    const object = {
        name: req.body.name,
        year: req.body.year,
        imgPath: req.body.imgPath,
        duration: req.body.duration,
        rating: req.body.rating,
        synopsis: req.body.synopsis,
        link: req.body.link
    }

    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('added movie');
    });
}

const updateMovie = (req, res) => {
    const { id } = req.params;
    const object = {
        name: req.body.name,
        year: req.body.year,
        imgPath: req.body.imgPath,
        duration: req.body.duration,
        rating: req.body.rating,
        synopsis: req.body.synopsis,
        link: req.body.link
    }
    const sql = `UPDATE movie SET ? WHERE id = ${id}`;
    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('updated movie');
    });
}

const deleteMovie = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM movie WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('deleted movie');
    });
}



module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    getMoviesByYear
}



