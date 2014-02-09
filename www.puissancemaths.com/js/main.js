var urls = new Object();
urls.url1="nous.html";
urls.url7="dates[1].html";
urls.url2="cours.html";
urls.url4="sessions.html";
urls.url5="informatique.html";
urls.url9="contact.php";
urls.url8="exercices.html";
urls.url3="zoneuniversite.html";
urls.url6="annonces.html";


function menuChange(objectId, on)
{
	var object = document.getElementById(objectId);
	if(object != null)
	{
		if(on)
			object.className='menuOn';
		else
			object.className='menuOff';
	}
}

function goTo(objectId)
{
	var length=objectId.length;
	var urlNumber=objectId.substring(length-1,length);
	
	location.href=eval("urls.url"+urlNumber);
	
}