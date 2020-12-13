Array.prototype.map = function () {
  const sourceArray = this;
  console.log("Custom map method:");
  for (let i = 0; i < sourceArray.length; i++) {
    console.log(sourceArray[i]);
  }
};

function xhrRequest(url) {
  console.log("XMLHttpRequest:");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.onload = function () {
    console.dir(xhr.response);
  };
  xhr.send();
}

function fetchRequest(url) {
  console.log("Fetch request:");
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.dir(data))
    .catch((error) => console.log("Fetch error: " + error));
}

let digitsArr = [1, 2, 3, 4, 5];
digitsArr.map();

let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
xhrRequest(url);
fetchRequest(url);
