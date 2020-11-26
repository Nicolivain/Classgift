function setSideImageSize(){
    var tem = $('.temoignage')
    tem.each((index,element) =>{
        let txt = $(element).children('.col-md-9').children('blockquote');
        txth = txt.height()
        $(element).children('.side-image').children('img').css('max-height', txth)
    })
}
setSideImageSize()
$(window).resize(setSideImageSize);
