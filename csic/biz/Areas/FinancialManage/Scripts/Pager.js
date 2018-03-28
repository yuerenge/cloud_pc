function resetPager() {
    jisuan(5);
    $("#pagination ul li").removeClass("active");

    $("#one").children("a").text("1");
    $("#one").addClass("active");
}

function setPager(pageSize, rowCount) {
    if (rowCount > 0) {
        var pageCount = Math.ceil(rowCount / pageSize);
        $("#hdnPageCount").val(pageCount);

        if ($("#pagination ul li[class='active']").length == 0) {
            $("#one").addClass("active");
        }

        SumCount();
        $("#pagination").show();
    }
    else {
        $("#pagination").hide();
    }
}

function SumCount() {
    var pageCount = parseInt($("#hdnPageCount").val());

    if (pageCount - 1 > 6) {
        $("#eight").css("display", "inline");
        $("#seven").css("display", "inline");
        $("#six").css("display", "inline");
        $("#five").css("display", "inline");
        $("#for").css("display", "inline");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");
    }
    else if (pageCount - 1 == 6) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "inline");
        $("#six").css("display", "inline");
        $("#five").css("display", "inline");
        $("#for").css("display", "inline");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    }
    else if (pageCount - 1 == 5) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "inline");
        $("#five").css("display", "inline");
        $("#for").css("display", "inline");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    }
    else if (pageCount - 1 == 4) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "inline");
        $("#for").css("display", "inline");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");
    }
    else if (pageCount - 1 == 3) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "none");
        $("#for").css("display", "inline");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    }
    else if (pageCount - 1 == 2) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "none");
        $("#for").css("display", "none");
        $("#three").css("display", "inline");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    } else if (pageCount - 1 == 1) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "none");
        $("#for").css("display", "none");
        $("#three").css("display", "none");
        $("#two").css("display", "inline");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    }
    else if (pageCount - 1 == 0) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "none");
        $("#for").css("display", "none");
        $("#three").css("display", "none");
        $("#two").css("display", "none");
        $("#one").css("display", "inline");
        $("#pagination").css("display", "inline");

    } else if (pageCount - 1 == -1) {
        $("#eight").css("display", "none");
        $("#seven").css("display", "none");
        $("#six").css("display", "none");
        $("#five").css("display", "none");
        $("#for").css("display", "none");
        $("#three").css("display", "none");
        $("#two").css("display", "none");
        $("#one").css("display", "none");
        $("#pagination").css("display", "none");

    }
}

function OnFenYe(id) {
    $("#pagination").find("li").removeClass("active");
    var pid = "#" + id;
    var pageCount = parseInt($("#hdnPageCount").val());

    //首页
    if (id == "start") {
        $("#one").attr("onclick", "OnFenYe(this.id)").addClass("active").children("a").text("1");
        jisuan(5);
        var PageNo = $("#one").children("a").text().trim();
        onseach(PageNo.toString())
    } else if (id == "one") {
        var PageNo = $("#one").addClass("active").children("a").text().trim();
        onseach(PageNo.toString())

    }
    else if (id == "two") {
        var two = $("#two").addClass("active").children("a").text().trim();
        if (two - 1 == 1) {
            $("#one").attr("onclick", "OnFenYe(this.id)").children("a").text("1");
            jisuan(5);

        } else {

            var six = two - 1 + 3;
            jisuan(six)
        }
        onseach(two.toString())

    }
    else if (id == "three") {
        var three = $("#three").addClass("active").children("a").text().trim();
        if (three - 1 == 2) {
            $("#one").attr("onclick", "OnFenYe(this.id)").children("a").text("1");
            jisuan(5);
        } else {
            var six = three - 1 + 2;
            jisuan(six)
        }
        onseach(three.toString())
    } else if (id == "for") {
        var PageNo = $("#for").addClass("active").children("a").text().trim();
        onseach(PageNo.toString())
    }
    else if (id == "five") {
        var six = $("#five").addClass("active").children("a").text().trim();
        if (pageCount > 8) {

            $("#one").removeAttr("onclick").children("a").text("...");

            if (six - 1 + 3 < pageCount) {
                var five = six - 1 + 2;
                jisuan(five);
            }
        }
        if (six - 1 == pageCount - 4) {
            $("#eight").children("a").css("display", "none");
        }
        onseach(six.toString())
    }
    else if (id == "six") {
        var six = $("#six").addClass("active").children("a").text().trim();
        if (pageCount > 8) {

            $("#one").removeAttr("onclick").children("a").text("...");
            if (six - 1 + 2 < pageCount) {
                jisuan(six);
            }
        }
        if (six - 1 == pageCount - 3) {
            $("#eight").children("a").css("display", "none");
        }
        onseach(six.toString())
    }
    else if (id == "seven") {
        var seven = $("#seven").addClass("active").children("a").text().trim();
        if (pageCount >= 8) {
            var seven = $("#seven").children("a").text().trim();
            if (seven - 1 + 1 < pageCount) {
                var six = seven - 1;
                $("#one").removeAttr("onclick").children("a").text("...");
                jisuan(six);
            } else {
                $("#eight").children("a").css("display", "none");
            }
        }
        if (seven - 1 == pageCount - 2) {
            $("#eight").children("a").css("display", "none");
        }
        onseach(seven.toString())
    }

    else if (id == "end") {
        if (pageCount > 8) {
            $("#seven").addClass("active");
            $("#eight").children("a").css("display", "none");
            onseach(pageCount.toString())
            $("#one").removeAttr("onclick").children("a").text("...");
            $("#two").children("a").text(pageCount - 5);
            $("#three").children("a").text(pageCount - 4);
            $("#for").children("a").text(pageCount - 3);
            $("#five").children("a").text(pageCount - 2);
            $("#six").children("a").text(pageCount - 1);
            $("#seven").children("a").text(pageCount);
        } else {
            switch (pageCount - 1) {
                case 0:
                    $("#one").addClass("active");
                    break;
                case 1:
                    $("#two").addClass("active");
                    break;

                case 2:
                    $("#three").addClass("active");
                    break;

                case 3:
                    $("#for").addClass("active");
                    break;

                case 4:
                    $("#five").addClass("active");
                    break;

                case 5:
                    $("#six").addClass("active");
                    break;
                case 6:
                    $("#seven").addClass("active");
                    break;
            }
            onseach(pageCount.toString());
        }
    }
}

function jisuan(six) {
    var two = six - 3;
    var three = six - 2;
    var fore = six - 1;
    var seven = six - 1 + 2;
    var eight = six - 1 + 3;
    
    $("#two").children("a").text(two);
    $("#three").children("a").text(three);
    $("#for").children("a").text(fore);
    $("#five").children("a").text(six);
    $("#six").children("a").text(seven);
    $("#seven").children("a").text(eight);
    $("#eight").children("a").text("...");
    $("#eight").children("a").css("display", "block");
}

//点击分页传递数据当前页数，分页行数
function onseach(PageNo) {
    $.ajax({
        type: "post",
        url: $("#hdnQueryUrl").val(),
        data: $("#divQuery form").serialize() + "&pageNo=" + PageNo,
        success: function (result) {
            $("#divHeader").html(result.HeaderView);

            $("#divGrid").html(result.GridView);
            mergeRepeatedRowHeader();

            setPager(result.PageSize, result.RowCount);
        }
    });
}