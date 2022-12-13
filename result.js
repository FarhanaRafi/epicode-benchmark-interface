let score=6

let totalQuestions=10

let diff= totalQuestions-score



let resultInfo=document.getElementById("result-info")
let result=document.getElementById("pass")
let message=document.getElementById("message")
let passedQuestions=document.getElementById("passed")
let failedQuestions=document.getElementById("failed")

let passPercent=document.getElementById("pass-percentage")
let failPercent=document.getElementById("fail-percentage")


if(score>=6){
  resultInfo.innerText="Congratiulations!"
  result.innerText="You passed the exam."
  message.innerText=`We'll send you the certificate 
  in few minutes. 
  Check your email (including 
  promotions, spam folder).`
  passPercent.innerText=`${(totalQuestions-diff)*10}%`
  failPercent.innerText=`${diff *10}%`
  passedQuestions.innerText=`${score} / ${totalQuestions} questions`
  failedQuestions.innerText=`${diff} / ${totalQuestions} questions`
}else{
    resultInfo.innerText="We are sorry."
    result.innerText="You failed the exam."
    message.innerText="Better luck next time."
    passPercent.innerText=`${(totalQuestions-diff)*10}%`
    failPercent.innerText=`${diff *10}%`
    passedQuestions.innerText=`${score} / ${totalQuestions} questions`
    failedQuestions.innerText=`${diff} / ${totalQuestions} questions`
    

}



