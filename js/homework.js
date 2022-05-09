function $get(id)
{
    return document.getElementById(id);
}
function LOWERCASE()
{
    var strInputText = $get('txt1').value;
    strInputText = strInputText.toLowerCase();
    $get('txt1').value = strInputText;
}
function UPPERCASE()
{
	var strInputText =  $get( "txt1" ).value;
	strInputText = strInputText.toUpperCase();
	$get('txt1').value = strInputText;
}
function MIRRORED()
{
    var strInputText =  $get( "txt1" ).value;
    strInputText = strInputText.split("").reverse().join("");
    $get('txt1').value = strInputText;
}