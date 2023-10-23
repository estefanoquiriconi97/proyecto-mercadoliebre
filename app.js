const express = require('express');
const path = require('path');
const port = 3030

const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})