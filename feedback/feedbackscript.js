function onLoadActions(selectedStar) {
    let starNode = document.getElementById('stars-container') 
    starNode.innerHTML = ""
    
    for (let index = 0; index <selectedStar; index++) { // visualise 10 stars in container
        let starNode = document.createElement('stars-container') // 1) change this to container ??
        starNode.innerHTML = ""
        let star = document.getElementById('star-svg').outerHTML // .onclick = selectStar();

        starNode.classList.add('star') // 2) customise star, add CSS class .star
        starNode.innerHTML = star // assign innerHTML to star
        starNode.addEventListener("click", onStarSelect)
        starNode.id=index
        document.getElementById('stars-container').appendChild(starNode)[index] // do i need [star] ?? // append it to HTML via the DOM, may need to change this ??
    }

    for (let index = selectedStar; index < 10; index++) { // visualise 10 stars in container
        let starNode = document.createElement('stars-container') // 1) change this to container ??
        let star = document.getElementById('star-svg-uncheck').outerHTML // .onclick = selectStar();


        starNode.id = index + 1
        // bug here, sometimes selects a lot of staras more than container //



        starNode.classList.add('star') // 2) customise star, add CSS class .star
        starNode.innerHTML = star // assign innerHTML to star
        starNode.addEventListener("click", onStarSelect)

        document.getElementById('stars-container').appendChild(starNode)[index] // do i need [star] ?? // append it to HTML via the DOM, may need to change this ??
    }
}


window.onload = onLoadActions(3)

function onStarSelect(event){
    console.log(event.currentTarget.id)
    onLoadActions(event.currentTarget.id)
}