const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");
const productRouter = require('./routes/productRouter');
const {
  unknownEndpoint,
  errorHandler,
  requestLogger,
} = require('./middleware/customMiddleware');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api/products', productRouter);
app.use("/api/users", userRouter);
app.use(unknownEndpoint);
app.use(errorHandler);


module.exports = app;