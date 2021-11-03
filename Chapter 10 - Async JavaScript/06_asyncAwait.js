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

// loginUser("devjed@goomail.com", 123456)
//   .then((user) => getUserVideos(user.userEmail))
//   .then((video) => videoDetails(video[0]))
//   .then((detail) => console.log(detail));

// Specifically tell JavaScript this is asynchronous code by declaring async before function keyword
async function displayUser() {
  try {
    // try to run this code
    const loggedUser = await loginUser("devjed@goomail.com", 123456);
    console.log(loggedUser);
    const video = await getUserVideos(loggedUser.userEmail);
    console.log(video);
    const detail = await videoDetails(video[0]);
    console.log(detail);
  } catch (err) {
    // If it doesn't work then catch the error
    console.log("We could not get the videos");
  }
}

displayUser();

console.log("Finish");
