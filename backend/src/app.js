import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import UserRoutes from './routes/user.routes.js'
import ProviderRoutes from './routes/provider.routes.js'

const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', UserRoutes);
app.use('/api/providers',ProviderRoutes)













export { app }