$(document).ready(function(){
    
    $(".nav-list-item").hover(function(){
        $(this).children(".nav-sublist").children(".nav-sublist-item").show(2000);
    },function(){
        $(this).children(".nav-sublist").children(".nav-sublist-item").hide(2000);
    });
    
    //公告輪播
    var i = 0 ;
    var timer;

    //用jquery方法设置第一张图片显示，其余隐藏
    $('.camera_pic').eq(0).show().siblings('.camera_pic').hide();
    
    showTime();

     //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.point').hover(function(){
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    },function(){
        //
        showTime();
    });

    
    //创建一个showTime函数
    function showTime(){
        //定时器
        timer = setInterval(function(){
        //调用一个Show()函数
        Show();
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if(i==4){
            i=0;
        }
        },5000);
    };
    
    //创建一个Show函数
    function Show(){
        //在这里可以用其他jquery的动画
        $('.camera_pic').eq(i).fadeIn(300).siblings('.camera_pic').fadeOut(300);
        
        //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
        $('.point').eq(i).addClass('active').siblings('.point').removeClass('active');
        
    };

    // 漢堡選單
    $('.nav_menu').hover(function(){
        $('.nav').show(1000);
      });
  
});