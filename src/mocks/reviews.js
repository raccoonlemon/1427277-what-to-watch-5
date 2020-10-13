import {Random} from "../utils/random";

const texts = [
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
];

const authors = [
  `John Smith`,
  `Kate Muir`,
  `Bill Goodykoontz`,
  `Amanda Greever`,
  `Paula Fleri-Soler`,
  `Matthew Lickona`
];


export const generateMockReviews = (films)=>{
  const reviews = [];

  films.forEach((film) => {
    const MIN_REVIEWS_COUNT = 10;
    const MAX_REVIEWS_COUNT = 50;

    const reviewsCount = Random.getNumber(MIN_REVIEWS_COUNT, MAX_REVIEWS_COUNT);

    for (let index = 0; index < reviewsCount; index++) {
      reviews.push(generateMockReview(film.id));
    }
  });

  return reviews;
};

const generateMockReview = (filmId)=>{
  const MAX_SCORE = 10;
  const MIN_SCORE = 5;

  const startDate = new Date();
  const DAYS_RANGE = -500;

  return {
    filmId,
    date: Random.getDate(startDate, DAYS_RANGE),
    author: Random.getArrayElement(authors),
    rating: Random.getNumber(MIN_SCORE, MAX_SCORE),
    text: Random.getArrayElement(texts)
  };
};
