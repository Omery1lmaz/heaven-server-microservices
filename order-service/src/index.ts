import express from 'express'

const app = express();

function start() {
    app.listen(4000, (err) => {
        if (!err)
            console.log("app listening on port 40001 !!!")
    })
}

start()