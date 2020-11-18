('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: `${baseUrl}/users/regs`,
        data: {
            password: password,
            phone: $('[name=phone]').val(),
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
            if (res.phone === $('[name=phone]').val()) {
                alert(`${res.msg}`);
                location.href='ml/login.html';
            } else {
                alert(`${res.msg}`);
            }
        }
    });
});