$(document).ready(function (){

    $('#sign').on('click', function (e){
        e.preventDefault();
        $.ajax({
            url: "/wp-admin/admin-ajax.php",
            method: "POST",
            data: {
                'action': 'control_sign',
                'login': $('#login').val(),
                'password': $('#password').val(),
            },
            dataType: "json",
            success: function (data){
                if (data['status']){
                    $('#error_login').text('');
                    $('#error_password').text('');
                    window.location.href = "http://labs-wordpress/lab-2/administration/";
                }
                else{
                    if (data['main']){
                        $('#error_main').text(data['main']);
                    }
                    if(!data['main']){
                        $('#error_main').text('');
                    }
                    if (data['login']){
                        $('#error_login').text(data['login']);
                        $('#login').addClass('backlight_input');
                    }
                    if(!data['login']){
                        $('#error_login').text('');
                        $('#login').removeClass('backlight_input');
                    }
                    if (data['password']){
                        $('#error_password').text(data['password']);
                        $('#password').addClass('backlight_input');
                    }
                    if (!data['password']){
                        $('#error_password').text('');
                        $('#password').removeClass('backlight_input');
                    }
                }
            }
        });

    });

    $('input[name="login"]').on('input', function (){
        if ($(this).val().length === 0){
            $(this).addClass('backlight_input');
            $('#error_login').text("Пустое значение недопустимо!");
        }
        else{
            $.ajax({
                url: "/wp-admin/admin-ajax.php",
                method: "POST",
                data: {
                    'login': $(this).val(),
                    'action': 'control_sign_login',
                },
                dataType: "json",
                success: function (data){
                    if (data["login"]){
                        $('input[name="login"]').addClass('backlight_input');
                        $('#error_login').text(data['login']);
                    }
                    else{
                        $('input[name="login"]').removeClass('backlight_input');
                        $('#error_login').text("");
                    }
                }
            });
        }
    });

    $('input[name="login"]').on('blur', function (){
        if ($(this).val().length === 0){
            $(this).addClass('backlight_input');
            $('#error_login').text("Пустое значение недопустимо!");
        }
        else{
            $.ajax({
                url: "/wp-admin/admin-ajax.php",
                method: "POST",
                data: {
                    'login': $(this).val(),
                    'action': 'control_sign_login_blur',
                },
                dataType: "json",
                success: function (data){
                    if (data["login"]){
                        $('input[name="login"]').addClass('backlight_input');
                        $('#error_login').text(data['login']);
                    }
                    else{
                        $('input[name="login"]').removeClass('backlight_input');
                        $('#error_login').text("");
                    }
                }
            });
        }
    });

    $('input[name="password"]').on('input', function (){
        if ($(this).val().length === 0){
            $(this).addClass('backlight_input');
            $('#error_password').text("Пустое значение недопустимо!");
        }
        else{
            $(this).removeClass('backlight_input');
            $('#error_password').text("");
        }
    });

    $('input[name="password"]').on('blur', function (){
        if ($(this).val().length === 0){
            $(this).addClass('backlight_input');
            $('#error_password').text("Пустое значение недопустимо!");
        }
        else{
            $(this).removeClass('backlight_input');
            $('#error_password').text("");
        }
    });

});

