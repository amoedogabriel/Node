
import express, {Request, Response} from 'express';
import validaEnv from './utils/validaEnv';
import dotenv from 'dotenv';

dotenv.config();
validaEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (req: Request, res: Response) => {
    res.end("Hello World!");
})


app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})