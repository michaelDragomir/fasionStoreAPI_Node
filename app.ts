import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/*', function (req: Request, res: Response) {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'working' });
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export default app;
