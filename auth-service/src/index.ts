import express from 'express'

const app = express();

function start() {
    app.listen(3000, (err) => {
        if (!err)
            console.log("Auth service listening on port 3000 !!!")
    })
}

start()