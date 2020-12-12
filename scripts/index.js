let mines_image = document.querySelector('img#carousel_image_mines');
let membres_image = document.querySelector('img#carousel_image_membres');
let proj_image = document.querySelector('img#carousel_image_proj');

let new_mines = new Image()
new_mines.onload = () => {
    mines_image.src = new_mines.src
}

let new_proj = new Image()
new_proj.onload = () => {
    proj_image.src = new_proj.src
}

let new_membres = new Image()
new_membres.onload = () => {
    membres_image.src = new_membres.src
}
new_mines.src = 'media/carousel/mines.jpg'
new_membres.src = 'media/carousel/membres.jpg'
new_proj.src = 'media/carousel/proj.jpg'

function teamImages(){
    var link = $('.member').children('a')
    link.each((index,element) =>{
        let id = element.id;
        
        if (id[4] != '2'){
            if ( $(window).width() < 768){
                $(element).attr('href','#collapse' + id[4]+id[5])
                $(element).siblings('.collapse').collapse('hide')}
            else{
                $(element).attr('href','.collapse' + id[4]).siblings('.collapes').collapse('hide')
                $(element).siblings('.collapse').collapse('hide') }
        }
    })
}
teamImages()
$(window).resize(teamImages);