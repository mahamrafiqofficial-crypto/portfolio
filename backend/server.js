const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : '*',
}));
app.use(express.json());

app.get('/', (req, res) => res.send('Portfolio API is running'));
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'));

// sirf local pe listen karo, Vercel khud handle karta hai
if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`));
}

module.exports = app;