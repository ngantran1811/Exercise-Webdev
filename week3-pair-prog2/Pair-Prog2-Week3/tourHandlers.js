const Tours = require("./tourLib");


const getAllTours = (req,res) => {
  const tours = Tours.getAll();
  res.json(tours);
};

// REMEMBER TO FIX THESE
const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;
  if (!name || !info || !image || !price || !location) {
    return res.status(400).json({
    message: "Invalid tour data",
  })} else {
    const newTour = Tours.addOne(
    name,
    info,
    image,
    price,
    location
  );
  if (newTour) {
    res.status(201).json(newTour);
  } else {
    res.status(500).json({ message: "Failed to create Tour" });
  }
}};
  

// Remember to double check
const getTourById = (req, res) => {
  const tour = Tours.findById(req.params.tourId);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};


const updateTour = (req, res) => {
  const tourId = req.params.tourId;

  const updatedTour = Tours.update(tourId, req.body);
  
  if (updatedTour) {
    res.json(updatedTour);
  } else {
    res.status(404).json({message: "Tour not found"})
  }
  }

const deleteTour = (req, res) => {
  const deleted = Tours.deleteOne(req.params.tourId);
  if (!deleted ) {
    return res.status(404).json({message: "tour not found"});
  } 
  res.status(204).send();
};

module.exports = {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
}


