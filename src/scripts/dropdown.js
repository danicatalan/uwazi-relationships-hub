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
  var targetElement = "#group-" + target.toLowerCase();
  
  $(".connections").hide();
  $(targetElement).show();
  
  $(".dropdown-groups b").text(target);
  
  dropdownGroups.element.hide();
  dropdownGroups.state = false;
});






$(".filter-list li").click(function(){
  var target = $(this).find("span").text();
  var targetElement = "#node-" + target.toLowerCase();
  
  $(".node").hide();
  $(targetElement).show();
  
  $(".filter-list b").text(target);
});