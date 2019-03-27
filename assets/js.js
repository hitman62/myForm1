
function myFunction(){
    let firstName, mI, lastName, address, city, state, zipCode, emailAddress, phone, website,  selectChoice, textArea1, textArea2;

    firstName = document.getElementById("firstName").value;
    document.getElementById("firstNameOutput").innerHTML = firstName;

    mI = document.getElementById("mI").value;
    document.getElementById("mIOutput").innerHTML = mI;    

    lastName = document.getElementById("lastName").value;
    document.getElementById("lastNameOutput").innerHTML = lastName;  

    address = document.getElementById("address").value;
    document.getElementById("addressOutput").innerHTML = address;

    city = document.getElementById("city").value;
    document.getElementById("cityOutput").innerHTML = city;

    state = document.getElementById("state").value;
    document.getElementById("stateOutput").innerHTML = state;

    zipCode = document.getElementById("zipCode").value;
    document.getElementById("zipCodeOutput").innerHTML = zipCode;

    emailAddress = document.getElementById("emailAddress").value;
    document.getElementById("emailAddressOutput").innerHTML = emailAddress;

    phone = document.getElementById("phone").value;
    document.getElementById("phoneOutput").innerHTML = phone;

    website = document.getElementById("website").value;
    document.getElementById("websiteOutput").innerHTML = website;

    radioChoice = document.getElementById("radioChoice").value;
    document.getElementById("radioChoiceOutput").innerHTML = radioChoice;
    
    selectChoice = document.getElementById("selectChoice").value;
    document.getElementById("selectChoiceOutput").innerHTML = selectChoice;

    textArea1 = document.getElementById("textArea1").value;
    document.getElementById("textArea1Output").innerHTML = textArea1;

    textArea2 = document.getElementById("textArea2").value;
    document.getElementById("textArea2Output").innerHTML = textArea2;


    

}