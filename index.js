topbtn = document.getElementById('top-btn')

window.addEventListener('scroll', function() 
{  
  if (window.scrollY > 300) {
    topbtn.classList.add('show');
  } else {
    topbtn.classList.remove('show');
  }
  
});


topbtn.addEventListener('click',function(e)
{
  e.preventDefault();
  document.querySelector('html, body').scrollTo({
    top: 0,
    behavior: 'smooth',
    duration: 300
  });
  
})

AOS.init()



// CLOSE NAV ON CLICK

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".navbar-nav>li>a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        var navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });

(function(){
    emailjs.init("-6qhgxSPZg-h_QTcS");
 })();
 let res;

  const myForm = document.getElementById("form");
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  const modal1 = new bootstrap.Modal(document.getElementById("exampleModal2"));
  const modal2 = new bootstrap.Modal(document.getElementById("exampleModal3"));
  
  
// Handle form submission
  myForm.addEventListener("submit", function (event) 
  {
    event.preventDefault(); 
    if (myForm.checkValidity()) 
    {
      sendMail().then((res)=>{
        if(res.status===200)
        {
          modal.hide();
          modal1.show();
        }
        else
        {
          modal.hide();
          modal2.show() 
        }
      })
      
      
    }
    
    myForm.reset()
  })
  
 

 function sendMail()
 {
  var params={
    fromName:document.getElementById('name').value,
     message:document.getElementById('message').value,
     phone:document.getElementById('mobile').value,
     email:document.getElementById('email').value
  }
  return emailjs.send("service_xj4dyyl","template_b53hlck",params)
 }