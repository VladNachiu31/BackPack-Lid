// Import the Backpack class so we can make new Backpack objects.
import Backpack from "./Backpack.js";

// Create new Backpack object
const vladbackpack = new Backpack(
  "pack01",
  "Vlad BackPack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/Vlad BackPack.svg"
);

// Create new Backpack object
const officebackpack = new Backpack(
  "pack02",
  "Office BackPack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "../assets/images/Office BackPack.svg"
);

// Add Backpack objects into an array
const backpackObjectArray = [vladbackpack, officebackpack];

// Export the array to be used in other files
export default backpackObjectArray;
