



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
  resultInfo.innerText="Congratulations!"
  result.innerText="You passed the exam."
  message.innerText=`We'll send you the certificate 
  in a few minutes. 
  Check your email (including 
  promotions, spam folder).`
  passPercent.innerText=updated
  failPercent.innerText=updated2
  passedQuestions.innerText=`${score} / ${totalQuestions} questions`
  failedQuestions.innerText=`${diff} / ${totalQuestions} questions`
}else{
  resultInfo.innerText="We are sorry "
  result.innerText="You have failed the exam."
  message.innerText=`We wish you better luck 
  next time.
  Check your email to see 
  the right answers.`
    passPercent.innerHTML=updated
    failPercent.innerHTML=updated2
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


let speed=10
let counts=setInterval(updated,speed)
let counts2=setInterval(updated2,speed)

let passUpto=-1

let failUpto=-1
        function updated(){
    let pass= document.getElementById("pass-percentage");
    
    pass.innerHTML=++passUpto;
    
    if(passUpto===(totalQuestions-diff)*10)
    {
       clearInterval(counts)
       pass.innerText=`${passUpto}%`
       
    }
    
}

function updated2(){
    let fail=document.getElementById("fail-percentage")

    fail.innerHTML=++failUpto

    if(failUpto===diff*10)
    {
        clearInterval(counts2)
        fail.innerText=`${failUpto}%`
    }
}


