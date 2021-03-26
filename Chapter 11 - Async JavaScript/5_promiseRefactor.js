// First we removed the callback parameters
// Secondly we return a promise and pass resolve & reject

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data!");
      resolve({ userEmail: email }); // invoke callback function when setTimeout runs
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["title of the video"]);
    }, 1000);
  });
}

// const user = loginUser("devjed@goomail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

loginUser("devjed@goomail.com", 123456)
  .then((user) => getUserVideos(user.userEmail)) // wait then...
  .then((videos) => videoDetails(videos[0])) // wait then...
  .then((detail) => console.log(detail)); // wait

// what if we don't want to wait for each execution and just receive everything at the same time?
const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting stuff from YouTube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting stuff from Facebook");
    resolve({ user: "Jed" });
  }, 4000);
});

Promise.all([yt, fb]).then((result) => console.log(result));

// Both fetch their data and execute at the same time.
// If one takes longer, the result is not going to return until both Promises are fulfilled.

console.log("Finish");
