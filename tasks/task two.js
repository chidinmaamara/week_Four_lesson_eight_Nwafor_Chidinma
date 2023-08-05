const statusDiv = document.querySelector('.status')
statusDiv.style.height = '200px'
fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QK1uMw1bUGL6qlHwVI1Z/likes', {
    method: "POST",
    body: JSON.stringify({
        item_id: 1,
        username: "Jane",
        comment: "Hello"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
.then((status)=>{
    data =status.json()
    statusDiv.innerText = `Succesful Ajax Request`
    statusDiv.style.backgroundColor = 'green'

})
.catch((error)=>{
    statusDiv.innerText = 'request Failed Check internet connectivity'
    statusDiv.style.backgroundColor = 'red'
})
