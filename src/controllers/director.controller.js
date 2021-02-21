
const {connection} = require('../index');

const getDirectors = (req, res) => {
    const sql = 'SELECT * FROM director';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Directors: No results');
        }
    });
}

const getDirectorById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM director WHERE id = ${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Directors: No results');
        }
    });
}


const addDirector = (req, res) => {
    const sql = 'INSERT INTO director SET ?';
    const object = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('added director');
    });
}

const updateDirector = (req, res) => {
    const { id } = req.params;
    const object = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    const sql = `UPDATE director SET ? WHERE id = ${id}`;
    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('updated director');
    });
}

const deleteDirector = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM director WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('deleted director');
    });
}

module.exports = {
    getDirectors,
    getDirectorById,
    addDirector,
    updateDirector,
    deleteDirector
}



