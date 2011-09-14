$(document).ready(function() {
    
    $("#projects-link").click(function(e){
        e.preventDefault();
        var position = $("#projects-div").offset();
        $.scrollTo({top:position.top,left:0}, 500);
    })
    
    $('.gravatar-image').tipsy({gravity: 'w'});
    
    function myCompleteDesc() {
        var image = $(this);
        var link = $(this).parent();
        var desc_div = link.parent().find("div.center");
        link.hide();
        desc_div.show();
    }
    
    function myCompleteImg() {
        var desc_div = $(this);
        var link = $(this).parent().find("img.center").parent();
        desc_div.hide();
        link.show();
    }
    
    $(".description_link").live("click", function(e){
        e.preventDefault();
        var image = $(this).parent().find("img.center");
        image.stop().rotate3Di(
                '360',
                300,
                {
                    complete: myCompleteDesc
                }
            );
        $(this).attr("class", "image_link");
        $(this).text("Screenshot");    
    });
    
    $(".image_link").live("click", function(e){
        e.preventDefault();
        var div = $(this).parent().find("div.center");
        div.stop().rotate3Di(
                '360',
                300,
                {
                    complete: myCompleteImg
                }
            );
        $(this).attr("class", "description_link");
        $(this).text("Description");    
    });

    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();

    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
    
});    