console.log("Start");

// function loginUser(email, password, callback, onSuccess, onFailure) {
//   if(onFailure){} -- You would need to handle errors which can become really complex.

function loginUser(email, password, callback /*pass in a callback*/) {
  setTimeout(() => {
    console.log("Now we have the data!");
    callback({ userEmail: email }); // invoke callback function when setTimeout runs
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(["title of the video"]);
  }, 1000);
}

// invoking callback function triggers code below:
const user = loginUser("devjed@goomail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("Finish");
