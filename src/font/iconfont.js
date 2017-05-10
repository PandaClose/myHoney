;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.412716 480.847489 556.823881 104.126522c-1.89721-2.258437-6.142907-6.194072-12.037151-10.081613-9.920954-6.544043-21.162995-10.520611-33.496905-10.520611-13.180184 0-24.690332 3.997034-34.357506 10.623965-5.846148 4.010337-9.876951 8.102538-12.157901 11.154038L84.209914 480.894561c-14.700817 14.481829-14.700817 38.014802 0 52.529377 14.585183 14.427594 33.995255 8.343015 50.529837-7.945973l25.607214-25.314549 38.918381-37.700647c-1.359974 1.686409-2.282996 2.963495-2.284019 3.373841L196.981327 847.484797c0 50.006927 40.941458 90.427522 91.442642 90.427522l141.713582 0 10.423397 0L440.560948 927.486876 440.560948 686.440961c0-17.467837 14.411221-31.683607 32.223912-31.683607l77.051887 0c17.814738 0 32.223912 14.21577 32.223912 31.683607L582.060659 927.486876l0 10.425444 10.425444 0 141.713582 0c50.485835 0 91.442642-40.428781 91.442642-90.427522L825.642327 467.251843l62.246693 61.207014c20.142759 13.266142 37.897122 17.434068 50.523697 4.963035C953.114556 518.910387 953.114556 495.361041 938.412716 480.847489z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.023306 401.066445m-149.158135 0a149.158135 149.158135 0 1 0 298.31627 0 149.158135 149.158135 0 1 0-298.31627 0Z"  ></path>' +
    '' +
    '<path d="M513.023306 65.459874c-247.133563 0-447.474404 200.340841-447.474404 447.474405S265.889743 960.408683 513.023306 960.408683s447.474404-200.340841 447.474405-447.474404S760.155846 65.459874 513.023306 65.459874z m272.202519 754.331188c4.88424-20.698414 7.468089-42.284035 7.468089-64.474431 0-100.883665-53.416584-189.292204-133.508714-238.484579-34.151821 43.062771-86.931908 70.681806-146.161894 70.681806s-112.010073-27.619034-146.162917-70.680783C286.767236 566.024427 233.351676 654.432966 233.351676 755.316631c0 22.189372 2.583848 43.776016 7.468088 64.474431-84.643796-75.140351-137.981584-184.76919-137.981584-306.85576 0-226.538503 183.6456-410.185126 410.185126-410.185127S923.207409 286.395776 923.207409 512.934279c0 122.086569-53.336766 231.716432-137.981584 306.856783z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like_fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-live_fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M626.976 590.08l-160 117.728a31.936 31.936 0 0 1-44.736-6.816 31.424 31.424 0 0 1-3.968-29.12 31.904 31.904 0 0 1-2.272-11.2v-192c0-2.72 0.896-5.152 1.568-7.68a31.424 31.424 0 0 1 4.16-26.624c10.176-14.432 30.08-18.016 44.576-7.936l160 111.616a32 32 0 0 1 0.64 52.032M800.32 260.672h-188.8l40.064-87.36c7.36-16.032 0.32-35.04-15.744-42.432a32.064 32.064 0 0 0-42.432 15.776l-52.32 114.016H459.52l-52.288-114.016A32.096 32.096 0 0 0 364.8 130.88a32.096 32.096 0 0 0-15.776 42.464l40.064 87.328H223.744a63.968 63.968 0 0 0-63.744 64v480c0 35.296 28.608 64 63.744 64h576.544a63.936 63.936 0 0 0 63.68-64v-480c0-35.264-28.544-64-63.68-64"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mail" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M831.936 768L192 768.192V378.304l302.816 192.704a32.096 32.096 0 0 0 34.4 0L832 378.304 831.936 768zM192 255.776L192.096 256 832 255.776v46.656l-320 203.616L192 302.432V255.776zM831.936 192H192.096A64 64 0 0 0 128 255.776v512.416C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.192V255.776A64 64 0 0 0 831.936 192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M610.464 716.256A254.272 254.272 0 0 1 512 736c-141.184 0-256-114.816-256-256 0-141.152 114.816-256 256-256 141.152 0 256 114.848 256 256 0 83.52-40.384 157.568-102.432 204.352a256.32 256.32 0 0 1-55.104 31.904m213.28 126.272l-112.512-112.544C784.704 671.328 832 581.152 832 480c0-176.448-143.552-320-320-320C335.52 160 192 303.552 192 480c0 176.48 143.52 320 320 320 51.84 0 100.704-12.672 144.064-34.656l122.432 122.432a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)