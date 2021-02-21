const {connection} = require('../index');

const getGenres = (req, res) => {
    const sql = 'SELECT * FROM genre';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Genres: No results');
        }
    });
}

const getGenreById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM genre WHERE id = ${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Genres: No results');
        }
    });
}


const addGenre = (req, res) => {
    const sql = 'INSERT INTO genre SET ?';
    const object = {
        name: req.body.name
    }

    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('added genre');
    });
}

const updateGenre = (req, res) => {
    const { id } = req.params;
    const object = {
        name: req.body.name
    }
    const sql = `UPDATE genre SET ? WHERE id = ${id}`;
    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('updated genre');
    });
}

const deleteGenre = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM genre WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('deleted genre');
    });
}


module.exports = {
    getGenres,
    getGenreById,
    addGenre,
    updateGenre,
    deleteGenre
}



