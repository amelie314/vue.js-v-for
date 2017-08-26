var outer_data={
  shoplist:["apple","banana","papaya"],
  shoplist2:[{
    name: "apple",
    price: "1000"
  },
  {
    name: "banana",
    price: "500"
  },
  {
    name: "papaya",
    price: "300"
  }],
  shoplist3:[{
    name: "apple",
    price: "1000",
    produce: ["美國","日本"]
  },
  {
    name: "banana",
    price: "500",
    produce: ["台灣","韓國","菲律賓"]
  },
  {
    name: "papaya",
    price: "300",
    produce:["亞特蘭提斯","印度"]
  }],
  
};
var vm =new Vue({
  el: "#app",
  data: outer_data
  
});