$(document).ready(function()
{
    $('select').formSelect();
    $('.timepicker').timepicker();

    $("#letsStart").on('click', function()
    {
      var name = $("#guestName").val();
      var totalHours = $("#totalHours").val();
      var totalTasks = $("#totalTasks").val();
      var wakeUp = $("#wakeUpTime").val();
      var importantTasks = $("#importantTasks").val();
      var optionalTasks = $("#optionalTasks").val();
      var chillHours = $("#chillHours").val();
      var breakTime = $("#breakTime").val();
      $("#importantTaskDiv").empty();
      $("#optionalTaskDiv").empty();
          for(var i =0;i<importantTasks;i++)
          {
            var str = "<div class='card taskCard'><div class='card-image waves-effect waves-block waves-light' style='margin-bottom:30px'><img class='activator' src='images/work.png' style='height: 200px;width: 200px; padding: 10px; margin: auto'></div><a class='btn-floating activator halfway-fab waves-effect waves-light red'><i class='material-icons right'>add</i></a><div class='card-content'><span class='card-title activator grey-text text-darken-4'><input style='background : white; padding-left: 10px;'  type='text' placeholder='Task name'><p><input type='number' style='background:white; padding-left: 10px;' placeholder='Time needed to complete it'></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Any extra info<i class='material-icons right'>close</i></span><p></p></div></div>";
            $("#importantTaskDiv").append(str);
          }
          for(var i =0;i<optionalTasks;i++)
          {
            var str = "<div class='card taskCard'><div class='card-image waves-effect waves-block waves-light' style='margin-bottom:30px'><img class='activator' src='images/work.png' style='height: 200px;width: 200px; padding: 10px; margin: auto'></div><a class='btn-floating activator halfway-fab waves-effect waves-light red'><i class='material-icons right'>add</i></a><div class='card-content'><span class='card-title activator grey-text text-darken-4'><input style='background : white; padding-left: 10px;'  type='text' placeholder='Task name'><p><input type='number' style='background:white; padding-left: 10px;' placeholder='Time needed to complete it'></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Any extra info<i class='material-icons right'>close</i></span><p></p></div></div>";
            $("#optionalTaskDiv").append(str);
          }
      
      
    });
  });
