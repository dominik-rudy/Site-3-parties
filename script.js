const sb = document.getElementById("sb");
sb.addEventListener("keypress",validate);
function validate(e) {
    if (e.keyCode==13){
        e.preventDefault();
        const fg = document.getElementsByClassName("fg")[0];
        fg.innerHTML='\
        <style=\"*{padding:0 50%\"h2>\
        The search feature is a WIP, please come back later\
        </h2>'
    }
    return true;
}