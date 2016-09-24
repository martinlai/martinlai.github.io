$(document).ready(function (){

  for (var project in projects) {
  if (projects.hasOwnProperty(project)) {
     $('#layout').append(`
         <div id="`+project+`">
           <h2 class="content-subhead center">About</h2>
           <div class="pure-g">
             <div class="pure-u-1" style="margin: auto; width:60%">
               <video class="video_tag" controls preload="metadata">
                 <source src="resources/`+projects[project].video+`" type="video/mp4">
               </video>
             </div>
           </div>

           <div class="pure-g" style="width:120%; text-align:left;">
             <div class="pure-u-1 pure-u-md-8-24">
               <h2 class="content-subhead">Description</h2>
               <p>`+projects[project].desc+`</p>
             </div>
             <div class="pure-u-1 pure-u-md-6-24">
               <h2 class="content-subhead">Possible Improvements</h2>
               <p>`+projects[project].improvements+`</p>
             </div>
             <div class="pure-u-1 pure-u-md-5-24">
               <h2 class="content-subhead">Technologies Used</h2>
               <p>`+projects[project].technologies+`</p>
             </div>
             <div class="pure-u-1 pure-u-md-5-24">
               <p>PLACEHOLDER</p>
             </div>
           </div>
         </div>`)


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



    $(".scroll").click(function (){
        disableScroll();
        $('html, body').stop().animate({
            scrollTop: $(".projects").offset().top
        }, 2000, function() {
          enableScroll();
        });
    });
});
