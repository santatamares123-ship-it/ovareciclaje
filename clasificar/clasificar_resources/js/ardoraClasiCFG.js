//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["Q8Ohc2NhcmEgZGUgYmFuYW5h","Qm90ZWxsYSBwbGFzdGljYQ==","TGF0YQ==","UGFwZWwgc3VjaW8=","Q2FydG9u","U2VydmlsbGV0YSB1c2FkYQ=="];
var img_G=["","","","","",""];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","Mg==","Mg==","Mw==","Mg==","Mw=="];
var e_G=["Revisa nuevamente","Revisa nuevamente","Revisa nuevamente","Revisa nuevamente","Revisa nuevamente","Revisa nuevamente"];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["Organicos","Reciclables","No reciclables"];
var imgGr=["","",""];
var mp3Gr=["","",""];
var oggGr=["","",""];
var altGr=["","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="";
var dirMedia="clasificar_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Y2xhc2lmaWNhcg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0"];
var info=["","","","","",""];
