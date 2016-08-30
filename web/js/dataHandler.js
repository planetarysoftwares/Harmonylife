function dataHandlerAjax() {
 
    // get inputs
   // debugger;
    
    var customerData = new Object();
    customerData.name = $('#name').val();
    customerData.phone = $('#phone').val();
    
    console.log("customerData.name" + customerData.name );
    console.log( "customerData.phone" + customerData.phone );
    $.ajax({
        url: "jsonservlet",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(customerData),
        contentType: 'application/json',
        mimeType: 'application/json',
 
        success: function (data) {
            $("tr:has(td)").remove();
 
            $.each(data, function (index, customerData) {
 
                var td_categories = $("<td/>");
                $.each(customerData.categories, function (i, tag) {
                    var span = $("<span class='label label-info' style='margin:4px;padding:4px' />");
                    span.text(tag);
                    td_categories.append(span);
                });
 
                var td_tags = $("<td/>");
                $.each(article.tags, function (i, tag) {
                    var span = $("<span class='label' style='margin:4px;padding:4px' />");
                    span.text(tag);
                    td_tags.append(span);
                });
 
                $("#added-customerData").append($('<tr/>')
                        .append($('<td/>').html("<a href='"+customerData.name+"'>"+customerData.phone+"</a>"))
                        .append(td_categories)
                        .append(td_tags)
                );
 
            }); 
        },
        error:function(data,status,er) {
            alert("error: "+data+" status: "+status+" er:"+er);
        }
    });
}