
function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Team Profile</title>
    <link rel="stylesheet" href="./src/skeleton.css">
  </head>
    <body>
      <h2 class="container">My Team</h2>
  
        <!-- container div -->
      <div class="container"> 
        <!-- card div -->
        <div class="column">
          <h3>${data.manager}</h3>
          <h4>Manager</h4>
          <p>ID: ${data.id} <br />
            Email: ${data.email} <br />
            Office Number: ${data.office}
          </p>
        </div>
  
        <!-- 2nd card -->
        <div class="two.columns">
          <h3>Stefania</h3>
          <h4>Engineer</h4>
          <p>ID: 2 <br />
            Email: stefania@hotmail.com <br />
            Office Number: 169
          </p>
        </div>
  
      </div>
  
    </body>
  
  </html>
  
  `

 
}

module.exports = generateHTML;
 