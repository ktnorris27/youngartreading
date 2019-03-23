$(function() {
  $("#navBarPlaceholder").load("./sections/navbar.html");
  $("#footerPlaceholder").load("./sections/footer.html");


});

function onHomeClick() {
  window.location.href = "index.html";
}

function onNavLinkClick(identifier) {
  var pageToNavigateTo = $(identifier).data('page')
  window.location.href = "pages/" + pageToNavigateTo + ".html";
}
