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
        var img_url = image.attr("src");
        var url = link.attr("href");
        var description = image.attr("data-desc");
        link.replaceWith('<div class="desc-text center" data-img-url='+img_url+' data-url=' + url + ' style="background: white url(../images/bg.png) repeat top left;color:#8b8b8b;text-shadow: white 1px 1px 0px;height:190px;width:290px;padding:5px;">' + description + '</div>');
    }
    
    function myCompleteImg() {
        var div = $(this);
        var img_url = div.attr("data-img-url");
        var url = div.attr("data-url");
        var desc = div.text();
        $(this).replaceWith('<a href='+url+'><img class="center" src='+img_url+' data-desc="' + desc + '" /></a>');
    }
    
    $(".description_link").live("click", function(e){
        e.preventDefault();
        var image = $(this).parent().find("img.center");
        var description = image.attr("data-desc");
        image.stop().rotate3Di(
                '480',
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
                '480',
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