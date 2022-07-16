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
function updateData(){
    var token = "90939208|-31949288042559551|90939972";
    var dbname = "StudentForm";
    var relationName = "Student-Form";
    var roll = parseInt(document.getElementById("RollNo").value);
    var password = document.getElementById("password").value;

    var jsonObj = {
        Password : password
    };
    var reqString = createUPDATERecordRequest(token, JSON.stringify(jsonObj), dbname, relationName, roll);
    alert(reqString);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(reqString,
            "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    alert(JSON.stringify(resultObj));
}