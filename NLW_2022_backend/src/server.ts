import express from 'express'

const app = express();

app.get('/users', (req, res) => {
    return res.send('Is working');
})

app.listen(3333, () => {
    console.log('Working...');
})