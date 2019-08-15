var btn = $('#myBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }

  if($(window).scrollTop() + $(window).height() <= $(document).height() - $("#footer").height()) {
        btn.css("position","fixed");    //resetting it
        btn.css("bottom","105"); //resetting it
    }
        if($(window).scrollTop() + $(window).height() >= $(document).height() - $("#footer").height()) {
        btn.css("position","relative");
        btn.css("bottom","0");

    }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
