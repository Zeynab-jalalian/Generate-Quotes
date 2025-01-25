function generate(){
    let quotes={
        "—Robert Frost":'"Freedom lies in being bold."',
        "—Mahatma Gandhi":'"Freedom is not worth having if it does not connote freedom to err and even to sin."',
        "—Aung San Suu Kyi":'"The only real prison is fear, and the only real freedom is freedom from fear."',
        "—Peter Marshall":'"May freedom be seen, not as the right to do as we please, but as the opportunity to please to do what is right."',
        "—Epictetus":'"Is freedom anything else than the right to live as we wish? Nothing else."'
    }
    let authors = Object.keys(quotes);
    let author=authors[Math.floor(Math.random() * authors.length)];
    let quote=quotes[author];
    document.getElementById('quote').innerHTML=quote;
    document.getElementById('author').innerHTML=author;
}