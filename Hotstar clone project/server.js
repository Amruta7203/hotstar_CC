const express = require('express');
const path = require('path');
const app = express();

// Serve static files (e.g., CSS, JS, Images)
app.use(express.static(path.join(__dirname, '')));

// Route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set the port to 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
