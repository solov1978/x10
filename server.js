const express = require('express');
const app = express();
const port = 3000;

// Двумерный массив для хранения цветов ячеек
const grid = Array.from({ length: 10 }, () => Array(10).fill('white'));

app.use(express.static('public'));

// Endpoint для изменения цвета ячейки
app.get('/color', (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    const color = req.query.color;

    if (x >= 0 && x < 10 && y >= 0 && y < 10 && color) {
        grid[y][x] = color;
        res.send(`Cell (${x}, ${y}) updated to color: ${color}`);
    } else {
        res.status(400).send('Invalid coordinates or color');
    }
});

// Endpoint для получения текущего состояния сетки
app.get('/grid', (req, res) => {
    res.json(grid);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
