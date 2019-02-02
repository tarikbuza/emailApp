import React from "react";


export const Help = (props) => {
  return (
    <div id = "help">
    <h1>Documentation </h1>

    <h2> How to start app </h2>
    <h4> Client side </h4>
    <p> cd MailApp/client/ </p>
    <p> npm install </p>
    <p> npm start </p>
    <p> Frontend is started on localhost:3000</p>
    <h4> Server side</h4>
    <p> cd MailApp/backend/</p>
    <p> npm install </p>
    <p> nodemon entry.js</p>
    <h2> Project description </h2>
    
    <div>
      This is a simple project, part of Bachelor course project. <br/>
      It provides list of e-mail categories. <br/>
      When one category is clicked, all e-mails in that category are shown. <br/>
      If a category is deleted, all its e-mails are also deleted. <br/>
    </div>

    </div> 
  );
};

export default Help;
