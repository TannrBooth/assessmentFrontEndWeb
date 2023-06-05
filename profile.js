color = document.querySelector('#color')
place = document.querySelector('#place')
ritual = document.querySelector('#ritual')

const favColor = () => {
    alert('My favorite color is Red')
}

const favPlace = () => {
    alert('My favorite place is Bear Lake')
}

const favRitual = () => {
    alert('My favorite ritual is goin ta CHURCH')
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click',favRitual)