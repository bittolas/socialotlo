'use strict';
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
var cont6=2;
var cont7=1;

let contk = 1;
var tabtab = {
  tipo: "tabgiza",
  tabid:['SDR123','Claudia','Barradas'],
  cosul1:['SDR100','Paulo','Fialho',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul2:['GHJ323','Susana','Hortinha',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul3:['MFK958','Andre','Vieira',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul4:['LEP087','Andrea','Mexia',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul5:['TRE583','Patricia','Vilhena',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul6:['NLO190','Marta','Cesario',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul7:['KJD940','Claudia','Almeida',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul8:['JST732','Marlene','Assuncao',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul9:['WSD247','Isa','Morgado',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul10:['PWS865','Ana','Alface',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul11:['OTL847','Ana','Pereira',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul12:['EDF384','Elisabete','Raposo',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul13:['GTU324','Ana','Batista',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul14:['MNM347','Pedro','Canelas',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul15:['SDM347','Pedro','Canelas',0,0,0,0,0,0,0,0,0,0,0,0,0],
  cosul16:['FTY247','Pedro','Canelas',0,0,0,0,0,0,0,0,0,0,0,0,0],
  reclame1: "Bem Vindos Beta Testers",
  reclame2: "...",
  prod01:['nome1','nome2','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'],
  prod02:['nome2','nome2','ghg323',2,'23232',Math.round(d.getTime() / hour),'saude'],
  prod03:['nome3','nome2','ghg323',2,'23232',Math.round(d.getTime() / hour),'saude'],
  prod04:['nome4','nome2','ghg323',2,'23232',Math.round(d.getTime() / hour),'saude'],
  not01:['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)],
  not02:['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)],
  not03:['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)],
  not04:['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)],
  totnot: "",
  tabnes:"",
}
  let not01a = ['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)];
  let not02a = ['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)];
  let not03a = ['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)];
  let not04a = ['nome4','nome2','ghg323',"T","t","caixa",'23232',Math.round(d.getTime() / hour)];
  let prod01a = ['nome1','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
  let prod02a = ['nome2','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
  let prod03a = ['nome3','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
  let prod04a = ['nome4','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
  var lg = {
    tipo: "lg",
    username: "estados",
    cosul: "cosu",
    Valido: "0",
  }
  var decisor = {
    tipo: "g",
    username: "estados",
    cosul: "cosuldd2",
    Valido: "0",
  }
var tabcic = {


};
var dinami = "FLORA XAVIER"
  var not = {
    tipo: "not",
    nnoticia: "1",
    nome1: "estados",
    nome2: "estados",
    titulo: "cos",
    subtitulo: "Saude",
    caixa: "ola",
    hora: Date,
    extra: "er"
}

  var newprod = {
    tipo: "newprod",
    username: "estados",
    cosul: "cosuldd2",
    Valido: "0",
  }
  var winner = {
    tipo: "winner",
    nome1: "esados",
    nome2: "estados",
    cosul: "cos",
    prodit: "Saude",
    quantidade: 0,
    hora: Date,
    segmet: "8",
    

}

var novoreclame = {
  tipo: "reclame",
  pos: "",
  texto: "",

}
var sql;
var kika;
const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });















// SQL SERVER

var mysql = require('mysql');
const { json } = require('express/lib/response');

var con = mysql.createConnection({
  host: "185.90.59.52",
  user: "drimtec_paulo",
  password: "A95856762a!",
  database: "drimtec_otlo",
  debug: false,
});

con.query("SELECT * FROM ultinews", function (err, result, fields) {
   
  if (err) throw err;  
  let batata = JSON.stringify(result); 
  let tcham = JSON.parse(batata);


  tabtab.not01[0] = tcham[0].texto1;
  tabtab.not01[1] = tcham[0].texto2;
  tabtab.not01[3] = tcham[0].texto4;
  tabtab.not01[4] = tcham[0].texto5;
  tabtab.not01[5] = tcham[0].texto6;
  tabtab.not01[6] = tcham[0].texto7;


  tabtab.not02[0] = tcham[2].texto1;
  tabtab.not02[1] = tcham[2].texto2;
  tabtab.not02[3] = tcham[2].texto4;
  tabtab.not02[4] = tcham[2].texto5;
  tabtab.not02[5] = tcham[2].texto6;
  tabtab.not02[6] = tcham[2].texto7;

  tabtab.not03[0] = tcham[3].texto1;
  tabtab.not03[1] = tcham[3].texto2;
  tabtab.not03[3] = tcham[3].texto4;
  tabtab.not03[4] = tcham[3].texto5;
  tabtab.not03[5] = tcham[3].texto6;
  tabtab.not03[6] = tcham[3].texto7;

  tabtab.not04[0] = tcham[4].texto1;
  tabtab.not04[1] = tcham[4].texto2;
  tabtab.not04[3] = tcham[4].texto4;
  tabtab.not04[4] = tcham[4].texto5;
  tabtab.not04[5] = tcham[4].texto6;
  tabtab.not04[6] = tcham[4].texto7;




  
 
  
   
  } );






con.query("SELECT * FROM ultiprod", function (err, result, fields) {
   
  if (err) throw err;  
  let batata = JSON.stringify(result); 
  let tcham = JSON.parse(batata);

  tabtab.prod01[0] = tcham[0].texto1
  tabtab.prod01[1] = tcham[0].texto2
  tabtab.prod01[2] = tcham[0].texto3
  tabtab.prod01[3] = tcham[0].numero1
  tabtab.prod01[4] = tcham[0].numero2
  tabtab.prod01[6] = tcham[0].texto4


  tabtab.prod02[0] = tcham[2].texto1
  tabtab.prod02[1] = tcham[2].texto2
  tabtab.prod02[2] = tcham[2].texto3
  tabtab.prod02[3] = tcham[2].numero1
  tabtab.prod02[4] = tcham[2].numero2
  tabtab.prod02[6] = tcham[2].texto4

  tabtab.prod03[0] = tcham[3].texto1
  tabtab.prod03[1] = tcham[3].texto2
  tabtab.prod03[2] = tcham[3].texto3
  tabtab.prod03[3] = tcham[3].numero1
  tabtab.prod03[4] = tcham[3].numero2
  tabtab.prod03[6] = tcham[3].texto4

  tabtab.prod04[0] = tcham[4].texto1
  tabtab.prod04[1] = tcham[4].texto2
  tabtab.prod04[2] = tcham[4].texto3
  tabtab.prod04[3] = tcham[4].numero1
  tabtab.prod04[4] = tcham[4].numero2
  tabtab.prod04[6] = tcham[4].texto4



  
 

   
  } );


          
  con.query("SELECT * FROM tabtab", function (err, result, fields) {
    let batata = JSON.stringify(result); 
    let tcham = JSON.parse(batata);
    tabtab.reclame1 = tcham[0].texto2
    tabtab.reclame2 = tcham[0].texto3
    do {
    if (err) throw err;  
  
  

    tabtab['cosul'+cont7][0] = tcham[cont6].texto1
    tabtab['cosul'+cont7][1] = tcham[cont6].texto2
    tabtab['cosul'+cont7][2] = tcham[cont6].texto3
    tabtab['cosul'+cont7][3] = tcham[cont6].numero1
    tabtab['cosul'+cont7][4] = tcham[cont6].numero2
    tabtab['cosul'+cont7][5] = tcham[cont6].numero3
    tabtab['cosul'+cont7][6] = tcham[cont6].numero4
    tabtab['cosul'+cont7][7] = tcham[cont6].numero5
    tabtab['cosul'+cont7][8] = tcham[cont6].numero6
    tabtab['cosul'+cont7][9] = tcham[cont6].numero7
    tabtab['cosul'+cont7][10] = tcham[cont6].numero8
    tabtab['cosul'+cont7][11] = tcham[cont6].numero9
    tabtab['cosul'+cont7][12] = tcham[cont6].numero10
    tabtab['cosul'+cont7][13] = tcham[cont6].numero11
    tabtab['cosul'+cont7][14] = tcham[cont6].numero12
    tabtab['cosul'+cont7][15] = tcham[cont6].numero13
    tabtab['cosul'+cont7][16] = tcham[cont6].numero14
    tabtab['cosul'+cont7][17] = tcham[cont6].numero15
    tabtab['cosul'+cont7][18] = tcham[cont6].texto4
    cont6 +=1;
    cont7 +=1;  
     }
     while (cont6<18);
     cont6=2;
     cont7=1;
     
     con.end(function (err, result) {
      if (err) throw err;
      console.log(" Conexao terminada actualizacao inicial tabtab");
  
    });
    con = mysql.createConnection({
      host: "185.90.59.52",
      user: "drimtec_paulo",
      password: "A95856762a!",
      database: "drimtec_otlo",
      debug: false,
    });
     
    } );
  


    setInterval(myTimer3, 4000);
    function myTimer3() {
    con.query("SELECT * FROM ultiprod", function (err, result, fields) {
   
        if (err) throw err;  
        let batata = JSON.stringify(result); 
        let tcham = JSON.parse(batata);
      
        tabtab.prod01[0] = tcham[0].texto1
  tabtab.prod01[1] = tcham[0].texto2
  tabtab.prod01[2] = tcham[0].texto3
  tabtab.prod01[3] = tcham[0].numero1
  tabtab.prod01[4] = tcham[0].numero2
  tabtab.prod01[6] = tcham[0].texto4


  tabtab.prod02[0] = tcham[2].texto1
  tabtab.prod02[1] = tcham[2].texto2
  tabtab.prod02[2] = tcham[2].texto3
  tabtab.prod02[3] = tcham[2].numero1
  tabtab.prod02[4] = tcham[2].numero2
  tabtab.prod02[6] = tcham[2].texto4

  tabtab.prod03[0] = tcham[3].texto1
  tabtab.prod03[1] = tcham[3].texto2
  tabtab.prod03[2] = tcham[3].texto3
  tabtab.prod03[3] = tcham[3].numero1
  tabtab.prod03[4] = tcham[3].numero2
  tabtab.prod03[6] = tcham[3].texto4

  tabtab.prod04[0] = tcham[4].texto1
  tabtab.prod04[1] = tcham[4].texto2
  tabtab.prod04[2] = tcham[4].texto3
  tabtab.prod04[3] = tcham[4].numero1
  tabtab.prod04[4] = tcham[4].numero2
  tabtab.prod04[6] = tcham[4].texto4
   
       
        
         
        } );

     




    


        con.query("SELECT * FROM ultinews", function (err, result, fields) {
   
          if (err) throw err;  
          let batata = JSON.stringify(result); 
          let tcham = JSON.parse(batata);
        
        
        
          tabtab.not01[0] = tcham[0].texto1;
          tabtab.not01[1] = tcham[0].texto2;
          tabtab.not01[3] = tcham[0].texto4;
          tabtab.not01[4] = tcham[0].texto5;
          tabtab.not01[5] = tcham[0].texto6;
          tabtab.not01[6] = tcham[0].texto7;
        
        
          tabtab.not02[0] = tcham[2].texto1;
          tabtab.not02[1] = tcham[2].texto2;
          tabtab.not02[3] = tcham[2].texto4;
          tabtab.not02[4] = tcham[2].texto5;
          tabtab.not02[5] = tcham[2].texto6;
          tabtab.not02[6] = tcham[2].texto7;
        
          tabtab.not03[0] = tcham[3].texto1;
          tabtab.not03[1] = tcham[3].texto2;
          tabtab.not03[3] = tcham[3].texto4;
          tabtab.not03[4] = tcham[3].texto5;
          tabtab.not03[5] = tcham[3].texto6;
          tabtab.not03[6] = tcham[3].texto7;
        
          tabtab.not04[0] = tcham[4].texto1;
          tabtab.not04[1] = tcham[4].texto2;
          tabtab.not04[3] = tcham[4].texto4;
          tabtab.not04[4] = tcham[4].texto5;
          tabtab.not04[5] = tcham[4].texto6;
          tabtab.not04[6] = tcham[4].texto7;
        
        
        
        
          
         
  
           
          } );


        
// RETORNA A TABELA DO CICLO





          var sql ="SELECT * FROM ciclorank WHERE DINAMIZADOR='\tCLÀUDIA BARRADAS\t'"
          con.query(sql, function (err, result) {
            if (err) throw err;
            let batata = JSON.stringify(result); 
            let tcham = JSON.parse(batata);
            tabcic = tcham;
        
           
       
     
          console.log("Tabela do ciclo actualizada")
            
          
          
          });
   



//Retorna valor da tabela de noticias
var sql ="SELECT nnoticia FROM tabnews WHERE nnoticia=(SELECT max(nnoticia) FROM tabnews);"
con.query(sql, function (err, result) {
  if (err) throw err;
  let batata = JSON.stringify(result); 
  let tcham = JSON.parse(batata);
  

 console.log(tcham);
 

tabtab.totnot = tcham[0].nnoticia;
console.log(tabtab.totnot)
console.log("fase 1 terminada")
  


});


  sql = "SELECT * FROM tabnews";
  con.query(sql, function (err, result) {
    if (err) throw err;
    let batata = JSON.stringify(result); 
    let tcham = JSON.parse(batata);
 
    console.log(tcham[0].nnoticia)
    tabtab.tabnes=tcham;
   

  });







con.query("SELECT * FROM tabtab", function (err, result, fields) {
  let batata = JSON.stringify(result); 
    let tcham = JSON.parse(batata);
 
    tabtab.reclame1 = tcham[0].texto2
    tabtab.reclame2 = tcham[0].texto3
  do {
    if (err) throw err;  
    
  
    tabtab['cosul'+cont7][0] = tcham[cont6].texto1
    tabtab['cosul'+cont7][1] = tcham[cont6].texto2
    tabtab['cosul'+cont7][2] = tcham[cont6].texto3
    tabtab['cosul'+cont7][3] = tcham[cont6].numero1
    tabtab['cosul'+cont7][4] = tcham[cont6].numero2
    tabtab['cosul'+cont7][5] = tcham[cont6].numero3
    tabtab['cosul'+cont7][6] = tcham[cont6].numero4
    tabtab['cosul'+cont7][7] = tcham[cont6].numero5
    tabtab['cosul'+cont7][8] = tcham[cont6].numero6
    tabtab['cosul'+cont7][9] = tcham[cont6].numero7
    tabtab['cosul'+cont7][10] = tcham[cont6].numero8
    tabtab['cosul'+cont7][11] = tcham[cont6].numero9
    tabtab['cosul'+cont7][12] = tcham[cont6].numero10
    tabtab['cosul'+cont7][13] = tcham[cont6].numero11
    tabtab['cosul'+cont7][14] = tcham[cont6].numero12
    tabtab['cosul'+cont7][15] = tcham[cont6].numero13
    tabtab['cosul'+cont7][16] = tcham[cont6].numero14
    tabtab['cosul'+cont7][17] = tcham[cont6].numero15
    tabtab['cosul'+cont7][18] = tcham[cont6].texto4
  
    cont6 +=1;
    cont7 +=1;  
     }
     while (cont6<17);
  
   
     cont6=2;
     cont7=1;
    
     con.end(function (err, result) {
      if (err) throw err;
      console.log(" Conexao terminada actualizacao tabtab versao");
  
    });
    con = mysql.createConnection({
      host: "185.90.59.52",
      user: "drimtec_paulo",
      password: "A95856762a!",
      database: "drimtec_otlo",
      debug: false,
     
    } );

  } );
}

















wss.on('connection', (ws) => {
  console.log('Client connected');
  wss.clients.forEach((client) =>  client.send(JSON.stringify(tabtab)));
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (bob) => {
    decisor=JSON.parse(bob)
    console.log(decisor.tipo)
    console.log(decisor)
    switch (decisor.tipo) {
      case 'not':
        not = decisor;
        let bek ="8";
        let nomenot = 'teste'+bek;
        var sql ="SELECT nnoticia FROM tabnews WHERE nnoticia=(SELECT max(nnoticia) FROM tabnews);"
        con.query(sql, function (err, result) {
          if (err) throw err;
          let batata = JSON.stringify(result); 
          let tcham = JSON.parse(batata);
          console.log("teste1")
          console.log(tcham);
          console.log(tcham[0].nnoticia)
          console.log("teste2")
         console.log(batata)
         console.log("teste3")
         console.log(result);
          console.log(result.affectedRows + " record(s) updated");
        not.nnoticia = tcham[0].nnoticia + 1;
        console.log(not.nnoticia)
          
      
      
       
       
     
        var sql = "INSERT INTO tabnews (nnoticia, nome1, nome2, titulo, subtitulo, corpo, hora, extra) VALUES ('"+not.nnoticia+"', '"+not.nome1+"', '"+not.nome2+"', '"+not.titulo+"', '"+not.subtitulo+"', '"+not.caixa+"', '"+not.hora+"', '"+not.extra+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
                not01a[0] = not.nome1;
                not01a[1] = not.nome2;
                not01a[3] = not.titulo;
                not01a[4] = not.subtitulo;
                not01a[5] = not.caixa;
                not01a[6] = not.hora;
                not02a=tabtab.not01;
                not03a=tabtab.not02;
                not04a=tabtab.not03;
                tabtab.not01=not01a;
                tabtab.not02=not02a;
                tabtab.not03=not03a;
                tabtab.not04=not04a;
          console.log(result.affectedRows + " record(s) updated");
      
     
          contk = 1;
          do {
    
          sql = "UPDATE ultinews SET texto1= ('"+(tabtab['not0'+contk][0])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
   
        
        
          });
          sql = "UPDATE ultinews SET texto2= ('"+(tabtab['not0'+contk][1])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
    
        
        
          });
          sql = "UPDATE ultinews SET texto3= ('"+(tabtab['not0'+contk][2])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
     
        
        
          });
          sql = "UPDATE ultinews SET texto4= ('"+(tabtab['not0'+contk][3])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
     
        
        
          });
          sql = "UPDATE ultinews SET texto5= ('"+(tabtab['not0'+contk][4])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
       
        
        
          });
          sql = "UPDATE ultinews SET texto6= ('"+(tabtab['not0'+contk][5])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
           
        
        
          });
          sql = "UPDATE ultinews SET texto7= ('"+(tabtab['not0'+contk][6])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
            con.end(function (err, result) {
              if (err) throw err;
              console.log(" Conexao terminada");
          
            });
            con = mysql.createConnection({
              host: "185.90.59.52",
              user: "drimtec_paulo",
              password: "A95856762a!",
              database: "drimtec_otlo",
              debug: false,
             
            } );
        
        
          });
          contk+=1;
          } while(contk<5)
      
        });
      });
        break;
      case 'reclame1':
        novoreclame= decisor;
        sql = "UPDATE tabtab SET texto2= ('"+(novoreclame.texto)+"') WHERE pos = 0";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
          con.end(function (err, result) {
            if (err) throw err;
            console.log(" Conexao terminada");
        
          });
          con = mysql.createConnection({
            host: "185.90.59.52",
            user: "drimtec_paulo",
            password: "A95856762a!",
            database: "drimtec_otlo",
            debug: false,
           
          } );
      
      
        });
        break;
        case 'reclame2':
          novoreclame= decisor;
          sql = "UPDATE tabtab SET texto3= ('"+(novoreclame.texto)+"') WHERE pos = 0";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
            con.end(function (err, result) {
              if (err) throw err;
              console.log(" Conexao terminada");
          
            });
            con = mysql.createConnection({
              host: "185.90.59.52",
              user: "drimtec_paulo",
              password: "A95856762a!",
              database: "drimtec_otlo",
              debug: false,
             
            } );
        
        
          });
break;


      case 'lg':
        console.log("tentativa de login")
          lg = decisor;
           switch(lg.username) {
             case tabtab.cosul1[0]:{
               lg.cosul="cosul1";
               lg.Valido="2";
               console.log(lg.Valido)
               console.log("login Validado")
               wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
             }
            break;
             case tabtab.cosul2[0]:{
              lg.cosul="cosul2";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
            case tabtab.cosul3[0]:{
              lg.cosul="cosul3";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
            case tabtab.cosul4[0]:{
              lg.cosul="cosul4";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
          
            break;
            case tabtab.cosul5[0]:{
              lg.cosul="cosul5";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
            case tabtab.cosul6[0]:{
              lg.cosul="cosul6";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
            case tabtab.cosul7[0]:{
              lg.cosul="cosul7";
              lg.Valido="2";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
            case tabtab.cosul8[0]:{
             lg.cosul="cosul8";
             lg.Valido="2";
             console.log(lg.Valido)
             console.log("login Validado")
             wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
           }
           break;
           case tabtab.cosul9[0]:{
             lg.cosul="cosul9";
             lg.Valido="2";
             console.log(lg.Valido)
             console.log("login Validado")
             wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
           }
           break;
           case tabtab.cosul10[0]:{
             lg.cosul="cosul10";
             lg.Valido="2";
             console.log(lg.Valido)
             console.log("login Validado")
             wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
           }
          
           break;
           case tabtab.cosul11[0]:{
             lg.cosul="cosul11";
             lg.Valido="2";
             console.log(lg.Valido)
             console.log("login Validado")
             wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
           }
           break;
           case tabtab.cosul12[0]:{
             lg.cosul="cosul12";
             lg.Valido="2";
             console.log(lg.Valido)
             console.log("login Validado")
             wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
           }
           break;
           case tabtab.cosul13[0]:{
            lg.cosul="cosul13";
            lg.Valido="2";
            console.log(lg.Valido)
            console.log("login Validado")
            wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
          }
        
          break;
          case tabtab.cosul14[0]:{
            lg.cosul="cosul14";
            lg.Valido="2";
            console.log(lg.Valido)
            console.log("login Validado")
            wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
          }
          break;
          case tabtab.cosul15[0]:{
            lg.cosul="cosul15";
            lg.Valido="2";
            console.log(lg.Valido)
            console.log("login Validado")
            wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
          }
          break;
          case tabtab.cosul16[0]:{
            lg.cosul="cosul16";
            lg.Valido="2";
            console.log(lg.Valido)
            console.log("login Validado")
            wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
          }
          break;
           }
           switch(lg.username) {
            case tabtab.tabid[0]:{
             
              lg.Valido="1";
              console.log(lg.Valido)
              console.log("login Validado")
              wss.clients.forEach((client) =>  client.send(JSON.stringify(lg)));
            }
            break;
          } 
      break;
    
      case 'winner':
        let contgaw=2;
        let contga=1;
        prod01a = ['nome1','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
        prod02a = ['nome2','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
        prod03a = ['nome3','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
        prod04a = ['nome4','nome21','ghg323',2,'455495',Math.round(d.getTime() / hour),'saude'];
        
        console.log("chegou nova producao");
        winner=decisor;
        do{
        switch(winner.cosul) {
          case tabtab['cosul'+contga][0]:{
            console.log("done2");
            switch(winner.prodit) {
              case 'Saude':
                if (winner.segmet == "+1"){
                   
                  (tabtab['cosul'+contga][3])=(tabtab['cosul'+contga][3])+parseInt(winner.quantidade);
              
              }else      if (winner.segmet == "-1"){
                 
                (tabtab['cosul'+contga][3])=(tabtab['cosul'+contga][3])-parseInt(winner.quantidade);
                
           
            
            }else      if (winner.segmet == "+0"){
                 
              (tabtab['cosul'+contga][3])=(tabtab['cosul'+contga][3])+parseInt(winner.quantidade);
              
         
          
          }else      if (winner.segmet == "-0"){
                 
            (tabtab['cosul'+contga][3])=(tabtab['cosul'+contga][3])-parseInt(winner.quantidade);
            
       
        
        }
              else console.log("Nao esta a filtrar novos / anulados em SAude");

               
                prod01a[0] = winner.nome1;
                prod01a[1] = winner.nome2;
                prod01a[2] = winner.cosul;
                prod01a[3] = winner.quantidade;
                prod01a[4] = winner.hora;
                prod01a[6] = winner.prodit;
                prod02a=tabtab.prod01;
                prod03a=tabtab.prod02;
                prod04a=tabtab.prod03;
                tabtab.prod01=prod01a;
                tabtab.prod02=prod02a;
                tabtab.prod03=prod03a;
                tabtab.prod04=prod04a;
                
               

                contk = 1;
                do {
          
                sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
           
              
              
                });
                sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
           
              
              
                });
                sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
         
              
              
                });
                sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
    
              
              
                });
                sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
      
              
              
                });
                sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
        
              
              
                });
                contk+=1;
                } while(contk<5)
        

                

                
                sql = "UPDATE tabtab SET numero1 = ('"+(tabtab['cosul'+contga][3])+"') WHERE pos = ('"+contgaw+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
                  
              
              
                });
           

                

                console.log("done3");
                  if (winner.segmet == "+1"){
                   
                    (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
                    
                    sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
                      
                  
                  
                    });
                
                }else      if (winner.segmet == "-1"){
                   
                  (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
                  
                  sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                
                    console.log(result.affectedRows + " record(s) updated");
                
                    
                
                
                  });
              
              }
                else console.log("Nao altera segmetacao");

                con.end(function (err, result) {
                  if (err) throw err;
                  console.log(" Conexao terminada");
              
                });
                con = mysql.createConnection({
                  host: "185.90.59.52",
                  user: "drimtec_paulo",
                  password: "A95856762a!",
                  database: "drimtec_otlo",
                  debug: false,
                 
                } );
                 
              
             
              
             break;

            case 'PVF':
              if (winner.segmet == "+1"){
                   
                (tabtab['cosul'+contga][4])=(tabtab['cosul'+contga][4])+parseInt(winner.quantidade);
            
            }else      if (winner.segmet == "-1"){
               
              (tabtab['cosul'+contga][4])=(tabtab['cosul'+contga][4])-parseInt(winner.quantidade);
              
         
          
          }else      if (winner.segmet == "+0"){
               
            (tabtab['cosul'+contga][4])=(tabtab['cosul'+contga][4])+parseInt(winner.quantidade);
            
       
        
        }else      if (winner.segmet == "-0"){
               
          (tabtab['cosul'+contga][4])=(tabtab['cosul'+contga][4])-parseInt(winner.quantidade);
          
     
      
      }
            else console.log("Nao esta a filtrar novos / anulados em SAude");


        
        prod01a[0] = winner.nome1;
        prod01a[1] = winner.nome2;
        prod01a[2] = winner.cosul;
        prod01a[3] = winner.quantidade;
        prod01a[4] = winner.hora;
        prod01a[6] = winner.prodit;
        prod02a=tabtab.prod01;
        prod03a=tabtab.prod02;
        prod04a=tabtab.prod03;
        tabtab.prod01=prod01a;
        tabtab.prod02=prod02a;
        tabtab.prod03=prod03a;
        tabtab.prod04=prod04a;



         contk = 1;
        do {
  
        sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
          
      
      
        });
        sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
      
      
      
        });
        sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
      
      
      
        });
        sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
    
      
      
        });
        sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
     
      
      
        });
        sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
    
      
      
        });
        contk+=1;
        } while(contk<5)




        sql = "UPDATE tabtab SET numero2 = ('"+(tabtab['cosul'+contga][4])+"') WHERE pos = ('"+contgaw+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
          
              
              
                });

        console.log("done3");
          if (winner.segmet =="+1"){
            (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
            sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
              
                  
                  
                    });
          }else      if (winner.segmet == "-1"){
                   
            (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
            
            sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
              
          
          
            });
        
        }
          else console.log("Nao altera segmetacao");
        
          con.end(function (err, result) {
            if (err) throw err;
            console.log(" Conexao terminada");
        
          });
          con = mysql.createConnection({
            host: "185.90.59.52",
            user: "drimtec_paulo",
            password: "A95856762a!",
            database: "drimtec_otlo",
            debug: false,
           
          } );
     break;

           case 'Digital':
            if (winner.segmet == "+1"){
                   
              (tabtab['cosul'+contga][6])=(tabtab['cosul'+contga][6])+parseInt(winner.quantidade);
          
          }else      if (winner.segmet == "-1"){
             
            (tabtab['cosul'+contga][6])=(tabtab['cosul'+contga][6])-parseInt(winner.quantidade);
            
       
        
        }else      if (winner.segmet == "+0"){
             
          (tabtab['cosul'+contga][6])=(tabtab['cosul'+contga][6])+parseInt(winner.quantidade);
          
     
      
      }else      if (winner.segmet == "-0"){
             
        (tabtab['cosul'+contga][6])=(tabtab['cosul'+contga][6])-parseInt(winner.quantidade);
        
   
    
    }
          else console.log("Nao esta a filtrar novos / anulados em SAude");


           
            prod01a[0] = winner.nome1;
            prod01a[1] = winner.nome2;
            prod01a[2] = winner.cosul;
            prod01a[3] = winner.quantidade;
            prod01a[4] = winner.hora;
            prod01a[6] = winner.prodit;
            prod02a=tabtab.prod01;
            prod03a=tabtab.prod02;
            prod04a=tabtab.prod03;
            tabtab.prod01=prod01a;
            tabtab.prod02=prod02a;
            tabtab.prod03=prod03a;
            tabtab.prod04=prod04a;



             contk = 1;
            do {
      
            sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
         
          
          
            });
            sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
      
          
          
            });
            sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
      
          
          
            });
            sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
          
          
          
            });
            sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
   
          
          
            });
            sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
     
          
          
            });
            contk+=1;
            } while(contk<5)





            
            sql = "UPDATE tabtab SET numero4 = ('"+(tabtab['cosul'+contga][6])+"') WHERE pos = ('"+contgaw+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
        
          
          
            });

            console.log("done3");
              if (winner.segmet == "+1"){
                (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
                sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
            
                  
                  
                    });
              }else      if (winner.segmet == "-1"){
                   
                (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
                
                sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
                  
              
              
                });
            
            }
              else console.log("Nao altera segmetacao");
            
              con.end(function (err, result) {
                if (err) throw err;
                console.log(" Conexao terminada");
            
              });
              con = mysql.createConnection({
                host: "185.90.59.52",
                user: "drimtec_paulo",
                password: "A95856762a!",
                database: "drimtec_otlo",
                debug: false,
               
              } );
         break;


         case 'Vida':
          if (winner.segmet == "+1"){
                   
            (tabtab['cosul'+contga][7])=(tabtab['cosul'+contga][7])+parseInt(winner.quantidade);
        
        }else      if (winner.segmet == "-1"){
           
          (tabtab['cosul'+contga][7])=(tabtab['cosul'+contga][7])-parseInt(winner.quantidade);
          
     
      
      }else      if (winner.segmet == "+0"){
           
        (tabtab['cosul'+contga][7])=(tabtab['cosul'+contga][7])+parseInt(winner.quantidade);
        
   
    
    }else      if (winner.segmet == "-0"){
           
      (tabtab['cosul'+contga][7])=(tabtab['cosul'+contga][7])-parseInt(winner.quantidade);
      
 
  
  }
        else console.log("Nao esta a filtrar novos / anulados em SAude");


         
          prod01a[0] = winner.nome1;
          prod01a[1] = winner.nome2;
          prod01a[2] = winner.cosul;
          prod01a[3] = winner.quantidade;
          prod01a[4] = winner.hora;
          prod01a[6] = winner.prodit;
          prod02a=tabtab.prod01;
          prod03a=tabtab.prod02;
          prod04a=tabtab.prod03;
          tabtab.prod01=prod01a;
          tabtab.prod02=prod02a;
          tabtab.prod03=prod03a;
          tabtab.prod04=prod04a;



           contk = 1;
          do {
    
          sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
        
        
        
          });
          sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
         
        
        
          });
          sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
      
        
        
          });
          sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
  
        
        
          });
          sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
 
        
        
          });
          sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
    
        
        
          });
          contk+=1;
          } while(contk<5)





          
          sql = "UPDATE tabtab SET numero5 = ('"+(tabtab['cosul'+contga][7])+"') WHERE pos = ('"+contgaw+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
    
        
        
          });

          console.log("done3");
            if (winner.segmet == "+1"){
              (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
              sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
             
                  
                  
                    });
            }else      if (winner.segmet == "-1"){
                   
              (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
              
              sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
              con.query(sql, function (err, result) {
                if (err) throw err;
            
                console.log(result.affectedRows + " record(s) updated");
            
                
            
            
              });
          
          }
            else console.log("Nao altera segmetacao");
            con.end(function (err, result) {
              if (err) throw err;
              console.log(" Conexao terminada");
          
            });
            con = mysql.createConnection({
              host: "185.90.59.52",
              user: "drimtec_paulo",
              password: "A95856762a!",
              database: "drimtec_otlo",
              debug: false,
             
            } );
        
       break;



       case 'PPR':
        if (winner.segmet == "+1"){
                   
          (tabtab['cosul'+contga][8])=(tabtab['cosul'+contga][8])+parseInt(winner.quantidade);
      
      }else      if (winner.segmet == "-1"){
         
        (tabtab['cosul'+contga][8])=(tabtab['cosul'+contga][8])-parseInt(winner.quantidade);
        
   
    
    }else      if (winner.segmet == "+0"){
         
      (tabtab['cosul'+contga][8])=(tabtab['cosul'+contga][8])+parseInt(winner.quantidade);
      
 
  
  }else      if (winner.segmet == "-0"){
         
    (tabtab['cosul'+contga][8])=(tabtab['cosul'+contga][8])-parseInt(winner.quantidade);
    


}
      else console.log("Nao esta a filtrar novos / anulados em SAude");


       
        prod01a[0] = winner.nome1;
        prod01a[1] = winner.nome2;
        prod01a[2] = winner.cosul;
        prod01a[3] = winner.quantidade;
        prod01a[4] = winner.hora;
        prod01a[6] = winner.prodit;
        prod02a=tabtab.prod01;
        prod03a=tabtab.prod02;
        prod04a=tabtab.prod03;
        tabtab.prod01=prod01a;
        tabtab.prod02=prod02a;
        tabtab.prod03=prod03a;
        tabtab.prod04=prod04a;



       contk = 1;
        do {
  
        sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
     
      
      
        });
        sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
  
      
      
        });
        sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
     
      
      
        });
        sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
    
      
      
        });
        sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
    
      
      
        });
        sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
      
          console.log(result.affectedRows + " record(s) updated");
      
      
      
        });
        contk+=1;
        } while(contk<5)




        sql = "UPDATE tabtab SET numero6 = ('"+(tabtab['cosul'+contga][8])+"') WHERE pos = ('"+contgaw+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
             
              
              
                });

        console.log("done3");
          if (winner.segmet == "+1"){
            (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
            sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
                
                  
                  
                    });
          }else      if (winner.segmet == "-1"){
                   
            (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
            
            sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
          
              console.log(result.affectedRows + " record(s) updated");
          
              
          
          
            });
        
        }
          else console.log("Nao altera segmetacao");
        
          con.end(function (err, result) {
            if (err) throw err;
            console.log(" Conexao terminada");
        
          });
          con = mysql.createConnection({
            host: "185.90.59.52",
            user: "drimtec_paulo",
            password: "A95856762a!",
            database: "drimtec_otlo",
            debug: false,
           
          } );
     break;



     case 'AP':
      if (winner.segmet == "+1"){
                   
        (tabtab['cosul'+contga][5])=(tabtab['cosul'+contga][5])+parseInt(winner.quantidade);
    
    }else      if (winner.segmet == "-1"){
       
      (tabtab['cosul'+contga][5])=(tabtab['cosul'+contga][5])-parseInt(winner.quantidade);
      
 
  
  }else      if (winner.segmet == "+0"){
       
    (tabtab['cosul'+contga][5])=(tabtab['cosul'+contga][5])+parseInt(winner.quantidade);
    


}else      if (winner.segmet == "-0"){
       
  (tabtab['cosul'+contga][5])=(tabtab['cosul'+contga][5])-parseInt(winner.quantidade);
  


}
    else console.log("Nao esta a filtrar novos / anulados em SAude");




     
      prod01a[0] = winner.nome1;
      prod01a[1] = winner.nome2;
      prod01a[2] = winner.cosul;
      prod01a[3] = winner.quantidade;
      prod01a[4] = winner.hora;
      prod01a[6] = winner.prodit;
      prod02a=tabtab.prod01;
      prod03a=tabtab.prod02;
      prod04a=tabtab.prod03;
      tabtab.prod01=prod01a;
      tabtab.prod02=prod02a;
      tabtab.prod03=prod03a;
      tabtab.prod04=prod04a;




       contk = 1;
      do {

      sql = "UPDATE ultiprod SET texto1= ('"+(tabtab['prod0'+contk][0])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    

    
    
      });
      sql = "UPDATE ultiprod SET texto2= ('"+(tabtab['prod0'+contk][1])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    
    
    
    
      });
      sql = "UPDATE ultiprod SET texto3= ('"+(tabtab['prod0'+contk][2])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    
   
    
    
      });
      sql = "UPDATE ultiprod SET numero1= ('"+(tabtab['prod0'+contk][3])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    
 
    
    
      });
      sql = "UPDATE ultiprod SET numero2= ('"+(tabtab['prod0'+contk][4])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    

      });
      sql = "UPDATE ultiprod SET texto4= ('"+(tabtab['prod0'+contk][6])+"') WHERE pos = ('"+contk+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
    
        console.log(result.affectedRows + " record(s) updated");
    
    
      });
      contk+=1;
      } while(contk<5)



      
      sql = "UPDATE tabtab SET numero3 = ('"+(tabtab['cosul'+contga][5])+"') WHERE pos = ('"+contgaw+"')";
                con.query(sql, function (err, result) {
                  if (err) throw err;
              
                  console.log(result.affectedRows + " record(s) updated");
              
        
              
              
                });

      console.log("done3");
        if (winner.segmet == "+1"){
          (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])+1;
          sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                  
                      console.log(result.affectedRows + " record(s) updated");
                  
               
                  
                  
                    });
        }else      if (winner.segmet == "-1"){
                   
          (tabtab['cosul'+contga][9])=(tabtab['cosul'+contga][9])-1;
          
          sql = "UPDATE tabtab SET numero7 = ('"+(tabtab['cosul'+contga][9])+"') WHERE pos = ('"+contgaw+"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        
            console.log(result.affectedRows + " record(s) updated");
        
            
        
        
          });
      
      }
        else console.log("Nao altera segmetacao");
        con.end(function (err, result) {
          if (err) throw err;
          console.log(" Conexao terminada");
      
        });
        con = mysql.createConnection({
          host: "185.90.59.52",
          user: "drimtec_paulo",
          password: "A95856762a!",
          database: "drimtec_otlo",
          debug: false,
         
        } );
    
   break;






          }
         break;
  
  
      }
    }
    contga+=1;  
    contgaw+=1;
  }while (contga<17);
    
      
    
      break;


      













    }

  });
})



setInterval(myTimer, 20000);

function myTimer() {
  
  wss.clients.forEach((client) =>  client.send(JSON.stringify(tabtab)));
 console.log('tabacualizada')
}
