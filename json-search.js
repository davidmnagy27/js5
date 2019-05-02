

$("#search").on("click", function()
{
    var name= $("#input").val();
    var found = false;

    $(function() {
    $.getJSON("json-search.json", function(result)
    {
        $.each(result, function(index, object)
        {
            if (object.name.toLowerCase() === name.toLowerCase())
            {
                found = true;



                var string = "<p>Name:" + object.name + "<br>Sex: " + object.gender +
                    "<br>Born:" + object.born +  "<br>Died:" + object.died +"<br>Father:" +
                    object.father + "<br>Mother:" + object.mother;

                output.innerHTML = string;

            }
        });

        if (!found) {
            $("#output").html("No name found");
        }
    });
});

});