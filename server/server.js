import express from 'express';
import cors from 'cors';
import listingRoute from './listing/listing.js';
import studentRoute from './student/student.js';
import tutorRoute from './tutor/tutor.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 1234;

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  next();
});

app.use(listingRoute);
app.use(studentRoute);
app.use(tutorRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
