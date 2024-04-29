 $('.slider-documents').slick({
 	dots: false,
 	// autoplay: true,
 	fade: true,
 	prevArrow: '<div class="prev-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>',
 	nextArrow: '<div class="next-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>'
 });


 $('.head-slider').slick({
 	dots: false,
 	autoplay: true,
 	autoplaySpeed: 1500,
 	arrows : false
 });


/*******слайдер-галерея-видео***********/
var mobile_videos = document.querySelectorAll('.reviews .reviews-item');
First_Gallery_Slider_Init(1000);

window.addEventListener('resize', function(){
	First_Gallery_Slider_Init(1000);
});

function First_Gallery_Slider_Init(screen_width)
{
	if(screen.width < screen_width)
	{
		$('.slider-gallery-mobile').slick({
	 		dots: false,
	 		fade: true,
	 		prevArrow: '<div class="prev-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>',
	 		nextArrow: '<div class="next-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>'
	 	});

	 	$('.reviews-slider').slick({
	 		dots: false,
	 		fade: true,
	 		prevArrow: '<div class="prev-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>',
	 		nextArrow: '<div class="next-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>'
	 	});

	 	for(let item of mobile_videos)
	 	{
	 		let play_button = item.querySelector('.play-button');
	 		let preview_img = item.querySelector('.mobile-preview');
	 		let iframee = item.querySelector('iframe');

	 		play_button.addEventListener('click', function() {
		 		preview_img.classList.add('hide');
		 		iframee.classList.add('show');
		 		// $(iframee).click();
		 	});
	 	}
	}
}
/*******слайдер-галерея-видео***********/


/***мобильное меню***/
var open_mobile_button = document.querySelector("#open-mobile-menu-button");
var menu_box = document.querySelector("header .menu-box");
var close_mobile_button = document.querySelector("#close-mobile-menu");
var mobile_shade = document.querySelector(".mobile-shade");

open_mobile_button.addEventListener('click', function() {
	menu_box.classList.remove('hide');
	mobile_shade.classList.remove('hide');
	setTimeout(function() {
		menu_box.classList.add('active');
	}, 100);
});

close_mobile_button.addEventListener('click', function() {
	menu_box.classList.remove('active');
	mobile_shade.classList.add('hide');
	setTimeout(function() {
		menu_box.classList.add('hide');
	}, 500);
});
/***мобильное меню***/



/*********Попапы формы************/
$("#phone-consult").mask("+7(999) 999-9999");
$("#phone-commerce").mask("+7(999) 999-9999");
$("#phone-commerce").mask("+7(999) 999-9999");
$("#phone-contacts-form").mask("+7(999) 999-9999");

var form_banner_error = document.querySelector(".form-banner-error");
var form_banner_error_close = document.querySelector(".form-banner-error #close-form-banner-error");
var pop_up_success_button_ref = document.querySelector("#pop-up-success-button");
var consult_form_arr = ['.consult .name-input-box',
	'.consult .phone-input-box'
];
var commerce_form_arr = ['.commerce .name-input-box',
	'.commerce .phone-input-box'
];
var call_order_arr = ['.contacts .phone-input-box'];

form_banner_error_close.addEventListener('click', function(){
	form_banner_error.classList.add('hide');
})

document.querySelector("#send-consult-form-tech").addEventListener('click', () => Send_Order_Form(event, consult_form_arr,'Консультация менеджера по технике'));
document.querySelector("#send-consult-form-commerce").addEventListener('click', () => Send_Order_Form(event, commerce_form_arr,'Коммерческое предложение'));
document.querySelector("#call-order-contacts").addEventListener('click', () => Send_Order_Form(event, call_order_arr, 'Заказ звонка контакты'));

function Send_Order_Form(event, arr_input_box_selectors, form_title)
{
	event.preventDefault();
	var err=0;

	err = Validate(arr_input_box_selectors);

	if(err > 0)
	{
		form_banner_error.classList.remove('hide');
		setTimeout(function() {
			form_banner_error.classList.add('hide');
		}, 5000);
	}
	else
	{
		form_banner_error.classList.add('hide');
		for (let item of arr_input_box_selectors) 
		{
			$(item + ' input').val('');
		}

		$(pop_up_success_button_ref).click();

		setTimeout(function() {
				// window.location.href = 'https://dzen.ru/';
		}, 1000);

		// $.ajax({
		// 	type: "POST",
		// 	url: '/local/templates/new_agency/php/all_popup/send_order_ajax.php',
		// 	data: {
		// 		'name': $("#pop-up-name").val(),
		// 		'phone': $("#pop-up-phone").val(),
		// 		'popup-title': $("#form-separator").val()
		// 	},
		// 	dataType: "json",
		// 	success: function(data){

		// 		if (data.status == true)
		// 		{
		// 			$("#pop-up-name").val('');
		// 			$("#pop-up-phone").val('');

		// 			$("#form-content").addClass("hide");
		// 			$("#succes_order").addClass("show");
		// 		}
		// 	}
		// });
	}
}

function Validate(arr)
{
	var err=0;

	for (let item of arr)
	{
		let bool = ($(item + ' input').val() == '');
		
		if (bool)
		{
			err++;
			$(item).addClass("hasError");
		} 
		else 
		{
			$(item).removeClass("hasError");
		}
	}

	return err;
}

/*********Попапы формы************/



/*********Попапы кнопок************/

$('.all-popup-button').fancybox({
    afterLoad : function(){
    		$("#pop-up").removeClass('fadeOutDown');
            $("#pop-up").addClass('fadeInUp');	
        },
    beforeClose : function(){
    		$("#pop-up").removeClass('fadeInUp');
            $("#pop-up").addClass('fadeOutDown');	
        }
});

var popup_title = document.querySelector("#pop-up .pop-up-title");
var error_ban = document.querySelector('#pop-up .error-bun');
var form_box = document.querySelector('#pop-up .form-box');
var success_box = document.querySelector('#pop-up .success-box');
$("#popup-phone").mask("+7(999) 999-9999");

document.querySelector("#load-catalog").addEventListener('click', () => Init_Popup('Оставьте заявку и получите полный каталог с ценами!'));
document.querySelector("#pick-up-equipment").addEventListener('click', () => Init_Popup('Оставьте заявку и получите коммерческое предложение!'));

$('.all-popup-button').on('click', function(){
	$(success_box).addClass("hide");
	$(form_box).removeClass("hide");
})

function Init_Popup(popup_name)
{
	$(success_box).addClass("hide");
	$(form_box).removeClass("hide");
	popup_title.innerHTML = popup_name;
}

document.querySelector('#send-popup-form').addEventListener("click", Send_Order_Pop_Up);

function Send_Order_Pop_Up(event)
{
	event.preventDefault();
	var err=0;
	var arr = ['.name-input-box-popup',
	'.phone-input-box-popup'
	];

	err = Validate(arr);

	if(err != 0)
	{
		$(error_ban).removeClass("hide");
	}
	else
	{
		$(error_ban).addClass("hide");
	}

	if (err == 0)
	{
		$(form_box).addClass("hide");
		$(success_box).removeClass("hide");

		for (let item of arr) 
		{
			$(item + ' input').val('');
		}

		// setTimeout(function() {
		// 		window.location.href = 'https://dzen.ru/';
		// }, 1000);

		// $.ajax({
		// 	type: "POST",
		// 	url: '/local/templates/new_agency/php/all_popup/send_order_ajax.php',
		// 	data: {
		// 		'name': $("#pop-up-name").val(),
		// 		'phone': $("#pop-up-phone").val(),
		// 		'popup-title': $("#form-separator").val()
		// 	},
		// 	dataType: "json",
		// 	success: function(data){

		// 		if (data.status == true)
		// 		{
		// 			$("#pop-up-name").val('');
		// 			$("#pop-up-phone").val('');

		// 			$("#form-content").addClass("hide");
		// 			$("#succes_order").addClass("show");
		// 		}
		// 	}
		// });
	}
}

/*********Попапы кнопок************/



/******Прокрутка вверх по клику**********/
var scroll_button = document.querySelector("#scroll-up");

scroll_button.addEventListener("click", function(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});

var delta_scroll = 600;

window.addEventListener('scroll', function(){
	let offset_y = window.pageYOffset;
	if(offset_y > delta_scroll)
	{
		scroll_button.classList.remove('hide');
	}
	else
	{
		scroll_button.classList.add('hide');
	}
});


/******Прокрутка вверх по клику**********/



/******Карта******/
ymaps.ready(init_dillers);
ymaps.ready(init_contacts);


function init_dillers() 
{
			var myMap = new ymaps.Map("diller-map", {
				center: [55.020998,82.932979],
				zoom: 15,
				// controls: [],//без элементов управления
			}, {
				searchControlProvider: 'yandex#search'
			}),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
    	"{{ properties.address }}" +
    	"</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                	var el = this.getElement(),
                	result = null;
                	if (el) {
                		var firstChild = el.firstChild;
                		result = new ymaps.shape.Rectangle(
                			new ymaps.geometry.pixel.Rectangle([
                				[0, 0],
                				[firstChild.offsetWidth, firstChild.offsetHeight]
                				])
                			);
                	}
                	return result;
                }
            }
            );

//https://yandex.ru/dev/maps/jsbox/2.1/icon_customImage

	//type = government or home
    function Add_point(x, y, descr, city, type)
    {
        var myPlacemark = new ymaps.Placemark([x, y], {
            balloonContent: descr,
            iconCaption: city
        }, {
            preset: 'islands#' + type + 'CircleIcon',
            iconColor: '#ffb833'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }

  	//type = government or home
  	Add_point(51.143974, 71.435806, 'Описание_1', 'Казахстан', 'government');
  	Add_point(59.938955, 30.315644, 'Описание_2', 'Питер', 'home');
  	Add_point(69.343985, 88.210393, 'Описание_2', 'Норильск', 'home');
  
  	myMap.setBounds(myMap.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin:9});/*авто зуум*/
}


function init_contacts() 
{
			var myMap = new ymaps.Map("contact-map", {
				center: [69.343985, 88.210393],
				zoom: 15,
				// controls: [],//без элементов управления
			}, {
				searchControlProvider: 'yandex#search'
			}),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
    	"{{ properties.address }}" +
    	"</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                	var el = this.getElement(),
                	result = null;
                	if (el) {
                		var firstChild = el.firstChild;
                		result = new ymaps.shape.Rectangle(
                			new ymaps.geometry.pixel.Rectangle([
                				[0, 0],
                				[firstChild.offsetWidth, firstChild.offsetHeight]
                				])
                			);
                	}
                	return result;
                }
            }
            );

//https://yandex.ru/dev/maps/jsbox/2.1/icon_customImage

	//type = government or home
    function Add_point(x, y, descr, city, type)
    {
        var myPlacemark = new ymaps.Placemark([x, y], {
            balloonContent: descr,
            iconCaption: city
        }, {
            preset: 'islands#' + type + 'CircleIcon',
            iconColor: '#ffb833'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }

  	//type = government or home
  	Add_point(69.343985, 88.210393, 'Описание_2', 'Норильск', 'home');
  
  	//myMap.setBounds(myMap.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin:9});/*авто зуум*/
}

/******Карта******/

/************переключатель категорий**************/
Switch(".attach .catygory-item", "active")

function Switch(selector, modify_class)
{
	var elements = document.querySelectorAll(selector);
	for(let item of elements)
	{
	   item.addEventListener("click", function(){

	        for(let itemm of elements)
	        {
	            itemm.classList.remove(modify_class);
	        }
		        item.classList.add(modify_class);
		});
	}
}
/************переключатель категорий**************/


/**********переключатель модели**********/
var model_button = document.querySelector('.attach .model-butt');
var hide_model_box = document.querySelector('.attach .model-vars-box');
var insert_models_heree = document.querySelector('.selected-cleare');
var model_var_items_ref = document.querySelectorAll('.attach .model-var-item');
var model_arrow = document.querySelector('.attach .model-arrow');
var filter_vars = document.querySelectorAll('.attach .filter-var-item');

Switch_Models(model_var_items_ref, 'active', insert_models_heree, '.attach .selected-model-item', '#cleare-filter', filter_vars);

model_button.addEventListener("click", function(){
	hide_model_box.classList.toggle('hide');
	model_arrow.classList.toggle('active');
	Click_Out_Filter(hide_model_box, 'hide', 'mark-class', model_arrow, 'active');
	if(!hide_sort_box.classList.contains('hide'))
	{
		hide_sort_box.classList.add('hide');
		sort_arrow_mobile.classList.remove('active');
	}
});


function Click_Inserted_Models(inserted_models_selector, cleare_filter_selector, model_var_ref, modify_class)
{
	inserted_models_ref = document.querySelectorAll(inserted_models_selector);
	for(let item of inserted_models_ref)
	{
		item.addEventListener("click", function(){
			let model_name = item.querySelector('.inserted-model-name').innerHTML;
			item.remove();
			let new_inserted_models_ref = document.querySelectorAll(inserted_models_selector);
			if(new_inserted_models_ref.length == 1)
			{
				document.querySelector(cleare_filter_selector).remove();
			}
			Remome_Galka_Click_Inserted_Models(model_name, model_var_ref, modify_class)
		});
	}
}

function Remome_Galka_Click_Inserted_Models(model_name, model_var_ref, modify_class)
{
	for(let item of model_var_ref)
	{
		let model_name_from_list = item.querySelector('.model-name').innerHTML;
		if(model_name == model_name_from_list)
		{
			item.classList.remove(modify_class);
		}
	}
}

function Click_Out_Filter(hide_box_ref, hide_class, mark_class, arrow_reff, active_arrow_class)
{
	document.onclick = function (e) {
		let all_classes = e.target.className;
		if (!all_classes.includes(mark_class))
		{
			if(!hide_box_ref.classList.contains(hide_class))
			{
				hide_box_ref.classList.add(hide_class);
				arrow_reff.classList.remove(active_arrow_class);
			}
		}
	};
}

function Switch_Models(model_var_ref, modify_class, insert_models_here, inserted_models_selector, cleare_filter_selector, filter_var_ref)
{
	for(let item of model_var_ref)
	{
	   item.addEventListener("click", function(){
		    item.classList.toggle(modify_class);
		    let models_names = All_Selected_Models_Name(model_var_ref, modify_class);
		   	Insert_Models(models_names,insert_models_here, model_var_ref, modify_class, filter_var_ref);
		   	Click_Inserted_Models(inserted_models_selector, cleare_filter_selector, model_var_ref, modify_class);
		});
	}
}

function All_Selected_Models_Name(elements_ref, active_class)
{
	let mass_names = [];
	let j = 0;
	for(let item of elements_ref)
	{
		if(item.classList.contains(active_class))
		{
			mass_names[j] = item.querySelector('.model-name').innerHTML;
			j++;
		}
	}

	return mass_names;
}

function Insert_Models(models_arr, insert_here_ref, model_var_ref, modify_class, filter_var_ref)
{
	let flag = false;
	let all_text='';
	for(let item of models_arr)
	{
		all_text+=`
			<div class="selected-model-item">
    			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 371.23 371.23" style="enable-background:new 0 0 371.23 371.23;" xml:space="preserve">
    				<polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
    			</svg>
    			<span class="inserted-model-name">${item}</span>
    		</div>
		`;
	}

	if(models_arr.length >= 2)
	{
		all_text+=`
			<div id="cleare-filter">Очистить все</div>
		`;
		flag = true;
	}

	insert_here_ref.innerHTML = all_text;
	if(flag)
	{
		document.querySelector('#cleare-filter').addEventListener("click", () => Cleare_All_Filters(model_var_ref, modify_class, filter_var_ref));
	}
}

function Cleare_All_Filters(model_var_ref, modify_class, filter_var_ref)
{
	document.querySelector('.attach .selected-cleare').innerHTML = '';
	for(let item of model_var_ref)
	{
		item.classList.remove(modify_class);
	}

	for(let item of filter_var_ref)
	{
		item.classList.remove(modify_class);
	}

	sort_select_value.innerHTML = 'Порядок: по умолчанию';
}
/**********переключатель модели**********/


/**********переключатель сортировки**********/
var sort_button = document.querySelector('.attach .sort-butt');
var hide_sort_box = document.querySelector('.attach .filter-vars-box');
var sort_select_value = document.querySelector('#sort-select-value');
var sort_button_mobile = document.querySelector('.attach .sort-butt-mobile');
var sort_arrow_mobile = document.querySelector('.attach .sort-mobile-arrow');

sort_button.addEventListener("click", function(){
	hide_sort_box.classList.toggle('hide');
	Click_Out_Filter(hide_sort_box, 'hide', 'mark-class', sort_arrow_mobile, 'active');
	if(!hide_model_box.classList.contains('hide'))
	{
		hide_model_box.classList.add('hide');
	}
});

sort_button_mobile.addEventListener("click", function(){
	hide_sort_box.classList.toggle('hide');
	sort_arrow_mobile.classList.toggle('active');
	Click_Out_Filter(hide_sort_box, 'hide', 'mark-class',sort_arrow_mobile, 'active');
	if(!hide_model_box.classList.contains('hide'))
	{
		hide_model_box.classList.add('hide');
		model_arrow.classList.remove('active');
	}
});

Switch_Sorts(filter_vars, 'active', sort_select_value);

function Switch_Sorts(filter_vars, modify_class, insert_here_reff)
{
	for(let item of filter_vars)
	{
	   item.addEventListener("mouseover", function(){
	   		for(let itemm of filter_vars)
	        {
	            itemm.classList.remove(modify_class);
	        }
	   })

	   item.addEventListener("click", function(){
		    item.classList.add(modify_class);
		    insert_here_reff.innerHTML = item.innerHTML;
		});
	}
}

/**********переключатель сортировки**********/


/*********открытие фильтра мобильная версия**************/
var mobile_filter_show_button = document.querySelector('.attach #show-filters');
var model_box = document.querySelector('.attach .model-box');
var sort_box = document.querySelector('.attach .sort-box');
var filter_box = document.querySelector('.attach .filter-box');
var mobile_filt_loopa = document.querySelector('.attach #mobile-filt-loopa');
var search_box = document.querySelector('.attach .search-box');

mobile_filter_show_button.addEventListener("click", function(){
	model_box.classList.toggle('show');
	sort_box.classList.toggle('show');
});

mobile_filt_loopa.addEventListener("click", function(){
	search_box.classList.toggle('show');
});
/*********открытие фильтра мобильная версия**************/


/**************чуредование картинок при наводке на товар*************/

Change_Img_Product( document.querySelectorAll('.attach .cat-img-box'),
					'.small-img', '.big-img', 'hide');

function Change_Img_Product(imgs_box_refs, small_img_selector, big_img_selector, hide_class)
{
	for(let item of imgs_box_refs)
	{
		let num_imgs_item = item.querySelectorAll('img').length;
		if(num_imgs_item == 2)
		{
			item.addEventListener("mouseover", function(){
				item.querySelector(small_img_selector).classList.toggle(hide_class);
				item.querySelector(big_img_selector).classList.toggle(hide_class);
			});

			item.addEventListener("mouseout", function(){
				item.querySelector(small_img_selector).classList.toggle(hide_class);
				item.querySelector(big_img_selector).classList.toggle(hide_class);
			});
		}
	}
}
/**************чуредование картинок при наводке на товар*************/

$('.slider-equip').slick({
			dots: false,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<div class="prev-photo"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 27 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="10" points="5,5 19,19 5,33"></polyline></svg></div>',
			nextArrow: '<div class="next-photo"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 27 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="10" points="5,5 19,19 5,33"></polyline></svg></div>'
		});


/**********галерея********/
$('[data-fancybox="gallery"]').fancybox({
    loop: true,
    arrows: true,
    infobar: false,
    buttons: [
	   "zoom",
	   "close"
	],
	animationEffect: false,
	transitionEffect: "slide",
	hideScrollbar: true,
	zoom: true,
	btnTpl: {
        arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<svg class="gallery-arrow-left" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#303239" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
        "</button>",
        arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<svg class="gallery-arrow-right" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#303239" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
        "</button>",
        zoom:
        '<button id="zoom-button" data-fancybox-zoom="" class="fancybox-button fancybox-button--zoom" title="Zoom">'+
        '<svg class="icon-increase" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.832 22L17.8592 17.0273" stroke="#000000" stroke-width="2" stroke-linecap="square"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="#000000" stroke-width="2"></path><path d="M6.25781 10.3931H16.2035" stroke="#000000" stroke-width="2"></path><path d="M11.2305 15.3662V5.42053" stroke="#000000" stroke-width="2"></path></svg>'+
        '<svg class="icon-decrease hide" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9961 22L17.0233 17.0273" stroke="#000000" stroke-width="2" stroke-linecap="square"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="#000000" stroke-width="2"></path><path d="M5.41797 10.3931H15.3637" stroke="#000000" stroke-width="2"></path></svg>'+
   		'</button>',
   		 close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg id="close-galery" width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="#000000"></path><path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="#000000"></path></svg>' +
        "</button>",
    },
});

// console.log(document.querySelector("#zoom-button"));

// document.querySelector(".fancybox-button.fancybox-button--zoom").addEventListener('click', function() {
// 	console.log(777);
// });
/**********галерея********/

/***Появление свойств машины***/
var buttons_boxes = document.querySelectorAll('.capability .arrow-box');

for (let item of buttons_boxes)
{
    let button = item.querySelector('.car-prop-button');
    let hide_box = item.querySelector('.arrow-window');

    button.addEventListener('mouseover', function(){
        hide_box.classList.remove('hide');
    });

    button.addEventListener('mouseout', function(){
        hide_box.classList.add('hide');
    });

    button.addEventListener('click', function(){
        hide_box.classList.remove('hide');
    });
}

/***Появление свойств машины***/

$('.big-slider').slick({
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.small-slider',
    prevArrow: '<div class="prev-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>',
    nextArrow: '<div class="next-photo"><svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke" style="stroke-width: 1px; stroke: rgb(0, 0, 0);"></path></svg></div>'
});

var slidesToShow = 8
if(screen.width < 1200)
{
    slidesToShow = 7;
}

if(screen.width < 1000)
{
    slidesToShow = 9;
}

$('.small-slider').slick({
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.big-slider'
});

/*******слайдер-каталог***********/
First_Slider_Init(1000);

window.addEventListener('resize', function(){
    First_Slider_Init(1000);
});

function First_Slider_Init(screen_width)
{
    if(screen.width < screen_width)
    {
        $('.mobile-slider-another').slick({
            dots: false,
            infinite: false,
            variableWidth: true,
            arrows: false,
        });
    }
}
/*******слайдер-каталог***********/

/**********галерея********/
$('[data-fancybox="gallery"]').fancybox({
    loop: true,
    arrows: true,
    infobar: false,
    buttons: [
    "zoom",
    "close"
    ],
    animationEffect: false,
    transitionEffect: "slide",
    hideScrollbar: true,
    zoom: true,
    btnTpl: {
        arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<svg class="gallery-arrow-left" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#303239" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
        "</button>",
        arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<svg class="gallery-arrow-right" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#303239" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
        "</button>",
        zoom:
        '<button id="zoom-button" data-fancybox-zoom="" class="fancybox-button fancybox-button--zoom" title="Zoom">'+
        '<svg class="icon-increase" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.832 22L17.8592 17.0273" stroke="#000000" stroke-width="2" stroke-linecap="square"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="#000000" stroke-width="2"></path><path d="M6.25781 10.3931H16.2035" stroke="#000000" stroke-width="2"></path><path d="M11.2305 15.3662V5.42053" stroke="#000000" stroke-width="2"></path></svg>'+
        '<svg class="icon-decrease hide" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9961 22L17.0233 17.0273" stroke="#000000" stroke-width="2" stroke-linecap="square"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="#000000" stroke-width="2"></path><path d="M5.41797 10.3931H15.3637" stroke="#000000" stroke-width="2"></path></svg>'+
        '</button>',
        close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg id="close-galery" width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="#000000"></path><path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="#000000"></path></svg>' +
        "</button>",
    },
});

/**********галерея********/





