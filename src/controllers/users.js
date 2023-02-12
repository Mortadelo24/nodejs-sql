const connection = require('../connection')

const users = [
    { id: 1, nombre: 'pablo', edad: 25 },
    { id: 2, nombre: 'Carlos', edad: 45 },
    { id: 3, nombre: 'Aluz', edad: 40 },
]

const getUsers = (req, res) => {
    const sql = 'select * from users'
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Ha oacurrido un error en sql')
        } else {
            console.log(result)
            res.render('users', { users: result })
        }

    })


}

const GetCreateUsers = (req, res) => {

    res.render('create-user')
}

const GetUpdateUsers = (req, res) => {
    console.log('dasdasdasdasdsa')
    const param = req.params.id
    const sql = 'select * from users where id=?'
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('Ha oacurrido un error en sql: ' + err)
        } else {
            console.log(result)
            res.render('update-user', { user: result })
        }
    })


}

const GetDeleteUsers = (req, res) => {
    const param = req.params.id
    const sql = 'select * from users where id=?'
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('Ha oacurrido un error en sql: ' + err)
        } else {
            console.log(result)
            res.render('delete-user', { user: result })
        }
    })
}

const createUser = (req, res) => {
    const sql = 'insert into users SET ?'
    const data = req.body
    connection.query(sql, data, (err, result) => {
        if (err) {
            console.log('Ha oacurrido un error en sql')
        } else {
            console.log('Usuario registrado')
            res.redirect('/user/all')
        }
    })

}
const updateUsers = (req, res) => {
    const param = req.params.id
    const sql = `update users SET name='${req.body.name}', age='${req.body.age}' where id = ${param}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Hay un error' + err)
        }else {
            console.log('Usuario actualizado')
            res.redirect('/user/all')
        }

    })


}
const deleteUsers = (req, res) => {
    const param = req.params.id
    const sql = `delete from users where id = ${param}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Hay un error' + err)
        }else {
            console.log('Usuario actualizado')
            res.redirect('/user/all')
        }

    })
}


module.exports = { getUsers, GetCreateUsers, GetUpdateUsers, GetDeleteUsers, createUser, updateUsers, deleteUsers }