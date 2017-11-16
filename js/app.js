jQuery.noConflict();
jQuery(document).foundation();
jQuery(document).ready(function(jQuery){
    "use strict";
    /*Layer slider trigger*/
    jQuery("#layerslider").layerSlider({
        responsive: false,
        responsiveUnder: 1280,
        layersContainer: 1280,
        skin: 'noskin',
        hoverPrevNext: false,
        skinsPath: '../layerslider/skins/'
    });
    //login register click
    jQuery(".loginReg").on("click", function(e){
        e.preventDefault();
        jQuery(this).next().slideToggle();
        jQuery(this).toggleClass("active");
    });

    //search bar
    jQuery(".search").on("click", function(){
        if(jQuery(this).children().hasClass("fa-search")){
            jQuery(this).children().removeClass("fa-search");
            jQuery(this).children().addClass("fa-times");
        }else{
            jQuery(this).children().removeClass("fa-times");
            jQuery(this).children().addClass("fa-search");
        }
        jQuery(this).toggleClass("search-active");
        jQuery("#search-bar").slideToggle();

    });

     //Premium carousel
    jQuery('.owl-carousel').each(function(){
        var owl = jQuery(this);
        jQuery(".prev").on('click', function () {
            jQuery(this).parent().parent().parent().parent().next().trigger('prev.owl.carousel');
        });

        jQuery(".next").on('click', function () {
            jQuery(this).parent().parent().parent().parent().next().trigger('next.owl.carousel');
        });
        var loopLength = owl.data('car-length');
        var divLength = jQuery(this).find("div.item").length;
        if(divLength > loopLength){
            owl.owlCarousel({
                dots : owl.data("dots"),
                items: owl.data("items"),
                slideBy : owl.data("slideby"),
                center : owl.data("center"),
                loop : owl.data("loop"),
                margin : owl.data("margin"),
                nav : owl.data("nav"),
                autoplay : owl.data("autoplay"),
                autoplayTimeout : owl.data("autoplay-timeout"),
                autoWidth:owl.data("auto-width"),
                autoHeight:owl.data("auto-Height"),
                merge: owl.data("merge"),
                responsive:{
                    0:{
                        items:owl.data("responsive-small"),
                        nav:false
                    },
                    600:{
                        items:owl.data("responsive-medium"),
                        nav:false
                    },
                    1000:{
                        items:owl.data("responsive-large"),
                        nav:false
                    },
                    1900:{
                        items:owl.data("responsive-xlarge"),
                        nav:false
                    }
                }
            });

        }else{
            owl.owlCarousel({
                dots : false,
                items: owl.data("items"),
                loop: false,
                margin: owl.data("margin"),
                autoplay:false,
                autoplayHoverPause:true,
                responsiveClass:true,
                autoWidth:owl.data("auto-width"),
                autoHeight:owl.data("auto-Height"),
            });
        }
    });

    //grid system
    jQuery(".grid-system > a").on("click", function(event){
        event.preventDefault();
        var selector = jQuery(this).parent().parent().next().find('div.item');
        var classStr = jQuery(selector).attr('class'),
            lastClass = classStr.substr( classStr.lastIndexOf(' ') + 1);
        jQuery(selector)
        // Remove last class
            .removeClass(lastClass)
            // Put back .item class + the clicked elements class with the added prefix "group-item-".
            .addClass('item group-item-' + jQuery(this).attr('class') );
        if(jQuery(this).hasClass("current")!== true)
        {
            jQuery('.grid-system > a').removeClass("current");
            jQuery(this) .addClass("current");
        }
    });

    //back to top
    var backtotop = '#back-to-top';
    if (jQuery(backtotop).length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    jQuery(backtotop).addClass('show');
                } else {
                    jQuery(backtotop).removeClass('show');
                }
            };
        backToTop();
        jQuery(window).on('scroll', function () {
            backToTop();
        });
        jQuery('#back-to-top').on('click', function (e) {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    //newsTicker
    jQuery('#newsBar').inewsticker({
        speed       : 2500,
        effect      : 'fade',
        dir         : 'ltr',
        font_size   : 13,
        color       : '#fff',
        font_family : 'arial',
        delay_after : 1000
    });

    //show more and less
    jQuery('.showmore_one').showMore({
        speedDown: 300,
        speedUp: 300,
        height: '165px',
        showText: 'Show more',
        hideText: 'Show less'
    });

    jQuery(".reply").each(function(){
        if(jQuery(this).parent().next().length > 0){
            jQuery(this).html('Hide replies <i class="fa fa-angle-up"></i>');
        }
    });
    //comments reply hide show
    jQuery(".reply").on('click', function(){
       if(jQuery(this).parent().next().length > 0){
           jQuery(this).parent().nextAll().slideToggle();
           //jQuery(this).html(jQuery(this).text() === 'Hide replies' ? 'Show replies' : 'Hide replies');
           if(jQuery(this).hasClass('hide-reply')){
               jQuery(this).removeClass('hide-reply');
               jQuery(this).html('show replies <i class="fa fa-angle-down"></i>');
           }else {
               jQuery(this).addClass('hide-reply');
               jQuery(this).html('Hide replies <i class="fa fa-angle-up"></i>');
           }
       }
    });

    //register form
    jQuery( "div.social-login" ).mouseenter(function() {
        jQuery("i.arrow-left").addClass("active");
    })
    .mouseleave(function() {
        jQuery("i.arrow-left").removeClass("active");
    });
    jQuery( "div.register-form" ).mouseenter(function() {
            jQuery("i.arrow-right").addClass("active");
        })
        .mouseleave(function() {
            jQuery("i.arrow-right").removeClass("active");
        });

    //vertical thumb slider
    var thumb = jQuery('.thumb-slider .thumbs').find('.ver-thumbnail');
    jQuery(thumb).on('click', function(){
        var id = jQuery(this).attr('id');
        //alert(id);
        jQuery('.image').eq(0).show();
        jQuery('.image').hide();
        jQuery('.'+id).fadeIn();
    });
    var $par = jQuery('.thumb-slider .thumbs .thumbnails').scrollTop(0);
    jQuery('.thumb-slider .thumbs a').click(function( e ) {
        e.preventDefault();                      // Prevent defautl Anchors behavior
        var n = jQuery(this).hasClass("down") ? "+=200" : "-=200"; // Direction
        $par.animate({scrollTop: n});
    });

    //tab panel
    jQuery('[data-tab]').on('click', function (e) {
        jQuery(this).addClass('active').siblings('[data-tab]').removeClass('active');
        jQuery(this).siblings('[data-content=' + jQuery(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
        e.preventDefault();
    });

});

Vue.component('home', {
    template:"#home",
    data: function () {

        return {
            products        :{},
            provinces       :{},
            deliveryAddress :{},
            triple_sims:"0",
            address_id:"",
            street_address:"",
            suburb:"",
            area:"",
            city:"",
            code:"",
            prov:"",
            delivery_instruction:"",
            formData:{},
            settings:{},
            cards:{},
            online_payment:true,
            selectedCard:"",
            payment_infos:{},
            deliveryCost:0,
            subtotal:0,
            vat:0,
            invoiceNo:"",
            paymentReference:Cookies.get('account_number'),


        }

    },
    methods:{
        get_distributor_products: function(){

            const vm = this;
            axios.get(BASEURL + 'api/v1/distributorProducts',getCustomHeaders).then(function (response) {

                vm.products = response;
            });
        },
        get_provinces: function(){
            const vm = this;
            axios.get(BASEURL + 'api/v1/dropdownlists',getCustomHeaders).then(function (response) {

                vm.provinces = response.data.provinces;
            })

        },
        get_global_settings: function(){
            const vm = this;
            axios.get(BASEURL + 'api/v1/getGeneralSettings',getCustomHeaders).then(function (response) {

                vm.settings = response.data.data;

                $.each(vm.settings, function( index, value ) {

                    if(value.delivery_charge){

                        vm.deliveryCost = value.delivery_charge;

                    }

                    if(value.vat){

                        vm.vat = value.vat;

                    }



                });
            })

        },
        get_delivery_address: function(){

            const vm = this;
            axios.get(BASEURL + 'api/v1/getDeliveryAddress/'+ Cookies.get("person_id"),getCustomHeaders).then(function (response) {

                vm.street_address  =  response.data.data.street_address;
                vm.suburb          =  response.data.data.suburb;
                vm.area            =  response.data.data.area;
                vm.city            =  response.data.data.city;
                vm.prov            =  response.data.data.province_id;
                vm.code            =  response.data.data.code;
                vm.address_id      =  response.data.data.id;

            });

        },
        isOnlinePayment: function(response){

            $("#online_payment_value").val(response);

        },
        calculateOrderTotal: function(){

            var boxes = 0;
            const vm = this;
            vm.subtotal = 0;


            $('._jsOrderItem').each(function(){
                vm.subtotal = vm.subtotal + parseFloat($(this).find('option:selected').attr('cost'));

            });

            var delivery    = parseFloat($('#_jsPayDelivery').text());
            vm.deliveryCost = delivery;


            boxes = vm.subtotal/1450;
            if(boxes > 3){
                delivery = boxes*20;
            }
            // limit sim orders
            if(boxes > 2){
                $('._jsSubmitForm').prop('disabled', true);
                $('#triple_sims').addClass('errorFailed');
                failAlert('Due to demand, a total maximum of 100 SIMs can be purchased at a time.');
            }else if(boxes == 0){
                $('._jsSubmitForm').prop('disabled', true);
                $('#triple_sims').addClass('errorFailed');
            }else{
                $('._jsSubmitForm').prop('disabled', false);
                $('#triple_sims').removeClass('errorFailed');
            }

            vm.subtotal = vm.subtotal + delivery;


            $('#_jsTotalVAT').text(vm.vat);
            $('#_jsTotalPRICE').text((vm.subtotal).toFixed(2));
            $('#_jsPayTotal').text((vm.subtotal).toFixed(2));
            $('#_jsPayTotal').text((vm.subtotal).toFixed(2));
            $('*_payDelivery').text((delivery).toFixed(2));

        },

        generateInvoice:function(){

            const vm = this;
            axios.get(BASEURL + 'api/v1/generateInvoiceLegacy',getCustomHeaders).then(function (response) {

                vm.invoiceNo =  response.data.data.id;
                vm.processpayment();

            });


        },
        processPreOrder:function(){

            var quantity  = 0;
            var delivery  = {};
            var address   = {};
            var orders    = [];
            var triple_product   = {};
            var json_object    = {};

            if(this.triple_sims > 0){

                triple_product.product_id = this.triple_sims;

                if(this.triple_sims == 5){

                    triple_product.quantity   = 50;
                }
                if(this.triple_sims == 6){

                    triple_product.quantity   = 100;
                }

                orders.push(triple_product);

            }


            //Delivery
            delivery.address_id           = this.address_id;
            delivery.street_address       = this.street_address;
            delivery.suburb               = this.suburb;
            delivery.area                 = this.area;
            delivery.city                 = this.city;
            delivery.code                 = this.code;
            delivery.province_id          = this.prov;
            delivery.delivery_instruction = this.delivery_instruction;
            delivery.delivery_cost        = this.deliveryCost;
            delivery.subtotal             = this.subtotal;
            delivery.vat                  = this.vat;

            //Address
            address.delivery = delivery;

            //Json Object
            json_object.orders     = orders;
            json_object.delivery   = true;
            json_object.vat        = true;
            json_object.address    = address;
            json_object.person_id  = Cookies.get("person_id");
            this.formData.invoice_no     = vm.invoiceNo;
            this.formData.json_object    = json_object;


            axios.post(BASEURL + 'api/v1/preOrder',this.formData,getCustomHeaders)
                .then()
                .catch(error =>{

                console.log(error.response);
        })



        },
        processpayment:function(){

            vm = this;
            vm.processPreOrder();
            var paymentInfo                 = {};
            var responseData                = "";
            var returnUrl                   = window.location.href.split('#')[0];
            paymentInfo.token               = vm.selectedCard;
            paymentInfo.amount              = vm.subtotal * 100;
            paymentInfo.action              = "distributor_sims";
            paymentInfo.invoiceId           =  vm.invoiceNo;
            paymentInfo.returnUrl           =  returnUrl +"#/orderhistory";
            paymentInfo.person_id           =  Cookies.get("person_id");
            paymentInfo.email               =  Cookies.get('email');

            $.ajax({
                type:'post',
                url: BASEURL + 'api/v1/paynowpayweb',
                dataType: 'json',
                data:JSON.stringify(paymentInfo),
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("mvno", MVNO);
                },
                success: function(response) {

                    var responseData = response;
                    var iFrame = '<form action="' + responseData.url + '" method="post" class="secureForm" style="display:none">' +
                        '<input type="text" name="PAYGATE_ID" id="PAYGATE_ID" value="' + responseData.parameters.PAYGATE_ID + '">' +
                        '<input type="text" name="PAY_REQUEST_ID" id="PAY_REQUEST_ID" value="' + responseData.parameters.PAY_REQUEST_ID + '">' +
                        '<input type="text" name="CHECKSUM" id="CHECKSUM" value="' + responseData.parameters.CHECKSUM + '">' +
                        '<input type="submit" value="post">' +
                        '</form>';

                    $(".paygate_form").html(iFrame);
                    $(".secureForm").submit();
                    $(".paygate_form").html('');

                },
                error: function(xhr, ajaxOptions, thrownError) {



                }
            });

            return responseData;

        },

        processOrder(){


            this.generateInvoice();

        },
        getCards:function(){

            const vm = this;
            axios.get(BASEURL + 'api/v1/getDistributorCards/'+ distributor_id,getCustomHeaders).then(function (response) {

                vm.cards =  response.data;

            });
        },
        addCard:function(){

            var CardNo = this.selectedCard;
            //TODO:display modal with you card has been change



        }

    },
    beforeCreate(){


        if (typeof distributor_id === "undefined") {

            logout();
        }

    },
    created(){


        this.get_distributor_products();
        this.get_provinces();
        this.get_delivery_address();
        this.getCards();
        this.get_global_settings();



    }

})

const home   = { template: '<home></home>' }

const routes = [

    { path: '/', component: home },

]

const router = new VueRouter({
    relative: true,
    routes
})

var app = new Vue({

    el:'#app',
    router,

})