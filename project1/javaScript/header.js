
// search_1 = function()
// {
//
// }
search_listener = function()
{
        let temp = event.keyCode;
            if(temp == 13)
            {
                window.location.href = "search.html";
            }
};
nav_create = function ()
{
    let username_cookie = getCookie("username");
    let nav_object = document.getElementById("nav");
    if(username_cookie != "")
    {
        nav_object.innerHTML ="<div><input type='text' id='search'  placeholder='search...' onkeydown='search_listener();'><button></button></div> <a href='homepage.html'>Home</a> <a href='details.html'>Details</a> <a href='cart.html'>Cart</a> <a href='myZone.html'>" + username_cookie + "</a> <a href=# onclick='logout()'>Logout</a>";
        return 1;
    }
    else
    {
        nav_object.innerHTML ="<div><input type='text' id='search'  placeholder='search...' onkeydown='search_listener();'><button></button></div> <a href='homepage.html'>Home</a> <a href='details.html'>Details</a> <a href='cart.html'>Cart</a> <a href=# onclick='login_show()'>Login</a> <a href=# onclick='register_show()'>Register</a>";

        return 0;
    }
};
logout = function()
{
    setCookie("username","",0);
    nav_create();
}
cart_add = function()
{
    let ok = 1;
    if(ok)
        alert("Item added successfully!");
    else
        alert("Item already exist!");

}