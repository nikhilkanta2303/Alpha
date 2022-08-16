function about(){
    window.open('https://github.com/nikhilkanta2303/Alpha/blob/main/README.md');
    window.location.reload();
}
function clearpage(){
    window.location.reload();
}
function popWindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}
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
    else if (comm == null){
        
    }
    else{
        let result = 'http://api.wolframalpha.com/v1/result?appid=LGU5L4-EKG77964XA&i='+comm;
        popWindow(result, 'Result', 350, 250);
    }
}
