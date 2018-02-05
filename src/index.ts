import app from './App'

const port = process.env.PORT || 3001;

app.listen(port, (err: any) => {
    if (err) {
        return console.log(err); // eslint-disable-line
    }
    return console.log(`server is listening on ${port}`) // eslint-disable-line
})

// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
const gracefulShutdown = function () {
    console.log('Received kill signal, shutting down gracefully.') // eslint-disable-line
}

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown)

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown)

process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2')
})

process.on('SIGUSR2', () => {
    process.exit(0)
})

console.log("hello world");
