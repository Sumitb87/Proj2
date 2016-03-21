
  var button = document.getElementById("submit-btn");
  button.addEventListener("click", function(event) {
  event.preventDefault();
  var dropdown = document.getElementById("dropdown");
    console.log(dropdown.value);

    console.log("feelgoodmoment!")
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
        console.log("thisworksyo",return_data);


        var emailObj = {

              };

              // for (i = 0; i < data.length; i++) {

              emailObj.fullName = data.contactInfo.fullName;
              emailObj.gender = data.demographics.gender;
              emailObj.location = data.demographics.locationGeneral;


              // emailObj.websites= [];

              emailObj.websites = data.contactInfo.websites
              // for (var i = 0; i < data.contactInfo.websites.length; i++) {
              //   emailObj.websites[i] = data.contactInfo.websites[i].url;
              // }
              emailObj.photos = data.photos



              // emailObj.photos = [];
              // for (var i = 0; i < data.photos.length; i++) {
              //   emailObj.photos[i] = data.photos[i].url;
              // }


              emailObj.socialProfiles = data.socialProfiles
              // emailObj.socialProfiles = [];
              // for (var i = 0; i < data.socialProfiles.length; i++) {
              //   emailObj.socialProfiles[i] = data.socialProfiles[i].url;
              // }
              console.log(emailObj.socialProfiles);
                // emailList.photo = data.photos[i].url;
                // emailList.social = data.socialProfiles[i].url
                //
                // console.log(data.socialProfiles[i].url)

console.log("object",emailObj);

      var templateSource= document.getElementById("email-template").innerHTML;
      var template = Handlebars.compile(templateSource);
      var compiledHtml = template(emailObj);
      var container = document.getElementById("data-container");
      container.innerHTML = compiledHtml;
      console.log(compiledHtml);


    }).fail(function(data) {
                console.log("fail");
    })


  } else if (dropdown.value === "phone") {
      var userInput = document.getElementById("api-input").value;
      console.log("phone worked!");
    query = "https://api.fullcontact.com/v2/person.json?phone=+1" + userInput + "&apiKey=" + API_KEY_CONTACT;

    $.ajax({
          url: query
        }).done(function(data) {
              console.log("done2");
              console.log("Working2 SUMIT!");
              var return_data = data;
              console.log("thisworksyo2",return_data);


              var phoneObj = {

                    };

                    // for (i = 0; i < data.length; i++) {

                    phoneObj.fullName = data.contactInfo.fullName;
                    phoneObj.gender = data.demographics.gender;
                    phoneObj.location = data.demographics.locationGeneral;

                    phoneObj.websites = data.contactInfo.websites
                    phoneObj.photos = data.photos
                    phoneObj.socialProfiles = data.socialProfiles
                    // phoneObj.websites= [];
                    //
                    // for (var i = 0; i < data.contactInfo.websites.length; i++) {
                    //   phoneObj.websites[i] = data.contactInfo.websites[i].url;
                    // }
                    //
                    //
                    //
                    //
                    // phoneObj.photos = [];
                    // for (var i = 0; i < data.photos.length; i++) {
                    //   phoneObj.photos[i] = data.photos[i].url;
                    // }
                    //
                    // phoneObj.socialProfiles = [];
                    // for (var i = 0; i < data.socialProfiles.length; i++) {
                    //   phoneObj.socialProfiles[i] = data.socialProfiles[i].url;
                    // }
                    // console.log(phoneObj.socialProfiles);
                      // emailList.photo = data.photos[i].url;
                      // emailList.social = data.socialProfiles[i].url
                      //
                      // console.log(data.socialProfiles[i].url)

      console.log("object",phoneObj);

            var templateSourceb= document.getElementById("phone-template").innerHTML;
            var templateb = Handlebars.compile(templateSourceb);
            var compiledHtmlb = templateb(phoneObj);
            var container = document.getElementById("data-container");
            container.innerHTML = compiledHtmlb;
            console.log(compiledHtmlb);


        }).fail(function(data) {
                  console.log("fail");
        })

  } else if (dropdown.value === "twitter") {
        var userInput = document.getElementById("api-input").value;
        console.log("phone worked!");
        query = "https://api.fullcontact.com/v2/person.json?twitter=" + userInput + "&apiKey=" + API_KEY_CONTACT;

        $.ajax({
              url: query
            }).done(function(data) {
                  console.log("done3");
                  console.log("Working3 SUMIT!");
                  var return_data = data;
                  console.log("thisworksyo2",return_data);


                  var twitterObj = {

                        };

                        // for (i = 0; i < data.length; i++) {

                        twitterObj.fullName = data.contactInfo.fullName;
                        twitterObj.gender = data.demographics.gender;
                        twitterObj.location = data.demographics.locationGeneral;

                        twitterObj.websites = data.contactInfo.websites
                        twitterObj.photos = data.photos
                        twitterObj.socialProfiles = data.socialProfiles
                        console.log(twitterObj.socialProfiles);
                          // emailList.photo = data.photos[i].url;
                          // emailList.social = data.socialProfiles[i].url
                          //
                          // console.log(data.socialProfiles[i].url)

          console.log("object",twitterObj);

                var templateSourcec= document.getElementById("twitter-template").innerHTML;
                var templatec = Handlebars.compile(templateSourcec);
                var compiledHtmlc = templatec(twitterObj);
                var container = document.getElementById("data-container");
                container.innerHTML = compiledHtmlc;
                console.log(compiledHtmlc);

            }).fail(function(data) {
                      console.log("fail");
            })
}
});

// LETS MAKE SOCIAL MEDIA ICONS!
// var socialMediaButtons {
//   facebook:
//   gravitar
//   pintrest:
//   twitter:
// }
