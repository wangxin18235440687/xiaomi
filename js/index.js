/*
* @Author: Administrator
* @Date:   2017-11-07 16:43:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-21 00:15:27
*/
window.onload=function(){

	let banleft=document.getElementsByClassName('banleft');
	let xxkban=document.getElementsByClassName('xxkban');
	for(let i=0;i<banleft.length;i++){
	banleft[i].onmousemove=function(){
		xxkban[i].style.display='block';
	}
	banleft[i].onmouseout=function(){
		xxkban[i].style.display='none';
	}
}


// 小米头部。。
	let logft=document.getElementsByClassName('logft');
    let logft2=document.querySelector('.logft2');
    console.log(logft2);

	let box3=document.getElementsByClassName('box3');
    let dbmov=document.querySelector('.list-nav2-center');
    console.log(dbmov);
    dbmov.onmouseenter=function(){
        logft2.style.height='229px';
        
    }
    dbmov.onmouseleave=function(){
        logft2.style.height='0px';

    }
	for(let i=0;i<logft.length;i++){
		
		box3[i].onmousemove=function(){
			logft[i].style.display='block';
		}
		box3[i].onmouseout=function(){
			logft[i].style.display='none';
		}
	}
    for(let i=0;i<logft.length;i++){
        
        logft[i].onmousemove=function(){
            logft[i].style.display='block';
        }
        logft[i].onmouseout=function(){
            logft[i].style.display='none';
        }
    }

	let gouwu=document.getElementsByClassName('gouwu');
	let ggwwc=document.getElementsByClassName('ggwwc');
	gouwu[0].onmousemove=function(){
		ggwwc[0].style.height='100px';
		ggwwc[0].style.opacity='1';
	}
	gouwu[0].onmouseout=function(){
		ggwwc[0].style.height='0';
		ggwwc[0].style.opacity='0';
		
	}
	function xuanxiangka(a,b,c){
	let jdjs2=document.getElementsByClassName(b);
	let jdjs1=document.getElementsByClassName(a);
	let jdjs3=document.getElementsByClassName(c);
	jdjs2[0].style.display='block';
	jdjs2[0].style.display='flex';
	jdjs3[0].style.color='#ff6700';
	jdjs1[0].style.borderBottom='2px solid #ff6700';
	
	for(let i=0;i<jdjs1.length;i++){
		jdjs1[i].onmouseover=function(){
			
			for(let j=0;j<jdjs1.length;j++){
				jdjs3[j].style.color='#000';
                // animate(jdjs1[j],{borderBottom:'0 solid #ff6700'});
				jdjs1[j].style.borderBottom='2px solid rgba(255,103,0,0)';
				jdjs2[j].style.display='none';

			}
			jdjs3[i].style.color='#ff6700';
            // animate(jdjs1[i],{borderBottom:'2 solid #ff6700'});
			jdjs1[i].style.borderBottom='2px solid rgba(255,103,0,1)';
			jdjs2[i].style.display='block';
			jdjs2[i].style.display='flex';
		}
	}
	}
	xuanxiangka("jdjs1",'jdjs2','jdjs3');
	xuanxiangka("jdjs4",'jdjs5','jdjs6');
	xuanxiangka("jdjs7",'jdjs8','jdjs9');
	xuanxiangka("jdjs10",'jdjs11','jdjs12');
	xuanxiangka("jdjs13",'jdjs14','jdjs15');


	let bannerimg=document.getElementsByClassName('bannerimg')[0];
	let imgs=bannerimg.getElementsByTagName('li');
	let buttonbanner=document.getElementsByClassName('buttonbanner');
	let bannerjt1=document.getElementsByClassName('bannerjt1')[0];
	let bannerjt2=document.getElementsByClassName('bannerjt2')[0];
	let banner=document.getElementsByClassName('banner')[0];
	imgs[0].style.opacity='1';
	buttonbanner[0].style.background='rgba(0,0,0,0)';
	let t ;
	let num=0;
	

	function fn(){

		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity='0';
			buttonbanner[i].style.background='#434549';
		}
		buttonbanner[num].style.background='rgba(0,0,0,0)';

		imgs[num].style.opacity='1';
		

	}
	function fn1(){
		num--;
		if(num==-1){
			num=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity='0';
			buttonbanner[i].style.background='#434549';
		}

		imgs[num].style.opacity='1';
		buttonbanner[num].style.background='rgba(0,0,0,0)';
	}
	t=setInterval(fn, 4000);
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn, 4000);
	}
	bannerjt2.onclick=fn;
	bannerjt1.onclick=fn1;
	for(let i=0;i<buttonbanner.length;i++){
		buttonbanner[i].onclick=function(){
			imgs[num].style.opacity='0';
			buttonbanner[num].style.background='#434549';
			imgs[i].style.opacity='1';
			buttonbanner[i].style.background='rgba(0,0,0,0)';
			num=i;
		}
	}
	



 // 底部内容轮播图编写 
 	function footwflb(num){
    let neirong=document.getElementsByClassName('neirong')[0];
    let mainBox=neirong.getElementsByClassName('main-box')[num];
    let wflbjs=mainBox.getElementsByClassName('wflbjs');
    let jtleftjs=mainBox.getElementsByClassName('jtleftjs')[0];
    let jtrightjs=mainBox.getElementsByClassName('jtrightjs')[0];
    let ftbtbox=mainBox.getElementsByClassName('ftbtbox')[0];
    let wflbtn=ftbtbox.getElementsByTagName('span');
    let widths=mainBox.offsetWidth;
    let flag=true; 
     jtleftjs.onclick=function(){
        if (flag) {
           fnr();
           
        }
    }
    jtrightjs.onclick=function(){
        if (flag) {
           fnl();
        }
    }
    let now=next=0;
    function fnl(){
       next++;
       if (next>wflbjs.length-1) {
        next=wflbjs.length-1;
        return;
       }
       wflbjs[next].style.left=`${widths}px`;
       animate(wflbjs[now],{left:-widths},wfbtn);
       flag=false;
       animate(wflbjs[next],{left:0})
       now=next;
    }
    function fnr(){
       next--;
       if (next<0) {
        next=0;
        return;
       }
       wflbjs[next].style.left=`-${widths}px`;
       animate(wflbjs[now],{left:widths},wfbtn);
       flag=false;
       animate(wflbjs[next],{left:0})
       now=next;
    }
    function wfbtn(){
        for(let i=0;i<wflbtn.length;i++){
          wflbtn[i].className="";
        }
        wflbtn[now].className="dot";
        flag=true;
    }

    for(let i=0;i<wflbtn.length;i++){
    	wflbtn[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		else if(now>i){

    			wflbtn[now].style.zIndex='1';
    			wflbtn[i].style.zIndex='10';

    			animate(wflbjs[now],{left:widths},function(){
    				for(let j=0;j<wflbtn.length;j++){
    					wflbtn[j].className="";
    				}
    				wflbtn[i].className="dot";
    			});
    			
				animate(wflbjs[i],{left:0},function(){
    				for(let j=0;j<wflbtn.length;j++){
    					wflbtn[j].className="";
    				}
    				wflbtn[i].className="dot";
    			});
				
    		}
    		else if(now<i){
    			
    			wflbtn[now].style.zIndex='1';
    			wflbtn[i].style.zIndex='10';
				animate(wflbjs[now],{left:-widths},function(){
    				for(let j=0;j<wflbtn.length;j++){
    					wflbtn[j].className="";
    				}
    				wflbtn[i].className="dot";
    			});
			
				animate(wflbjs[i],{left:0},function(){
    				for(let j=0;j<wflbtn.length;j++){
    					wflbtn[j].className="";
    				}
    				wflbtn[i].className="dot";
    			});
						
			}
			
			now=next=i;


    	}
    }

}
footwflb(0);
footwflb(1);
footwflb(2);
footwflb(3);

{
        //小米明星单品开始
        var arrowprev = document.querySelector(".btn-left")
        var arrownext = document.querySelector(".btn-right")
        var shopbox = document.querySelector(".shoplist")
        var shopbigbox = document.querySelector(".shop-neikuan")

        function prevo() {
            arrowprev.classList.remove("btnactive")
            arrownext.classList.add("btnactive")
            shopbox.style.marginLeft = "0"
        }

//    console.log(arrowprev)

        function nexto() {
            arrowprev.classList.add("btnactive")
            arrownext.classList.remove("btnactive")
            shopbox.style.marginLeft = "-1240px"
        }

        arrownext.onclick = function () {
            nexto()
        }
        arrowprev.onclick = function () {
            prevo()
        }

        var x = 1;

        function fn() {
            x++;
            if (x % 2 == 0) {
                nexto()

            } else if (x % 2 == 1) {
                prevo()
            }
        }

        var st = setInterval(fn, 5000);

        shopbigbox.onmouseover = function () {
            clearInterval(st)
        }

        shopbigbox.onmouseout = function () {
            setInterval(st = setInterval(fn, 5000))
        }

    }

 
//        小米翻页效果开始
var bigboxs=document.querySelectorAll(".content-bigbox")

    function container(parent){

        let obox = parent.querySelector(".content-listbox")
        let onext = parent.querySelector(".arrow-next")
        let oprev = parent.querySelector(".arrow-prev")
        let odian = parent.querySelectorAll(".content-dian li")

        odian.forEach(function (ele, index) {
            ele.onclick = function () {
                for (var i = 0; i < odian.length; i++) {
                    odian[i].classList.remove("active")
                }
                ele.classList.add("active")
                obox.style.marginLeft = -296 * index + "px"
                num=index
            }
        })

        let num = 0;

        function bottomFn(r="r") {
            if (r == "r") {
                num++;
                if (num == odian.length) {
                    num = odian.length - 1
                    onext.classList.remove("activ")
                    oprev.classList.add("activ")
                }
            } else if (r == "l") {
                num--;
                if (num == -1) {
                    num = 0;
                    onext.classList.add("activ")
                    oprev.classList.remove("activ")
                }
            }
            obox.style.marginLeft = -296 * num + "px"
                fnn()
            }

        function fnn() {
            for (var i = 0; i < odian.length; i++) {
                odian[i].classList.remove("active")
            }
            odian[num].classList.add("active")

        }
            onext.onclick = function () {
                bottomFn("r")
            }


            oprev.onclick = function () {
                bottomFn("l")
            }


    }


    for(var i=0;i<bigboxs.length;i++){
        container(bigboxs[i])
    }



   


}