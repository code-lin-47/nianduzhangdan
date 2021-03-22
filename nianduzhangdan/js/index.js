$(function(){
    // 定时器
    var a,mtr,jt
    // 开场动画
    (function go(){
        opacity_anime('.sj,.jzt',3200)
        opacity_anime('.yun',2000)
        setTimeout(function(){
            opacity_anime('.up,.jiantou',500)
        },3200)
        up_anime('.tj1',0,0,2000,0)
        up_anime('.gz1',0.14,0,2000,0)
        jiantou()
    })()
    // 透明度动画
    function opacity_anime(obj,sd){
        $(obj).animate({
            opacity:'1'
        },sd,'linear')
    }
    // 首页箭头
    function jiantou() {
        var i=2
        jt = setInterval(function(){
            $('.shang'+i).css('opacity',1).siblings().css('opacity',0.1)
            i++
            if(i>5){
                i=1
            }
        },300)
        huadong()
    }
    // 箭头滑动事件
    function huadong(){
        var flag = false
        $('.jiantou')[0].ontouchmove = function(){
            if(!flag){
                $(this).hide()
                $('.up').hide()
                kais()
                $('.tjs')[0].play()
                flag = true
            }
        }
    }
    // 三个大物出现动画
    function da_anime(obj,bot,sd) {
        $(obj).animate({
            bottom:bot+'rem'
        },sd)
    }
    // 阶梯出现动画
    function up_anime(obj,bot,jia,sd,sd2){
        if(!sd2){
            sd2=500
        }
        $(obj).animate({
            bottom:bot+jia+'rem'
        },sd,'linear',function(){
            $(this).animate({
                bottom:bot+'rem'
            },sd2,'linear')
        })
    }
    // 第一段阶梯
    function kais(){
        $('.bjyin')[0].pause()
        $('.tjs')[0].play()
        mtr('.tj23')
        da_anime('.tj23',0.6,2000)
        da_anime('.tj26',2.13,1500)
        da_anime('.tj29',1.46,1500)
        setTimeout(function(){
            up_anime('.tj2',-3.17,0.1,900)
            up_anime('.tj3',-2.89,0.2,1000)
            up_anime('.tj4',-3.34,0.3,1200)
            up_anime('.tj5',-0.3,0.3,1400)
            up_anime('.tj6',0.42,0.3,1600)
            up_anime('.tj7',-0.03,0.3,1800)
            up_anime('.tj8',0.72,0.3,2000)
        },1500)
        setTimeout(function(){
            $('.a').show()
            click_quan('.quan1')
            $('.shouye').hide()
            $('.xingxi1').show()
            $('.tjs')[0].pause()
        },4000)
    }
    // 上下动画
    function anime(obj){
        $(obj).animate({
            bottom:'+=0.1rem'
        },1000,'linear',function(){
            $(this).animate({
                bottom:'-=0.1rem'
            },1000,'linear',function(){
                anime(obj)
            })
        })
        
    }
    // 摩天轮动画
    function mtr(obj){
        var i=1
        $(obj).attr('src','./images/qietu/z18-'+i+'.png')
        mtr = setInterval(function(){
            $(obj).attr('src','./images/qietu/z18-'+(++i)+'.png')
            if(i>=3){
                i=1
            }
        },150)
    }
    //  点击白圈
    function click_quan(obj){
        $(obj).click(function(){
            switch($(this).attr('class')){
                case 'quan1 a':
                    gz_anima1()
                    break;
                case 'quan1 b':
                    gz_anima2()
                    break;
                case 'quan1 c':
                    gz_anima3()
                    break;
                case 'quan1 d':
                    gz_anima4()
                    break;
                default:
                    console.log('没有这个类名');
            }
            $('.digedige').attr('autoplay','autoplay')
            // 播放
            $('.digedige')[0].play()
            $(this).hide()
        })
    }
    // 小鸽子换图
    function gz_huantu(i){
        var max = i+4
        $('.gz1').attr('src','./images/gugu/gz'+i+'.png')
        a = setInterval(function(){
            $('.gz1').attr('src','./images/gugu/gz'+(++i)+'.png')
            if(i>=max){
                i-=4
            }
        },200)
    }
    // 小鸽子动画
    function gz_anima1(){
        gz_huantu(1)
        $('.gz1').animate({
            left:'1.78rem',
            bottom:'1.02rem'
        },1500,'linear',function(){
            clearInterval(a)
            gz_huantu(11)
            $(this).animate({
                left:'2.78rem',
                bottom:'1.58rem'
            },1500,'linear',function(){
                clearInterval(a)
                gz_huantu(1)
                $(this).animate({
                    left:'0.53rem',
                    bottom:'2.88rem'
                },3000,'linear',function(){
                    clearInterval(a)
                    gz_huantu(11)
                    $(this).animate({
                        left:'1.5rem',
                        bottom:'4.05rem'
                    },1000,'linear',function(){
                        // 暂停
                        $('.digedige')[0].pause()
                        clearInterval(a)
                        $(this).attr('src','./images/gugu/gz1.png')
                        $('.tjs')[0].play()
                        up_anime('.tj24',1.88,0.2,1400)
                        up_anime('.tj25',5.3,0,1400)
                        anime('.tj25')
                        setTimeout(function(){
                            up_anime('.tj9',1.46,0.2,1200)
                            up_anime('.tj10',1.88,0.2,1600)
                            up_anime('.tj11',2.3,0.2,1800)
                            up_anime('.tj12',2.72,0.2,2000)
                            up_anime('.tj13',2.7,0.2,2200)
                        },1500)
                        setTimeout(function(){
                            $('.b').show()
                            $('.xingxi2').show().siblings().hide()
                            $('.tjs')[0].pause()
                        },4500)
                    })
                })
            })
            
        })
    }
    function gz_anima2(){
        gz_huantu(1)
        $('.gz1').animate({
            left:'1rem',
            bottom:'4.35rem'
        },500,'linear',function(){
            clearInterval(a)
            gz_huantu(11)
            $(this).animate({
                left:'4rem',
                bottom:'6rem'
            },3800,'linear',function(){
                $('.digedige')[0].pause()
                clearInterval(a)
                $(this).attr('src','./images/gugu/gz21.png')
                $('.tjs')[0].play()
                up_anime('.tj27',3.56,0.2,2000)
                up_anime('.tj28',6.88,0,2000)
                anime('.tj28')
                setTimeout(function(){
                    up_anime('.tj14',4.71,0.2,1400)
                    up_anime('.tj15',-0.04,0.2,1600)
                    up_anime('.tj16',0.41,0.2,1800)
                    up_anime('.tj17',0.12,0.2,2000)
                    up_anime('.tj18',0.13,0.2,2200)
                },2500)
                setTimeout(function(){
                    $('.c').show()
                    $('.xingxi5').show().siblings().hide()
                    $('.tjs')[0].pause()
                },5000)
            })
        })
    }
    function gz_anima3(){
        gz_huantu(21)
        $('.gz1').animate({
            left:'4.95rem',
            bottom:'4.87rem'
        },1000,'linear',function(){
            clearInterval(a)
            gz_huantu(31)
            $(this).animate({
                left:'4.03rem',
                bottom:'4.3rem'
            },1500,'linear',function(){
                clearInterval(a)
                gz_huantu(21)
                $(this).animate({
                    left:'5.46rem',
                    bottom:'3.46rem'
                },1500,'linear',function(){
                    $('.digedige')[0].pause()
                    clearInterval(a)
                    $(this).attr('src','./images/gugu/gz31.png')
                    $('.tjs')[0].play()
                    up_anime('.tj30',0.2,0.2,2000)
                    up_anime('.tj31',4.2,0,2000)
                    anime('.tj31')
                    setTimeout(function(){
                        up_anime('.tj19',2.8,0.2,1400)
                        up_anime('.tj20',-0.27,0.2,1600)
                        up_anime('.tj21',0.18,0.2,1800)
                        up_anime('.tj22',-1.79,0.3,2000)
                    },2100)
                    setTimeout(function(){
                        $('.d').show()
                        $('.xingxi3').show().siblings().hide()
                        $('.tjs')[0].pause()
                    },4300)
                })
            })
        })
    }
    function gz_anima4(){
        gz_huantu(31)
        $('.gz1').animate({
            left:'4rem',
            bottom:'2.35rem'
        },2000,'linear',function(){
            clearInterval(a)
            gz_huantu(1)
            $(this).animate({
                left:'3.29rem',
                bottom:'3.06rem'
            },800,'linear',function(){
                $('.digedige')[0].pause()
                clearInterval(a)
                $(this).attr('src','./images/gugu/gz31.png')
                // 鸽子和台阶上升,其他台阶下降
                up_anime('.tj22',-0.65,-1.84,500,4000)
                up_anime('.gz1',4.33,-1.87,500,4000)
                $('.shangsheng')[0].play()
                $('.war').addClass('war_anime')
                $('.tj25,.tj28,.tj31').stop()
                setTimeout(function(){
                    $('.jieti img:not(.gz1,.tj22)').animate({
                        bottom:'-=10rem'
                    },2000,'linear')
                },500)
                setTimeout(function(){
                    clearInterval(mtr,jt)
                },2000)
                setTimeout(function(){
                    $('.qiu1').show().addClass('qiu1_anime')
                    $('.qiu2').show().addClass('qiu2_anime')
                    $('.qiu3').show().addClass('qiu3_anime')
                    
                    setTimeout(function(){
                        $('.shangsheng')[0].pause()
                        $('.xingxi4').show().siblings().hide()
                        $('.bottom').show()
                        cx()
                    },1000)
                },4000)
            })
        })
    }
    function cx(){
        $('.zaici').click(function(){
            window.location = 'index.html'
        })
    }
})

