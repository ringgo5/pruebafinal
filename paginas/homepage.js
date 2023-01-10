let homepage = function () {

    let primerNumero = element(by.model('first'));
    let segundoNumero = element(by.model('second'));
    let boton = element(by.css('[ng-click="doAddition()"]'));

    //añadimos la dirección que queremos testear :

    this.direccion = function(url){

        browser.get(url)

    }

    //creamos las funciones que tenemos en calculadora. Las hemos separado arroba(ya no tiene click ni nada)
    this.introducirPrimerNumero = function (num1) { //usamos esto en vez de poner un número directamente,para que podamos usar el numero que queramos
        primerNumero.sendKeys(num1);


    }

    this.introducirSegundoNumero = function (num2) {
        segundoNumero.sendKeys(num2);
    }

    this.hacerClick = function () {
        boton.click();
    }

    this.verificar = function (resultado) {

        let resultadoVerificado = element(by.cssContainingText('.ng-binding', resultado));//poniendo aqui 5 debe dar error,puesto que 4+2=6
        expect(resultadoVerificado.getText()).toEqual(resultado);
    }

    //hasta aquí tenemos toda la estructura básica, donde iremos comprobando con los datos que nosotros queramos


};

//lo exportamos:

module.exports = new homepage();