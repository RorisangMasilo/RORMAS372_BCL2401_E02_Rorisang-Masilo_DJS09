enum loyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

export default interface Review {
  name: string;
  stars: number;
  loyaltyUser: loyaltyUser;
  date: string;
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}
