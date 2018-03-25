function validate()
{
    var x = document.forms["myform"];
    for(var i = 0; i < x.length ; i++)
        {
            if(x[i].value == "")
                {
                    alert(x[i].name + " must be entered!");
                    return false;
                }
    
        }
    
}
