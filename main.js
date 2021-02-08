$(".tab1").click(function () {
  $(".pizza1").css("display", "block");
  $(".pasta1").css("display", "none");
  $(".starter1").css("display", "none");
});
$(".tab2").click(function () {
  $(".pasta1").css("display", "block");
  $(".starter1").css("display", "none");
  $(".pizza1").css("display", "none");
});
$(".tab3").click(function () {
  $(".starter1").css("display", "block");
  $(".pizza1").css("display", "none");
  $(".pasta1").css("display", "none");
});
menu_list_items = [
  "Margherita", 
  "Formaggio", 
  "Chicken", 
  "Pineapple'o'clock", 
  "Meat Town", 
  "Parma", 
  "Lasagna", 
  "Ravioli", 
  "Spaghetti Classica", 
  "Seafood pasta", 
  "Today's Soup", 
  "Bruschetta", 
  "Garlic bread", 
  "Tomozzarella", 
];

function run() {
  document.getElementById("menu_list_items").innerHTML = menu_list_items;
}

function add_new_menu_item() {
  new_menu_item = document.getElementById("new_menu_item").value;
  menu_list_items.push(new_menu_item);
  menu_list_items.sort();
  document.getElementById("menu_list_items").innerHTML = menu_list_items;
}
