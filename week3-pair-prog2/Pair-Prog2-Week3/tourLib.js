let Tours = []
let nextId = 1;

function addOne(name, info, image, price, location) {
    const newTour = { id: nextId++, name, info, image, price, location };
    Tours.push(newTour);
    return newTour;
}

const getAll = () => {
  return Tours;
};

const findById = (id) => {
  const tourId = Number(id);
  const findTour = Tours.find((item) => item.id === tourId);
  if (findTour) {
    return findTour;
  } else {
    return null;
  }
}


const update = (id, data) => {
    const tourId = Number(id);
    const findTour = Tours.find((item) => item.id === tourId)
    if (findTour) {
        if (data.name) findTour.name = data.name;
        if (data.info) findTour.info = data.info;
        if (data.image) findTour.image = data.image;
        if (data.price) findTour.price = data.price;
        if (data.location) findTour.location = data.location;
        return findTour;
    } else {
        return null;
    }
}

const deleteOne = (id) => {
  const index = Tours.findIndex(
    (tour) => tour.id === Number(id)
  );

  if (index === -1) {
    return false;
  }

  Tours.splice(index, 1);
  return true;
};


module.exports = {
  addOne,
  getAll,
  findById,
  update,
  deleteOne,
};
