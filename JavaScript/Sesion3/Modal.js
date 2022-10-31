
$(document).ready(



    function(){

        var tr;
        console.log("Carga");

        $("#agregar").on('click', function(){
              console.log("Funciona");
              $("#partidas").append(
                "<tr>\
                <td>\
                <img class='apertura' src='https://icons.iconarchive.com/icons/hopstarter/button/16/Button-Add-icon.png' />\
                </td>\
                <td>\
                <input type='text' class='clave'readonly='readonly'/>\
                </td>\
                <td>\
                <input type='text' class='precio'readonly='readonly'/>\
                </td>\
                <td>\
                <input type='text' class='descripcion'readonly='readonly' />\
                </td>\
                <td>\
                <input type='text' class='unidades'/>\
                </td>\
                <td>\
                <input type='text' class='importe' readonly='readonly'/>\
                </td>\
                <td>\
                <img class='eliminar' src='http://icons.iconarchive.com/icons/hopstarter/button/16/Button-Delete-icon.png' />\
                </td>\
                </tr>");


        $(".precio:last, .unidades:last").on('change', (function(){
            console.log("CHANGE")
            tr  = $(this).closest("tr");
            calculaImporte(tr);
            calcularTotal();
        }));

        $(".eliminar:last").click(
            function(e){
                $(this).closest("tr").remove();
                calcularTotal();
            }
        )
        $(".apertura").click(function(e){
              tr = $(this).closest("tr");
              $("#exampleModal").modal('show');
              console.log("click")       
          });


        });

        


        $(".detalle").click(function(e){
            let claveDetalle;
            let descripcion;
            let precio;
           
        

            //console.log("CLICK EN EL RENGLON");
            claveDetalle =   $(this).closest("tr").find(".claveDetalle").text();
            descripcion = $(this).closest("tr").find(".descripcionDetalle").text();
            precio = $(this).closest("tr").find(".precioDetalle").text();
           

           // console.log("claveDetalle::", claveDetalle);
            $(tr).find(".clave").val(claveDetalle);
            $(tr).find(".descripcion").val(descripcion);
            $(tr).find(".precio").val(precio);
            $(tr).find(".unidades").val(1);
            $(tr).find(".unidades").change();
            
            

            $("#exampleModal").modal('hide');

        })





   function calculaImporte(tr){
       let precio = $(tr).find(".precio").val().replace('$','').replace(',','').replace('.00','');
       let unidades = $(tr).find(".unidades").val();
   
   console.log("El precio es : " + precio)
   console.log("Las unidades son: " + unidades)

   var importe = precio * unidades; 
   console.log("Importe:" + importe)
    let importeNumeral =numeral(importe)
    $(tr).find(".importe").val(importeNumeral.format('$0,000,000.00'));
   
   }


   function calcularTotal(){
       let subtotal = 0; 


       $(".importe").each(
           function(){
               subtotal += Number($(this).val().replace('$','').replace(',','').replace('.00','')); 
               console.log('subtotal:' , subtotal);  
           }
       );
           let numeralSubtotal = numeral(subtotal)
       $("#subtotal").text(numeralSubtotal.format('$0,000,000.00'));

   }



    }
) 