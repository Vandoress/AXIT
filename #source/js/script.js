function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu-header__menu,.menu-header__background').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function() {
	$('.column-tabs__item').click(function(e){
		e.preventDefault();
		$('.tabs__block').removeClass('tabs__block--active');
		$($(this).attr('href')).addClass('tabs__block--active');
		$('.column-tabs__item').removeClass('column-tabs__item--active');
		$(this).addClass('column-tabs__item--active')
	});
	$('.column-tabs__item:first').click();
});
