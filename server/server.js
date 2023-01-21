import express from 'express';
import session from 'express-session';
import cors from 'cors';

const app = express();
const PORT = 1234;

app.use(
    session({
        secret: 'secret',
        resave: false,
        savedUninitialized: false
    })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin:'http://local:1234',
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use((req, res, next) => {
    next();
})

//app.use()

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));