// default API key should be replaced by your own one
// get it here http://soundcloud.com/you/apps/new
var api_key = "aDFM43qGZDyjYewkCkELhA";

var is_ready = false;
var is_waiting_next = false;
var page_index = 0;
var items_by_page = 40;
var minutes_min = 20;
var order_by = "hotness";

$.scPlayer.defaults.onDomReady = function(){
  $('#player').scPlayer({
    apiKey: 'aDFM43qGZDyjYewkCkELhA'
  });
  scplayer = $("div.sc-player");
};

$(document).bind('onTrackDataLoaded.scPlayer', function(event){
  //console.log(event.target, 'is ready!');
});

$(document).bind('onTrackDataLoaded.scPlayer', function(event){
  //console.log(event.target, 'is ready!');
});

$(document).ready(function() {
  // hide some elements at start
  $("#container").css("opacity", 0);
  $("#footer").css("opacity", 0);
  $("#loader").hide();
  $(".search_options").slideUp(0);
  
  // event handling for basic ui elements
  $("#search input").change( function(event){
    init_search();
  });
  
  $("#search form").submit( function(event){
    init_search();
    return false;
  });
  
  $("#toggler a").click(function(event){
    event.preventDefault();
    $(".search_options").slideToggle(200);
    return false;
  });
  
  $("a", "#tags").click(function(event){
    event.preventDefault();
    $("#search input").val($(this).text());
    init_search();
    return false;
  });
  
  $("select").change( function(event){
    init_search();
  });
  
  site_ready();
});

$(document).bind('scPlayer:onMediaPlay', function(event, data) {
  //next_track();
  //console.log( data );
});


$(document).bind('soundcloud:onPlayerError', function(event, data) {
  if( is_ready == false ){
    is_ready = true;
    initSearch();
  }
});

var site_ready = function () {
  is_ready = true;
  // hide the main loader
  $("#main_loader").animate({opacity: 0}, 200);
  
  // hide the page loader
  $("#loader").hide();
  
  // show site elements
  $("#container").animate({opacity: 1}, 500);
  $("#footer").animate({opacity: 1}, 500);
  $("#ribbon").animate({opacity: 1}, 500);
}

var next_track = function() {
  var $current = $(".selected", "#playlist");
  var $next = $current.next();
  if( $next.length != 0 ){
    $("a", $next ).click();
  }else{
    page_index++;
    is_waiting_next = true;
    load_next_page();
  }
}

var load_next_page = function (){
  var offset = page_index * items_by_page;
  var minlength = "&duration[from]=" + minutes_min * ( 1000 * 60 );
  
  // display the loader
  $("#loader").show(400);
  
  $.getJSON('http://api.soundcloud.com/tracks.json?consumer_key=' + api_key + '&filter=streamable&order=' + order_by + '&limit=' + items_by_page + '&offset=' + offset + minlength + '&tags=' + $("#search input").val() +'&callback=?', function(data) {
      // hide the loader
      $("#loader").hide();
      
      // get the playlist
      $target = $("#playlist ul");
      
      // add the loaded tracks to playlist
      for( var i = 0; i < data.length; i++ ){
        var cl = "odd";
        if( i % 2 == 0 ) cl = "even";
        var s = "<li class='" + cl + "'><a href='" + data[i].uri + "'><span class='left'>" + data[i].title + "</span><span class='right'>" + data[i].tag_list + "</span></a></li>";
        $("ul", "#playlist").append(s);
      }
      
      // add click listener to tracks
      $("a", "#playlist ul").click(function(event){
        event.preventDefault();
        $.scPlayer.setTrack(scplayer, $(this));
        
        $("li", "#playlist").removeClass("selected");
        $(this).parent().addClass("selected");
        return false;
      });
      
      // play next track if needed
      if( is_waiting_next ){
        is_waiting_next = false;
        next_track();
      }
  }, "xml");
}

/*
 * start a new search
 */

var init_search = function (){
  // get current selected duration
  switch( $('select[name$="duration"]').val() ){
    case "short":
      minutes_min = 5;
      break;
    case "medium":
      minutes_min = 20;
      break;
    case "long":
      minutes_min = 40;
      break;
  }
  
  switch( $('select[name$="order"]').val() ){
    case("time"):
      order_by = "created_at";
      break;
    case("hotness"):
      order_by = "hotness";
      break;
  }
  
  // reset page index
  page_index = 0;
  
  // reset playlist tracks
  $target = $("#playlist");
  $target.html("<ul></ul>");
  
  load_next_page();
  
  // add next page button
  $("#actions").html("");
  $("#actions").append("<a href='#' class='next'>Load next page</a>");
  $("a.next", "#actions").click(function(event){
    event.preventDefault();
    page_index++;
    load_next_page();
    return false;
  });
}

/*
 * soundcloud player events
 */

$(document).bind('soundcloud:onMediaEnd', function(event, data) {
  next_track();
});

$(document).bind('soundcloud:onPlayerReady', function(event, data) {
  if( is_ready == false ){
    site_ready();
  }else{
    $("#player").animate({height: "90px"}, 500);
  }
});

$(document).bind('soundcloud:onPlayerError', function(event, data) {
  if( is_ready == false ){
    site_ready();
  }
});
