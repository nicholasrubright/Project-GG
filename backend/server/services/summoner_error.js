

// Response Error Format


// Custom error function for responding with error object
exports.sendError = (res, err) => {

    var response = {
        "error": {
            "statusCode": err.statusCode,
        }
    };


    res.json(response);
}