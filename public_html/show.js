function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}
function showData(){
    var token = "90939208|-31949288042559551|90939972";
    var dbname = "StudentForm";
    var relationName = "Student-Form";
    var RollNoVar = document.getElementById("RollNo").val;
    var jsonStr = {
        RollNo : RollNoVar
    };
    var reqString = createGETRequest(token, dbname, relationName, JSON.stringify(jsonStr));
    alert(reqString);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(reqString,
            "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({async: true});

    var data = JSON.stringify(resultObj);

    var res = data.split("\"");
    var mainContainer = document.getElementById("show");
    mainContainer.innerHTML = "StudentName : " + res[18].replace("\\","") 
            + "\\n\Email : " + res[10].replace("\\","")
            + "MobileNo : " + res[22].replace("\\",""); 
}