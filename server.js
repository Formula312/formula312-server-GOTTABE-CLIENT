const express = require("express");
const mongo = require("./mongo");
const app = express();
const vendorsSchema = require("./schemas/vendors-schema");
const PORT = 8800;

async function connect() {
  await mongo().then(async (mongoose) => {
    try {
      console.log("Connected to the DB!");

      const vendor = {
        id: "1",
        title: "Miguel's car detailing",
        location: "New York",
        fullAddress: "1542 N Broadway, Baltimore, MD 21213",
        image: "./assets/wax.jpeg",
        rate: 5.0,
        promoRate: 195,
        basePrice: 195,
        promoContentTop: "top company",
        promoContentBottom: "Located near you",
        serviceTypes: {
          interior: [
            "Thorough vacuum",
            "Deep carpet shampooing",
            "Hot water extraction",
            "Stain removal",
            "Leather seats cleaned and conditioned",
            "Door jambs cleaned",
          ],
          exterior: [
            "Carnauba wash application",
            "Bug, road tar and tree sap removed",
            "Tire shine",
            "Wheel cleaning",
            "Wheel fender cleaning",
            "Paint sealer application",
          ],
        },
      };

      await new vendorsSchema(vendor).save();
    } catch (error) {
      console.log(error);
    } finally {
      mongoose.connection.close();
    }
  });
}

connect();

app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`));
