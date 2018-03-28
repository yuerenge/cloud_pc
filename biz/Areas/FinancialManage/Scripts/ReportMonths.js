// 报表月份选择：年月联动效果
$(function () {
    $("#ddlYear").change(function () {
        $.ajax({
            type: 'post',
            url: 'Common/GetReportMonthsByYear',
            data: { year: $(this).val() },
            success: function (months) {
                $("#ddlMonth option").remove();

                $.each(months, function (i, month) {
                    var option = '<option value="' + month.Id + '">' + month.Name + '</option>';
                    $("#ddlMonth").append(option);

                    if (month.IsSelected) {
                        $("#ddlMonth").val(month.Id);
                    }
                });
            }
        });
    });
})

