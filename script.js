
      var sidemenu=document.getElementById("sidemenu");

      function openmenu(){
        sidemenu.style.right="0";
      }

      function closemenu(){
        sidemenu.style.right="-200px";
      }
  
 
// <!-- To send a message -->
    
      const scriptURL = 'https://script.google.com/macros/s/AKfycbx5_vCIvGWGPd_yJras9PajSfp3w92-SdAVnmurEAq-ZzSUewRUHfH12zjss0iIIUx1pQ/exec'
      
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Message Was Sent Successfully"
            setTimeout(function(){
              msg.innerHTML = ''
            }, 4000)
          form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
   
