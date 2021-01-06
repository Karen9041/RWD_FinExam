$(document).ready(function(){
    
    //商品圖片輪播
    var k = 0 ;
    var timer;

    //用jquery方法设置第一张图片显示，其余隐藏
    $('.purchase_pic').eq(0).show().siblings('.purchase_pic').hide();
    
    showTime();

     //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.littlepic').hover(function(){
        //获取当前i的值，并显示，同时还要清除定时器
        k = $(this).index();
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
        k++;
        //当图片是最后一张的后面时，设置图片为第一张
        if(k==3){
            k=0;
        }
        },2000);
    }
    
    //创建一个Show函数
    function Show(){
        //在这里可以用其他jquery的动画
        $('.purchase_pic').eq(k).fadeIn(300).siblings('.purchase_pic').fadeOut(300);
        
        //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
        $('.littlepic').eq(k).addClass('activepic').siblings('.littlepic').removeClass('activepic');
        
    }
  
});