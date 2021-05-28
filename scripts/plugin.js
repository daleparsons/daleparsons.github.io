$(function  () {

    $(".demo").addClass("hidden");

    $("#advancedItems, #snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown, .inner-wrap2").addClass("hide");

    //Initiate type ahead function
        $("#myText").keyup(function(){
            if($(this).val()) {
                $("#snomed-dropdown").removeClass("hide");
            } else {
                $('#snomed-dropdown').empty();
                $(".inner-wrap2").addClass("hide");
            }
        });

        //Initiate type ahead function
        $("#myText2").keyup(function(){
            if($(this).val()) {
                $("#snomed-dropdown02").removeClass("hide");
            } else {
                $('#snomed-dropdown02').empty();
                $(".inner-wrap2").addClass("hide");
            }
        });

        //Initiate type ahead function
        $("#myText3").keyup(function(){
            if($(this).val()) {
                $("#snomed-dropdown03").removeClass("hide");
            } else {
                $('#snomed-dropdown03').empty();
                $(".inner-wrap2").addClass("hide");
            }
        });

        //BASIC SEARCH
        let dropdown = $('#snomed-dropdown');
        dropdown.empty();
        $("#snomed-dropdown, .inner-wrap").removeClass("hide");

        $.fn.basicFunction = function() {

        var getData = function (request, response) {
            //Cell Type
            var api = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<108369006&filter="

            $.getJSON(api + request.term, function (data){
                $("#helper").text("a");
                dropdown.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $("#snomed-dropdown > li").first().focus();
                $.each(data.expansion.contains, function(i,value) {
                    dropdown.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h"></i>\
                            </button>\
                        </span>'))
                });

                $(".name").click(function(){
                    var helper = $("#helper").text();
                    var pft = $(this).val(".name").text()
                    if(helper=="a"){
                        $('#myText').val(pft);
                        dropdown.empty();
                    }
                });

                $('.more').click(function(){
                    $("#helper").text("1");
                    $(this).parentsFunction();
                    $(".inner-wrap2, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").removeClass("hide");
                    $(this).childFunction();    
                    $(this).synonymFunction();                
                });
            });
        };

        $("#myText").autocomplete({
            source: getData,
            minLength: 3
        });
        };

        $(this).basicFunction();

        //NEW SECTION
        let dropdown03 = $('#snomed-dropdown03');
        dropdown03.empty();
        $("#snomed-dropdown03, .inner-wrap").removeClass("hide");

        $.fn.basicFunction3 = function() {

        //Diagnosis
        var getData = function (request, response) {
            var api = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<399981008OR<162572001&filter="

            $.getJSON(api + request.term, function (data){
                $("#helper").text("b");
                dropdown03.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $("#snomed-dropdown03 > li").first().focus();
                $.each(data.expansion.contains, function(i,value) {
                    dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h"></i>\
                            </button>\
                        </span>'))
                });

                $(".name").click(function(){
                    var helper = $("#helper").text();
                    var pft = $(this).val(".name").text()
                    if(helper=="b"){
                        $('#myText3').val(pft);
                        dropdown03.empty();
                    }

                    $(this).lateralityFunction();
                });

                $('.more').click(function(){
                    $("#helper").text("2");
                    $(this).parentsFunction();
                    $(".inner-wrap2, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").removeClass("hide");
                    $(this).childFunction();   
                    $(this).synonymFunction();                
                });
            });
        };

        $("#myText3").autocomplete({
            source: getData,
            minLength: 3
        });
        };

        $(this).basicFunction3();

        //END NEW SECTION

        //NEW SECTION
        let dropdown02 = $('#snomed-dropdown02');
        dropdown02.empty();
        $("#snomed-dropdown02, .inner-wrap").removeClass("hide");

        $.fn.basicFunction2 = function() {

        var getData = function (request, response) {
            var api = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/%3C118956008&filter="

            $.getJSON(api + request.term, function (data){
                $("#helper").text("c");
                dropdown02.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $("#snomed-dropdown02 > li").first().focus();
                $.each(data.expansion.contains, function(i,value) {
                    dropdown02.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h"></i>\
                            </button>\
                        </span>'))
                });

                $(".name").click(function(){
                    var helper = $("#helper").text();
                    var pft = $(this).val(".name").text()
                    if(helper=="c"){
                        $('#myText2').val(pft);
                        dropdown02.empty();
                    }
                });

                $('.more').click(function(){
                    $("#helper").text("3");
                    $(this).parentsFunction();
                    $(".inner-wrap2, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").removeClass("hide");
                    $(this).childFunction();    
                    $(this).synonymFunction();                
                });
            });
        };

        $("#myText2").autocomplete({
            source: getData,
            minLength: 3
        });
        };

        $(this).basicFunction2();

        //END NEW SECTION

        //PARENT FUNCTION
        $.fn.parentsFunction = function() { 
            var api_parent = 0;
            $.fn.parentsFunctionUpdater = function() {
                var sctID_parent = $(this).parent().parent().val();
                api_parent = "https://www.nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/%3E!" + sctID_parent;

            };

            $(this).parentsFunctionUpdater();

            let dropdown2 = $('#parents-snomed-dropdown');
            dropdown2.empty();

            $.getJSON(api_parent, function (data){
                dropdown2.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown2.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h">\</i>\
                            </button>\
                        </span>'))
                });

                $(".name").click(function(){
                    var pft = $(this).val(".name").text()
                    $(".inner-wrap2, #snomed-dropdown, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                
                    var helper = $("#helper").text();

                    if(helper==1){
                        $('#myText').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                    };

                    if(helper==2){
                        $('#myText3').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown03, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                        $(this).lateralityFunction();
                    };

                    if(helper==3){
                        $('#myText2').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown02, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                    };

                });

                $('.more').click(function(){
                    $(this).parentsFunction();
                    $(this).childFunction();
                    $(this).synonymFunction();
                });
            }); 
        }

        //CHILD FUNCTION
        $.fn.childFunction = function() {
            var api_child = 0;
            $.fn.childFunctionUpdater = function() {
                var sctID_child = 0;
                sctID_child = $(this).parent().parent().val();
                api_child = "https://www.nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/%3C!" + sctID_child;
            };

            $(this).childFunctionUpdater();
    
            let dropdown3 = $('#child-snomed-dropdown');
            dropdown3.empty();

            $.getJSON(api_child, function (data){
                dropdown3.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown3.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h">\</i>\
                            </button>\
                        </span>'))
                });

                $(".name").click(function(){
                    var pft = $(this).val(".name").text()
                    $(".inner-wrap2, #snomed-dropdown, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                
                    var helper = $("#helper").text();

                    if(helper==1){
                        $('#myText').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                    };

                    if(helper==2){
                        $('#myText3').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown03, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                        $(this).lateralityFunction();
                    };

                    if(helper==3){
                        $('#myText2').val(pft); 
                        $(".inner-wrap2, #snomed-dropdown02, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").addClass("hide");
                    };
                });

                $('.more').click(function(){
                    //$(".inner-wrap2, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").removeClass("hide");
                    $(".inner-wrap2, #advancedItems, #synonym-snomed-dropdown, #parents-snomed-dropdown, #child-snomed-dropdown, #findingSite-snomed-dropdown, #morphology-snomed-dropdown").removeClass("hide");
                    $(this).parentsFunction();
                    $(this).childFunction();
                });
            }); 
        }

        //SYNONYMS FUNCTION
        $.fn.synonymFunction = function() {
            var api_synonym = 0;

            $.fn.synonymFunctionUpdater = function() {
                var sctID_synonym = 0;
                var endpoint_synonym = $("#DisorderSynonymsFHIRendpoint").val();
                var resource_synonym = $("#DisorderSynonymsFHIRresource").val();
                var parameter_synonym = $("#DisorderSynonymsparameter").val();
                sctID_synonym = $(this).parent().parent().val();
                var parameter2_synonym = $("#DisorderSynonymsparameter2").val();
                api_synonym = endpoint_synonym + resource_synonym + parameter_synonym + sctID_synonym + parameter2_synonym;
            };

            $(this).synonymFunctionUpdater();

            let dropdown6 = $('#synonym-snomed-dropdown');
            dropdown6.empty();

            $.getJSON(api_synonym, function (data){
                $.each(data.expansion.contains[0].designation, function(i,value) {
                    dropdown6.append(value.value + '<span class="separator">, </span"');
                })
            }); 
        };
    });




