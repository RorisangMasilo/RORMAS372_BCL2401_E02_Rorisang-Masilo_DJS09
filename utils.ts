const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
import { loyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";
/*
enum Permissions {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
}

enum loyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}
*/
export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: loyaltyUser
) {
  const iconDisplay = loyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    "review" +
    makeMultiple(value) +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    Element.appendChild(priceDisplay);
  }
}

function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0.2);
}
