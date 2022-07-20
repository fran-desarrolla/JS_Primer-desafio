let numero = "" //define la variable numero y le asigno vacio para que no sea null.

while (numero !== "fin" ){ //con este while genero un loop para que el algoritmo corra hasta que se oprima la tecla ESC o se ingrese el dato fin y limito la posibilidad de entrar texto, o sea que solo va a funcionar con billetes. 
    numero = prompt("Por favor ingrese un numero comprendido entre el 0 y el 36. Si quiere salir ingrese fin o haga clic en cancelar").toLowerCase()

        while (numero == ""){//con este while, anidado en el anterior evito que ingresen un valor vacio
            numero = prompt("Por favor ingrese un numero comprendido entre el 0 y el 36. Si quiere salir ingrese fin o haga clic en cancelar").toLowerCase()
        }

        while(numero >=0 && numero <=36){//Este while, que está anidado en el anterior, limita la variable al rango analizable. cuando se ingresa un valor que no cumplen con el criterio vuelve a solicitar uno nuevo
            
           
            
            if (numero == 0){//con este if  si el nro. es rojo o negro
                alert("Usted eligió el cero, que no es ni rojo ni negro, no par o impar, ni mayor ni menor, no pertenece a ninguna docena ni a ninguna columna.")
            }else if
                (   numero == 1  ||
                    numero ==  3 ||
                    numero ==  5 ||
                    numero ==  7 ||
                    numero ==  9 ||
                    numero ==  12 ||
                    numero ==  14 ||
                    numero ==  16 ||
                    numero ==  18 ||
                    numero ==  19 ||
                    numero ==  21 ||
                    numero ==  23 ||
                    numero ==  25 ||
                    numero ==  27 ||
                    numero ==  30 ||
                    numero ==  32 ||
                    numero ==  34 ||
                    numero ==  36 ){
                    alert("Usted eligió el número " + numero + " que es ROJO,")
                }else{
                    alert("Usted eligió el número " + numero + " que es NEGRO,")
                }

                //con este if analizo si el numor es par o impar
                if (numero == 0){}
                else if (numero % 2 === 0){
                    alert("es PAR,")
                }else{
                    alert("es IMPAR,")
                }

                //con este if analizo si es mayor o menor
                if (numero == 0){}
                else if (numero >=1 && numero <=18){
                    alert("es MENOR,")
                }else{
                    alert("es MAYOR,")
                }

                //con este if determino la docena
                if (numero == 0){}
                else if (numero > 1 && numero <= 12){
                    alert("pertenece a la PRIMER DOCENA,")
                }else if(numero >12 && numero <= 24){
                    alert("pertenece a la SEGUNDA DOCENA,")
                }else{
                    alert("pertenece a la TERCERA DOCENA,")
                }

                //con este if determino la columna
                if (numero == 0){}
                else if( numero == 1 ||
                    numero == 4 ||
                    numero == 7 ||
                    numero == 10 ||
                    numero == 13 ||
                    numero == 16 ||
                    numero == 19 ||
                    numero == 22 ||
                    numero == 25 ||
                    numero == 28 ||
                    numero == 31 ||
                    numero == 34 ){
                    alert("y se ubica en la PRIMERA COLUMNA")
                }else if (
                    numero == 2 ||
                    numero == 5 ||
                    numero == 8 ||
                    numero == 11 ||
                    numero == 14 ||
                    numero == 17 ||
                    numero == 20 ||
                    numero == 23 ||
                    numero == 26 ||
                    numero == 29 ||
                    numero == 32 ||
                    numero == 35 
                ){
                    alert("y se ubica en la SEGUNDA COLUMNA.")
                }else{
                    alert("y se ubica en la TERCER COLUMNA.")
                }

            


            // con este prompt me aseguro que cuando finaliza el ciclo y determina las características del nro. me vuelva a pedir otro número nuevo.    
            numero = prompt("Por favor ingrese un numero comprendido entre el 0 y el 36. Si quiere salir ingrese fin o haga clic en cancelar")   
        }

}