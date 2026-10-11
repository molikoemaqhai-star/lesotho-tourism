import maletsunyane from "../images/maletsunyane.jpg";
import katseDam from "../images/katse-dam.jpg";
import thabaBosiu from "../images/thaba-bosiu.jpg";
import saniPass from "../images/sani-pass.jpg";
import sehlabathebe from "../images/sehlabathebe.jpg";
import bokong from "../images/bokong.jpg";
import liphofung from "../images/liphofung.jpg";
import afriski from "../images/afriski.jpg";

const attractions = [
  {
    id: 1,
    name: "Maletsunyane Falls",
    image: maletsunyane,
    location: "Semonkong",
    category: "Nature",
    description:
      "A spectacular waterfall surrounded by dramatic mountain scenery near Semonkong.",
    activities: [
      "Hiking",
      "Photography",
      "Pony Trekking",
      "Sightseeing"
    ],
    cost: "M100 - M350"
  },

  {
    id: 2,
    name: "Katse Dam",
    image: katseDam,
    location: "Lesotho Highlands",
    category: "Sightseeing",
    description:
      "An impressive highland destination combining spectacular scenery with remarkable engineering.",
    activities: [
      "Guided Tours",
      "Photography",
      "Sightseeing",
      "Scenic Drives"
    ],
    cost: "M100 - M300"
  },

  {
    id: 3,
    name: "Thaba Bosiu",
    image: thabaBosiu,
    location: "Maseru District",
    category: "Culture",
    description:
      "A historic mountain stronghold deeply connected to the history and heritage of the Basotho nation.",
    activities: [
      "Cultural Tours",
      "History",
      "Hiking",
      "Photography"
    ],
    cost: "M50 - M200"
  },

  {
    id: 4,
    name: "Sani Pass",
    image: saniPass,
    location: "Mokhotlong District",
    category: "Adventure",
    description:
      "A dramatic mountain route offering unforgettable highland scenery and an adventurous journey.",
    activities: [
      "Scenic Drives",
      "Photography",
      "Hiking",
      "Mountain Adventure"
    ],
    cost: "M200 - M800"
  },

  {
    id: 5,
    name: "Sehlabathebe National Park",
    image: sehlabathebe,
    location: "Qacha's Nek District",
    category: "Nature",
    description:
      "A remote highland national park known for distinctive landscapes, rock formations and natural beauty.",
    activities: [
      "Hiking",
      "Bird Watching",
      "Photography",
      "Nature Exploration"
    ],
    cost: "M100 - M400"
  },

  {
    id: 6,
    name: "Bokong Nature Reserve",
    image: bokong,
    location: "Lesotho Highlands",
    category: "Nature",
    description:
      "A beautiful high-altitude reserve offering mountain scenery, walking opportunities and peaceful surroundings.",
    activities: [
      "Hiking",
      "Bird Watching",
      "Photography",
      "Nature Walks"
    ],
    cost: "M80 - M300"
  },

  {
    id: 7,
    name: "Liphofung Cave",
    image: liphofung,
    location: "Butha-Buthe District",
    category: "Culture",
    description:
      "A cultural and historical site where visitors can learn more about Lesotho's heritage and early inhabitants.",
    activities: [
      "Cultural Tours",
      "History",
      "Rock Art",
      "Photography"
    ],
    cost: "M50 - M200"
  },

  {
    id: 8,
    name: "Afriski Mountain Resort",
    image: afriski,
    location: "Butha-Buthe District",
    category: "Adventure",
    description:
      "A high-altitude mountain destination offering seasonal recreation and spectacular views.",
    activities: [
      "Skiing",
      "Snow Activities",
      "Mountain Biking",
      "Sightseeing"
    ],
    cost: "M300+"
  }
];

export default attractions;