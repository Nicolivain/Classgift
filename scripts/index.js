let mines_image = document.querySelector('img#carousel_image_mines');
let membres_image = document.querySelector('img#carousel_image_membres');
let proj_image = document.querySelector('img#carousel_image_proj');

let new_mines = new Image()
new_mines.onload = () => {
    mines_image.src = new_mines.src
    console.log('mines loaded')
}

let new_proj = new Image()
new_proj.onload = () => {
    proj_image.src = new_proj.src
    console.log('proj loaded')
}

let new_membres = new Image()
new_membres.onload = () => {
    membres_image.src = new_membres.src
    console.log('membres loaded')
}
console.log('SCRIPT')
new_mines.src = 'media/carousel/mines.jpg'
new_membres.src = 'media/carousel/membres.jpg'
new_proj.src = 'media/carousel/proj.jpg'
