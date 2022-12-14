



let score = sessionStorage.getItem("correctAnswers")
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
  resultInfo.innerText="We are sorry "
  result.innerText="You have failed the exam."
  message.innerText=`We wish you better luck 
  next time.
  Check your email to see 
  the right answers.`
    passPercent.innerText=`${(totalQuestions-diff)*10}%`
    failPercent.innerText=`${diff *10}%`
    passedQuestions.innerText=`${score} / ${totalQuestions} questions`
    failedQuestions.innerText=`${diff} / ${totalQuestions} questions`
    

}

let progress=document.querySelector(".progress")
let radius=progress.r.baseVal.value
let circumference=radius*2*Math.PI
progress.style.strokeDasharray=circumference
function setProgress(percent){
 progress.style.strokeDashoffset=circumference-(percent/100)*circumference
}
setProgress(diff*10)
