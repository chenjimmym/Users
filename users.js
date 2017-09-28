$(document).ready(function(){
    alert("ready");
    
    $('form').submit(function(){
        var fn = $("input[type=text][name=firstname]").val();
        var ln = $("input[type=text][name=lastname]").val();
        var email = $("input[type=text][name=email]").val();
        var contact = $("input[type=text][name=contactNumber]").val();
        // alert(contact);
        $("table").append('<tr><th>' + fn + '</th><th>' + ln + '</th><th>' + email + '</th><th>' + contact + '</th></tr>');
        return false;
    });
});

