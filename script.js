const sb = document.getElementById("searchbar");
sb.addEventListener("keypress",validate);
function validate(e) {
    if (e.keyCode==13){
        e.preventDefault();
        const fg = document.getElementsByTagName('main')[0];
        fg.innerHTML='\
        <h2 style=\'\
            height:100vh;\
            color:#eef;\
            background-image:url(\
                \"media/img1.jpg\");\
            background-size:cover;\
            font-size:10vmin;\
            padding:10vmin;\
        \'>\
        The search feature is a WIP, please come back later\
        </h2>'
    }
    return true;
}