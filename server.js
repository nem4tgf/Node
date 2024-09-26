const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const studentRoutes = require('./controller/studentRoutes');
app.use('/students', studentRoutes);


const PORT = process.env.PORT || 27107;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
