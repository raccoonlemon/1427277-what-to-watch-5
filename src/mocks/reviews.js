const texts = [
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
];

const reviewDate = new Date(Date.UTC(2020, 10, 12, 0, 0, 0, 0));

export const reviews = [
  {
    id: 1,
    date: reviewDate,
    author: `Ellie`,
    rating: 10,
    text: texts[0],
  },
  {
    id: 2,
    date: reviewDate,
    author: `Max`,
    rating: 5,
    text: texts[1]
  },
  {
    id: 3,
    date: reviewDate,
    author: `Parvati`,
    rating: 8,
    text: texts[2]
  },
  {
    id: 4,
    date: reviewDate,
    author: `Felix`,
    rating: 8,
    text: texts[3]
  },
  {
    id: 5,
    date: reviewDate,
    author: `Nyoka`,
    rating: 4,
    text: texts[4]
  }
];
