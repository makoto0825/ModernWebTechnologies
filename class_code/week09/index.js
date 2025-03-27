import express from express
import cors from cors
import mongoose from mongoose
import dotenv from dotenv
import book_router from "./routers/book_router.js"


dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to DB
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.get('/', (req, res) => {
  //1- fetch from DB
  //2- send to client

  Book.find().then((results) => {
    res.json(results);
  });
});

//routes
app.use('/books', book_router);
app.use("/users", user_router);