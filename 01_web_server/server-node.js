const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello chai")
    } else if (req.url === '/chai') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Thanks for ordering chai, it really hot")
    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', "text/plain")
        res.end("404 Not found")       
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})