$("#RollNo").focus();
function validateAndGetFormData() {
    var RollNoVar = $("#RollNo").val();
    if (RollNoVar === "") {
        alert("Student Roll Number is Required Value");
        $("#RollNo").focus();
        return "";
    }
    var StudentNameVar = $("#StudentName").val();
    if (StudentNameVar === "") {
        alert("Student Name is Required Value");
        $("#StudentName").focus();
        return "";
    }
    var EmailVar = $("#Email").val();
    if (EmailVar === "") {
        alert("Student Email is Required Value");
        $("#Email").focus();
        return "";
    }  
    var MobileNoVar = $("#MobileNo").val();
    if (MobileNoVar === "") {
        alert("Student Mobile Number is Required Value");
        $("#MobileNo").focus();
        return "";
    }       
    var jsonStrObj = {
        RollNo: RollNoVar,
        StudentName: StudentNameVar,
        Email: EmailVar,
        MobileNo: MobileNoVar
    };
    return JSON.stringify(jsonStrObj);
}
    
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
}

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

function resetForm() {
    $("#RollNo").val("");
    $("#StudentName").val("");
    $("#Email").val("");
    $("#MobileNo").val("");
    $("#RollNo").focus();
}

function saveStudent() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939208|-31949288042559551|90939972",
    jsonStr, "StudentForm", "Student-Form");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
}