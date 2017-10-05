var metadataShow = false;

$("#toggleMetadata").click(function(){
  metadataShow = !metadataShow;

  if (metadataShow) {
    $('.group').removeClass('group-collapse');
    $("#toggleMetadata").html('<i class="fa fa-compress"></i><span>&nbsp;&nbsp;Collapse</span>');
  } else {
    $('.group').addClass('group-collapse');
    $("#toggleMetadata").html('<i class="fa fa-expand"></i><span>&nbsp;&nbsp;Expand</span>');
  }
});