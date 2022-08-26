// import url from 'node:url'

const http = require('http')
const url = require('url')
const {exec} = require('child_process')

const hostname = '192.168.0.5'
const port = 3000

const prepareResponse = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    

    const query = url.parse(req.url, true).query
    exec(`ls -lh -a\n`, (err, stdout, stderr) =>{
        res.end(stdout)
    })
    // res.end('Maluco blza')
}

const server = http.createServer(prepareResponse)

server.listen(port, hostname, ()=> {console.log(`Servidor rodando em http://${hostname}:${port}`)})