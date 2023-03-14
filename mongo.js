const mongoose = require("mongoose");
const URI = `mongodb+srv://bakytbektatibekov:m7lZkPjzQAavIoE8@formula312.qbkqy9w.mongodb.net/Formula312?retryWrites=true&w=majority`;

module.exports = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
};
