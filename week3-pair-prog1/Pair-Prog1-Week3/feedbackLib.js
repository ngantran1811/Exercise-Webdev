let feedbacks = [] 
let nextId = 0;




// addOne(sender, message, rating, platform)
// push method = array.push(new entry)
function addOne(sender, message, rating, platform) {
    const feedback = { id: nextId++, sender, message, rating, platform};
    feedbacks.push(feedback)
    return feedback;
}


// findById(id)
function findById(id) {
    const numericalId = Number(id);
    const feedback = feedbacks.find((item) => item.id === numericalId);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

// update(id, data)
function update(id, data) {
    const feedback = findById(id)
    if (feedback) {
        if (data.sender) feedback.sender = data.sender;
        if (data.message) feedback.message = data.message;
        if (data.rating) feedback.rating = data.rating; 
        if (data.platform) feedback.platform = data.platform; 
        return feedback;      
    }
    return false;
}
// deleteOne(id)
function deleteOne(id) {
    const feedback = findById(id);

  if (feedback) {
    const initialLength = feedbacks.length;

    feedbacks = feedbacks.filter(
      (item) => item.id != id
    );

    return feedbacks.length < initialLength;
  }

  return false;
}
  
// getAll()
function getAll() {
    return feedbacks;
}



if (require.main === module) {
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  console.log(result);
  
  update(0, {message: "texting"})
  console.log(getAll())
  addOne("John SmithX",
    "Great sXXession on React components!",
    55,
    "mobileXX")
    console.log("We made something")
    console.log(getAll())
    deleteOne(0)
    console.log("WE JUST DELETED SOMETHING")
    console.log(getAll())

    addOne("John Smith", "Great session!", 5, "mobile");
    addOne("Anna Brown", "Very useful examples.", 4, "desktop");

    console.log("getAll called:", getAll());
    }
Feedback = {getAll, findById, update, addOne, deleteOne};
module.exports = Feedback;