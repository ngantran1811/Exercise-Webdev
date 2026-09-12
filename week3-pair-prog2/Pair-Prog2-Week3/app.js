
const express = require("express");
const app = express();

app.use(express.json()); 

const {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
} = require("./tourHandlers");


app.get("/tours", getAllTours);

app.post("/tours", createTour);

app.get("/tours/:tourId", getTourById);

app.patch("/tours/:tourId", updateTour);

app.delete("/tours/:tourId", deleteTour);

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

