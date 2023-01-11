//una vez tenemos el homepage.js hecho con las funciones de abajo, ponemos esto : 
let homepage = require('./../paginas/homepage.js')


describe('prueba1 test para calculadora de github', function () {

  //aquí creamos los bloques it

  it('addition test', function () {

    //  browser.get('http://juliemr.github.io/protractor-demo/');
    homepage.direccion('http://juliemr.github.io/protractor-demo/') //lo ponemos así 

    // element(by.model('first')).sendKeys(2); //vemos que al lanzarlo, nos añade un 2

    homepage.introducirPrimerNumero('4'); //ahora si pasamos los números, cuando ya tenemos ek homepage hecho
    // element(by.model('second')).sendKeys(4); //vemos que al lanzarlo, nos añade un 4

    homepage.introducirSegundoNumero('4');
    //para coger el boton usaremos selector css:
    // element(by.css('[ng-click="doAddition()"]')).click() // copiamos exactamente lo que pone en el DOM
    //click vemos que se hace así en el API.

    homepage.hacerClick();
    //Podemos usar elementAll para seleccionar varios
    // let resultado = element(by.cssContainingText('.ng-binding', '6'));//poniendo aqui 5 debe dar error,puesto que 4+2=6
    // expect(resultado.getText()).toEqual('6');

    homepage.verificar('8')
    browser.sleep(2000)

    //para el símbolo(lo he intentado por mi cuenta,con ayuda del api)

    /*  let opciones = element.all(by.options('"value for (key, value) in operators"'));
      let opciones2  = element.all(by.model('operator'));
      expect(opciones2.count()).toEqual(6);*/




    //let segundaOpcion = opciones2.first();
    //expect(segundaOpcion.getText()).toEqual('6');



  });
  it('test 2', function () {

//creo otro trst falso para ver los resultados en allure
    homepage.direccion('http://juliemr.github.io/protractor-demo/')
    homepage.introducirPrimerNumero('3');
    homepage.introducirSegundoNumero('4');
    homepage.hacerClick2();
    homepage.verificar('8')
    browser.sleep(2000)





  });




})