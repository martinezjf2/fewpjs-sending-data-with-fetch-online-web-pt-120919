// Add your code here

  function submitData(name, email){
    let formData = {
        name: name,
        email: email
      };
      
      // method: "POST" is missing from the object below
      let configObj = {
          method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      };

    fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.textContent = object.id;
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });

  }
  