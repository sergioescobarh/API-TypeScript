//imports:
import  express  from 'express';
const app = express();
const port = process.env.PORT || 3000;
import userRouter from './routes/users.routes';

//middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes:
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/users', userRouter);


//server:
app.listen(port||3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});
