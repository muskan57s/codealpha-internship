

    var typed = new Typed('#element', {
      strings: ['Coder', 'Frontend developer', 'web developer'],
      typeSpeed: 50,
    });


    function data(){
         var a=document.getElementById("name").value;
         var b=document.getElementById("mail").value ;
         var c=document.getElementById("sub").value;

         if(a==""){
            alert("please enter name");
         }
         if(b==""){
          alert("please enter your EmailId");
       }
       if(c==""){
        alert("please enter subject");
     }
    }
    
