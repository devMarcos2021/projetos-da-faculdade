        

        function calcular(){

            var nota1 = parseFloat(document.querySelector("#nota1").value)
            var nota2 = parseFloat(document.querySelector("#nota2").value)
            var media = (nota1 + nota2) /2

            var result = document.querySelector("#result")
            var apro_repro = document.querySelector("#apro_repro")

            if(media >=6 && media < 11){
                result.innerHTML ="A nota final do aluno é " + media +" e ele está:"
                apro_repro.innerHTML="está funcionando"
                apro_repro.innerHTML="<span class ='apro'>APROVADO</span>"

            }else if(media < 6 && media > 0){
                result.innerHTML ="A nota final do aluno é " + media +" e ele está:"
                apro_repro.innerHTML="<span class ='repro'>REPROVADO</span>"
            }else if(media >10){
                window.alert("Insira uma nota válida, notas validas vão de 0 ate´10!")
               
            }else{
                window.alert("é necessário adicionar as notas do primeiro e segundo mês")
            }
        }            
    
    
    
         
    