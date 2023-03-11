let button = document.querySelector("button");
$("button").click(function () {
  console.log(1);
  $.ajax({
    type: "get",
    url: "http://localhost:8000/login",
    success() {
      console.log(data);
    },
    error(err) {
      console.log(err);
    },
    async: false,
  });
});
