// A general method to extract any form data and return the cooresponding Json representation.
function getFormDataInJson($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}

function createIS_COLUMN_EXISTRequest(token, dbname, relationName, colName) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbname
            + "\",\n" + "\"cmd\" : \"IS_COLUMN_EXIST\",\n"
            + "\"rel\" : \""
            + relationName
            + "\",\n"
            + "\"colName\" : \""
            + colName
            + "\",\n"
            + "\n"
            + "}";
    return req;
}

function createGETALLSyncRecordRequest(token, dbName, relName, timeStamp, pageNo, pageSize, createTime, updateTime) {
    if (createTime !== undefined) {
        if (createTime !== true) {
            createTime = false;
        }
    } else {
        createTime = false;
    }
    if (updateTime !== undefined) {
        if (updateTime !== true) {
            updateTime = false;
        }
    } else {
        updateTime = false;
    }
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"GETALL\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"timeStamp\": "
            + timeStamp
            + ",\n" + "\"pageNo\":"
            + pageNo
            + "," + "\"pageSize\":"
            + pageSize
            + "\,"
            + "\"createTime\":"
            + createTime
            + "\,"
            + "\"updateTime\":"
            + updateTime
            + "\n"
            + "}";
    return req;
}

function createGETALLRecordRequest(token, dbName, relName, pageNo, pageSize, createTime, updateTime) {
    if (createTime !== undefined) {
        if (createTime !== true) {
            createTime = false;
        }
    } else {
        createTime = false;
    }
    if (updateTime !== undefined) {
        if (updateTime !== true) {
            updateTime = false;
        }
    } else {
        updateTime = false;
    }
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"GETALL\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"pageNo\":"
            + pageNo
            + "," + "\"pageSize\":"
            + pageSize
            + "\,"
            + "\"createTime\":"
            + createTime
            + "\,"
            + "\"updateTime\":"
            + updateTime
            + "\n"
            + "}";
    return req;
}

function createGETALLCOLRequest(token, dbName, relName) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"GETALLCOL\",\n"
            + "\"rel\" : \""
            + relName
            + "\"\n"
            + "}";
    return req;
}

function createGETRequest(token, dbname, relationName, jsonObjStr) {
    var value1 = "{\n"
            + "\"token\" : \""
            + token
            + "\",\n" + "\"cmd\" : \"GET\",\n"
            + "\"dbName\": \""
            + dbname
            + "\",\n"
            + "\"rel\" : \""
            + relationName
            + "\",\n"
            + "\"jsonStr\":\n"
            + jsonObjStr
            + "\n"
            + "}";
    return value1;
}

function createGET_BY_KEYRequest(token, dbname, relationName, jsonObjStr, createTime, updateTime) {
    if (createTime !== undefined) {
        if (createTime !== true) {
            createTime = false;
        }
    } else {
        createTime = false;
    }
    if (updateTime !== undefined) {
        if (updateTime !== true) {
            updateTime = false;
        }
    } else {
        updateTime = false;
    }
    var value1 = "{\n"
            + "\"token\" : \""
            + token
            + "\",\n" + "\"cmd\" : \"GET_BY_KEY\",\n"
            + "\"dbName\": \""
            + dbname
            + "\",\n"
            + "\"rel\" : \""
            + relationName
            + "\",\n"
            + "\"jsonStr\":\n"
            + jsonObjStr
            + "\,"
            + "\"createTime\":"
            + createTime
            + "\,"
            + "\"updateTime\":"
            + updateTime
            + "\n"
            + "}";
    return value1;
}

function createGET_RECORDRequest(token, dbName, relName, reqId) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"GET_RECORD\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"record\":"
            + reqId
            + "\n"
            + "}";
    return req;
}

function createGET_BY_RECORDRequest(token, dbName, relName, reqId, createTime, updateTime) {
    if (createTime !== undefined) {
        if (createTime !== true) {
            createTime = false;
        }
    } else {
        createTime = false;
    }
    if (updateTime !== undefined) {
        if (updateTime !== true) {
            updateTime = false;
        }
    } else {
        updateTime = false;
    }
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"GET_BY_RECORD\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"record\":"
            + reqId
            + "\,"
            + "\"createTime\":"
            + createTime
            + "\,"
            + "\"updateTime\":"
            + updateTime
            + "\n"
            + "}";
    return req;
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
function showData1(){
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