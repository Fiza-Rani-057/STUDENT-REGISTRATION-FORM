let forms =  document.getElementById('formm');

forms.addEventListener("submit" , function(events){

    events.preventDefault();

   let name = document.getElementById('std_name').value;
   let ftname =  document.getElementById('ft_name').value;
   let email =  document.getElementById('std_email').value;
   let course =  document.getElementById('select_course').value;

   if(name === "" || ftname === "" || email === ""){
    alert("Please fill this  feilds");
   }
 
});
