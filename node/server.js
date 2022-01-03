const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    getPeople(res);
})

function getPeople(res) {
  const name = faker.name.findName()

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
    <div style="background-color: #363636;">
      <div style="display: flex; justify-content: center; color: white;">
         <img src="https://portal.code.education/bundles/sonbase/img/lms/fullCycle.svg?0.8.1"/>
         <h1 style="padding-left: 10px; font-size: 3rem"> Rocks!</h1>
      </div>
      <div style="display: flex; justify-content: center;">
        <ol style="color: white; font-size: 2rem">
          ${!!results.length ? results.map(data => `<li>${data.name}</li>`).join('') : ''}
        </ol>
      </div>
    </div>`)
  })
}

app.listen(port, () => {
  console.log('rodando na porta:', port);
})