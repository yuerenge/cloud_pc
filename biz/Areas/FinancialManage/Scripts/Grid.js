// 合并表格中内容相同的行头
function mergeRepeatedRowHeader() {

    var $rows = $('#tbGrid tbody tr');
    var items = [],
        itemtext = [],
        currGroupStartIdx = 0;
    $rows.each(function (i) {
        var $this = $(this);
        var itemCell = $(this).find('td:eq(0)')
        var item = itemCell.text();
        itemCell.remove();
        if ($.inArray(item, itemtext) === -1) {
            itemtext.push(item);
            items.push([i, item]);
            groupRowSpan = 1;
            currGroupStartIdx = i;
            $this.data('rowspan', 1)
        } else {
            var rowspan = $rows.eq(currGroupStartIdx).data('rowspan') + 1;
            $rows.eq(currGroupStartIdx).data('rowspan', rowspan);
        }
    });

    $.each(items, function (index) {
        var headerRowNum = this[0];
        var headerRow = $rows.eq(headerRowNum);
        var rowspan = headerRow.data('rowspan');
        headerRow.prepend('<td class="center" rowspan="' + rowspan + '">' + this[1] + '</td>');

        // 设置斑马线效果（同属一个行头的各行颜色一致）
        if (index % 2 == 1)
            for (var i = 0; i < rowspan; i++) {
                var rowNum = headerRowNum + i;
                $rows.eq(rowNum).addClass('dark');
            }
    });
}