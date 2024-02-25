var welcome="Are You Signned Up User?";
var result=window.confirm(welcome);
if(result==true)window.alert("Welcome Bro")
else location.replace("Sign-up.html")
// --------------------------------------------
function dark()
{
    document.querySelector("link[href='Home Page Css.css']").href="Home Page Css 2.css";
}
function light()
{
    document.querySelector("link[href='Home Page Css 2.css']").href="Home Page Css.css";
}
