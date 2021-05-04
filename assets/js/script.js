$('.icon-heart').on('click', function(e){
    $(this).css('background-color', 'red');
    return $(this).on('click', function() {
        $(this).css('background-color', 'white');
        return $(this).on('click', function() {
            $(this).css('background-color', 'red');
            return 
        })
        
    })
 });

