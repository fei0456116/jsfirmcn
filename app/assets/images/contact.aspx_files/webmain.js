jQuery(document).ready(function () {
    FixLayOut();
});

function FixLayOut() {
    var leftHeight = $('div.leftInfo').innerHeight();
    var rightHeight = $('div.rightInfo').height();
    //alert(leftHeight + '|' + rightHeight);
    if (leftHeight > rightHeight) {
        $('div.rightInfo').height(leftHeight);
    }

}

function ToggleChildMenu(obj) {
    var $obj = $(obj);
    if (!$obj.hasClass('selected')) {
        var imgSrc = $obj.attr('selectedImg');
        $obj.addClass('selected')
            .siblings().removeClass('selected');
        $obj.find('img:first').attr('src', imgSrc);

    }
    $obj.find('ul:first').toggle();
    return false;
}

function MoveReturn(distance) {

}