/**
 * reDream calc
 * Copyright (c) reDream (http://redream.ru) 2017
 * ig@redream.ru
 */
(function($) {
    $.fn.reDreamCalc =  function (options) {
        var form = this.selector;
        var imgpath = options.imgpath;

        /****************************************************************************************************
         * СТЕЛЛА
         ****************************************************************************************************/
        $(document).on('mouseover', '#stella-select .nice-select .list > li', function () {
            var stella = $(this).data('value'),
                krest = $('#kresty').val(),
                port = $('#f_port').val(),
                ris = $('#risynki').val(),
                ep = $('#epitaph').val(),
                pm = $('#f_portr_material').val();

            prevImage('a_stella', 'stella/' + stella + port + pm);
            if (krest == 'k00') {
                prevImage('e_krest', 'krest/k00');
            } else {
                prevImage('e_krest', 'krest/' + krest + stella + port);
            }
            if (ris == 'r00') {
                prevImage('r_risunk', 'ris/' + 'r00');
            } else {
                prevImage('r_risunk', 'ris/' + ris + stella);
            }
            if (ep == 'e00') {
                prevImage('l_epitaph', 'ep/' + 'e00');
            } else {
                prevImage('l_epitaph', 'ep/' + ep + stella + port);
            }
        });

        $(document).on('mouseleave', '#stella-select .nice-select .list', function () {
            $('#kresty').change();
            $('#f_port').change();
            $('#risynki').change();
            $('#epitaph').change();
            $('#f_portr_material').change();
            $('#stella').change();
        });

        /****************************************************************************************************
         * ТУМБА
         ****************************************************************************************************/
        $('#tumba').change(function(){
            changeImage('b_tumba', $(this).val());

            if ($(this).val()=='b02') {
                $('.a_stella').css('top','-18px');
                $('.e_krest').css('top','-18px');
                $('.r_risunk').css('top','-18px');
                $('.l_epitaph').css('top','-18px');
            } else {
                $('.a_stella').css('top','0px');
                $('.e_krest').css('top','0px');
                $('.r_risunk').css('top','0px');
                $('.l_epitaph').css('top','0px');
            }
        });

        $(document).on('mouseover', '#tumba-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('b_tumba', value);

            if (value == 'b02') {
                $('.a_stella').css('top','-18px');
                $('.e_krest').css('top','-18px');
                $('.r_risunk').css('top','-18px');
                $('.l_epitaph').css('top','-18px');
            } else {
                $('.a_stella').css('top','0px');
                $('.e_krest').css('top','0px');
                $('.r_risunk').css('top','0px');
                $('.l_epitaph').css('top','0px');
            }
        });

        $(document).on('mouseleave', '#tumba-select .nice-select .list', function () {
            $('#tumba').change();
        });
		
		
		/****************************************************************************************************
         * Цоколь
         ****************************************************************************************************/
        $('#zokol').change(function(){
            changeImage('z_zokol', $(this).val());

            if ($('#tzvet').val()!=='z00') {
                //$('#nadgrob').prop('disabled', true);
                //$('#nadgrob').niceSelect('destroy');
            } else {
                //$('#nadgrob').prop('disabled', false);
                //$('#nadgrob').niceSelect();
            }
        });

        $(document).on('mouseover', '#zokol-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('z_zokol', value);
        });

        $(document).on('mouseleave', '#tumba-select .nice-select .list', function () {
            $('#zokol').change();
        });
		

        /****************************************************************************************************
         * ЦВЕТНИК
         ****************************************************************************************************/
        $('#tzvet').change(function(){
            changeImage('c_tzvetnik', $(this).val());

            if ($('#tzvet').val()!=='c00') {
                $('#nadgrob').prop('disabled', true);
                $('#nadgrob').niceSelect('destroy');
            } else {
                $('#nadgrob').prop('disabled', false);
                $('#nadgrob').niceSelect();
            }
        });

        $(document).on('mouseover', '#tzvet-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('c_tzvetnik', value);
        });

        $(document).on('mouseleave', '#tumba-select .nice-select .list', function () {
            $('#tzvet').change();
        });

        /****************************************************************************************************
         * НАДГРОБНАЯ ПЛИТА
         ****************************************************************************************************/
        $('#nadgrob').change(function(){
            changeImage('d_nadgrob', $(this).val());

            if ($('#nadgrob').val()!=='d00') {
                $('#tzvet').prop('disabled', true);
                $('#tzvet').niceSelect('destroy');
            } else {
                $('#tzvet').prop('disabled', false);
                $('#tzvet').niceSelect();
            }
        });

        $(document).on('mouseover', '#nadgrob-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('d_nadgrob', value);
        });

        $(document).on('mouseleave', '#nadgrob-select .nice-select .list', function () {
            $('#nadgrob').change();
        });

        /****************************************************************************************************
         * ПОКРЫТИЕ
         ****************************************************************************************************/
        $('#pokritiye').change(function(){
            changeImage('i_pokritiye', $(this).val());
        });

        $(document).on('mouseover', '#pokritiye-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('i_pokritiye', value);
        });

        $(document).on('mouseleave', '#pokritiye-select .nice-select .list', function () {
            $('#pokritiye').change();
        });

        /****************************************************************************************************
         * ВАЗА
         ****************************************************************************************************/
        $('#vaza').change(function(){
            changeImage('j_vaza', $(this).val());
        });

        $(document).on('mouseover', '#vaza-select .nice-select .list > li', function () {
            var value = $(this).data('value');
            prevImage('j_vaza', value);
        });

        $(document).on('mouseleave', '#vaza-select .nice-select .list', function () {
            $('#vaza').change();
        });

        /****************************************************************************************************
         * КРЕСТЫ
         ****************************************************************************************************/
        $('#kresty, #stella, #f_port, #f_portr_material').change(function(){
            var krest = $('#kresty').val(),
                port = $('#f_port').val(),
                stella = $('#stella').val();
            if (krest == 'k00') {
                changeImage('e_krest', 'krest/k00');
            } else {
                changeImage('e_krest', 'krest/' + krest + stella + port);
            }
        });

        $(document).on('mouseover', '#kresty-select .nice-select .list > li', function () {
            var krest = $(this).data('value'),
                port = $('#f_port').val(),
                stella = $('#stella').val();
            if (krest == 'k00') {
                prevImage('e_krest', 'krest/k00');
            } else {
                prevImage('e_krest', 'krest/' + krest + stella + port);
            }
        });

        $(document).on('mouseleave', '#kresty-select .nice-select .list', function () {
            $('#kresty').change();
        });

        /****************************************************************************************************
         * РИСУНКИ
         ****************************************************************************************************/
        $('#risynki, #stella').change(function(){
            var ris = $('#risynki').val(),
                stella = $('#stella').val();
            if (ris == 'r00') {
                changeImage('r_risunk', 'ris/' + 'r00');
            } else {
                changeImage('r_risunk', 'ris/' + ris + stella);
            }
        });

        $(document).on('mouseover', '#risynki-select .nice-select .list > li', function () {
            var ris = $(this).data('value'),
                stella = $('#stella').val();
            if (ris == 'r00') {
                prevImage('r_risunk', 'ris/' + 'r00');
            } else {
                prevImage('r_risunk', 'ris/' + ris + stella);
            }
        });

        $(document).on('mouseleave', '#risynki-select .nice-select .list', function () {
            $('#risynki').change();
        });

        /****************************************************************************************************
         * ПОРТРЕТЫ
         ****************************************************************************************************/
        $('#stella, #f_port, #f_portr_material').change(function(){
            var stella = $('#stella').val(),
                port = $('#f_port').val(),
                pm = $('#f_portr_material').val();
            changeImage('a_stella', 'stella/' + stella + port + pm);
        });

        $(document).on('mouseover', '#f_port-select .nice-select .list > li', function () {
            var stella = $('#stella').val(),
                ep = $('#epitaph').val(),
                krest = $('#kresty').val(),
                port = $(this).data('value'),
                pm = $('#f_portr_material').val();
            prevImage('a_stella', 'stella/' + stella + port + pm);

            if (krest == 'k00') {
                prevImage('e_krest', 'krest/k00');
            } else {
                prevImage('e_krest', 'krest/' + krest + stella + port);
            }
            if (ep == 'e00') {
                prevImage('l_epitaph', 'ep/' + 'e00');
            } else {
                prevImage('l_epitaph', 'ep/' + ep + stella + port);
            }
        });

        $(document).on('mouseover', '#f_portr_material-select .nice-select .list > li', function () {
            var stella = $('#stella').val(),
                port = $('#f_port').val(),
                pm = $(this).data('value');
            prevImage('a_stella', 'stella/' + stella + port + pm);
        });

        $(document).on('mouseleave', '#f_port-select .nice-select .list, #f_portr_material-select .nice-select .list', function () {
            $('#f_port').change();
            $('#f_portr_material').change();
            $('#epitaph').change();
            $('#kresty').change();
        });
        /****************************************************************************************************
         * ОГРАДА
         ****************************************************************************************************/
        $('#hograda, #hogradacolor').change(function(){
            changeImage('h_ograda', $('#hograda').val() + $('#hogradacolor').val());
        });

        $(document).on('mouseover', '#hogradacolor-select .nice-select .list > li', function () {
            var hograda = $('#hograda').val(),
                hocolor = $(this).data('value');

            prevImage('h_ograda', hograda + hocolor);
        });

        $(document).on('mouseover', '#hograda-select .nice-select .list > li', function () {
            var hograda = $(this).data('value'),
                hocolor = $('#hogradacolor').val();

            prevImage('h_ograda', hograda + hocolor);
        });

        $(document).on('mouseleave', '#hogradacolor-select .nice-select .list, #hograda-select .nice-select .list', function () {
            $('#hograda').change();
            $('#hogradacolor').change();
        });

        /****************************************************************************************************
         * ЭПИТАФИЯ
         ****************************************************************************************************/
        $('#epitaph, #stella, #f_port').change(function(){
            var ep = $('#epitaph').val(),
                port = $('#f_port').val(),
                stella = $('#stella').val();
            if (ep == 'e00') {
                changeImage('l_epitaph', 'ep/' + 'e00');
                $('#epitaph_text').prop('disabled', true);
            } else {
                changeImage('l_epitaph', 'ep/' + ep + stella + port);
                $('#epitaph_text').prop('disabled', false);
            }
        });

        $(document).on('mouseover', '#epitaph-select .nice-select .list > li', function () {
            var ep = $(this).data('value'),
                port = $('#f_port').val(),
                stella = $('#stella').val();
            if (ep == 'e00') {
                prevImage('l_epitaph', 'ep/' + 'e00');
            } else {
                prevImage('l_epitaph', 'ep/' + ep + stella + port);
            }
        });

        $(document).on('mouseleave', '#epitaph-select .nice-select .list', function () {
            $('#epitaph').change();
        });

        

        $(document).on('click', '#manager, #saveimage, #print', function (e) {
            e.preventDefault();
            $(form).find('input[name="action"]').val($(this).attr("id"));
            $("#rdr-modal").iziModal({
                title: $(this).text(),
                headerColor: '#8B1E1B',
                history: false
            });
            $('#rdr-modal').iziModal('open');
        });
        $(document).on('closed', '#rdr-modal', function (e) {
            $('#rdr-modal').iziModal('destroy');
        });

        $(document).on('submit', form, function (e) {
            e.preventDefault();
            console.log('sending...');
            $.ajax({
                url: window.location.href+'?format=json',
                type: 'post',
                data: $(form).serialize(),
                processData: false,
                dataType: 'json',
                success: function (data) {
                    console.log('data',data);
                    $(form).find('input[type=text]').val('');
                    $(form).find('input[type=tel]').val('');
                    $(form).find('input[type=email]').val('');
                    $(form).find('textarea').val('');

                    $("#rdr-modal").iziModal('close');
                    switch($(form).find('input[name="action"]').val()) {
                        case 'saveimage':
                            //window.open(data, '_blank');
                            var link = document.createElement('a');
                            link.target = "_blank";
                            link.download = "Заказ на grad-ex.ru.jpg";
                            link.href = data;
                            link.click();
                            break;
                        case 'print':
                            $('body').append('<div id="printable" class="visible-print"><img src="' + data + '"/></div>');
                            setTimeout(function () {
                                $('body > *:visible').addClass('hidden-print');
                                $('body > *').hide();
                                window.print();
                            }, 200);
                            setTimeout(function () {
                                $('#printable').remove();
                                $('body > .hidden-print').show();
                            }, 200);
                            break;
                        default:
                            $('#alertModal').iziModal('open');
                    }
                }
            });
        });

        $("#alertModal").iziModal({
            title: "Успешно отправлено",
            icon: 'icon-check',
            headerColor: '#00af66',
            width: 600,
            timeout: 5000,
            history: false,
            timeoutProgressbar: true,
            transitionIn: 'fadeInUp',
            transitionOut: 'fadeOutDown',
            attached: 'center'
        });

        $(form + ' select').change(function() {
            var val = $(this).find('option:selected').text();
            var name = $(this).attr('id') + '-val';
            $(form).find('input[name="'+name+'"]').val(val);
        });

        $(form + ' select').niceSelect();

        function changeImage(selector, image) {
            var src = imgpath + '/' + image + '.png';
            $.ajax({
                url: src,
                type: 'HEAD',
                success: function() {
                    $(form).find('.' + selector + ' > img').attr('src', src);
                    $(form).find('input[name="' + selector + '"]').val(src);
                }
            });
        }

        function prevImage(selector, image) {
            var src = imgpath + '/' + image + '.png';
            $.ajax({
                url: src,
                type: 'HEAD',
                success: function() {
                    $(form).find('.' + selector + ' > img').attr('src', src);
                }
            });
        }
    }
})(jQuery);