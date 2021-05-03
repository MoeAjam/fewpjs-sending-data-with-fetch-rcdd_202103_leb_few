// Add your code here
function submitData(name, email){
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name,email})
  }
  return fetch("http://localhost:3000/users", option);
}
