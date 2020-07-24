var mob_bar= document.querySelector('.mob-nav-bar');
var mob_container= document.querySelector('.mob-bar');
var container= document.querySelector('.container');
var btn_2= document.querySelector('.btn-2');
var btn_1= document.querySelector('.btn-1');
var btn_3= document.querySelector('.btn-3');
var btn_4= document.querySelector('.btn-4');
var inf_btn_2= document.querySelector('.inf-btn-2');
var inf_btn_1= document.querySelector('.inf-btn-1');
var inf_btn_3= document.querySelector('.inf-btn-3');
var inf_btn_4= document.querySelector('.inf-btn-4');



mob_bar.addEventListener('click',function () {
mob_container.style.display='block';
})
container.addEventListener('click',function () {
    mob_container.style.display='none';
})


btn_2.addEventListener('click',function () {
    inf_btn_2.style.display='block';
    btn_2.style.color='#ec370f';
    inf_btn_1.style.display='none';
    inf_btn_3.style.display='none';
    inf_btn_4.style.display='none';
    btn_1.style.color='rgba(0,0,0,0.8)';
    btn_4.style.color='rgba(0,0,0,0.8)';
    btn_3.style.color='rgba(0,0,0,0.8)';
});

btn_1.addEventListener('click',function () {
    inf_btn_1.style.display='block';
    btn_1.style.color='#ec370f';
    inf_btn_2.style.display='none';
    inf_btn_3.style.display='none';
    inf_btn_4.style.display='none';
    btn_2.style.color='rgba(0,0,0,0.8)';
    btn_4.style.color='rgba(0,0,0,0.8)';
    btn_3.style.color='rgba(0,0,0,0.8)';
});

btn_3.addEventListener('click',function () {
    inf_btn_3.style.display='block';
    btn_3.style.color='#ec370f';
    btn_1.style.color='rgba(0,0,0,0.8)';
    inf_btn_2.style.display='none';
    inf_btn_1.style.display='none';
    inf_btn_4.style.display='none';
    btn_4.style.color='rgba(0,0,0,0.8)';
    btn_2.style.color='rgba(0,0,0,0.8)';
});

btn_4.addEventListener('click',function () {
    inf_btn_4.style.display='block';
    btn_4.style.color='#ec370f';
    btn_1.style.color='rgba(0,0,0,0.8)';
    inf_btn_1.style.display='none';
    inf_btn_2.style.display='none';
    inf_btn_3.style.display='none';
    btn_2.style.color='rgba(0,0,0,0.8)';
    btn_3.style.color='rgba(0,0,0,0.8)';
})