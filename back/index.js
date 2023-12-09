
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const { resourceLimits } = require('worker_threads')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))
// const JWT = require('jsonwebtoken')
// const secretWord = 'Samus#Aran'

const credentials = {
	host: 'docmec.clcod1kjshsc.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: 'omega123',
	database: 'docmec'
}

app.get('/', (req, res) => {
	res.send('Desplegado')
})

app.post('/api/login', (req, res) => {
	const { email, password } = req.body
	const values = [email, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM usuario WHERE email = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"idlogin": result[0].id,
					"email": result[0].email,
					"nombre": result[0].nombre
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
	connection.end()
})

app.post('/api/loginAdmin', (req, res) => {
	const { email, password } = req.body
	const values = [email, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM medico WHERE email = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"idlogin": result[0].id,
					"email": result[0].email,
					"nombre": result[0].nombre
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
	connection.end()
})

app.post('/api/registro', (req, res) => {
	const { email,password,nombre,edad,estatura,numero,alergias, comidasFavoritas } = req.body
	const params = [[email,password,nombre,edad,estatura,numero,alergias, comidasFavoritas]]
	var connection = mysql.createConnection(credentials)
	connection.query('INSERT INTO usuario (email, password, nombre, edad, estatura, numero, alergias, comidasFavoritas) VALUES ?', [params], (err, result) => {
		if (err) {
			res.status(500).send(err)

		} else {
			res.status(200).send({ "status": "success", "message": "Usuario creado" })
		}
	})
	connection.end()
})

app.post('/api/registroAdmin', (req, res) => {
	const { email,password,numero,nombre } = req.body
	const params = [[email,password,numero,nombre]]
	var connection = mysql.createConnection(credentials)
	connection.query('INSERT INTO medico (email, password, numero, nombre) VALUES ?', [params], (err, result) => {
		if (err) {
			res.status(500).send(err)

		} else {
			res.status(200).send({ "status": "success", "message": "Usuario creado" })
		}
	})
	connection.end()
})

app.post('/api/usuarioTest', (req, res) => {
	const {email} = req.body
	const params = [[email]]
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM usuario WHERE email=?', params, (err, rows) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.post('/api/editar', (req, res) => {
	const { nombre,edad,estatura,numero,alergias, comidasFavoritas,peso , pesoObjetivo, email } = req.body
	const params = [nombre,edad,estatura,numero,alergias, comidasFavoritas,peso , pesoObjetivo, email]
	var connection = mysql.createConnection(credentials)
	connection.query('UPDATE usuario set nombre=?, edad =?, estatura =?, numero =?, alergias =?, comidasFavoritas=?, peso=?, pesoObjetivo=? WHERE email=?', params, (err, result) => {
		if (err) {					
			res.status(500).send(err)
		} else {
			res.status(200).send({ "status": "success", "message": "USuario editado" })
		}
	})
	connection.end()
})


app.post('/api/agendar', (req, res) => {
	const {nombre,fecha,hora} = req.body
	const params = [[nombre,fecha,hora]]
	var connection = mysql.createConnection(credentials)
	connection.query('INSERT INTO citas (nombre,fecha,hora) VALUES ?', [params], (err, result) => {
		if (err) {
			res.status(500).send(err)

		} else {
			res.status(200).send({ "status": "success", "message": "Cita Agendada" })
		}
	})
	connection.end()
})

app.get('/api/allCitas', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM citas', (err, rows) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(rows)
		}
	})
})

app.post('/api/CitaUser', (req, res) => {
    const { nombre } = req.body;
    const params = [[nombre]];
    var connection = mysql.createConnection(credentials);

    connection.query('SELECT * FROM usuario WHERE nombre=?', params, (err, rows) => {
        if (err) {
            console.error('Error en la consulta SQL:', err);
            res.status(500).send(err);
        } else {
            console.log('Filas obtenidas:', rows);
            res.status(200).send(rows);
        }
    });
});
app.listen(5000, () => console.log('Servidor en marcha'))