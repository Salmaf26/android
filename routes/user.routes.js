const { Router } = require ("express");
const promisePool = require ("../database/dbPool");

const router = Router();

//peticion get obtener
router.get('/', async (req, res) => {
    

    const data = await promisePool.query('SELECT * FROM users');

    res.json({
        msg: 'usuario get',
        data
    });
});



//post enviar/postera
router.post('/', async (req, res) => {

    const query = 'INSERT INTO users(name_user, email, password,status_user) VALUES("daniel", "daniel@gmail.com", "1233", "1" )'
    const data = await promisePool.query(query);

    res.json({
        msg: 'usuario get',
        data
    });
});


//delete eliminar

//update actualizar

//put sirve para actualizar e insertar dar}tos

module.exports = router;
