var fileName= ['forest','mountain','sunset','forest2'];

$('.middleColumn').hide();
	var sly = new Sly('#frame',{
		horizontal: 1,
		itemNav: 'forceCentered',
		smart: 1,
		activateMiddle: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 0,
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
		next:'#next',
		prev:'#prev'
	}).init();
	
	sly.on('load',function(){
		$('#first').addClass('active');
	});
	
	sly.on('active',function(itemIndex){
		$('.text').removeClass('active');
		$('#frame').find('text').eq(itemIndex).addClass('active');
	});
	
	$('.frame .slidee li').on('click',function(){
		$('.container').animate({
			top:'60px',
			opacity:1
		},1500);
		$('.middleColumn').fadeIn(1500);
		$('.circular-image,.nameinTitle').fadeOut(400);
	});
	$(".lazy").lazyload({
		effect : "fadeIn",
		effectspeed: 900
	});
	$("div.lazy").lazyload({
		effect : "fadeIn",
		effectspeed: 900
	});

	