const express = require('express');
const app = express();
const PORT = 3000;

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', './views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Render the layout.pug file from the views directory
    res.render('layout');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
