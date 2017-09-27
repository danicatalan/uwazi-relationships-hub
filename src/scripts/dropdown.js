var dropdownGroups = {
  state: false,
  element: $('.dropdown-groups .dropdown-list')
}

$(".dropdown-groups .btn").click(function(){
  if(dropdownGroups.state == false) {
    dropdownGroups.element.show();
  } else {
    dropdownGroups.element.hide();
  }
  dropdownGroups.state = !dropdownGroups.state;
});

$(".dropdown-groups li").click(function(){
  var target = $(this).text();
  var targetElement = "#groupBy" + target;

  $(".group-wrapper").hide();
  $(targetElement).show();

  $(".dropdown-groups b").text(target);

  dropdownGroups.element.hide();
  dropdownGroups.state = false;
});