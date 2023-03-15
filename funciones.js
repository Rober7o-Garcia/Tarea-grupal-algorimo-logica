class Funciones{
    limpiar(){
        document.getElementById('num1').value=""
        document.getElementById('num2').value=""
        document.getElementById('respuesta').textContent=""
    }

    divisores(num, divisor){
      let divisores = [];
      for (let i = divisor; i < num; i++){
        if (num % i == 0){
          divisores.push(i)
        }
      }
      return divisores;
    }

    divisoresVo() {
      let num = parseInt(document.getElementById('num1').value);
      let vi = parseInt(document.getElementById('num2').value);
      let array = this.divisores(num, vi);
      document.getElementById("respuesta").textContent = array;
    }
    
    sumaDivisores(num, vi){
        let array = this.divisores(num, vi)
        let suma = 0
        for (let i = 0; i < array.length; i++){
          suma += array[i]
        }
        return suma
    }

    sumaDivisoresVi(){
      let num = parseInt(document.getElementById('num1').value);
      let vi = parseInt(document.getElementById('num2').value);
      let respu = this.sumaDivisores(num, vi)
      document.getElementById("respuesta").textContent = respu;
    }

    sumaPerfectos(){
        let sum = 0
        let perfectos = []
        let serie = [6,5,25,24,28]
        for (let i = 0; i < serie.length; i++) {
          let acud = this.sumaDivisores(serie[i], 1);
          if (acud == serie[i]){
            perfectos.push(serie[i]);
          }
        }
        for (let i = 0; i < perfectos.length; i++){
            sum += perfectos[i]
        }
        document.getElementById("num").value = serie;
        document.getElementById("num2").value = perfectos;
        document.getElementById("respuesta").textContent = sum
      }

    primo() {
      let primos = [];
      let serie = [6, 5, 25, 7, 28];
      for (let i = 0; i < serie.length; i++) {
        let divs = this.divisores(serie[i], 2);
        let band = true;
        for (let j = 0; j < divs.length; j++) {
          if (divs[j] != 2) {
            band = false;
            break;
          }
        }
        if (band) {
          primos.push(serie[i]);
        }
      }
      document.getElementById("num1").value = serie.join(", ");
      document.getElementById("respuesta").textContent = `${primos} son primos`;
    }

    potenciaPross(num1, num2){
      let cont = 1
      let potencia = 1
      while(cont <= num2){
        potencia = potencia * num1
        cont = cont + 1
        }
      return potencia  
    }

    potencia(){
      let res = 0;
      let num1= parseInt(document.getElementById('num1').value)
      let num2= parseInt(document.getElementById('num2').value)
      res = this.potenciaPross(num1, num2)
      document.getElementById("respuesta").textContent = res
    }

    potenciaSerie(res, serie){
      for (let i = 0; i < serie.length; i++){
        let num1 = serie[i]
        let num2 = serie[i]
        res.push(this.potenciaPross(num1, num2))
      }
      document.getElementById('num1').value = serie;
      document.getElementById("respuesta").textContent = res
    }

    tablas(){
      let base = parseInt(document.getElementById("num1").value)
      let res = 0, resp = ""
      for (let i = 1; i <= 12; i++){
        res = base * i
        resp += `${base} * ${i} = ${res}\n`
      }
      document.getElementById("respuesta").textContent = resp
    }

    invertido(num){
      let numinv = 0
      let numinvertido = []
      while (num > 0){
        numinv = Math.floor(num % 10)
        num = Math.floor(num / 10)
        numinvertido.push(numinv)
      }
      return numinvertido
    }

    invertidoNum(){
      let num = parseInt(document.getElementById("num1").value)
      let invertido = []
      invertido = this.invertido(num)
      document.getElementById("respuesta").textContent = invertido
    }

    invertidoSuma(){
      let num = parseInt(document.getElementById("num1").value)
      let invertido = []
      let suma = 0
      invertido = this.invertido(num)
      for (let i = 0; i < invertido.length; i++){
        suma += invertido[i]
      }
      document.getElementById("respuesta").textContent = suma
    }

    digitosPares(){
      let num = parseInt(document.getElementById("num1").value)
      let invertido = []
      let pares = []
      invertido = this.invertido(num)
      for (let i = 0; i < invertido.length; i++){
        if (invertido[i] % 2 == 0) {
          pares.push(invertido[i])
        }
      }
      document.getElementById("respuesta").textContent = pares
    }

    primerDigito(){
      let num = parseInt(document.getElementById("num1").value)
      let invertido = []
      invertido = this.invertido(num)
      let primerValor = invertido[invertido.length - 1];
      document.getElementById("respuesta").textContent = primerValor;
    }

    ultimoDigito(){
      let num = parseInt(document.getElementById("num1").value)
      let invertido = []
      invertido = this.invertido(num)
      document.getElementById("respuesta").textContent = invertido[0];
    }

    factorial(num){

      let fac = 1
      for (let i = num; i > 0; i--){
        fac *= i
      }
      return fac
    }

    factorialNum(){
      let num = parseInt(document.getElementById("num1").value)
      let factorial = 0
      factorial = this.factorial(num)
      document.getElementById("respuesta").textContent = factorial;
    }

    factorialSerie(){
      let serie = [3,2,4]
      let num = 0
      let factor = [];
      for (let i = 0; i < serie.length; i++){
        num = this.factorial(serie[i])
        factor.push(num)
      }
      document.getElementById("num1").value = serie;
      document.getElementById("respuesta").textContent = factor;
    }

    rangoNum(){
      let inicio = parseInt(document.getElementById("num1").value)
      let fin = parseInt(document.getElementById("num2").value)
      let numeros = [];
      for (let i = inicio; i < fin; i++){
        numeros.push(i)
      }
      document.getElementById("respuesta").textContent = numeros
    }

}
let funcion = new Funciones() 
funcion.limpiar()
funcion.sumaPerfectos()
funcion.primo()
funcion.potenciaPross()
funcion.potencia()
funcion.potenciaSerie()
funcion.tablas()
funcion.divisoresVo()
funcion.sumaDivisores()
funcion.sumaDivisoresVi()
funcion.invertidoNum()
funcion.invertidoSuma()
funcion.digitosPares()
funcion.primerDigito()
funcion.ultimoDigito()
funcion.factorialNum()
funcion.factorialSerie()
funcion.rangoNum()