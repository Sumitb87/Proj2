
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
  ]
}
  var button = document.getElementById("submit-btn");
  button.addEventListener("click", function(event) {
  event.preventDefault();
  var dropdown = document.getElementById("dropdown");
    console.log(dropdown.value);

    console.log("i'm never going to be a developer")
      if (dropdown.value === "email") {
  var userInput = document.getElementById("api-input").value;
  console.log("Sumit");
query = "https://api.fullcontact.com/v2/person.json?email=" + userInput + "&apiKey=" + API_KEY_CONTACT;

  $.ajax({
        url: query
      }).done(function(data) {
            console.log("done");
            console.log("Working SUMIT!");
        var return_data = data;
        console.log(return_data);
      //   var newObj = {
      //   emailArray: []
      // };
      var emailList = {};
      emailList.fullName = data.contactInfo.fullName;
      emailList.location = data.demographics.locationGeneral;
      emailList.photos = data.photos;
      // console.log(emailList);
      // console.log(fullName);



      }).fail(function(data) {
                console.log("fail");
      })
};
});


function callback() {
  var contactinfo = document.getElementById("data-template").innerHTML;
  var templateM = Handlebars.compile(contactinfo);
  var compiledHtmlM = templateM(data);
  var container = document.getElementById("data-container");
        container.innerHTML = compiledHtmlM;
}

// query = "https://api.fullcontact.com/v2/person.json?email=" + userInput + "&apiKey=" + API_KEY_CONTACT;
// query = "https://api.fullcontact.com/v2/person.json?twitter=" + userInput + "&apiKey=" + API_KEY_CONTACT;
// query = "https://api.fullcontact.com/v2/person.json?phone=+1" + userInput + "&apiKey=" + API_KEY_CONTACT;
// }
