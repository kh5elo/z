let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let mountains7=document.getElementById('mountains7');
let khalid=document.querySelector('.khalid');
let header=document.querySelector('header');
window.onscroll=function()
{
    let value=scrollY;
    stars.style.left=value+'px'
    moon.style.top=value*4+'px'
    mountains3.style.top=value*2+'px'
    mountains4.style.top=value*1.5+'px'
    river.style.top=value+'px'
    boat.style.top=value+'px'
    boat.style.left=value*3+'px'
    header.style.top=value*0.5+'px'
    khalid.style.fontSize=value+'px'
    if(value>=70)
    {
        khalid.style.fontSize=70+'px'
        khalid.style.position='fixed'
        
        } if(value>=590)
        {
            khalid.style.display='none'
        }
        else{
            khalid.style.display='block'

        }
         if(value>=184)
         {           
            document.querySelector('.main').style.background='linear-gradient(#46a4cd,#00131f)'
         }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'

         }


}