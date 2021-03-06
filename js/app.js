
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

var member_id     = Cookies.get('member_id');

Vue.component('home', {
    template:"#home",
    data: function () {
        return {

        }

    },
    computed:{

        missingEmail:function(){ return this.email === '';},
        missingPassword:function(){ return this.password === '';},

    },
    methods:{

        validateLoginForm:function(){

            if (this.missingEmail || this.missingPassword){
                event.preventDefault()
            }else {

                this.login();
            }

        },

        login:function(){

            var loginData          = {};
            loginData.email        = this.email;
            loginData.password     = this.firstname;
            this.formdata          = loginData;

            axios.post('http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/login',this.formdata)
                .then(
                    function(response){

                        if(response.data.success){

                            successAlert(response.data.message);

                        }

                    }
                )
                .catch(error =>{

                console.log(error.response);
        })


        }

    },
    beforeCreate(){
    },
    created(){

    }

})

Vue.component('createaccount', {
    template:"#createaccount",
    data: function () {

        return {

            firstname:"",
            surname:"",
            email:"",
            password:"",
            confirm_password:"",
            formdata:{},
            attemptSubmit: false,

        }

    },

    computed:{

        missingFirstname:function(){ return this.firstname === '';},
        missingSurname:function(){ return this.surname === '';},
        missingEmail:function(){ return this.email === '';},
        missingPassword:function(){ return this.password === '';},
        missingConfirmPassword:function(){ return this.confirm_password === '';},

    },
    methods:{

        validateCreateAccountForm: function (event) {
            this.attemptSubmit = true;
            if (this.missingFirstname || this.missingEmail || this.missingPassword
                || this.missingConfirmPassword || this.missingSurname ){
                event.preventDefault()
            }else {

                this.createAccount();
            }
        },

        createAccount: function() {

            var member           = {};

            /*------------Member ----------------*/
            member.members_email         = this.email;
            member.members_firstname     = this.firstname;
            member.members_surname       = this.surname;
            member.members_password      = this.password;
            member.members_deleted       = 1;
            this.formdata                = member;

            axios.post('http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/register',this.formdata)
                .then(
                    function(response){

                        if(response.data.success){

                            successAlert(response.data.message);

                        }

                    }
                )
                .catch(error =>{

                console.log(error.response);
            })

        },

    },
    beforeCreate(){




    },
    created(){




    }

})

Vue.component('uploadvideo', {
    template:"#uploadvideo",
    data: function () {

        return {

            firstname:"",
            surname:"",
            email:"",
            password:"",
            title:"",
            description:"",
            confirm_password:"",
            formdata:{},
            attemptSubmit: false,
            percentage:0,
            validated:0,

        }

    },

    computed:{

        missingTitle:function(){ return this.title === '';},
        missingDescription:function(){ return this.description === '';},


    },
    methods:{

        validateUploadForm: function (event) {
            this.attemptSubmit = true;
            if (this.missingTitle || this.missingDescription ){
                event.preventDefault()
            }else {

                this.uploadVideo(event);
            }
        },
        uploadVideo:function(e){

            e.preventDefault();
            const files = this.$refs.image.files;
            const data  = new FormData();
            const vm = this;
            vm.validated = 1;
            data.append('video_title',this.title);
            data.append('member_id', Cookies.get('member_id'));
            data.append('video', files[0]);

            var config = {
                onUploadProgress: function(progressEvent) {
                    var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                    console.log("Progress:-"+percentCompleted);
                    vm.percentage = percentCompleted
                }
            };

            axios.post('http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/upload_video/',data,config)
                .then(
                    function(response){

                        if(response.data.success){



                        }

                    }
                )
                .catch(error =>{

                console.log(error.response);
        });


        },

        createAccount: function() {

            var member           = {};

            /*------------Member ----------------*/
            member.members_email         = this.email;
            member.members_firstname     = this.firstname;
            member.members_surname       = this.surname;
            member.members_password      = this.password;
            member.members_deleted       = 1;
            this.formdata                = member;

            axios.post('http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/register',this.formdata)
                .then(
                    function(response){

                        if(response.data.success){

                            successAlert(response.data.message);

                        }

                    }
                )
                .catch(error =>{

                console.log(error.response);
        })

        },

    },
    beforeCreate(){




    },
    created(){




    }

})


const home            = { template: '<home></home>' }
const createaccount   = { template: '<createaccount></createaccount>' }
const uploadvideo     = { template: '<uploadvideo></uploadvideo>' }

const routes = [

    { path: '/', component: home},
    { path: '/createaccount', component: createaccount},
    { path: '/uploadvideo', component: uploadvideo},

]

const router = new VueRouter({
    relative: true,
    routes
})

var app = new Vue({
    data: function () {
        return {
            email:"",
            password:"",
            formdata:{},
            attemptSubmit: false,
            logout_btn:false,
            upload_btn:false,
            type:'',
        }

    },
    computed:{

        missingEmail:function(){ return this.email === '';},
        missingPassword:function(){ return this.password === '';},

    },
    beforeCreate(){

        var vm = this;

        if (typeof member_id === "undefined") {

            if(window.location.href.indexOf('uploadvideo') != -1){

                document.location.href="/";
            }


        } else{

            vm.logout_btn   = true;
            vm.upload_btn   = true;

        }

    },
    created(){

        var vm = this;

        if (typeof member_id === "undefined") {


            if(window.location.href.indexOf('uploadvideo') != -1){

                document.location.href="/";
            }


        } else{

            vm.logout_btn   = true;
            vm.upload_btn   = true;

        }


    },
    methods:{

        validateLoginForm:function(){

            if (this.missingEmail || this.missingPassword){
                event.preventDefault()
            }else {

                this.login();
            }

        },

        logout:function(){

            var vm  = this;
            Cookies.remove('member_id');
            vm.logout_btn  = false;
            vm.upload_btn = false;
            document.location.href="/";


        },

        login:function(){

            var loginData          = {};
            var vm  = this;
            loginData.email        = vm.email;
            loginData.password     = vm.password;
            vm.formdata            = loginData;
            axios.post('http://ec2-52-200-186-135.compute-1.amazonaws.com/api_twominutes/index.php/api/login',this.formdata)
                .then(
                    function(response){

                        if(response.data.success){


                            Cookies.set("member_id",response.data.member.members_id);
                            member_id = response.data.member.members_id;
                            vm.logout_btn  = true;
                            vm.upload_btn = true;
                            vm.type = 'none';
                            //$(".login-form").css("display", "none");


                        }

                    }
                )
                .catch(error =>{

                 console.log(error);
        })


        }


    },

    el:'#app',
    router,

})

