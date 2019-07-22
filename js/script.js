$( document ).ready(function() {
	var tShirtPrice = $('.pricing-tshirt');
	var longSleevePrice = $('.pricing-long-sleeve');
	var tankTopPrice = $('.pricing-tank-top');
	var hoodiePrice = $('.pricing-hoodie');

	var pricingArray = [tShirtPrice, longSleevePrice, tankTopPrice, hoodiePrice];

    $('.pricing-btn').on('click', function() {
    	var id = $(this).attr('id');
    	$('.pricing-btn').removeClass('selected')

    	for(var i = 0; i < pricingArray.length; i++) {
    		pricingArray[i].addClass('hide')
    	}

    	if(id == 'btn-tshirt') {
    		tShirtPrice.removeClass('hide');
    		$(this).addClass('selected')
    	} else if(id == 'btn-long-sleeve') {
    		longSleevePrice.removeClass('hide');
    		$(this).addClass('selected')
    	} else if(id == 'btn-tank-top') {
    		tankTopPrice.removeClass('hide')
    		$(this).addClass('selected')
    	} else if(id == 'btn-hoodie') {
    		hoodiePrice.removeClass('hide')
    		$(this).addClass('selected')
    	}
    });

    /* TUTORIAL */
    let option = 1;
    let next = "#option-";
    let value = 0;
    let totalValue = 0;
    let valuesArray = {"Values":[{"total":120,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063954251847"},{"total":130,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063464632391"},{"total":140,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064191852615"},{"total":150,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064203812935"},{"total":160,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064203812935"},{"total":220,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063956054087"},{"total":230,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063465910343"},{"total":240,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064194736199"},{"total":250,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064199323719"},{"total":260,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064204730439"},{"total":320,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063954677831"},{"total":330,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17063465386055"},{"total":340,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064194244679"},{"total":350,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064198242375"},{"total":360,"url":"/collections/all/products/ring-spun-crew-neck-t-shirt?variant=17064204075079"},{"total":1110,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17066964254791"},{"total":1120,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067084513351"},{"total":1130,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067104927815"},{"total":1140,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067120721991"},{"total":1150,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067128684615"},{"total":1210,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17066967466055"},{"total":1220,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17066967466055"},{"total":1230,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067105812551"},{"total":1240,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067122917447"},{"total":1250,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067129962567"},{"total":1310,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17066963959879"},{"total":1320,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067084316743"},{"total":1330,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067104895047"},{"total":1340,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067120689223"},{"total":1350,"url":"/collections/all/products/ladies-ring-spun-tee?variant=17067128651847"}]};
    // console.log(valuesArray)
    // $.getJSON("data/values.json", function(json) {
    //     valuesArray = json.Values;
        
    // });
    // var step = -1;
    let selectionArray = [];
    let activeArray = [];
    let idArray = [];
    let step = ".step-";
    let path = ".path-";

    let selection;
    let goBtn;

    $('.selection').on('click', function() {
        option = parseInt($(this).attr('data-step'));
        option++;
        current = option - 2;

        value = parseInt($(this).attr('data-value'));
        selectionArray[current] = value;

        selection = parseInt($(this).attr('data-selection'));

        $(this).addClass('selected');

        if(idArray[current]) {
            idArray[current].css('display', 'none');
            idArray[current].css('opacity', 0);
            activeArray[current].removeClass('selected');
        }
        activeArray[current] = $(this);
        idArray[current] = $(next + selection);

        // console.log($(step + option))
       
        $('html, body').animate({scrollTop:$(step + option).position().top}, 'slow');
        $(next + selection).css('display', 'block');
        $(next + selection).fadeTo("slow", 1);

    });

    $('.go').on('click', function() {
        totalValue = 0;
        for(let i = 0; i < selectionArray.length; i++) {
            totalValue += selectionArray[i];
        }
        
        goBtn = $(this).attr('data-value');
        if(goBtn == 1) {
            getURL();
            // console.log(totalValue)
        } else {
            window.location.href = "/pages/let-us-help/";
        }
        
    })

    function getURL() {

        for(let i = 0; i < valuesArray.Values.length; i++) {

            if(totalValue == valuesArray.Values[i].total) {
                // console.log(valuesArray.Values[i].total)
                window.location.href = valuesArray.Values[i].url;
            }
        }
    }
});