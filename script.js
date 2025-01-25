let author=document.getElementById('author');
let quote=document.getElementById('quote');
function generate(){
    let writerText={
        "—Robert Frost":'"Freedom lies in being bold."',
        "—Mahatma Gandhi":'"Freedom is not worth having if it does not connote freedom to err and even to sin."',
        "—Aung San Suu Kyi":'"The only real prison is fear, and the only real freedom is freedom from fear."',
        "—Peter Marshall":'"May freedom be seen, not as the right to do as we please, but as the opportunity to please to do what is right."',
        "—Epictetus":'"Is freedom anything else than the right to live as we wish? Nothing else."',
    } // نقل قول ها
    let writers=Object.keys(writerText);//فهرست نویسندگان
    let writer=writers[Math.floor(Math.random() * writers.length)]; //نویسنده ی رندوم
    let text=writerText[writer]; //نقل قول مربوط به نویسنده ی رندومی که در آمد
    author.innerHTML=writer; //نویسنده
    quote.innerHTML=text; //نقل قول

}