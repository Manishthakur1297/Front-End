function firstName()
{
    if((document.getElementById('fname').value.length)<4)
    {
        document.getElementById('first').innerText = "Firstname must be more than 3 characters";        
    }
    else
    {
        document.getElementById('first').innerText = "*"; 
    }
}

function lastName()
{
    if((document.getElementById('lname').value.length)<4)
    {
        document.getElementById('last').innerText = "lastname must be more than 3 characters";        
    }
    else
    {
        document.getElementById('last').innerText = "*"; 
    }
}

function mobileNumber()
{
    if((document.getElementById('number').value.length)==10)
    {
        document.getElementById('mobile').innerText = "*";        
    }
    else 
    {
        document.getElementById('mobile').innerText = "Number must be 10 digits";        
    }
}

function password()
{
    if((document.getElementById('pwd').value.length)<9)
    {
        document.getElementById('password').innerText = "Password must be more than 8 characters";
    }
    else 
    {
        document.getElementById('password').innerText = "*";        
    }
}

function cPassword()
{
    if((document.getElementById('Cpwd').value.length)==(document.getElementById('pwd').value.length))
    {
        document.getElementById('cPassword').innerText = "*";
    }
    else 
    {
        document.getElementById('cPassword').innerText = "Password do not match...."; 
        document.getElementById('Cpwd').innerHTML = "";
    }
}