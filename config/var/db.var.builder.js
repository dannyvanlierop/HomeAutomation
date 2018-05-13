
require('./src/db.paths');

function buildvar(){
//function varBuilder(){
  var varArray      = fs.readFileSync(pathconfigvarsrc + "./db.arrays", 'UTF8').replace(/\n/g,'').split("\r").map(x => '\n' + x + " = [''];");
//  exports.keyArray  = keyArray = fs.readFileSync(pathconfigvarsrc + "./db.arrays", 'UTF8').replace(/\n/g,'').split("\r").map( x => x );

  var varBool       = fs.readFileSync(pathconfigvarsrc + "./db.bools", 'UTF8').replace(/\n/g,'').split("\r").map(x => '\n' + x + " = '';");
//  exports.keyBool   = keyBool = fs.readFileSync(pathconfigvarsrc + "./db.bools", 'UTF8').replace(/\n/g,'').split("\r").map(x => x + '\n');

  var varInterger   = fs.readFileSync(pathconfigvarsrc + "./db.integers", 'UTF8').replace(/\n/g,'').split("\r").map(x => '\n' + x + " = '';");
//  exports.keyInterger = keyInterger = fs.readFileSync(pathconfigvarsrc + "./db.integers", 'UTF8').replace(/\n/g,'').split("\r").map(x => x + '\n');

  var varObject     = fs.readFileSync(pathconfigvarsrc + "./db.objects", 'UTF8').replace(/\n/g,'').split("\r").map(x => '\n' + x + " = {};");
//  exports.keyObject = keyObject = fs.readFileSync(pathconfigvarsrc + "./db.objects", 'UTF8').replace(/\n/g,'').split("\r").map(x => x + '\n');

  var varString     = fs.readFileSync(pathconfigvarsrc + "./db.strings", 'UTF8').replace(/\n/g,'').split("\r").map(x => '\n' + x +  " = '';");
//  exports.keyString = keyString = fs.readFileSync(pathconfigvarsrc + "./db.strings", 'UTF8').replace(/\n/g,'').split("\r").map(x => x + '\n');

  var predefined = fs.readFileSync( pathconfigvarsrc + './db.predefined', 'UTF8').replace(/\n/g,'').split("\n").map(x => '\n' + x + ";");
  //.map(x => '\n' + x + ";");

  fs.writeFileSync( pathconfigvar + "./db.var",fs.readFileSync(pathconfigvarsrc + "./db.paths", 'UTF8'));

    for ( x = 0; varArray.length > x; x++ ){
    if ( x == 0 ){
      fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//Array:\n');
    }
    if ( varArray[x].toString().length > 7){
      fs.appendFileSync( pathconfigvar + "./db.var", varArray[x] );
    }
  }

  for ( x = 0; varBool.length > x; x++ ){
    if ( x == 0 ){
      fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//Bool:\n');
    }
    if ( varBool[x].toString().length > 7){
      fs.appendFileSync( pathconfigvar + "./db.var", varBool[x] );
    }
  }

  for ( x = 0; varInterger.length > x; x++ ){
    if ( x == 0 ){
      fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//Integer:\n');
    }
    if ( varInterger[x].toString().length > 7){
      fs.appendFileSync( pathconfigvar + "./db.var", varInterger[x] );
    }
  }

  for ( x = 0; varObject.length > x; x++ ){
    if ( x == 0 ){
      fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//Object:\n');
    }
    if ( varObject[x].toString().length > 7){
      fs.appendFileSync( pathconfigvar + "./db.var", varObject[x] );
    }
  }

  for ( x = 0; varString.length > x; x++ ){
    if ( x == 0 ){
      fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//String:\n');
    }
    if ( varString[x].toString().length > 7){
      fs.appendFileSync( pathconfigvar + "./db.var", varString[x] );
    }
  }
  fs.appendFileSync( pathconfigvar + "./db.var", '\n\n//Predefined:\n');
  fs.appendFileSync( pathconfigvar + "./db.var", predefined);

}

buildvar();

