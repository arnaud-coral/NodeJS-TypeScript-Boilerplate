import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import healthRoute from './routes/healthRoute';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', healthRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${port}`);
});
