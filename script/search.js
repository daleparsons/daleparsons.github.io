$(function () {
    //Initiate type ahead function
    $("#myText1").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown01").removeClass("hide");
        } else {
            $('#snomed-dropdown01').empty();
        };
    });

    $("#myText2").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown02").removeClass("hide");
        } else {
            $('#snomed-dropdown02').empty();
        };
    });

    $("#myText3").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown03").removeClass("hide");
        } else {
            $('#snomed-dropdown03').empty();
        };
    });

    //SEARCH 1
    let dropdown01 = $('#snomed-dropdown01');
    dropdown01.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown01.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown01 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown01.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText1').val(pft)
                dropdown01.empty();
                $('.selectedIndications').append('<span class="chosen01">'+pft+'<span class="minus"></span></span>')
                $("#myText1").attr('disabled', true)
                $('.plusIndications').removeClass('hidden')

                $(".minus").click(function(){
                    $(this).closest(".chosen01").remove();
                    $("#myText1").attr('disabled', false);
                    $("#myText1").val('');
                    $('#myText1').attr('placeholder', 'Text here');
                    $('.plusIndications').addClass('hidden')
                })

                $('.plusIndications').click(function(){
                    $("#myText1").attr('disabled', false);
                    $("#myText1").val('');
                    $('#myText1').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText1").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 2
    let dropdown02 = $('#snomed-dropdown02');
    dropdown02.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown02.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown02 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown02.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText2').val(pft)
                dropdown02.empty();
                $('.selectedFindings').append('<span class="chosen02">'+pft+'<span class="minus2"></span></span>')
                $("#myText2").attr('disabled', true);
                $('.plusFindings').removeClass('hidden');

                $(".minus2").click(function(){
                    $(this).closest(".chosen02").remove();
                    $("#myText2").attr('disabled', false);
                    $("#myText2").val('');
                    $('#myText2').attr('placeholder', 'Text here');
                    $('.plusFindings').addClass('hidden');
                })

                $('.plusFindings').click(function(){
                    $("#myText2").attr('disabled', false);
                    $("#myText2").val('');
                    $('#myText2').attr('placeholder', 'Text here');
                })

            });
        });
    }

    $("#myText2").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 3
    let dropdown03 = $('#snomed-dropdown03');
    dropdown03.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown03.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown03 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText3').val(pft)
                dropdown03.empty();
                $(".addComms").attr("disabled", false);
                $('.selectedProcedure').append('<span class="chosen03">'+pft+'<span class="minus3"></span></span>')
                $("#myText3").attr('disabled', true)

                $(".minus3").click(function(){
                    $(this).closest(".chosen03").remove();
                    $("#myText3").attr('disabled', false);
                    $("#myText3").val('');
                    $('#myText3').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText3").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 4
    let dropdown04 = $('#snomed-dropdown04');
    dropdown04.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/(%3C71388002:363701004=373477003)OR(%3C71388002:363701004=373288007)OR(%3C71388002:363701004=372614000)&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown04.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown04 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown04.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText4').val(pft)
                dropdown04.empty();
                $(".addComms").attr("disabled", false);
                $('.selectedAnaesthetic').append('<span class="chosen04">'+pft+'<span class="minus4"></span></span>')
                $("#myText4").attr('disabled', true)

                $(".minus4").click(function(){
                    $(this).closest(".chosen04").remove();
                    $("#myText4").attr('disabled', false);
                    $("#myText4").val('');
                    $('#myText4').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText4").autocomplete({
        source: getData,
        minLength: 3
    });
});
