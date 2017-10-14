$.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        userId: '1'
    },
    dataType: 'json',
    success: function(data) {
        $.each(data, function(index, element) {
            //$("#jsonTable").append($("<p>").html(element.id));

            var divRow = $("<div>").addClass("divTableRow");
            var divCellId = $("<div>").addClass("divTableCell").html(element.id);
            var divCellTitle = $("<div>").addClass("divTableCell").html(element.title);
            var divCellBody = $("<div>").addClass("divTableCell").html(element.body);
            divRow.append(divCellId, divCellTitle, divCellBody);
            $(".divTableBody").append(divRow);
        });
    }
});