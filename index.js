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
        window.location.reload();}
    else if ('web' == comm){
        let web = prompt('Enter complete url without https://www. ')
        let web_link = 'https://www.'+web
        window.open(web_link);
        window.location.reload();}
    else if ('book bus' == comm || 'bbt' == comm){
        let from_plc = prompt('From Place: ');
        let to_plc = prompt('To place: ');
        let b_tick = 'https://m.redbus.in/bus-tickets/'+from_plc+'-to-'+to_plc;
        window.open(b_tick);
        window.location.reload();}
    else if ('about' == comm){
        let wk_sr = prompt("Tell me the topic:");
        let sch = wk_sr.replace(' ', '+');
        window.open('https://www.google.co.in/search?q=' + sch);
        window.location.reload();}
    else if ('your name' == comm){
        introduce_text = 'Am Alpha your personal assistant...., Nikky created me....';
        document.getElementById("one").innerHTML = introduce_text;
        setTimeout(function(){
            window.location.reload();
        }, 5000);}
    else if ('youtube' == comm || 'yt' == comm || 'youtube video' == comm){
            let yt_srch = prompt('   Search the video keywords: ');
            utb = yt_srch.replace(' ', '+');
            window.open('https://www.youtube.com/results?search_query='+utb)}

    else if ('flipkart' == comm || 'fkart' == comm){
        let fk_srch = prompt('   Product Name: ');
        let fpd = fk_srch.replace(' ','+');
        let p_link = 'https://www.flipkart.com/search?q='+fpd;
        window.open(p_link)}

    else if ('amazon' == comm || 'amz' == comm){
        let am_srch = prompt('   Product Name: ');
        let pr_a = am_srch.replace(' ', '+');
        window.open('https://www.amazon.in/s?k='+pr_a)}
    
    else if ('food delivery' == comm || 'fd' == comm){
        window.alert('Use fd instead of typing "food delivery"')
        let food_opt = prompt('Zomato --- 1 | Swiggy --- 2 | Enter your Response: ')
            if (food_opt == '1'){
                let place_f = prompt('   Place: ')
                let food_i = prompt('   Item Name: ')
                let order_food = 'https://www.zomato.com/'+place_f+'/restaurants/'+food_i
                window.open(order_food)}
            else if (food_opt == '2'){
                let sgy_i = prompt('   Enter the Item name: ')
                let sgy_item = sgy_i.replace(' ', '+')
                let sgy_odr = 'https://www.swiggy.com/'+'search?q='+sgy_item
                window.open(sgy_odr)}
            else{
                window.alert('Sorry i cannot get your response; please try again by entering correct option')}}

    else if ('song' == comm){
        let s_srch = prompt('    Enter the song name: ')
        let son = s_srch.replace(' ', '+')
        let s_lin = 'https://music.youtube.com/search?q='+son
        window.open(s_lin)}

    else if ('mail' == comm || 'gmail' == comm){
        window.open('https://www.gmail.com');}

    else if ('fb' == comm || 'facebook' == comm){
        window.open('https://www.facebook.com');}

    else if ('ig' == comm || 'instagram' == comm){
        window.open('https://www.instagram.com');}

    else if ('linkedin' == comm){
        window.open('https://www.linkedin.com');}

    else if ('twitter' == comm){
        window.open('https://www.twitter.com');}

    else if ('coursera' == comm){
        window.open('https://www.coursera.org');}
    
    else if ('google meet'== comm || 'gmeet' == comm || 'meet' == comm){
        window.open('https://meet.google.com')}

    else if ('colab'==comm || 'google colab' == comm){
        window.open('https://colab.research.google.com/#create=true')}

    else if ('js compiler' == comm){
        window.open('https://www.programiz.com/javascript/online-compiler/')}

    else if ('java compiler' == comm){
        window.open('https://www.programiz.com/java-programming/online-compiler/')}

    else if ('python compiler' == comm){
        window.open('https://www.programiz.com/python-programming/online-compiler/')}

    else if ('c compiler' == comm){
        window.open('https://www.programiz.com/c-programming/online-compiler/')}
    
    else if (comm == null){ 
    }

    else if (comm == ''){
    }

    else{
        let result = 'http://api.wolframalpha.com/v1/result?appid=LGU5L4-EKG77964XA&i='+comm;
        popWindow(result, 'Result', 350, 250);
    }
}

/* ---------------------------------------------------------------- */
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
