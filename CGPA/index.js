
var count = 0
var est_gpa 
var est_cgpa 
var est_cradit

$(document).ready(function () {
  $("#current_smstr").hide()
  $("#Course1").hide()
  $("#Course2").hide()
  $("#Course3").hide()
  $("#Course4").hide()
  $("#Course5").hide()
  $("#Course6").hide()
  $("#Course7").hide()
  $("#Course8").hide()
  $("#Course9").hide()
  $("#Course10").hide()
  $("#Course11").hide()
  $("#Course12").hide()
  $("#result").hide()
  $("#current_sem_course_seletor").hide()
  $("#calculate_btn").hide()
});

$("#next").click(function () {

  count++
  if (count == 1) {
    $("#previous_smtr").hide()
    $("#current_smstr").show()
    $("#current_sem_course_seletor").show()
  } else if (count == 2) {
    $("#current_sem_course_seletor").hide()

    if ($("#current_sem_course").val() == 2) {
      $("#Course1").show()
      $("#Course2").show()
      $("#next").hide()
      $("#calculate_btn").show()
    } else if ($("#current_sem_course").val() == 3) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#next").hide()
      $("#calculate_btn").show()
    } else if ($("#current_sem_course").val() == 4) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#next").hide()
      $("#calculate_btn").show()

    } else if ($("#current_sem_course").val() == 5) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#next").hide()
      $("#calculate_btn").show()

    } else if ($("#current_sem_course").val() == 6) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#next").hide()
      $("#calculate_btn").show()

    } else if ($("#current_sem_course").val() == 7) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#next").hide()
      $("#calculate_btn").show()
    } else if ($("#current_sem_course").val() == 8) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#Course8").show()
      $("#next").hide()
      $("#calculate_btn").show()
    } else if ($("#current_sem_course").val() == 9) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#Course8").show()
      $("#Course9").show()
      $("#next").hide()
      $("#calculate_btn").show()
    } else if ($("#current_sem_course").val() == 10) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#Course8").show()
      $("#Course9").show()
      $("#Course10").show()
      $("#next").hide()
      $("#calculate_btn").show()

    } else if ($("#current_sem_course").val() == 11) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#Course8").show()
      $("#Course9").show()
      $("#Course10").show()
      $("#Course11").show()
      $("#next").hide()
      $("#calculate_btn").show()

    } else if ($("#current_sem_course").val() == 12) {
      $("#Course1").show()
      $("#Course2").show()
      $("#Course3").show()
      $("#Course4").show()
      $("#Course5").show()
      $("#Course6").show()
      $("#Course7").show()
      $("#Course8").show()
      $("#Course9").show()
      $("#Course10").show()
      $("#Course11").show()
      $("#Course12").show()
      $("#next").hide()
      $("#calculate_btn").show()
    }
  }
})

// ******************** calcula

$("#calculate_btn").click(function () {

  var CreditCompleted = $("#CreditCompleted").val()
  var CurrentCGPA = $("#CurrentCGPA").val()

  CreditCompleted = parseFloat(CreditCompleted)
  CurrentCGPA = parseFloat(CurrentCGPA)

  if ($("#current_sem_course").val() == 2) {
    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

   
    $("#next").hide()
    $("#calculate_btn").show()

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa)
    var current_cradit = crs1_crd+crs2_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit


  } else if ($("#current_sem_course").val() == 3) {
    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit
   
    
    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#next").hide()
    $("#calculate_btn").show()
  } else if ($("#current_sem_course").val() == 4) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ (crs4_crd*crs4_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit


    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#next").hide()
    $("#calculate_btn").show()

  } else if ($("#current_sem_course").val() == 5) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+crs5_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit

    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#next").hide()
    $("#calculate_btn").show()

  } else if ($("#current_sem_course").val() == 6) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    var crs6_crd = $("#cradit6").val()
    var crs6_gpa = $("#gpa6").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs6_crd = parseFloat(crs6_crd)
    crs6_gpa = parseFloat(crs6_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ 
    (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)+ (crs6_crd*crs6_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit

    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#Course6").show()
    $("#next").hide()
    $("#calculate_btn").show()

  } else if ($("#current_sem_course").val() == 7) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    var crs6_crd = $("#cradit6").val()
    var crs6_gpa = $("#gpa6").val()

    var crs7_crd = $("#cradit7").val()
    var crs7_gpa = $("#gpa7").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs6_crd = parseFloat(crs6_crd)
    crs6_gpa = parseFloat(crs6_gpa)

    crs7_crd = parseFloat(crs7_crd)
    crs7_gpa = parseFloat(crs7_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ 
    (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)+ (crs6_crd*crs6_gpa)+ (crs7_crd*crs7_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit

    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#Course6").show()
    $("#Course7").show()
    $("#next").hide()
    $("#calculate_btn").show()
  } else if ($("#current_sem_course").val() == 8) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    var crs6_crd = $("#cradit6").val()
    var crs6_gpa = $("#gpa6").val()

    var crs7_crd = $("#cradit7").val()
    var crs7_gpa = $("#gpa7").val()

    var crs8_crd = $("#cradit8").val()
    var crs8_gpa = $("#gpa8").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs6_crd = parseFloat(crs6_crd)
    crs6_gpa = parseFloat(crs6_gpa)

    crs7_crd = parseFloat(crs7_crd)
    crs7_gpa = parseFloat(crs7_gpa)

    crs8_crd = parseFloat(crs8_crd)
    crs8_gpa = parseFloat(crs8_gpa)


    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ 
    (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)+ (crs6_crd*crs6_gpa)+ (crs7_crd*crs7_gpa)+ (crs8_crd*crs8_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd+crs8_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd+crs8_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit

    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#Course6").show()
    $("#Course7").show()
    $("#Course8").show()
    $("#next").hide()
    $("#calculate_btn").show()
  } else if ($("#current_sem_course").val() == 9) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    var crs6_crd = $("#cradit6").val()
    var crs6_gpa = $("#gpa6").val()

    var crs7_crd = $("#cradit7").val()
    var crs7_gpa = $("#gpa7").val()

    var crs8_crd = $("#cradit8").val()
    var crs8_gpa = $("#gpa8").val()

    var crs9_crd = $("#cradit9").val()
    var crs9_gpa = $("#gpa9").val()


    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs6_crd = parseFloat(crs6_crd)
    crs6_gpa = parseFloat(crs6_gpa)

    crs7_crd = parseFloat(crs7_crd)
    crs7_gpa = parseFloat(crs7_gpa)

    crs8_crd = parseFloat(crs8_crd)
    crs8_gpa = parseFloat(crs8_gpa)

    crs9_crd = parseFloat(crs9_crd)
    crs9_gpa = parseFloat(crs9_gpa)

    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ 
    (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)+
     (crs6_crd*crs6_gpa)+ (crs7_crd*crs7_gpa)+ (crs8_crd*crs8_gpa)+ (crs9_crd*crs9_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd+crs8_crd+crs9_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+
    crs5_crd+crs6_crd+crs7_crd+crs8_crd+crs9_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit

    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#Course6").show()
    $("#Course7").show()
    $("#Course8").show()
    $("#Course9").show()
    $("#next").hide()
    $("#calculate_btn").show()
  } else if ($("#current_sem_course").val() == 10) {

    var crs1_crd = $("#cradit1").val()
    var crs1_gpa = $("#gpa").val()

    var crs2_crd = $("#cradit2").val()
    var crs2_gpa = $("#gpa2").val()

    var crs3_crd = $("#cradit3").val()
    var crs3_gpa = $("#gpa3").val()

    var crs4_crd = $("#cradit4").val()
    var crs4_gpa = $("#gpa4").val()

    var crs5_crd = $("#cradit5").val()
    var crs5_gpa = $("#gpa5").val()

    var crs6_crd = $("#cradit6").val()
    var crs6_gpa = $("#gpa6").val()

    var crs7_crd = $("#cradit7").val()
    var crs7_gpa = $("#gpa7").val()

    var crs8_crd = $("#cradit8").val()
    var crs8_gpa = $("#gpa8").val()

    var crs9_crd = $("#cradit9").val()
    var crs9_gpa = $("#gpa9").val()

    var crs10_crd = $("#cradit10").val()
    var crs10_gpa = $("#gpa10").val()

    crs1_crd = parseFloat(crs1_crd)
    crs1_gpa = parseFloat(crs1_gpa)

    crs2_crd = parseFloat(crs2_crd)
    crs2_gpa = parseFloat(crs2_gpa)

    crs3_crd = parseFloat(crs3_crd)
    crs3_gpa = parseFloat(crs3_gpa)

    crs4_crd = parseFloat(crs4_crd)
    crs4_gpa = parseFloat(crs4_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs5_crd = parseFloat(crs5_crd)
    crs5_gpa = parseFloat(crs5_gpa)

    crs6_crd = parseFloat(crs6_crd)
    crs6_gpa = parseFloat(crs6_gpa) 

    crs7_crd = parseFloat(crs7_crd)
    crs7_gpa = parseFloat(crs7_gpa)

    crs8_crd = parseFloat(crs8_crd)
    crs8_gpa = parseFloat(crs8_gpa)

    crs9_crd = parseFloat(crs9_crd)
    crs9_gpa = parseFloat(crs9_gpa)

    crs10_crd = parseFloat(crs10_crd)
    crs10_gpa = parseFloat(crs10_gpa)


    var current_sum = (crs1_crd*crs1_gpa) + (crs2_crd*crs2_gpa) + (crs3_crd*crs3_gpa)+ 
    (crs4_crd*crs4_gpa)+ (crs5_crd*crs5_gpa)+
     (crs6_crd*crs6_gpa)+ (crs7_crd*crs7_gpa)+ (crs8_crd*crs8_gpa)+ (crs9_crd*crs9_gpa)+ (crs10_crd*crs10_gpa)
    var current_cradit = crs1_crd+crs2_crd+crs3_crd+crs4_crd+crs5_crd+crs6_crd+crs7_crd+crs8_crd+crs9_crd+crs10_crd

    var total_sum = current_sum + (CurrentCGPA*CreditCompleted)
    var total_cradit = CreditCompleted + crs1_crd + crs2_crd+crs3_crd+crs4_crd+
    crs5_crd+crs6_crd+crs7_crd+crs8_crd+crs9_crd+crs10_crd

     est_gpa = current_sum/current_cradit
     est_cgpa = total_sum/total_cradit
     est_cradit = total_cradit
    $("#Course1").show()
    $("#Course2").show()
    $("#Course3").show()
    $("#Course4").show()
    $("#Course5").show()
    $("#Course6").show()
    $("#Course7").show()
    $("#Course8").show()
    $("#Course9").show()
    $("#Course10").show()
    $("#next").hide()
    $("#calculate_btn").show()

  } 
  $("#est_gpa").val( Math.round(est_gpa*100)/100)
  $("#est_cgpa").val(Math.round(est_cgpa*100)/100)
  $("#est_cradit").val(est_cradit)
  $("#result").show()
})
