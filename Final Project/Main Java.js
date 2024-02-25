function checklog()
{
    //unc: User Name Check
    var unc = String(document.getElementById("un").value);
    var flag=0;
    if(unc.length != 8) 
    {
    flag=1; 
    //window.alert("User Name Length Must Be 8 Character!")
    }
    // psc: password check.
    var psc = String(document.getElementById("ps").value);
    var cpsc = String(document.getElementById("cps").value);
    if(psc.length < 8)
    {
     flag=1; 
     //window.alert("Password Length Must Be At Least 8 Character!")
    }
    if(psc != cpsc)
    {
    flag=1; 
    //window.alert("The Password Doesn't Match Bro!")
    }
    if(flag==1)
    {
      document.getElementById("error").style.visibility="visible"; 
    }

    if (flag == 0)
    {
      location.replace("Home Page.html")
    }
}
