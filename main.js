window.onload = function (){
$.get("https://thatsthespir.it/api", function (data) {
   $('#author').text(data.author);
   $('#gender').text(data.gender);
   $('#photo').attr("src", data.photo);
   $('#quote').text(data.quote);
   console.log(data);
  })
};
