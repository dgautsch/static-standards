var TBI = TBI || {}

;(function (TBI) {
  var smoothScroll = (function () {
    // Animate smooth page scroll to anchor on same page
    // <a href="#target"></a> ... <div id="target"></div>
    var animateScroll = function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000)
          return false
        }
      }
    }

    var bindEvents = function (identifier) {
      var $trigger = $(identifier)
      $trigger.on('click', animateScroll)
    }

    return {
      // Exposed Functions
      scroll: function (identifier) {
        bindEvents(identifier)
      }
    }
  })()

  TBI.smoothScroll = smoothScroll
})(TBI)

$(document).on('ready', function () {
  var $scrollIdentifier = $('.tbi-nav-menu li a')
  $scrollIdentifier.each(function () {
    TBI.smoothScroll.scroll(this)
  })
})
