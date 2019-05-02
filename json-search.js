// David Nagy
//5/1/19
// json-search.js
// description : input name to search for


$("#search").on("click", function()
{
    var name= $("#input").val();
    var found = false;
//calling getjson
    $(function() {
    $.getJSON("json-search.json", function(result)
    {
        $.each(result, function(index, object)
        {
            //lowercase method being called
            if (object.name.toLowerCase() === name.toLowerCase())
            {
                found = true;



                var string = "<p>Name:" + object.name + "<br>Sex: " + object.gender +
                    "<br>Born:" + object.born +  "<br>Died:" + object.died +"<br>Father:" +
                    object.father + "<br>Mother:" + object.mother;

                output.innerHTML = string;

            }
        });
        //if not found
        if (!found) {
            $("#output").html("No name found");
        }
    });
});

});