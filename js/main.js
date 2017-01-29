$(document).ready(function(){
    $("#myPopover").popover({
        content: 'Double-click to order the dish.',
        trigger: 'hover',
        placement: 'right'
    });
    $("#modalShow").click(function() {
        $("#myModal").modal('show');
    });
});