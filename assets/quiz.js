const finish_btn = document.getElementById("finish-button");
const next_btn = document.getElementById("next-button");
const prev_btn = document.getElementById("prev-button");
prev_btn.disabled = true;
let questionIndex = 0;
const quiz_form = document.querySelector("#quizForm");
const answers = {};
displayQuestion(questionIndex);

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers
  let input = event.target;
  answers[input.name] = input.value;
}

function displayQuestion(index) {
  let currentQuestion = questions[index];
  
  let questionHTML = 
  `    
  <h2>${currentQuestion.text}</h2>
  <div class="label-container">
  ${currentQuestion.options.map(option => `
  <input type="radio" id="${option.value}" name="${currentQuestion.name}" value="${option.value}" ${answers[currentQuestion.name] == option.value ? "checked" : ""}>
  <label for="${option.value}">
    <div class="img-wrap">
      <img src="${option.img}">
    </div>
    <span>${option.label}</span>
  </label>`

  ).join('')}
  </div>
  `;

  quiz_form.innerHTML = questionHTML;
}



next_btn.addEventListener("click", () => {
  prev_btn.removeAttribute("disabled");
  if (questionIndex == (questions.length - 2)) {
    next_btn.style.display = "none";
    finish_btn.style.display = "flex";
  }
  questionIndex++;
  displayQuestion(questionIndex);

});

prev_btn.addEventListener("click", () => {
  next_btn.style.display = "flex";
  finish_btn.style.display = "none";
  if (questionIndex == 1) {
    prev_btn.setAttribute("disabled", true);
  } 
  questionIndex--;
  displayQuestion(questionIndex);

});


finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});

