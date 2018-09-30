


setInterval( ConsumeApiSubte,10000);


function ConsumeApiSubte()
{
var Request = require("request");
var enviarcorreo = require ('./EnviarMail');
console.log('Ejecutando..');
Request.get("https://haysubte.now.sh/api", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
var parseo = (JSON.parse(body));
    console.dir(JSON.parse(body));
    if (parseo.B.status != "normal") {
      enviarcorreo.EnviarMail(parseo.B.status,parseo.B.text);

        }
      else {  console.log(parseo.B.status);
        console.log("Subte B " + parseo.B.text);

      };
  });

  }
