// (function(){
//
//
//     var laptopScreenWidth = 1300
//     var tabletScreenWidth =  768
//
//     var requestForm = $('.RequestFormFooterWrapper')
//     var requestFormToggle = requestForm.find('.RequestForm-openClose')
//     var requestFormOverview = requestForm.find('.RequestForm-overview')
//
//     // Set height of the visible part of RequestForm
//     if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
//       var visibleHeightOfRequestForm = 88
//     } else if (window.matchMedia("(min-width: "+tabletScreenWidth+"px)").matches) {
//       var visibleHeightOfRequestForm = 67
//     } else {
//       var visibleHeightOfRequestForm = 52
//     }
//
//     var footerPosition = $('.Footer').position()
//     var unstickPoint = footerPosition.top + ((visibleHeightOfRequestForm*2) + (requestFormToggle.height()*2))
//
//     console.log('visibleHeightOfRequestForm: '+visibleHeightOfRequestForm + '\n')
//     console.log('footerPosition: '+footerPosition.top + '\n')
//     console.log('unstickPoint: '+unstickPoint + '\n')
//     console.log('requestFormToggle.height: '+requestFormToggle.height() + '\n')
//
//     // Set the size of RequestForm-openClose
//     function setTogglePosition() {
//       var overviewPosition = requestFormOverview.position()
//       if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
//         requestFormToggle.css({
//           'left': overviewPosition.left+'px',
//           'width': requestFormOverview.width()+'px',
//           'opacity': '1'
//         })
//       } else if (window.matchMedia("(min-width: "+tabletScreenWidth+"px)").matches) {
//         requestFormToggle.css({
//           'left': '74px',
//           'width': 'auto',
//           'opacity': '1'
//         })
//       } else {
//         requestFormToggle.css({
//           'left': '25px',
//           'width': 'auto',
//           'opacity': '1'
//         })
//       }
//     }
//
//     function putRequestFormAtBottom() {
//       var windowHeight = window.innerHeight
//
//       // Set position of RequestForm
//       requestForm.css({
//         'opacity': '1',
//         'position': 'fixed',
//         'transform': 'translate3d(0, ' + (windowHeight - visibleHeightOfRequestForm) + 'px, 0)',
//         'box-shadow': 'inset 0 0 0 20px maroon'
//       })
//       $('body').css({
//         'padding-bottom': requestForm.height()+'px'
//       })
//     }
//
//     function unstickRequestForm() {
//       requestForm.css({
//         'position': 'relative',
//         'transform': 'translate3d(0, 0, 0)',
//         'box-shadow': 'inset 0 0 0 20px red'
//       })
//       $('body').css({
//         'padding-bottom': '0'
//       })
//     }
//
//     // On pageload
//     putRequestFormAtBottom()
//     setTogglePosition()
//
//     $( window ).resize(function() {
//       putRequestFormAtBottom()
//       setTogglePosition()
//     })
//
//     $(window).scroll(function (event) {
//       if($(window).scrollTop() + $(window).height() == ($(document).height())) {
//         unstickRequestForm()
//
//       } else {
//         putRequestFormAtBottom()
//       }
//     })
//
//
// })();
