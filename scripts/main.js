$(document).ready(function()
{
    $('select').formSelect();
    $('.timepicker').timepicker();

    $("#findMeTimeButton").on('click', function()
    {
      var name = $("#guestName").val();
      var totalHours = $("#totalHours").val();
      var totalTasks = $("#totalTasks").val();
      var wakeUp = $("#wakeUpTime").val();
      $("#userName").append(name);
      var j = 1;
      for(var i=0;i<totalTasks;i++)
      {
        var str1 = "<li id='select-options-7c623b3d-ebda-50df-b952-5b3b3f019385"+i+"' tabindex='0' class='selected'><span>"+(i+1)+"</span></li>";
        var str2 = "<option value = '"+(i+1)+"'>"+(i+1)+"</option>";
        $("#importantTasksSelect").parent().find("ul").append(str1);
        $("#importantTasksSelect").append(str2);
      }
    });
  });
