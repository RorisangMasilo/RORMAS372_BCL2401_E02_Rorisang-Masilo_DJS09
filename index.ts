import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils'
import { Permissions , loyaltyUser } from './enums';
import { Price, Country } from "./types"
import { Review, Property } from './interfaces'
import MainProperty from './classes'

//  const reviewTotalDisplay = document.querySelector("#reviews");
const propertyContainer = document.querySelector(".properties");
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container')
const button = document.querySelector('button');
const footer = document.querySelector(".footer");

let isLoggedIn: boolean;

enum Permissions {
  ADMIN = 'ADMIN',
  READ_ONLY = "READ_ONLY"
}

enum loyaltyUser {
  GOLD_USER = 'GOLD_USER',
  SILVER_USER = 'SILVER_USER',
  BRONZE_USER = 'BRONZE_USER'
}

interface Review {
  name: string;
  stars: number;
  loyaltyUser: loyaltyUser;
  date: string;
}

//Reviews
const reviews : Review[] = [
  {
    name: "Sheila",
    stars: 5,
    loyaltyUser: loyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: loyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: loyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: 'Great hosts, location was a bit further than said.',
  },
];

// User
const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  isReturning: true,
  age: 35,
  stayedAt: ['Florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
interface properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: './images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia'
    },
    contact: [+112343823978921, 'marywinkle@gmail.com']
    isAvailable: true
  },

  const properties : Property[] = [
  {
    image: './images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland'
    },
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
    isAvailable: false
  },
  {
  image: './images/london-property.jpg',
  title: 'London Flat',
  price: 25,
  location: {:
    firstLine: 'flat 15',
    city: 'London',
    code: 'SW4 5XW',
    country: 'United Kingdom',
  },
  contact: [+34829374892553, 'andyluger@aol.com'],
  isAvailable: true
  },
  {
    image: './images/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
      firstLine: 'Room 4',
      city: 'Malia',
      code: 45334,
      country: 'Malaysia'
    },
    contact: +60349822083, 'lee34@gmail.com'],
    isAvailable: false
  }
]


// Functions

showReviewTotal(reviews.length, reviews[0].name, 
  reviews[0].loyaltyUser)

/*let authorityStatus : any

isLoggedIn = false

function showDetails(authorityStatus: boolean |
  Permissions, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
      const priceDisplay = document.createElement('div')
      priceDisplay.innerHTML = price.toString() +
      '/night'
      element.appendChild(priceDisplay)
    }
  } */
populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i =0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  showDetails(you.permissions, card, properties[i].price)
  propertyContainer.appendChild(card)
}

let count = 0
function addReviews(array : Review[]) : void {
  if (!count ) {
    count++
    const topTwo = getTopTwoReviews(arrays)
    for (let i = 0,; i , topTen.length; i++) {
      const card = document.createElement('div')
      card.classList.add('review-card')
      card.innerHTML = topTwo[i].stars + 'stars from ' + topTen[i].name
      reviewContainer?.appendChild(card)
    }
    container?.removeChild(button)
  }
}

button?.addEventListener('click', () => addReviews(reviews))

let currentLocation : [string, string, number] = ['South Africa', '10:00', 20]
let currentLocation : [string, string, number] = ['London', '11.03', 17]

// classes
class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src
    this.title = title
    this.reviews = reviews
  }
}

let yourMainProperty = new MainProperty(
  'images/italian-property.jpg',
  'Italian House',
  [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: loyaltyUser.GOLD_USER,
    date: '12-04-2021'
  }]
)

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer?.appendChild(image)

footer.innerHTML = currentLocation[0]+ ' ' + currentLocation[1]+ '' +currentLocation[2]+ '°'
