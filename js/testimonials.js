var testimonials_animation_time = 1000;

function renderTestimonials( data ) {
    var HTML = '',
        items_HTML = '',
        element_width = 100 / data.length;

    // sintakses pavyzdziai
    // HTML = '<div>'+data+'</div>';
    // HTML = `<div>${data}</div>`;
    
    data.forEach( item => {
        items_HTML += `<div class="item" style="width: ${element_width}%;">${item}</div>`;
    });

    HTML = `<div class="testimonials">
                <div class="testimonials-list" style="width: ${100*data.length}%; margin-left: -100%;">
                    ${items_HTML}
                </div>
                <div class="testimonials-controls">
                    <i class="fa fa-angle-left"></i>
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>`;
    
    return HTML;
}

$('body').on('click', '.testimonials > .testimonials-controls > .fa-angle-left', function(){
    var parent_width = $(this).parents('.testimonials').width(),
        child_count = 0,
        perkeliamas_elementas;
    $(this).parents('.testimonials').find('.testimonials-list').animate({
        'margin-left': 0
    }, testimonials_animation_time, function(){
        child_count = $(this).find('.item').length;
        // perkeliu galini i prieki
        perkeliamas_elementas = $(this).find('.item').eq( child_count - 1 ).detach();
        $(this).find('.item').eq(0).before( perkeliamas_elementas );
        // pastumu visa rinkini atgal i tinkama pozicija
        $(this).css('margin-left', -parent_width);
    });
});

$('body').on('click', '.testimonials > .testimonials-controls > .fa-angle-right', function(){
    var parent_width = $(this).parents('.testimonials').width(),
        child_count = 0,
        perkeliamas_elementas;
    $(this).parents('.testimonials').find('.testimonials-list').animate({
        'margin-left': -parent_width
    }, testimonials_animation_time, function(){
        child_count = $(this).find('.item').length;
        // perkeliu galini i prieki
        perkeliamas_elementas = $(this).find('.item').eq(0).detach();
        $(this).find('.item').eq( child_count - 2 ).after( perkeliamas_elementas );
        // pastumu visa rinkini atgal i tinkama pozicija
        $(this).css('margin-left', 0);
    });
});