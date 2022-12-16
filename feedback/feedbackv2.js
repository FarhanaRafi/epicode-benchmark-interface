// let starNode = document.createElement('stars-container')

function onLoadActions(selectedStar) {
    let starNode = document.getElementById('stars-container') 
    starNode.innerHTML = ""
    selectedStar = parseInt(selectedStar) + 1;
    
    console.log(selectedStar);

    // alert("You selected " + selectedStar + " stars");
    

    for (let index = 0; index < selectedStar; index++) {
        let starNode = document.createElement('stars-container')
        starNode.innerHTML = ""
        let star = document.getElementById('star-svg').outerHTML

        starNode.classList.add('star')
        starNode.innerHTML = star
        starNode.addEventListener("click", onStarSelect)
        starNode.id = index
        document.getElementById('stars-container').appendChild(starNode)[index]
    }

    for (let index = selectedStar; index < 10; index++) {
        let starNode = document.createElement('stars-container')
        let star = document.getElementById('star-svg-uncheck').outerHTML


        starNode.id = index
        // bug here, sometimes selects a lot of stars (more than container) //
        

        starNode.classList.add('star')
        starNode.innerHTML = star
        starNode.addEventListener("click", onStarSelect)

        document.getElementById('stars-container').appendChild(starNode)[index]
    }
}


//  document.body.removeEventListener('click', selectedStar)

window.onload = onLoadActions(5)

function onStarSelect(event){
    console.log(event.currentTarget.id)
    onLoadActions(event.currentTarget.id)
}

function clearInput(target) {
    if (target.value == 'Write your comment here') {
        target.value = "";
        }
}


/* enter key to enter input text */
let $myInput = document.getElementById('user-comment');

$myInput.onkeydown = function(event){
    if(event.key === 'Enter') {
        alert("You said - " + $myInput.value);
        if ((event.key === 'Enter') === true) {
        $myInput.value = '';
    }       
    }
}