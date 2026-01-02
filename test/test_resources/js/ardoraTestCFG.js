//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="dGVzdA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1.	¿Cuál de los siguientes materiales es reciclable?","2.	El reciclaje ayuda a reducir la contaminación.","3.	¿Cuál es un residuo orgánico?","4.	¿Qué color suele usarse para el contenedor de reciclaje?","5.	¿Cuál de estos residuos NO es reciclable?"];
var answers1=["MVBhcGVsIHkgY2FydMOzbg==","MFJlc3RvcyBkZSBjb21pZGE=","MFNlcnZpbGxldGFzIHVzYWRhcw=="];
var answers2=["MVZlcmRhZGVybw==","MEZhbHNv"];
var answers3=["MUPDoXNjYXJhIGRlIG5hcmFuamE=","MEJvdGVsbGEgZGUgdmlkcmlv","MExhdGEgZGUgcmVmcmVzY28="];
var answers4=["MUF6dWw=","MFJvam8=","ME5lZ3Jv"];
var answers5=["MVNlcnZpbGxldGEgdXNhZGE=","MEJvdGVsbGEgcGzDoXN0aWNh","MENhcnTDs24="];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["","","","",""];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var alt=["","","","",""];
var info=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="test_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
