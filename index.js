function assist(){
    let comm = prompt('I will try to help you Ask Anything');
    if ('google' == comm || 'gg' == comm){
        let g_srch = prompt('What you want to search: ');
        let sch = g_srch.replace(' ', '+');
        window.open('https://www.google.co.in/search?q='+sch);
        window.location.reload();
    }
    else if ('web' == comm){
        let web = prompt('Enter complete url without https://www. ')
        let web_link = 'https://www.'+web
        window.open(web_link);
        window.location.reload();
    }
    else if ('book bus' == comm || 'bbt' == comm){
        let from_plc = prompt('From Place: ');
        let to_plc = prompt('To place: ');
        let b_tick = 'https://m.redbus.in/bus-tickets/'+from_plc+'-to-'+to_plc;
        window.open(b_tick);
        window.location.reload();
    }
    else if ('about' == comm){
        let wk_sr = prompt("Tell me the topic:");
        let sch = wk_sr.replace(' ', '+');
        window.open('https://www.google.co.in/search?q=' + sch);
        window.location.reload();
    }
    else if ('your name' == comm){
        introduce_text = 'Am Alpha your personal assistant...., Nikky created me....';
        document.getElementById("one").innerHTML = introduce_text;
        setTimeout(function(){
            window.location.reload();
        }, 5000);
    }
    else{
        return;
    }
}
