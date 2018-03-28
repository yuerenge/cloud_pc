// 初始化标签组事件
function initTagGroup(tagGroupId) {
    var tagGroup = $("#" + tagGroupId);
    var tagSelectAll = tagGroup.find(".tagSelectAll");
    // 标签点击事件
    tagGroup.find(".tagWrapper").each(function () {
        var tagWrapper = $(this);

        tagWrapper.click(function () {
            // 标签的选中、取消
            tagWrapper.toggleClass("active");
            // 标签被选中，则传送对应Id
            var hdnIds = tagWrapper.find(".tagId");
            hdnIds.prop("disabled", !tagWrapper.hasClass("active"));

            // 若所有标签均选中，则勾选全选checkbox，否则取消全选
            if (tagGroup.find(".tagWrapper.active").length == tagGroup.find(".tagWrapper").length) {
                tagSelectAll.prop("checked", true);
            }
            else {
                tagSelectAll.prop("checked", false);
            }
        });
    });

    // 全选checkbox事件
    tagSelectAll.click(function () {
        if (tagSelectAll.prop("checked")) {
            tagGroup.find(".tagWrapper").addClass("active");
            tagGroup.find(".tagId").prop("disabled", false);
        }
        else {
            tagGroup.find(".tagWrapper").removeClass("active");
            tagGroup.find(".tagId").prop("disabled", true);
        }
    });
}