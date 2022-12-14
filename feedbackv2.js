// let starNode = document.createElement('stars-container')

function onLoadActions(selectedStar) {
    let starNode = document.getElementById('stars-container') 
    starNode.innerHTML = ""
    
    for (let index = 0; index <selectedStar; index++) {
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


        starNode.id = index + 1

        // bug here, sometimes selects a lot of stars (more than container) //
        



        starNode.classList.add('star')
        starNode.innerHTML = star
        starNode.addEventListener("click", onStarSelect)

        document.getElementById('stars-container').appendChild(starNode)[index]
    }
    
}


window.onload = onLoadActions(6)

function onStarSelect(event){
    console.log(event.currentTarget.id)
    onLoadActions(event.currentTarget.id)
}