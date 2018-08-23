$(document).ready(function()
{
    $('select').formSelect();
    $('.timepicker').timepicker();
    $("#letsStart").on('click', function()
    {
      $("#importantTaskDiv").empty();
      $("#optionalTaskDiv").empty();
      var name = $("#guestName").val();
      var totalHours = $("#totalHours").val();
      var totalTasks = $("#totalTasks").val();
      var wakeUp = $("#wakeUpTime").val();
      var importantTasks = $("#importantTasks").val();
      var optionalTasks = $("#optionalTasks").val();
      var chillHours = $("#chillHours").val();
      var breakTime = $("#breakTime").val();
          for(var i =0;i<importantTasks;i++)
          {
            var str = "<div class='card taskCard'><div class='card-image waves-effect waves-block waves-light' style='margin-bottom:30px'><img class='activator' src='images/work.png' style='height: 200px;width: 200px; padding: 10px; margin: auto'></div><a class='btn-floating activator halfway-fab waves-effect waves-light red'><i class='material-icons right'>add</i></a><div class='card-content'><span class='card-title activator grey-text text-darken-4'><input id='importantTaskName"+i+"' style='background : white; padding-left: 10px;'  type='text' placeholder='Task name'><p><input id='importantTask"+i+"Hour' type='number' style='background:white; padding-left: 10px;' placeholder='Time needed to complete it'></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Any extra info<i class='material-icons right'>close</i></span><p></p></div></div>";
            $("#importantTaskDiv").append(str);
            
          }
          for(var i =0;i<optionalTasks;i++)
          {
            var str = "<div class='card taskCard'><div class='card-image waves-effect waves-block waves-light' style='margin-bottom:30px'><img class='activator' src='images/work.png' style='height: 200px;width: 200px; padding: 10px; margin: auto'></div><a class='btn-floating activator halfway-fab waves-effect waves-light red'><i class='material-icons right'>add</i></a><div class='card-content'><span class='card-title activator grey-text text-darken-4'><input id='optionalTaskName"+i+"' style='background : white; padding-left: 10px;'  type='text' placeholder='Task name'><p><input id='optionalTask"+i+"Hour' type='number' style='background:white; padding-left: 10px;' placeholder='Time needed to complete it'></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Any extra info<i class='material-icons right'>close</i></span><p></p></div></div>";
            $("#optionalTaskDiv").append(str);
          }
    });
    $("#findMeTimeButton").click(function(){
      $("#firstSection").hide(1000);
      $("#secondSection").show(1000);
      $("#mainTaskSection").hide(1000);
      $("#finalTimeTable").hide(1000);
    });

    $("#letsStart").click(function(){
      $("#firstSection").hide(1000);
      $("#secondSection").hide(1000);
      $("#mainTaskSection").show(1000);
      $("#finalTimeTable").hide(1000);
    });

    $("#createTimeTable").click(function(){
      $("#firstSection").hide(1000);
      $("#secondSection").hide(1000);
      $("#mainTaskSection").hide(1000);
      $("#finalTimeTable").show(1000);
    });

    $("#test").click(function(){
      var temp1 = $("#wakeUpTime").val();
      var temp2 = $("#totalHours").val();
      var time = temp1.split(':');
      var totalTime = parseInt(temp2)+parseInt(time[0]);
      var totalTaskHour=0;
      var taskHours = [];
      var taskNames = [];
      var importantTasks = parseInt($("#importantTasks").val());
      var optionalTasks = $("#optionalTasks").val();
      for(var i =0;i<importantTasks;i++)
      {
        var temp1 = parseInt($("#importantTask"+i+"Hour").val());
        var temp2 = $("#importantTaskName"+i).val();
        taskHours[i]= temp1;
        taskNames[i]= temp2;
        totalTaskHour+=temp1;
      }
      var j=0;
      var z = parseInt($("#importantTasks").val()) + parseInt($("#optionalTasks").val());
      for(var i =(importantTasks);i<z;i++)
      {
        alert(45);
        var temp1 = parseInt($("#optionalTask"+j+"Hour").val());
        var temp2 = $("#optionalTaskName"+j).val();
        taskHours[i]= temp1;
        taskNames[i]=temp2;
        j++;
      }
      if(totalTime<totalTaskHour)
      {
        alert("You have less hours in a day . You need to create time.")
      }
      else{
        var totalTasks = parseInt($("#importantTasks").val()) + parseInt($("#optionalTasks").val());
        var oldTime = $("#wakeUpTime").val();
        for(var i =0;i<totalTasks;i++)
        {
          var time1 = oldTime.split(":");
          if(parseInt(time1[0])+parseInt(taskHours[i])<10)
          {
            var newTime = "0"+parseInt(time1[0])+parseInt(taskHours[i])+":"+time1[1];
          }
          else
          {
            var newTime = parseInt(time1[0])+parseInt(taskHours[i])+":"+time1[1];
          }
          var newTime = parseInt(time1[0])+parseInt(taskHours[i])+":"+time1[1];
          var finalTime = oldTime + "**********" + newTime + "********"+ taskNames[i];
          console.log(finalTime);
          oldTime = newTime;
        }
      }
    });
    


  });
