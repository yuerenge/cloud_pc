
// 验证输入项
function validateInputs() {
    var isInputsValid = true;

    $(".queryCondition-validation").each(function () {
        var validationMessage = $(this);
        var validationField = validationMessage.attr("data-validation-field");
        var inputs = $("input:enabled[name=" + validationField + "]");

        var hasValue = true;
        if (inputs.length == 0)
            hasValue = false;

        inputs.each(function () {
            if ($(this).val() === '')
                hasValue = false;
        })

        if (hasValue)
            validationMessage.hide();
        else {
            isInputsValid = false;
            validationMessage.show();
        }
    });

    return isInputsValid;
}