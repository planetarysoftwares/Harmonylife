function contactDetails() {
    this.name =  document.getElementById("name").value;
    this.phone =  document.getElementById("phone").value;
    console.log(this.name);
    console.log(this.phone);
 };
//userDetails = function(){
//   var  name =  document.getElementById("name").value;
//   var  phone =  document.getElementById("phone").value;
//};
contactDetails.prototype.getFullName = function()
{
   return this.name ;
};
contactDetails.prototype.getContactNumber = function()
 {
   consol.log(this.phone);
   return this.phone;
};