$('selector').action()

$('h1').hide(2000)
 $('.a').click(()=>$('h1').hide())
 $('.b').click(()=>$('p').hide())
 $('.c').click(()=>$('h1').show())


 $('.d').click(()=>$('h2').toggle())
 $('.e').click(()=>$('h2').fadeOut())
 $('.f').click(()=>$('h2').fadeIn())
 $('.g').click(()=>$('h2').fadeToggle())
 $('.h').click(()=>$('h2').fadeTo(2000, 0.4))
 $('.i').click(()=>$('h2').slideUp())
 $('.j').click(()=>$('h2').slideDown())
 $('.k').click(()=>$('h2').slideToggle())

$('.l').click(()=>$('h1').append('<hr>'))
$('.m').click(()=>$('h1').prepend('<hr>'))
$('.n').click(()=>$('h1').after('<hr>'))
$('.o').click(()=>$('h1').before('<hr>'))

$('.p').click(()=>$('h1').css({color:'blue',fontSize:'50px'}))
$('.q').click(()=>$('h1').addClass('mnew'))
$('.r').click(()=>$('h1').removeClass('mnew'))
$('.s').click(()=>$('h1').toggleClass('new'))

$('.t').click(()=>$('h1').remove())
$('.u').click(()=>$('h1').empty())
$('.v').click(()=>$('h1').html('<h1>HOME</h1>'))
$('.w').click(()=>$('h1').text('<h4>Village</h4>'))

$('.x').click(()=>$('h1').animate({left: '500px'},5000))
$('.y').click(()=>$('h1').stop())
$('.z').click(()=>$('h1').slideUp().slideDown())
$('.zz').click(function(){
    alert('this is callback function')
})