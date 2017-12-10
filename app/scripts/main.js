window.onload = function() {
  var topNavMenu = document.getElementById('top-nav-menu'),
    layer = document.getElementById('layer'),
    nav = document.getElementById('nav'),
    navFirstX = document.getElementsByClassName('nav-first-x')[0],
    footNav = document.getElementsByClassName('foot-nav')[0],
    footNavLi = footNav.getElementsByTagName('li')[0];



  footNavLi.onclick = topNavMenu.onclick = function() {

    layer.style.display = 'block';

    nav.style.right = 0;
    nav.style.width = 50 + '%';
  }
  navFirstX.onclick = layer.onclick = function() {
    layer.style.display = 'none';

    nav.style.right = -50 + '%';
    nav.style.width = 0;
  }


  var navClassifyOne = nav.getElementsByClassName('nav-classify-one'),
    navClassifyTow = nav.getElementsByClassName('nav-classify-tow');

  for (var i = 0; i < navClassifyOne.length; i++) {
    navClassifyOne[i].onclick = function(index) {
      return function() {
        if (navClassifyTow[index].style.display == 'none' || navClassifyTow[index].style.display == '') {
          navClassifyTow[index].style.display = 'block';
        } else {
          navClassifyTow[index].style.display = 'none';
        }
      }
    }(i)
  }
  var footPhone = document.getElementsByClassName('foot-phone')[0],
    footPhoneX = document.getElementsByClassName('foot-phone-x')[0];

  footPhoneX.onclick = function() {
    footPhone.style.display = 'none';
  }





  var aboutTopNavCla = document.getElementById('about-top-nav-classify'),
    aboutMainNav = document.getElementById('about-main-nav');
  if (aboutTopNavCla) {
    aboutTopNavCla.onclick = function() {
      if (/main-nav-b/.test(aboutMainNav.className)) {
        aboutMainNav.className = aboutMainNav.className.replace(/main-nav-b/, 'main-nav-n');
      } else {
        aboutMainNav.className = aboutMainNav.className.replace(/main-nav-n/, 'main-nav-b');
      }
    }
  }




  var pic_detailTopNavCla = document.getElementById('pic_detail-top-nav-classify'),
    pic_detailTopNavFont = document.getElementById('pic_detail-top-nav_font');

  if (pic_detailTopNavCla) {
    pic_detailTopNavCla.onclick = function() {
      if (pic_detailTopNavFont.style.display == 'none' || pic_detailTopNavFont.style.display == '') {
        pic_detailTopNavFont.style.display = 'block';
      } else {
        pic_detailTopNavFont.style.display = 'none';
      }
    }
  
  var pic_detailMainTopIWrap = document.getElementById('pic_detail-main-top-i-wrap');

  function animate(offset) {
    var newLeft = parseInt(pic_detailMainTopIWrap.style.left) || 0;
    newLeft = newLeft + offset;
    pic_detailMainTopIWrap.style.left = newLeft + '%';
    if (newLeft < -300) {
      pic_detailMainTopIWrap.style.left = -100 + '%';
    }
    if (newLeft > -100) {
      pic_detailMainTopIWrap.style.left = -400 + '%';
    }
  }
  if (pic_detailMainTopIWrap) {
    pic_detailMainTopIWrap.onclick = function() {
      index += 1;
      if (index > 3) {
        index = 1;
      }
      buttonsShow();
      animate(-100);
    }
  }
  var time;

  function play() {
    time = setInterval(function() {
      pic_detailMainTopIWrap.onclick();
    }, 2000);
  }
  play();

  function stop() {
    clearInterval(time);

  }
  pic_detailMainTopIWrap.onmouseover = stop;
  pic_detailMainTopIWrap.onmouseout = play;
  var buttonsWrap = document.getElementById('pic-detail-main-top-control');
  var buttons = buttonsWrap.getElementsByTagName('span');
  var index = 1;

  buttonsWrap.onmouseover = stop;

  function buttonsShow() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className == 'main-top-control-first') {
        buttons[i].className = '';
      }
    }
    buttons[index - 1].className = 'main-top-control-first';
  }
  for (var i = 0; i < buttons.length; i++) {

    (function(i) {
      buttons[i].onclick = function() {
        var clickIndex = parseInt(this.getAttribute('index'));
        var offset = 100 * (index - clickIndex);
        animate(offset);
        index = clickIndex;
        buttonsShow();
      }
    })(i)
  }
}




  var pic_listTopNavCla = document.getElementById('pic_list-top-nav-classify'),
    pic_listMainNav = document.getElementById('pic_list-main-nav');
  if (pic_listTopNavCla) {
    pic_listTopNavCla.onclick = function() {
      if (pic_listMainNav.style.display == 'none' || pic_listMainNav.style.display == '') {
        pic_listMainNav.style.display = 'block';
      } else {
        pic_listMainNav.style.display = 'none';
      }
    }
  }
}
