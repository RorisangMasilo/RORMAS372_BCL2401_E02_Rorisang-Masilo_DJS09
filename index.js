"use strict";
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
Object.defineProperty(exports, "__esModule", { value: true });
const reviewTotalDisplay = document.querySelector("#reviews");
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");
let isOpen;
//Reviews
const reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021",
    },
];