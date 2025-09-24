document.getElementById("donationForm").addEventListener("submit", function(event){
  event.preventDefault();
  alert("🎉 Thank you for donating! Our team will contact you soon.");
  this.reset();
});

