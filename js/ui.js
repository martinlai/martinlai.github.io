$(document).ready(function (){

  for (var project in projects) {
  if (projects.hasOwnProperty(project)) {
     $('#layout').append('<div id="'+project+'"><h3 class="'+project+'_close" style="text-align:right; cursor:pointer; padding-right:0.3em"><i class="fa fa-times" aria-hidden="true"></i></a><h2 class="content-subhead center">'+projects[project].dispname+'</h2><div class="pure-g"><div class="pure-u-1" style="margin: auto; width:75%"><video class="video_tag" controls preload="metadata"><source src="resources/'+projects[project].video+'" type="video/mp4"></video></div> </div> <div class="pure-g" style="width:100%; text-align:left;"> <div class="pure-u-1 pure-u-md-8-24"> <h2 class="content-subhead">Description</h2> <p>'+projects[project].desc+'</p> </div> <div class="pure-u-1 pure-u-md-6-24"> <h2 class="content-subhead">Possible Improvements</h2> <p>'+projects[project].improvements+'</p> </div> <div class="pure-u-1 pure-u-md-5-24"> <h2 class="content-subhead">Technologies Used</h2> <p>'+projects[project].technologies+'</p> </div> <div class="pure-u-1 pure-u-md-5-24"> <a class="pure-button button-nav" target="_blank" id="github-icon" href="'+projects[project].github+'"><i class="fa fa-github" aria-hidden="true"></i></a> </div> </div> </div>')
      $('#'+project).popup({
        color: 'white',
        opacity: 1,
        transition: '0.3s',
        scrolllock: true
      });
  }
}

$( "#accordion" ).accordion({
  collapsible: true,
  heightStyle: "content",
  active: false
});

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

var scrollsections = ["about","projects","resume","contact"]

for(var i = 0; i < scrollsections.length; i++) {

  $("#"+scrollsections[i]+"-button").click(function (event){
          current_id = jQuery(this).attr("id")
          console.log(current_id)
          if(current_id == "resume-button") {
            $("#accordion").accordion("option", "active", 0);
          }

          disableScroll();
          $('html, body').stop().animate({
              scrollTop: $("#"+current_id.replace("-button","")).offset().top
          }, 2000, function() {
            enableScroll();
          });


      });
}

$("#send-button").click(function() {
    console.log($('#name').val());
        database.ref("messages/"+Date.now()).set({
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#message').val()
        });
});
enableScroll();
});
