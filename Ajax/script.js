var xmlHttp;
if (window.XMLHttpRequest) {
    xmlHttp=new XMLHttpRequest;
    
}else{
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
}
xmlHttp.onreadystatechange = function () {
    //0 Pedido não iniciado

    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText)
    }
}

xmlHttp.open('GET','arquivo.txt',true);
xmlHttp.send();