const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', schoolRoutes);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running at port ${PORT}`));
});
