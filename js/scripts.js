$(document).ready(function(){
  $("form#student").submit(function(event){
    var age = parseInt($("#age").val());
    var companySize = $("#bigOrSmall").val();
    var whichEnd = $("#frontEnd-backEnd").val();
    var usaOrWorldwide = $("input:radio[name=fullTime-PartTime]:checked").val();
    var serverSideOrApplictions = $("input:radio[name=which-side]:checked").val();
    console.log(age);
    console.log(companySize);
    console.log(whichEnd);
    console.log(usaOrWorldwide);
    console.log(serverSideOrApplictions);



    event.preventDefault();
  });
});
