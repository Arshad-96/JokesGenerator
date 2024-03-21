const jokebtn = document.getElementById("btn");
const jokeWord = document.getElementById("joke");

const apiKey = "ighGhrFvNX1MdsMaNAYt7A==ng5JDb0fkb115ave";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
jokebtn.addEventListener("click", getJoke);

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  // console.log("clicked")
  try {
    jokeWord.innerText = "Updating...";
    jokebtn.disabled = true;
    jokebtn.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    jokebtn.disabled = false;
    jokebtn.innerText = "Tell me a joke";
    //   console.log(data[0].joke);
    jokeWord.innerText = data[0].joke;
  } catch (error) {
    jokeWord.innerText = "An error happened, try again";
    jokebtn.disabled = false;
    jokebtn.innerText = "Tell me a joke";
    console.log(data);
  }
}
