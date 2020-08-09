import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    res.send(`Screenplay agent@$`);
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
});
