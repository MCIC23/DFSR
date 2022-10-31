
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
            calcularsubTotal();
        }));

        $(".eliminar:last").click(
            function(e){
                $(this).closest("tr").remove();
                calcularsubTotal();
            }
        )
        $(".apertura").click(function(e){
              tr = $(this).closest("tr");
              $("#exampleModal").modal('show');
              console.log("click") 
          });

        });

        $(".formulario").hide(); 
        $("#mostrar").click(function(e){
            $(".formulario").show();
            console.log("click")       
        });
       

        $("#importar").click(function(e){
            tr = $(this).closest("tr");
            $("#modal").modal('show');
            console.log("click")
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
        
        $(".detalle2").click(function(e){
            let claveCliente;
            let nombreC;
            let rfc;
            let domicilio;
           
            //console.log("CLICK EN EL RENGLON");
            claveCliente =   $(this).closest("tr").find("#claveCliente").text();
            nombreC = $(this).closest("tr").find("#nombreC").text();
            rfc = $(this).closest("tr").find("#rfc").text();
            domicilio = $(this).closest("tr").find("#domicilio").text();

           //console.log("claveDetalle::", claveCliente);
            $('.formulario').find("#claveCliente").val(claveCliente);
            $('.formulario').find("#nombreC").val(nombreC);
            $('.formulario').find("#rfc").val(rfc);
            $('.formulario').find("#domicilio").val(domicilio);
            
            $(".modal").modal('hide');
           

        })

        $(".imprimir").click(function(e){
            $("#imprimir2").modal('show');
         
                let nombre;
                let rfc;
                let domicilio;
                let subtotal;
                let iva;
                let total;
            
               nombre = $("#nombreC").val();
               rfc = $('#rfc').val();
               domicilio = $('#domicilio').val();
               subtotal = $('#subtotal').text();
               iva = $('#iva').text();
               total = $('#total').text();
               
                //console.log("Nombre:", nombre);
                //console.log("subtotal", subtotal);
                //console.log("iva:", iva);
                //console.log("total", total);

              $('#nombre2').text(nombre);
              $('#rfc2').text(rfc);
              $('#domicilio2').text(domicilio);
              $('#subtotal2').text(subtotal);
              $('#iva2').text(iva);
              $('#total2').text(total);

         
        });

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

   function calcularsubTotal(){
       let subtotal = 0;
       let iva;
        

       $(".importe").each(
        function(){
            subtotal += Number($(this).val().replace('$','').replace(',','').replace('.00','')); 
            console.log('subtotal:' , subtotal);
            
            

        }

    );
 
        iva= subtotal*0.16;
        console.log('Iva :', iva)
 
    let numeralSubtotal = numeral(subtotal)
    let numeralIva = numeral(iva);
    $("#subtotal").text(numeralSubtotal.format('$0,000,000.00'));
    $("#iva").text(numeralIva.format('$0,000,000.00'));
    calcularTotal(iva,subtotal);
   };


   function calcularTotal(iva, subtotal){
    let total;
    let numeralTotal=0;

    if(iva && subtotal){
        total = iva + subtotal;
        
        numeralTotal= numeral(total);
        $("#total").text(numeralTotal.format('$0,000,000.00'));
    }


   }

   }
)