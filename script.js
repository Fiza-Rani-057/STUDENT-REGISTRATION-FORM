let forms =  document.getElementById('formm');

forms.addEventListener("submit" , function(events){

    events.preventDefault();
    
   let name = document.getElementById('std_name');
   let ftname =  document.getElementById('ft_name');
   let email =  document.getElementById('std_email');
   let course =  document.getElementById('select_course');

   if(name === "" || ftname === "" || email === ""){
    alert("This is a required feild");
   }
})
