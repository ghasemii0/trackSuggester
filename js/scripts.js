$(document).ready(function(){
  $("form#student").submit(function(event){
    var age = parseInt($("#age").val());
    var companySize = $("#bigOrSmall").val();
    var whichEnd = $("#frontEnd-backEnd").val();
    var fullTimeOrPartTime = $("input:radio[name=fullTime-PartTime]:checked").val();
    var serverSideOrApplictions = $("input:radio[name=which-side]:checked").val();
    console.log(typeof age);
    console.log(companySize);
    console.log(whichEnd);
    console.log(fullTimeOrPartTime);
    console.log(serverSideOrApplictions);

    if(age > 50 && companySize === "small" && whichEnd === "front-end" && fullTimeOrPartTime === "Part-time" && serverSideOrApplictions === "applications"){
      $("#suggestionOne").show();
    }

    event.preventDefault();
  });
});
