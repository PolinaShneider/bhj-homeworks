const pollTitle = document.querySelector("#poll__title");
const pollsList = document.querySelector("#poll__answers");

const getPollResult = async (voteId, index) => {
  const response = await fetch(`https://netology-slow-rest.herokuapp.com/poll.php?vote=${voteId}&answer=${index}`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  });
  const {stat} = await response.json();
  pollsList.textContent = "";
  let totalVotes = 0;
  for ({votes} of stat) {
    totalVotes += votes;
  }
  for (const {answer, votes} of stat) {
    pollsList.innerHTML += `${answer}: <strong>${(votes * 100 / totalVotes).toFixed(0)}</strong>%</br>`;
  }


  alert("Спасибо, ваш голос засчитан!");
};

(async () => {
  const response = await fetch("https://netology-slow-rest.herokuapp.com/poll.php");
  const body = await response.json();
  pollTitle.textContent = body.data.title;
  body.data.answers.forEach((item, index) => {
    const pollAnswer = document.createElement("button");
    pollAnswer.classList.add("poll__answer");
    pollAnswer.style.margin = "3px";
    pollAnswer.textContent = item;
    pollAnswer.addEventListener("click", () => {
      getPollResult(body.id, index);
    });
    pollsList.append(pollAnswer);
  });
})();