var metadataShow = false;

$("#toggleMetadata").click(function(){
  metadataShow = !metadataShow;

  if (metadataShow) {
    $('.target-connections .item-metadata').show();
    $('.target-connections .item').removeClass('item-compact');
    $("#toggleMetadata").html('<i class="fa fa-compress"></i><span>&nbsp;&nbsp;Collapse</span>');
  } else {
    $('.target-connections .item-metadata').hide();
    $('.target-connections .item').addClass('item-compact');
    $("#toggleMetadata").html('<i class="fa fa-expand"></i><span>&nbsp;&nbsp;Expand</span>');
  }
});