const quiz=[

{
question:"Which language runs in a web browser?",
answers:["Python","Java","JavaScript","C++"],
correct:2
},

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks and Text Markup Language",
"High Text Machine Language"
],
correct:0
},

{
question:"Which company developed JavaScript?",
answers:["Microsoft","Netscape","Google","Apple"],
correct:1
},

{
question:"Which symbol is used for comments in JavaScript?",
answers:["//","##","<!-- -->","**"],
correct:0
}

];

let current=0;
let score=0;

const question=document.getElementById("question");
const buttons=document.querySelectorAll(".answer");
const scoreText=document.getElementById("score");

function loadQuestion(){

question.innerText=quiz[current].question;

buttons.forEach((btn,index)=>{
btn.innerText=quiz[current].answers[index];
});

}

function checkAnswer(index){

if(index===quiz[current].correct){
score++;
}

buttons.forEach(btn=>btn.disabled=true);

}

function nextQuestion(){

buttons.forEach(btn=>btn.disabled=false);

current++;

if(current<quiz.length){

loadQuestion();

}else{

document.querySelector(".quiz-container").innerHTML=`
<h2>Quiz Finished!</h2>
<h3>Your Score: ${score}/${quiz.length}</h3>
`;

}

}

loadQuestion();
