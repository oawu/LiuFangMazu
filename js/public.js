/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

// GA 物件
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-75766009-1', 'auto');ga('send', 'pageview');

// Facebook 物件
window.fbAsyncInit = function() {FB.init({appId: '695906407210191',xfbml: true,version: 'v2.4'});};
(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) {return;}js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/zh_TW/sdk.js";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

// MarkerWithLabel 物件
function inherits(e,t){function i(){}i.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new i,e.prototype.constructor=e}function MarkerLabel_(e,t,i){this.marker_=e,this.handCursorURL_=e.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.setAttribute("onselectstart","return false;"),this.eventDiv_.setAttribute("ondragstart","return false;"),this.crossDiv_=MarkerLabel_.getSharedCross(t)}function MarkerWithLabel(e){e=e||{},e.labelContent=e.labelContent||"",e.initCallback=e.initCallback||function(){},e.labelAnchor=e.labelAnchor||new google.maps.Point(0,0),e.labelClass=e.labelClass||"markerLabels",e.labelStyle=e.labelStyle||{},e.labelInBackground=e.labelInBackground||!1,"undefined"==typeof e.labelVisible&&(e.labelVisible=!0),"undefined"==typeof e.raiseOnDrag&&(e.raiseOnDrag=!0),"undefined"==typeof e.clickable&&(e.clickable=!0),"undefined"==typeof e.draggable&&(e.draggable=!1),"undefined"==typeof e.optimized&&(e.optimized=!1),e.crossImage=e.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",e.handCursor=e.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",e.optimized=!1,this.label=new MarkerLabel_(this,e.crossImage,e.handCursor),google.maps.Marker.apply(this,arguments)}inherits(MarkerLabel_,google.maps.OverlayView),MarkerLabel_.getSharedCross=function(e){var t;return"undefined"==typeof MarkerLabel_.getSharedCross.crossDiv&&(t=document.createElement("img"),t.style.cssText="position: absolute; z-index: 1000002; display: none;",t.style.marginLeft="-8px",t.style.marginTop="-9px",t.src=e,MarkerLabel_.getSharedCross.crossDiv=t),MarkerLabel_.getSharedCross.crossDiv},MarkerLabel_.prototype.onAdd=function(){var e,t,i,s,a,r,o,n=this,l=!1,g=!1,p=20,_="url("+this.handCursorURL_+")",v=function(e){e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},h=function(){n.marker_.setAnimation(null)};this.getPanes().overlayImage.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),"undefined"==typeof MarkerLabel_.getSharedCross.processed&&(this.getPanes().overlayImage.appendChild(this.crossDiv_),MarkerLabel_.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.eventDiv_,"mouseover",function(e){(n.marker_.getDraggable()||n.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(n.marker_,"mouseover",e))}),google.maps.event.addDomListener(this.eventDiv_,"mouseout",function(e){!n.marker_.getDraggable()&&!n.marker_.getClickable()||g||(this.style.cursor=n.marker_.getCursor(),google.maps.event.trigger(n.marker_,"mouseout",e))}),google.maps.event.addDomListener(this.eventDiv_,"mousedown",function(e){g=!1,n.marker_.getDraggable()&&(l=!0,this.style.cursor=_),(n.marker_.getDraggable()||n.marker_.getClickable())&&(google.maps.event.trigger(n.marker_,"mousedown",e),v(e))}),google.maps.event.addDomListener(document,"mouseup",function(t){var i;if(l&&(l=!1,n.eventDiv_.style.cursor="pointer",google.maps.event.trigger(n.marker_,"mouseup",t)),g){if(a){i=n.getProjection().fromLatLngToDivPixel(n.marker_.getPosition()),i.y+=p,n.marker_.setPosition(n.getProjection().fromDivPixelToLatLng(i));try{n.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(h,1406)}catch(r){}}n.crossDiv_.style.display="none",n.marker_.setZIndex(e),s=!0,g=!1,t.latLng=n.marker_.getPosition(),google.maps.event.trigger(n.marker_,"dragend",t)}}),google.maps.event.addListener(n.marker_.getMap(),"mousemove",function(s){var _;l&&(g?(s.latLng=new google.maps.LatLng(s.latLng.lat()-t,s.latLng.lng()-i),_=n.getProjection().fromLatLngToDivPixel(s.latLng),a&&(n.crossDiv_.style.left=_.x+"px",n.crossDiv_.style.top=_.y+"px",n.crossDiv_.style.display="",_.y-=p),n.marker_.setPosition(n.getProjection().fromDivPixelToLatLng(_)),a&&(n.eventDiv_.style.top=_.y+p+"px"),google.maps.event.trigger(n.marker_,"drag",s)):(t=s.latLng.lat()-n.marker_.getPosition().lat(),i=s.latLng.lng()-n.marker_.getPosition().lng(),e=n.marker_.getZIndex(),r=n.marker_.getPosition(),o=n.marker_.getMap().getCenter(),a=n.marker_.get("raiseOnDrag"),g=!0,n.marker_.setZIndex(1e6),s.latLng=n.marker_.getPosition(),google.maps.event.trigger(n.marker_,"dragstart",s)))}),google.maps.event.addDomListener(document,"keydown",function(e){g&&27===e.keyCode&&(a=!1,n.marker_.setPosition(r),n.marker_.getMap().setCenter(o),google.maps.event.trigger(document,"mouseup",e))}),google.maps.event.addDomListener(this.eventDiv_,"click",function(e){(n.marker_.getDraggable()||n.marker_.getClickable())&&(s?s=!1:(google.maps.event.trigger(n.marker_,"click",e),v(e)))}),google.maps.event.addDomListener(this.eventDiv_,"dblclick",function(e){(n.marker_.getDraggable()||n.marker_.getClickable())&&(google.maps.event.trigger(n.marker_,"dblclick",e),v(e))}),google.maps.event.addListener(this.marker_,"dragstart",function(e){g||(a=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(e){g||a&&(n.setPosition(p),n.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(e){g||a&&n.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){n.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){n.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){n.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){n.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){n.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){n.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){n.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){n.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){n.setStyles()})]},MarkerLabel_.prototype.onRemove=function(){var e;for(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_),e=0;e<this.listeners_.length;e++)google.maps.event.removeListener(this.listeners_[e])},MarkerLabel_.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},MarkerLabel_.prototype.setContent=function(){var e=this.marker_.get("labelContent");"undefined"==typeof e.nodeType?(this.labelDiv_.innerHTML=e,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(e),e=e.cloneNode(!0),this.eventDiv_.innerHTML="",this.eventDiv_.appendChild(e))},MarkerLabel_.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},MarkerLabel_.prototype.setStyles=function(){var e,t;this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",t=this.marker_.get("labelStyle");for(e in t)t.hasOwnProperty(e)&&(this.labelDiv_.style[e]=t[e],this.eventDiv_.style[e]=t[e]);this.setMandatoryStyles()},MarkerLabel_.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="","undefined"!=typeof this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},MarkerLabel_.prototype.setAnchor=function(){var e=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-e.x+"px",this.labelDiv_.style.marginTop=-e.y+"px",this.eventDiv_.style.marginLeft=-e.x+"px",this.eventDiv_.style.marginTop=-e.y+"px"},MarkerLabel_.prototype.setPosition=function(e){var t=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());"undefined"==typeof e&&(e=0),this.labelDiv_.style.left=Math.round(t.x)+"px",this.labelDiv_.style.top=Math.round(t.y-e)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},MarkerLabel_.prototype.setZIndex=function(){var e=this.marker_.get("labelInBackground")?-1:1;"undefined"==typeof this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},MarkerLabel_.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display;var e=this.marker_.get("initCallback");e(this.labelDiv_)},inherits(MarkerWithLabel,google.maps.Marker),MarkerWithLabel.prototype.setMap=function(e){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(e)};

// timeago 物件
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(){var e=a(this),o=n.settings,s=t(this).data("tag");return isNaN(e.datetime)||(0==o.cutoff||r(e.datetime)<o.cutoff)&&(""==s||void 0===s?t(this).text(i(e.datetime)):t(this).data(s,i(e.datetime))),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:n.datetime(e)});var a=t.trim(e.text());n.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||n.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t){return n.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var n=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var i=this.settings.strings,r=i.prefixAgo,n=i.suffixAgo;this.settings.allowFuture&&0>e&&(r=i.prefixFromNow,n=i.suffixFromNow);var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,d=m/365,l=45>o&&a(i.seconds,Math.round(o))||90>o&&a(i.minute,1)||45>s&&a(i.minutes,Math.round(s))||90>s&&a(i.hour,1)||24>u&&a(i.hours,Math.round(u))||42>u&&a(i.day,1)||30>m&&a(i.days,Math.round(m))||45>m&&a(i.month,1)||365>m&&a(i.months,Math.round(m/30))||1.5>d&&a(i.year,1)||a(i.years,Math.round(d)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),t.trim([r,l,n].join(f))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=n.isTime(e)?t(e).attr("datetime"):t(e).data("time");return n.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){var a=t.proxy(e,this);a();var i=n.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=n.parse(a);t(this).data("timeago",{datetime:i}),n.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:n.parse(n.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?o[t]:o.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"從現在開始",suffixAgo:"之前",suffixFromNow:null,seconds:"不到 1 分鐘",minute:"約 1 分鐘",minutes:"%d 分鐘",hour:"約 1 小時",hours:"%d 小時",day:"約 1 天",days:"%d 天",month:"約 1 個月",months:"%d 個月",year:"約 1 年",years:"%d 年",numbers:[],wordSeparator:""};

$(function () {
  // 陣列常用 Prototype
  Array.prototype.column = function (k) { return this.map (function (t) { return k ? eval ("t." + k) : t; });};
  Array.prototype.last = function () { return this[this.length - 1];};
  Array.prototype.first = function () { return this[0];};

  // 控制地圖、Marker 移動的函式
  function getUnit (will, now) { var addLat = will.lat () - now.lat (), addLng = will.lng () - now.lng (), aveAdd = ((Math.abs (addLat) + Math.abs (addLng)) / 2), unit = aveAdd < 10 ? aveAdd < 1 ? aveAdd < 0.1 ? aveAdd < 0.01 ? aveAdd < 0.001 ? aveAdd < 0.0001 ? 3 : 6 : 9 : 12 : 15 : 24 : 21,lat = addLat / unit, lng = addLng / unit;if (!((Math.abs (lat) > 0) || (Math.abs (lng) > 0))) return null;return { unit: unit, lat: lat, lng: lng }; }
  function markerMove (marker, unitLat, unitLng, unitCount, unit, callback) {if (unit > unitCount) { marker.setPosition (new google.maps.LatLng (marker.getPosition ().lat () + unitLat, marker.getPosition ().lng () + unitLng)); clearTimeout (window.markerMoveTimer); window.markerMoveTimer = setTimeout (function () { markerMove (marker, unitLat, unitLng, unitCount + 1, unit, callback); }, 25); } else { if (callback) callback (marker); } }
  function markerGo (marker, will, callback) {var now = marker.getPosition (), Unit = getUnit (will, now); if (!Unit) return false; markerMove (marker, Unit.lat, Unit.lng, 0, Unit.unit, callback); }
  function mapMove (map, unitLat, unitLng, unitCount, unit, callback) { if (unit > unitCount) { map.setCenter (new google.maps.LatLng (map.getCenter ().lat () + unitLat, map.getCenter ().lng () + unitLng)); clearTimeout (window.mapMoveTimer); window.mapMoveTimer = setTimeout (function () { mapMove (map, unitLat, unitLng, unitCount + 1, unit, callback); }, 25); } else { if (callback) callback (map); } }
  function mapGo (map, will, callback) { var now = map.center, Unit = getUnit (will, now); if (!Unit) return false; mapMove (map, Unit.lat, Unit.lng, 0, Unit.unit, callback); }
  
  // 圓形 SVG
  function circlePath (r) { return 'M 0 0 m -' + r + ', 0 '+ 'a ' + r + ',' + r + ' 0 1,0 ' + (r * 2) + ',0 ' + 'a ' + r + ',' + r + ' 0 1,0 -' + (r * 2) + ',0';}
  
  // 初始化地圖
  function initMap () {
    window.myVar.map = new google.maps.Map ($('#m').get (0), { zoom: 10, zoomControl: true, scrollwheel: true, scaleControl: true, mapTypeControl: false, navigationControl: true, streetViewControl: false, disableDoubleClickZoom: true, center: new google.maps.LatLng (23.569396231491233, 120.3030703338623)});
    window.myVar.map.mapTypes.set ('map_style', new google.maps.StyledMapType ([{ featureType: 'transit', stylers: [{ visibility: 'simplified' }] }, { featureType: 'poi', stylers: [{ visibility: 'simplified' }] }]));
    window.myVar.map.setMapTypeId ('map_style');
    google.maps.event.addListener (window.myVar.map, 'dragstart', function () { window.myVar.isMoved = true; });

    // 初始地圖 放大、縮小 功能
    $('#z').click (function () { window.myVar.map.setZoom (window.myVar.map.zoom + 1); });
    $('#s').click (function () { window.myVar.map.setZoom (window.myVar.map.zoom - 1); });
  }

  // 初始化交通圖層
  function initTrafficLayer () {
    $('#t').addClass ('s').click (function () {
      if (!window.myVar.trafficLayer) window.myVar.trafficLayer = new google.maps.TrafficLayer ();
      
      if (!$(this).data ('isOn')) {
        window.myVar.trafficLayer.setMap (window.myVar.map);
        $(this).data ('isOn', true).text ('關閉路況');
      } else {
        window.myVar.trafficLayer.setMap (null);
        $(this).data ('isOn', false).text ('開啟路況');
      }
    });
  }
  
  // 初始化 GPS 選單
  function initGpsSelect () {
    $('#g').click (function () {
      $(this).toggleClass ('s');
    }).find ('a').click (function () {
       var $span = $(this).parents ('label').find ('span').text ($(this).text ());
       $(this).addClass ('c').siblings ().removeClass ('c');
       loadData (false);
    });
    window.myVar.dot = $('#g').find ('a').first ().addClass ('c').attr ('val');
  }

  // 初始化我的位置功能
  function initMyPosition () {
    $('#i').addClass ('s').click (function () {
      $(this).text ('定位中..');

      navigator.geolocation.getCurrentPosition (function (location) {
        $(this).text ('我的位置');

        if (!window.myVar.myMarker) window.myVar.myMarker = new google.maps.Marker ({ map: window.myVar.map, draggable: false, optimized: false });
        window.myVar.myMarker.setPosition (new google.maps.LatLng (location.coords.latitude, location.coords.longitude));
        window.myVar.map.setCenter (new google.maps.LatLng (location.coords.latitude, location.coords.longitude));
      }.bind ($(this)), function () { $(this).remove (); }.bind ($(this)));
    });
  }

  // 讀取資料
  function loadData (isFirst) {
    if (++window.myVar.c > window.myVar.cl) return location.reload ();
    if (window.myVar.isLoadPath) return;
    window.myVar.isLoadPath = true;

    $.when ($.ajax ('http://map.godroad.tw/AdminGps_System/GainGPSHistory.aspx?SA_ID=e160522&dot=' + window.myVar.dot + '&t=' + new Date ().getTime (), {dataType: 'json'})).done (function (result) {
      window.myVar.isLoadPath = false;

      if (!(result && result.length)) return ;

      window.myVar.markers = result.map (function (t) {
        return { t: $.timeago (t.time), p: new google.maps.LatLng (t.latitude, t.longitude) };
      });

      if (!window.myVar.markers.length) return ;

      if (!window.myVar.polyline) window.myVar.polyline = new google.maps.Polyline ({ map: window.myVar.map, strokeColor: 'rgba(249, 39, 114, .45)', strokeWeight: 5 });
      window.myVar.polyline.setPath (window.myVar.markers.column ('p'));

      if (!window.myVar.mazu) window.myVar.mazu = new MarkerWithLabel ({ map: window.myVar.map, draggable: false, optimized: false, labelContent: '<img src="img/A_09.png" />', icon: {path: 'M 0 0'}, labelAnchor: new google.maps.Point (60 / 2, 60), labelClass: 'm'});
      window.myVar.mazu.setPosition (window.myVar.markers.first ().p);
      window.myVar.mazu.setZIndex (999);

      window.myVar.times.forEach (function (t) { t.setMap (null); }),
      window.myVar.times = [];
      var u = parseInt (window.myVar.markers.length / 5, 10);
      window.myVar.times = window.myVar.markers.map (function (t, i) { return i % u ? null : new MarkerWithLabel ({position: t.p, draggable: false, map: window.myVar.map, zIndex: 1, icon: { path: circlePath (3), strokeColor: 'rgba(255, 68, 170, 1)', strokeWeight: 1, fillColor: 'rgba(255, 68, 170, 1)', fillOpacity: 0.5 }, labelContent: t.t, labelAnchor: new google.maps.Point (-5, -5), labelClass: 't'});}).filter (function (t) { return t; });

      new google.maps.Geocoder ().geocode ({'latLng': window.myVar.markers.first ().p}, function (result, status) {
        if (!((status == google.maps.GeocoderStatus.OK) && result.length && (result = result[0]) && result.formatted_address)) return;

        if(!window.myVar.address) window.myVar.address = new MarkerWithLabel ({ draggable: false, map: window.myVar.map, labelContent: '', labelAnchor: new google.maps.Point (10, -5), labelClass: 'a', icon: {path: 'M 0 0'} });
        window.myVar.address.labelContent = result.formatted_address;
        window.myVar.address.setPosition (window.myVar.markers.first ().p);
      });

      if (isFirst) {
        window.myVar.map.setCenter (window.myVar.markers.first ().p);
        window.myVar.map.setZoom (16);
        $('#a').addClass ('h');
      }
      if (!window.myVar.isMoved) mapGo (window.myVar.map, window.myVar.markers.first ().p);
    });
  }

  google.maps.event.addDomListener (window, 'load', function () {
    // 初始化變數
    window.myVar = {};
    window.myVar.c = 0,
    window.myVar.cl = 30,
    window.myVar.isLoadPath = false,
    window.myVar.isMoved = false;
    window.myVar.times = [];
    window.myVar.timer = 30000;
    
    // 設定選單功能
    window.myVar.$body = $('body');
    $('#o').click (function () { window.myVar.$body.toggleClass ('s'); });
    $('#c').click (function () { window.myVar.$body.toggleClass ('s'); });

    // 初始地圖
    initMap ();

    // 初始我的位置
    initMyPosition ();

    // 初始交通圖層
    initTrafficLayer ();

    // 初始化 GPS 選單
    initGpsSelect ();

    // 讀取路徑資料
    loadData (true);

    // 固定時間讀取路徑資料
    setInterval (loadData, window.myVar.timer);
  });
});