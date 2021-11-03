// 1. Deconstruct

// Arrays
const items = ["banana", "chocolate", "apple", "cheese"];

const [banana, chocolate, apple, cheese] = items;
console.log(banana);

const [bnan, choc, ...rest] = items; // rest operator
console.log(rest);

const newItems = [...items, "new stuff"]; // spread operator
console.log(newItems);

// Objects
const user = {
  name: "Jed",
  photos: [1, 2, 3, 4, 5, 6, 7],
  age: 22,
  analytics: {
    subscribers: 500,
    videos: 150,
  },
};

// using deconstruction:
const { photos, age } = user;
console.log(photos);

// just analytics object
const { subscribers } = user.analytics;
console.log(subscribers);

const {
  analytics: { subscribers },
} = user;

// traditionally you would use:
// const subs = user.analytics.subscribers;
