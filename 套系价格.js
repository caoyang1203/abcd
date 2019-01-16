var index = 0;
var newindex = 0;
var timer;
var dsq;
//点击右
$('.arrow-right').click(function () {
  index++;
  if (index > $('.slider ul li').length - 1) {
    index = 0
  }
  $('.slider ul li').eq(index).fadeIn(500)
    .siblings().fadeOut();
  $('.controls a')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})
//点击左
$('.arrow-left').click(function () {
  index--;
  if (index < 0) {
    index = $('.slider ul li').length - 1
  }
  $('.slider ul li').eq(index).fadeIn(500)
    .siblings().fadeOut();
  $('.controls a')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

//点击小点
$('.controls a').click(function () {
  var newindex = $(this).index()
  $(this).addClass('active').siblings().removeClass('active')
  $('.slider ul li').eq(newindex).fadeIn(500)
    .siblings().fadeOut();
})
//设置自动
var timer = window.setInterval(function () {
  index++;
  if (index > $('.slider ul li').length - 1) {
    index = 0
  }
  $('.slider ul li').eq(index).fadeIn(500)
    .siblings().fadeOut();
  $('.controls a')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
}, 2500)


//清空定时器
$('.slider').mouseenter(function () {
  window.clearInterval(timer)
})




//开启定时器
$('.slider').mouseleave(function () {
  window.clearInterval(timer)
  timer = window.setInterval(function () {
    index++;
    if (index > $('.slider ul li').length - 1) {
      index = 0
    }
    $('.slider ul li').eq(index).fadeIn(500)
      .siblings().fadeOut();
    $('.controls a')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active')
  }, 2500)
})

//tab相册切换
$('.tab-pack-left ul li').mouseenter(function () {
  var num = $(this).index()
  $('.tab-pack-right ul li').eq(num).css('display', 'block').siblings()
    .css('display', 'none')
})
//hotsales
var t = $('.title').offset().top
$(window).scroll(function () {
  var v = $(window).scrollTop();
  if (v >= t) {
    $('.head').show(500);
  } else {
    $('.head').hide(500);
  }
})
var t = $('.slider').offset().top
$(window).scroll(function () {
  var v = $(window).scrollTop();
  if (v >= t) {
    $('.huidao').show(500);
  } else {
    $('.huidao').hide(500);
  }
})