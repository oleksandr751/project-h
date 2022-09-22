import beethoven_src from "../data/greatPeople_images/Beethoven.jpg";
import bach_src from "../data/greatPeople_images/Bach.png";
import brahms_src from "../data/greatPeople_images/Brahms.jpg";
import einstein_src from "../data/greatPeople_images/Einstein.jpg";
import goethe_src from "../data/greatPeople_images/Goethe.jpg";
import mozart_src from "../data/greatPeople_images/Mozart.jpg";
export const greatPeople = [
  {
    countryID: "1",
    countryName: "Germany",
    dateStart: "1770",
    dateEnd: "1827",
    imageSrc: beethoven_src,
    name: "Ludwig Van Beethoven",
    occupation: "Composer",
    tags: ["Music", "Composer"],
  },
  {
    countryID: "4",
    countryName: "Austria",
    dateStart: "1756",
    dateEnd: "1791",
    imageSrc: mozart_src,
    name: "Wolfgang Amadeus Mozart",
    occupation: "Composer",
    tags: ["Music", "Composer"],
  },
  {
    countryID: "1",
    countryName: "Germany",
    dateStart: "1685",
    dateEnd: "1750",
    imageSrc: bach_src,
    name: "Johann Sebastian Bach",
    occupation: "Composer",
    tags: ["Music", "Composer"],
  },
  {
    countryID: "1",
    countryName: "Germany",
    dateStart: "1879",
    dateEnd: "1955",
    imageSrc: einstein_src,
    name: "Albert Einstein",
    occupation: "Scientist",
    tags: ["Science", "Physics"],
  },
  {
    countryID: "1",
    dateStart: "1833",
    dateEnd: "1897",
    countryName: "Germany",
    imageSrc: brahms_src,
    name: "Johannes Brahms",
    occupation: "Composer",
    tags: ["Music", "Composer"],
  },
  {
    countryID: "1",
    countryName: "Germany",
    dateStart: "1749",
    dateEnd: "1832",
    imageSrc: goethe_src,
    name: "Johann Wolfgang Von Goethe",
    occupation: "Writer",
    tags: ["Poet", "Writer"],
  },
  {
    countryID: "5",
    countryName: "France",
    dateStart: "1769",
    dateEnd: "1821",
    imageSrc: "",
    name: "Napoleon Bonaparte",
    occupation: "Political leader",
    tags: ["Politics", "Military"],
  },
];
