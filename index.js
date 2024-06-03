
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000;

// মিডলওয়্যার
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('code is running')
});

app.listen(port, () => {
    console.log(`tour guide is on port ${port}`);
})
