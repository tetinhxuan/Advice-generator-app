document.getElementById("dice").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const id = data.slip.id;
      const advice = data.slip.advice;

      document.querySelector("h1").innerText = advice;
      document.querySelector("p").innerText = "advice #" + id;
    });
});
