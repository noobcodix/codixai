const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Handle form submission route (placeholder)
app.post('/api/launch', (req, res) => {
    const { topic, sourceMaterial } = req.body;
    console.log(`Launching engine for topic: ${topic}`);
    res.json({ success: true, message: "Engine launched successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});