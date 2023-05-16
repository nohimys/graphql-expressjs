import express from 'express'

const PORT = 5001;

const app = express();
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});