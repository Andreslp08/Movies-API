const {connection} = require('../index');

const getActors = (req, res) => {
    const sql = 'SELECT * FROM actor';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Actors: No results');
        }
    });
}

const getActorById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM actor WHERE id = ${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Actors: No results');
        }
    });
}


const addActor = (req, res) => {
    const sql = 'INSERT INTO actor SET ?';
    const object = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('added actor');
    });
}

const updateActor = (req, res) => {
    const { id } = req.params;
    const object = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    const sql = `UPDATE actor SET ? WHERE id = ${id}`;
    connection.query(sql, object, error => {
        if (error) throw error;
        res.send('updated actor');
    });
}

const deleteActor = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM actor WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('deleted actor');
    });
}


module.exports = {
    getActors,
    getActorById,
    addActor,
    updateActor,
    deleteActor
}



