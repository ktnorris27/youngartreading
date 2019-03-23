$(function() {
  $("#navBarPlaceholder").load("../sections/navbar.html");
  $("#pageHeaderPlaceholder").load("../sections/pageHeader.html");
  $("#pageBottomPlaceholder").load("../sections/pageBottom.html");
  $("#footerPlaceholder").load("../sections/footer.html");

  $('[data-toggle="popover"]').popover()


});

function onHomeClick() {
  window.location.href = "../index.html";
}

function onNavLinkClick(identifier) {
  var pageToNavigateTo = $(identifier).data('page');
  window.location.href = "../pages/" + pageToNavigateTo + ".html";
}
