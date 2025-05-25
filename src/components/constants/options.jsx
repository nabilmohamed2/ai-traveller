export const budgetInfo = [
  {
    logo: "💵",
    name: "Cheap",
    desc: "Stay conscious of cost",
  },
  {
    logo: "💰",
    name: "Moderate",
    desc: "Keep cost on the average side",
  },
  {
    logo: "💸",
    name: "Luxury",
    desc: "Don't worry about cost",
  },
];

export const noOfPeople = [
  {
    logo: "👦",
    name: "Just me",
    desc: "A solo travel in exploration",
  },
  {
    logo: "💑",
    name: "Couples",
    desc: "Two travelers in tandem",
  },
  {
    logo: "🏡",
    name: "Family",
    desc: "A group of fun loving adv",
  },
  {
    logo: "👥",
    name: "Friends",
    desc: "A bunch of thrill seekers",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} for {noOfPerson} with a {budgetType} budget,Give me a Hotels options list with HotelName, Hotel address(address should be concise with 3-4 words and keep key name as HotelAddress), Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format(Ex: {destination: 'Ladakh', noOfDays: '5', noOfPeople: 'Couples', budget: 'Luxury'})";
