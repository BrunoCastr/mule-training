

(function(){
    function buildQuiz(){
      const output = [];

 

      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="image"><img src="${currentQuestion.image}" onerror="" alt=""/></div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      document.getElementById('submit').style.display="none";
    }


  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    
    const myQuestions = [
      {
        question: "What MuleSoft API-led connectivity layer is intended to expose part of a backend database without business logic??",
        image: "",
        answers: {
          a: "Experience",
          b: "Data",
          c: "System",
          d: "Process"
          
        },
        correctAnswer: "c"
      },
      {
        question: "What statement is part of MuleSoft's description of an application network?",
        image: "",
        answers: {
          a: "Creates reusable APIs and assets designed to be consumed by other business units",
          b: "Creates and manages high availability and fault tolerant services and infrastructure",
          c: "Leverages Central IT to deliver complete point-to-point solutions with master data management",
          d: "Creates and manages a collection of JMS messaging services and infrastructure"
        },
        correctAnswer: "a"
      },
      {
        question: "According to MuleSoft, what is the Center for Enablement's role in the new IT operating model?",
        image: "",
        answers: {
          a: "Creates and manages discoverable assets to be consumed by line of business developers",
          b: "Centrally manages partners and consultants to implement line of business projects",
          c: "Implements line of business projects to enforce common security requirements",
          d: "Produces and manages API policies for line of business deployments"
        },
        correctAnswer: "a"
      },
      {
        question: "What is a core characteristic of the Modern API?",
        image: "",
        answers: {
          a: "API is designed first using an API specification for rapid feedback",
          b: "API is rapidly prototyped following AGILE methodology",
          c: "API follows the RESTful architecture",
          d: "API has a mechanism to accept feedback and suggestions for improvement"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibit. The API specification supports searching for articles on the searchworld.org site What is the most idiomatic (used for its intended purpose) URL and method to retrieve articles about 'einstein' in XML format?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/aae0cf39-944b-4b2d-9d63-2721986d1fa9",
        answers: {
          a: "?action=search&query=einstein&format=xml / method: GET / AUTH : SKDAW5G41FA5 ",
          b: "?query=einstein&format=xml -- GET / method: GET / AUTH : SKDAW5G41FA5 ",
          c: "?action=search&query=einstein&format=xml -- GET  / method: GET",
          d: "?action=search&query=einstein&format=xml / method: POST / AUTH : SKDAW5G41FA5"
        },
        correctAnswer: "a"
      },
      {
        question: "What HTTP method in a RESTful web service is typically used to completely replace an existing resource?",
        image: "",
        answers: {
          a: "PATCH",
          b: "PUT",
          c: "POST",
          d: "GET"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the main purpose of flow designer in Design Center?",
        image: "",
        answers: {
          a: "To design API RAML files in a graphical way",
          b: "To design and mock Mule application templates that must be implemented using Anypoint Studio",
          c: "To define API lifecycle management in a graphical way",
          d: "To design and develop fully functional Mule applications in a hosted development environment"
        },
        correctAnswer: "d"
      },
      {
        question: "Where does a deployed flow designer application run in Anypoint Platform?",
        image: "",
        answers: {
          a: "API Manager",
          b: "CloudHub worker",
          c: "Design Center",
          d: "Exchange"
        },
        correctAnswer: "b"
      },
      {
        question: "What MuleSoft product enables publishing, sharing, and searching of APIs?",
        image: "",
        answers: {
          a: "API Designer",
          b: "Runtime Manager",
          c: "Anypoint Exchange",
          d: "API Notebook"
        },
        correctAnswer: "c"
      },
      {
        question: "What asset can NOT be created using Design Center?",
        image: "",
        answers: {
          a: "API Specifications",
          b: "Mule Applications",
          c: "API Fragments",
          d: "API Portals"
        },
        correctAnswer: "d"
      },
      {
        question: "A web client submits a GET request to a Mule 4 application to the endpoint /customers?id=48493 </br> Where is the id stored in the Mule event by the HTTP Listener?",
        image: "",
        answers: {
          a: "Inbound Properties",
          b: "Variables",
          c: "Attributes",
          d: "Payload"
        },
        correctAnswer: "c"
      },
      {
        question: "An API has been created in Design Center. What is the next step to make the API discoverable?",
        image: "",
        answers: {
          a: "Deploy the API to a Maven repository",
          b: "Enable autodiscovery in API Manager",
          c: "Publish the API from inside flow designer",
          d: "Publish the API to Anypoint Exchange"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to the exhibit. What is the correct URL to submit a GET request to /patients?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/8f5b53e5-c30e-43e5-ab31-da20f8e7a0d6",
        answers: {
          a: "http://dev.acme.com/patients?year=2016",
          b: "http://dev.acme.com/api/patients",
          c: "http://dev.acme.com/patients",
          d: "http://dev.acme.com/api/patients?year=2016"
        },
        correctAnswer: "d"
      },
      {
        question: "A RAML example fragment named BankAccountsExample.raml is placed in the examples folder in an API specification project. <br /> is the correct syntax to reference the fragment?",
        image: "",
        answers: {
          a: "examples: !include BankAccountsExample.raml",
          b: "examples: #import BankAccountsExample.raml",
          c: "examples: !include examples/BankAccountsExample.raml",
          d: "examples: #import examples/BankAccountsExample.raml"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibit. There is an error in the flight_id resource's GET method. What needs to be done to fix the problem?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/6253adc6-24b0-4408-afb8-7011d88c5e1f",
        answers: {
          a: "Remove blank line on row 9",
          b: "Enclose flight_id in parentheses () instead of curly braces {}",
          c: "Indent the get method under the {flight_id} resource",
          d: "Outdent the {flight_id} resource",
          e: "Indent the get method above the {flight_id} resource"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibit. This RAML specification includes an XML example that matches the Records data type defined in another RAML file named recordsDataType.raml. <br/>Using the Records type, how can this XML example be represented in RAML?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/55246d6f-e24f-4176-8235-fc1f9dba0831",
        answers: {
          a: "artists: <br/> -artist1: 'Deep purple' <br/>  -artist2: 'purple purple'",
          b: "artists: <br/> 'Deep purple' <br/>  'purple purple'",
          c: "artists: 'Deep purple', 'purple purple'",
          d: "artists: <br/> artist1: 'Deep purple' <br/>  artist2: 'purple purple'"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the purpose of the api:router element in APIkit?",
        image: "",
        answers: {
          a: "Validates requests against RAML API specifications and routes them to API implementations",
          b: "Validates responses returned from API requests and routes them back to the caller",
          c: "Creates native connectors using a 3rd party Java library",
          d: "Serves as an API implementation"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the minimum required configuration in a flow for a Mule application to compile?",
        image: "",
        answers: {
          a: "An event processor",
          b: "An event source",
          c: "A Logger component",
          d: "An event"
        },
        correctAnswer: "a"
      },
      {
        question: "A Database connector is configured to select rows from a MySQL database. <br/> What is the format of the array of results returned from the database query?",
        image: "",
        answers: {
          a: "Java",
          b: "JSON",
          c: "CSV",
          d: "XML"
        },
        correctAnswer: "a"
      },
      {
        question: "What is NOT part of a Mule 4 event?",
        image: "",
        answers: {
          a: "message",
          b: "payload",
          c: "inboundProperties",
          d: "attributes"
        },
        correctAnswer: "c"
      },
      {
        question: "How does APIkit determine the number of flows to generate from a RAML specification?",
        image: "",
        answers: {
          a: "Creates a separate flow for each resource",
          b: "Creates a separate flow for each resource that contains child resources",
          c: "Creates a separate flow for each HTTP method",
          d: "Creates one flow for the entire API spec",
          e: "Creates a separate flow for each response status code"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the purpose of API autodiscovery?",
        image: "",
        answers: {
          a: "Enables API Manager to discover the published API on Anypoint Exchange",
          b: "Allows the Mule application to be automatically discovered on Anypoint Exchange",
          c: "Enables an API to be directly managed in API Manager",
          d: "Allows a deployed Mule application to connect with API Manager to download policies and act as its own API proxy"
        },
        correctAnswer: "d"
      },
      {
        question: "How many Mule applications can run on a CloudHub worker?",
        image: "",
        answers: {
          a: "1",
          b: "8",
          c: "Depends on the vCores of the worker",
          d: "Depends on the number of CloudHub workers configured"
        },
        correctAnswer: "a"
      },
      {
        question: "What does an API proxy application NOT do?",
        image: "",
        answers: {
          a: "Determine which request Mule event is allowed to pass through to the API backend service",
          b: "Apply runtime policies to enforce governance",
          c: "Determine which response Mule event is allowed to pass through to the API backend service",
          d: "Meter the traffic flowing through the proxy"
        },
        correctAnswer: "c"
      },
      {
        question: "What does the Mule runtime use to enforce policies and limit access to APIs?",
        image: "",
        answers: {
          a: "Anypoint Access Control",
          b: "The proxy created by API Manager",
          c: "API Manager",
          d: "The Mule runtime's embedded API Gateway"
        },
        correctAnswer: "d"
      },
      {
        question: "API Manager has been configured to enforce an SLA policy and the RAML spec has been updated with the required client_id and client_secret header requirements. <br/>The new RAML spec has been published to Anypoint Exchange.<br/> What is the next step to gain access to the API?",
        image: "",
        answers: {
          a: "POST a JSON object to the /api/register endpoint of the API prox",
          b: "Request access to the API in Anypoint Exchange",
          c: "Email the organization administrators to request access to the API",
          d: "Add a client application to the Anypoint Platform organization"
        },
        correctAnswer: "b"
      },
      {
        question: "What happens to the attributes of a Mule event in a flow after an outbound HTTP Request is made?",
        image: "",
        answers: {
          a: "New attributes may be added from the HTTP response headers, but no headers are ever removed",
          b: "New attributes may be added from the HTTP response, but previous attributes are passed through unchanged",
          c: "Attributes do not change",
          d: "Attributes are replaced with new attributes from the HTTP Request response (which might be null)"
        },
        correctAnswer: "d"
      },
      {
        question: "A Set Variable component saves the current payload to a variable with the name images. What is the DataWeave expression to access the images variable?",
        image: "",
        answers: {
          a: "#[payload.images]",
          b: "#[images]",
          c: "#[flowVars.images]",
          d: "#[vars.images]"
        },
        correctAnswer: "d"
      },
      {
        question: "A web service implements an API to handle requests to http://acme.com/customers/{state}. <br/> A web client makes a request to this API implementation at http://acme.com/customers/CA. <br/> What is the correct DataWeave expression to retrieve the value CA?",
        image: "",
        answers: {
          a: "#[message.payload.inboundProperties.'http.uri.params'.state]",
          b: "#[attributes.uriParams.state]",
          c: "#[attributes.'http.uri.params'.state]",
          d: "#[message.inboundProperties.'http.uri.params'.state]",
          e: "#[state]"
        },
        correctAnswer: "b"
      },
      {
        question: "A flow contains an HTTP Listener as the event source. What is the DataWeave expression to log the Content-Type header using a Logger component?",
        image: "",
        answers: {
          a: "#[”Content-Type: ” ++ attributes.headers.'content-type']",
          b: "#[”Content-Type: ” + headers.'content-type']",
          c: "#[”Content-Type: ” + attributes.headers.'content-type']",
          d: "#[”Content-Type: ” ++ headers.'content-type']"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibit. What is the correct DataWeave expression for accessing the city Cleveland from the JSON payload? ",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/eae1abd8-7257-4276-a81d-b55b066af3de",
        answers: {
          a: "#[payload[2].city]",
          b: "#[payload[1].city]",
          c: "#[payload.city[1]]",
          d: "#[payload.city[2]]"
        },
        correctAnswer: "b"
      },
      {
        question: "What is NOT part of a Mule 4 event?",
        image: "",
        answers: {
          a: "message",
          b: "payload",
          c: "outboundProperties",
          d: "variables",
          e: "attributes"
        },
        correctAnswer: "c"
      },
      {
        question: "A Mule application has two flows named parentFlow and childFlow. The childFlow begins with an HTTP Listener. <br /> A variable is defined in parentFlow, then an HTTP Request is made to childFlow's HTTP Listener with some headers set. <br /> What is the scope of the variable and attributes in the parentFlow after childFlow returns a response?",
        image: "",
        answers: {
          a: "The variable is accessible. All the attributes passed to childFlow are removed or replaced.",
          b: "The variable is NOT accessible. All the attributes passed to childFlow are removed or replaced.",
          c: "The variable is NOT accessible. All the attributes passed to childFlow are preserved.",
          d: "The variable is accessible. All the attributes passed to childFlow are preserved."
        },
        correctAnswer: "a"
      },
      {
        question: "A Mule application has a flow named parentFlow.<br />The parentFlow contains an HTTP Request operation at the end of the flow. The parentFlow also contains a Set Variable operation right before the HTTP Request operation. <br />What is the scope of the variable to the server receiving the HTTP Request from parentFlow?",
        image: "",
        answers: {
          a: "The variable is accessible in the server but is immutable",
          b: "The variable is accessible in the server, can be changed, and changes are seen back in parentFlow",
          c: "The variable is NOT accessible in the server",
          d: "The variable is accessible in the server, can be changed, but changes are NOT seen back in parentFlow"
        },
        correctAnswer: "c"
      },
      {
        question: "A Mule application has two flows named parentFlow and childFlow. A variable is defined in parentFlow.<br />What is the scope of the variable when the parentFlow calls childFlow using a Flow Reference?",
        image: "",
        answers: {
          a: "The variable is accessible in childFlow but is immutable",
          b: "The variable is accessible in childFlow, can be changed, and changes are seen back in parentFlow",
          c: "The variable is NOT accessible in childFlow",
          d: "The variable is accessible in childFlow, can be changed, but changes are NOT seen back in parentFlow"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to the exhibit. In the deployable archive's /classes folder, there are two properties files named dev.properties and prod.properties. The Mule application fails to deploy to CloudHub through Runtime Manager with the following error message. <br/>What could be causing this error?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/aa64d002-9e60-47b3-b975-235f81d0efae",
        answers: {
          a: "The property files were NOT saved at the root level of the deployable archive",
          b: "The env property is NOT set in the Runtime Manager in the Mule application's Properties tab",
          c: "A file named ${env}.properties is NOT included in the deployable archive file",
          d: "The dev.properties and prod.properties files were NOT uploaded to Runtime Manager"
        },
        correctAnswer: "b"
      },
      {
        question: "What reserved property can be defined and used in a Mule application to allow an HTTPS Listener to be accessed by external web clients after the Mule application is deployed to CloudHub?",
        image: "",
        answers: {
          a: "${ssl.port}",
          b: "${ssl.listener.port}",
          c: "${https.listener.port}",
          d: "${https.port}"
        },
        correctAnswer: "d"
      },
      {
        question: "Why must a Mule application's deployable archive package all its dependencies in order to be deployed to CloudHub?",
        image: "",
        answers: {
          a: "The online logging service requires access to ALL project dependencies to log the appropriate Java classes used in the Mule application",
          b: "CloudHub workers CANNOT download ALL possible project dependencies a project may contain",
          c: "CloudHub workers needs to compare the current dependencies with the LATEST project dependencies from the MuleSoft repository",
          d: "MuleSoft support requires access to ALL project dependencies for future online troubleshooting"
        },
        correctAnswer: "b"
      },
      {
        question: "In what file does the Mule project keep track of all of its dependencies?",
        image: "",
        answers: {
          a: "mule-artifact.json",
          b: "pom.xml",
          c: "mule-app.properties",
          d: "global.xml"
        },
        correctAnswer: "b"
      },
      {
        question: "What can ONLY be done with VM connectors, and NOT with Flow References, in a single Mule application?",
        image: "",
        answers: {
          a: "Preserve variables as the Mule event gets passed to another flow",
          b: "Allow a flow to pass events to another flow synchronously",
          c: "Preserve the original payload when the VM connector returns a response from a flow",
          d: "Allow a flow to pass events to another flow asynchronously"
        },
        correctAnswer: "d"
      },
      {
        question: "What file type is required to configure a Web Service Consumer to consume a SOAP web service?",
        image: "",
        answers: {
          a: "RAML",
          b: "WSDL",
          c: "JSON",
          d: "OAS"
        },
        correctAnswer: "b"
      },
      {
        question: "How are query parameters dynamically passed to an outbound REST request using an HTTP Request operation?",
        image: "",
        answers: {
          a: "As query parameters in the HTTP Request operation",
          b: "As URI parameters in the HTTP Request operation",
          c: "In the Mule event's payload",
          d: "As flow variables",
          e: "As attributes in a Transform Message component before the HTTP Request operation",
          f: "As attributes in the HTTP Listener operation"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibit. The flow calls a SOAP endpoint using the Consume operation of the Web Service Consumer. The SOAP service has a required input parameter.<br />What event processor can be used to build the SOAP envelope with the required argument to pass to the SOAP service?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/9f7d4441-960a-4408-b95c-9f1eae56921a",
        answers: {
          a: "Set Property",
          b: "Build SOAP",
          c: "Transform Message",
          d: "JSON to XML",
          e: "Set Attachment"
        },
        correctAnswer: "c"
      },
      {
        question: "An HTTP Request operation returns a JSON array of objects. In the Transform Message component, what is the process to convert the array of objects to an array of custom Java Account objects?",
        image: "",
        answers: {
          a: "Add the Account object metadata to the output and use the drag-and-drop feature to transform the incoming JSON data",
          b: "Change the output type to the Java Account object type",
          c: "Add the Account object metadata to the input and the Transform Message component will automatically convert the JSON objects to Account objects",
          d: "Change the input type to the Java Account object type"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the process to create a connector using REST Connect?",
        image: "",
        answers: {
          a: "Develop the API in flow designer and publish the API to Exchange",
          b: "Design the API in Anypoint Studio and upload the API to Runtime Manager",
          c: "Design the API in Design Center and publish the API to Exchange",
          d: "Develop the API in Anypoint Studio and export the connector as a jar file"
        },
        correctAnswer: "c"
      },
      {
        question: "How are multiple conditions used in a Choice router to route events?",
        image: "",
        answers: {
          a: "To find the FIRST true condition, then route the same event to the matched route and ALL FOLLOWING routes",
          b: "To route the same event to the matched route of EVERY true condition",
          c: "To find the FIRST true condition, then distribute the event to the ONE matched route",
          d: "To filter and aggregate the responses after copying the event to EVERY route"
        },
        correctAnswer: "c"
      },
      {
        question: "A Scatter-Gather processes three separate HTTP requests. Each request returns a Mule event with a JSON payload. <br/>What is the final output of the Scatter-Gather?",
        image: "",
        answers: {
          a: "An Object containing all three Mule event Objects",
          b: "An Array of the three JSON payload Objects",
          c: "An Array of the three Mule event Objects",
          d: "An Object containing all three JSON payload Objects",
          e: "The last JSON payload Object",
          f: "The last Mule event Object"
        },
        correctAnswer: "a"
      },
      {
        question: "An event contains a payload that is an Array of Objects. How is the event routed in a Scatter-Gather?",
        image: "",
        answers: {
          a: "The ENTIRE event is sent to each route and processed SEQUENTIALLY",
          b: "The event is SPLIT and different SMALLER events are routed and processed in PARALLEL",
          c: "The event is SPLIT and different SMALLER events are routed and processed SEQUENTIALLY",
          d: "The ENTIRE event is sent to each route and processed in PARALLEL"
        },
        correctAnswer: "d"
      },
      {
        question: "What module and operation will throw an error if a Mule event's payload is not a number?",
        image: "",
        answers: {
          a: "Validation module's Is number operation",
          b: "Validation module's Is not number operation",
          c: "Filter module's Is number operation",
          d: "Filter module's Is not number operation"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibits. What happens to this flow when the Validation module's Is not null operation throws an error?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/158d452c-7f72-4552-a489-879fb7c79108",
        answers: {
          a: "The flow silently stops processing its Mule event",
          b: "The flow stops processing its Mule event and returns an error message to the HTTP Listener operation",
          c: "The flow logs the error message in the console and continues processing its Mule event",
          d: "The flow continues processing its Mule event and appends the error message to the end of the payload"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to the exhibits. The main flow has an On Error Continue scope. In the Configuration global element, default error handler is set to globalErrorHandler.<br />A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator then throws an error with message ”Validate - Payload is an Integer”. <br />What response message is returned to the web client?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/a697f549-3279-414a-82c7-290f62c44990",
        answers: {
          a: "Error - main flow",
          b: "Success - Begin main flow",
          c: "Success - End main flow",
          d: "Validate - Payload is an Integer",
          e: "Global Error Handler"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibits. The main flow has an On Error Continue scope. In the Configuration global element, default error handler is set to globalErrorHandler.<br />A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator then throws an error with message ”Validate - Payload is an Integer”. <br />What response message is returned to the web client?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/25499021-b058-419b-90dc-3b25f651e5fe",
        answers: {
          a: "Error - main flow",
          b: "Success - Begin main flow",
          c: "Success - End main flow",
          d: "Validate - Payload is an Integer"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to the exhibits. The private flow has an On Error Propagate scope. In the Configuration global element, default error handler is set to globalErrorHandler. <br />A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator in the private flow then throws an error with message”Validate - Payload is an Integer”. <br />What response message is returned to the web client?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/7ece2d45-8e82-4432-af69-f7029b52ec31",
        answers: {
          a: "globalErrorHandler",
          b: "Success - mainFlow",
          c: "Error - privateFlow",
          d: "Validate - Payload is a Number"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibits. The main flow has an On Error Continue scope and the private flow has an On Error Propagate scope. <br />A web client makes an HTTP GET request to the HTTP Listener. The Is number validator in the private flow then throws an error with message ”Validate - Payload is an Intege”.<br />What response message is returned to the web client?",
        image: "",
        answers: {
          a: "Error - main flow",
          b: "Success - main flow",
          c: "Error - private flow",
          d: "Success - private flow",
          e: "Validate - Payload is Integer"
        },
        correctAnswer: "a"
      },
      {
        question: "How can an error scope be configured to catch all errors in the HTTP namespace?",
        image: "",
        answers: {
          a: "HTTP When:",
          b: "HTTP When:*",
          c: "When: #[ error.errorType.namespace == ”HTTP”]",
          d: "When: #[ contains ”HTTP” ]"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibits. The main flow has an On Error Continue scope with type set to HTTP:NOT_FOUND. The Mule application configures globalErrorHandler as its default error handler.<br/>A web client posts a request to the HTTP Listener. The Transform Message component then throws a MULE:EXPRESSION error trying to convert the payload to application/xml. <br/>What response message is returned to the web client?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/9c54aa88-3d92-4246-895b-3019ecf8fde1",
        answers: {
          a: "HTTP:NOT_FOUND error",
          b: "MAIN",
          c: "Global Error Handler",
          d: "The MULE:EXPRESSION error's message"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to the exhibit. An event payload contains an unordered array of flight objects, where every object has a price key and a toAirport key. <br/>What is valid DataWeave code to return flights with price under 500, grouped by toAirport in ascending order, with the lowest price first?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/ff5e317a-cea3-48c2-b712-68ca9eaa6c7d",
        answers: {
          a: "payload groupBy $.toAirport filter $.price < 500 orderBy $.price",
          b: "payload groupBy $.toAirport filter $.price > 500 orderBy $.price",
          c: "payload filter $.price < 500 orderBy $.price groupBy $.toAirport",
          d: "payload filter $.price > 500 orderBy $.price groupBy $.toAirport"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibit. What is valid DataWeave code to transform the input JSON payload to the output XML payload?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/b650b20d-bf12-450c-aa2a-61fea373fc64",
        answers: {
          a: "https://unicorn-api.s3.amazonaws.com/uploads-prod/cb22f84c-88ec-486a-806d-bd5cab445e70",
          b: "https://unicorn-api.s3.amazonaws.com/uploads-prod/d3735fff-e569-44f2-8989-9d13770fa00d",
          c: "https://unicorn-api.s3.amazonaws.com/uploads-prod/a553d426-941b-436e-ba83-5a47316c21cd",
          d: "https://unicorn-api.s3.amazonaws.com/uploads-prod/379c8973-a0b8-402f-94bb-a57662ed62b1",
          e: "Desculpa ai mas não vou programar pra colocar imagens nas respostas"
        },
        correctAnswer: "a"
      },
      {
        question: "A Mule application has a main flow and a combineNames flow. In the main flow, a variable named fullName is set to the object {firstName: ”Max”, lastName: ”Mule”}.<br/>What is valid DataWeave code to call the combineNames flow with the input object stored in the fullName variable?",
        image: "",
        answers: {
          a: "#[ dw::Flow::lookup( ”combineNames”, vars.fullName ) ]",
          b: "#[ dw::Runtime::lookup( ”combineNames”, vars.fullName ) ]",
          c: "#[ lookup( ”combineNames”, vars.fullName ) ]",
          d: "#[ combineNames( vars.fullName ) ]",
          e: "#[ lookup( combineNames( vars.fullName ) ) ]"
        },
        correctAnswer: "c"
      },
      {
        question: "What DataWeave 2.0 type can be used as input to a map operation?",
        image: "",
        answers: {
          a: "Array",
          b: "Object",
          c: "Map",
          d: "String",
          e: "Key"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the correct way to format the decimal 20.3844 as a string to two decimal places?",
        image: "",
        answers: {
          a: "20.3844 as String {format: ”.0#”}",
          b: "20.3844 as :string {format: ”.0#”}",
          c: "20.3844 as String as format: ”.0#”",
          d: "20.3844 as String (format = ”.0”)"
        },
        correctAnswer: "a"
      },
      {
        question: "A Flow Reference component sends a non-empty JSON object payload to another flow named childFlow, which then returns an XML body.<br />A Flow Reference component saves the payload returned from childFlow to its target attribute named payload. Refer to the exhibit. <br />What is true about the Mule event's payload at the next event processor after the Flow Reference component?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/09d338b2-e0ed-49c3-9a71-b6523f107f7a",
        answers: {
          a: "The payload is the XML response body",
          b: "The payload is a non-empty Java object",
          c: "The payload is the original JSON object",
          d: "The payload is null"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibit. What is the object type returned by the File List operation?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/ca31ec38-3fbc-4b47-88a9-40cc2d44c6bf",
        answers: {
          a: "Array of Mule event objects",
          b: "Object of Mule event objects",
          c: "Array of String file names",
          d: "Object of String file name"
        },
        correctAnswer: "c"
      },
      {
        question: "In the Database On Table Row operation, what does the Watermark column enable the On Table Row operation to do?",
        image: "",
        answers: {
          a: "To save the most recent records retrieved from a database to enable database caching",
          b: "To avoid duplicate processing of records in a database",
          c: "To enable multithreaded event processing for each record retrieved from a database",
          d: "To save the payload into the ObjectStore for future reference"
        },
        correctAnswer: "b"
      },
      {
        question: "Assume that a database table contains a recordID column that always increases as new records get added to the table.<br/>In a Mule application, what is the key process to enable manual watermarking for requests to a database using the Scheduler endpoint and the Database SELECT operation?",
        image: "",
        answers: {
          a: "Save the max recordID from the set of recordIDs in an ObjectStore and reference this recordID in subsequent database requests",
          b: "Enable automatic watermarking in the Database Select operation",
          c: "Set the Watermark column in the Scheduler endpoint to the recordID",
          d: "Save the max recordID from the set of recordIDs in a variable and reference this variable in subsequent database requests"
        },
        correctAnswer: "a"
      },
      {
        question: "A flow has a JMS Publish consume operation followed by a JMS Publish operation. Both of these operations have the default configurations.<br/>Which operation is asynchronous (does not wait for a response before continuing to the next event processor) and which operation is synchronous (blocks and waits for a response or timeout before continuing to the next event processor)?",
        image: "",
        answers: {
          a: "Publish consume: Asynchronous. Publish: Synchronous",
          b: "Publish consume: Asynchronous. Publish: Asynchronous",
          c: "Publish consume: Synchronous. Publish: Asynchronous",
          d: "Publish consume: Synchronous. Publish: Synchronous"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the exhibits. The Set Payload component sets the payload to a Map object (not an Array). The File Write operation writes out files based on this Map object. <br/>How many files are written to the file system when the flow executes?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/b178f523-3d47-4788-b4e6-8943fe14894c",
        answers: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibit. The payload [1,2,3] is passed to the Batch Job scope. In Batch_Step_1, a variable named batchStepPayload is set to the current payload. <br/>What is the value of the last log message after one batch job completes?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/4b955829-2f93-4e51-b55d-21ead4ccff82",
        answers: {
          a: "13",
          b: "[11,12,13]",
          c: "33",
          d: "[1,2,3]"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the exhibit. What are the values of the counter and stepVar variables in the On Complete phase?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/d0346df2-5bed-4030-bb45-ca34ea05ca2c",
        answers: {
          a: "counter: 31, stepVar: 31",
          b: "counter: 1, stepVar: 31",
          c: "counter: 31, stepVar: null",
          d: "counter: 1, stepVar: null"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to the exhibit. What are the values of the counter and stepVar variables after the Batch Job?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/afa848bb-b9b7-4603-97ae-a7023f88b209",
        answers: {
          a: "counter: 31, stepVar: 31",
          b: "counter: 1, stepVar: 31",
          c: "counter: 1, stepVar: null",
          d: "counter: 31, stepVar: null"
        },
        correctAnswer: "c"
      },
      {
        question: "A Batch Job scope has three batch steps. An event processor in the second batch step throws an error because the input data is incomplete. <br/>What is the default behavior of the batch job after the error is thrown?",
        image: "",
        answers: {
          a: "Event processing continues to the third batch step",
          b: "All processing of the batch job stops",
          c: "The second batch step is retried",
          d: "The first batch step is retried"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to the exhibits. What is the output of the Logger component in the Batch Job?",
        image: "https://unicorn-api.s3.amazonaws.com/uploads-prod/ca761861-025e-4fbc-9e5a-32b786bfe5e0",
        answers: {
          a: "<br/>[.333]<br/>[1]",
          b: "[.333, 1]",
          c: "[.333, 667, 1, 1.333]",
          d: "<br/>[.333]<br/>[.667]<br/>[1]<br/>[1.333]"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer the Exhibits. A Web Client Submit a request to http://localhost:8081/ What is the structure of a payload at the end of flow?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-08_22-23-22-49d6e3561c3a1c9fcc69e93fe5262c9b.PNG",
        answers: {
          a: "<br/>{ ”attributes”:..., <br/>”payload”:['orange','Lemon'] <br/> }",
          b: " <br/>{ ”0” : ”orange”,<br/> ”1”: ”Lemon” } ",
          c: "<br/>{<br/>”0”: { <br/>”attributes”:..<br/>”payload”:”orange”<br/>}<br/>{<br/>”1”: { <br/>”attributes”:..<br/>”payload”:”Lemon”<br/>}",
          d: " [ 'orange', 'Lemon']"
        },
        correctAnswer: "c"
      },
      {
        question: "By default, what happens to a file after it is read using an FTP connector?",
        image: "",
        answers: {
          a: "The file stays in the same folder unchanged",
          b: "The file deleted from the folder",
          c: "The file is renamed in the same folder",
          d: "The file moved to a different folder"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to exhibits. Validation components in the private flow throws an error. What response message is returned to client request to main flow’s HTTP Listener?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_18-19-24-af9d0173c7d062046130dde5c212565c.PNG",
        answers: {
          a: "Success – main flow",
          b: "Error – main flow",
          c: "Error – private flow",
          d: "Validation Error"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the Exhibits. The main flow contains a flow reference for child flow. What values are accessible in the child flow after web client submits request to HTTP://localhost:8081/order? Color = red?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_17-10-42-06d65bb5b4ebe9b1a603d01181e0d05d.PNG",
        answers: {
          a: "Payload",
          b: "Payload - quantity var - Color query param",
          c: "Payload - Color query param",
          d: "Payload - quantity var"
        },
        correctAnswer: "b"
      },
      {
        question: "What is Default Expression Everything in Mule 4 ",
        image: "",
        answers: {
          a: "Dataweave",
          b: "MEL",
          c: "Java",
          d: "RAML"
        },
        correctAnswer: "a"
      },
      {
        question: "A mule flow has three set variable transformers. What Global Data Structure can be used to access the variable?",
        image: "",
        answers: {
          a: "Mule event Message",
          b: "Application properties",
          c: "Mule Event Attributes",
          d: "Mule Event"
        },
        correctAnswer: "d"
      },
      {
        question: "An App team is developing mobile banking app. It took them 2 months their own API to access transaction information from a central database. The app team later found out that another team had already build on API that the transaction information they need?<br/>According to MuleSoft, what organization structure saved the app team 2 months of development time?",
        image: "",
        answers: {
          a: "Center of Excellence",
          b: "Central API review Board",
          c: "MuleSoft Support Center",
          d: "Center for Enablement"
        },
        correctAnswer: "d"
      },
      {
        question: "To avoid hard coding value, a flow uses some property placeholder and the corresponding value are stored in A. Where does the configuration file’s location need to specified in the mule Application?",
        image: "",
        answers: {
          a: "A flow attributes",
          b: "The mule-artifact.Json file",
          c: "Global element",
          d: "The pom.xml file"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to exhibits. What can be added to flow to persist data across different flow executions?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_19-57-49-a3fa48506062d7cad508eefa77071f9d.PNG",
        answers: {
          a: "Key/value pair in the object store",
          b: "Properties of mule runtime object",
          c: "Properties of mule run time flow object",
          d: "Session Variables"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to the Exhibits. All of three of the conditions for choice router are true. What",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_16-49-46-a806cb08f65e527497d34bca4d27a283.PNG",
        answers: {
          a: "Route1",
          b: "Route2",
          c: "Route1, Route2",
          d: "Route1, Route2, Default"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to Exhibits. The main flow contains http request in the middle of the flow. HTTP request and listener use default configuration. What value is accessible to logger at the end of main flow after web clients submit request to http://localhost:8081/order? color =red?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_18-42-56-e29d15ed38ed3dad2cfac704cc8b1ff9.PNG",
        answers: {
          a: "payload - Color query param",
          b: "payload - Quantity var",
          c: "payload",
          d: ""
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to Exhibits. The validation components in the Try Scope throws an error. What message response returned to client request to main flow HTTP Listener?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_17-33-51-95ddd154981da0e804319ccba7625b13.PNG",
        answers: {
          a: "Error – try Scope",
          b: " Validation error",
          c: "Error – main flow",
          d: "Success – main flow"
        },
        correctAnswer: "c"
      },
      {
        question: "An API implementation has been deployed to CloudHub and now need to be governed. It will not allocate additional vCore for a new mule Application to act as an API Proxy. What is the next step to preserve the current Vcore Usage but still allow the mule application to be managed by API Manager?",
        image: "",
        answers: {
          a: "Deploy the same API implementation behind VPC and configure the VPC to connect to API manager",
          b: "Modify the API implementation to use auto-discovery to register with the API Manager",
          c: "Upload mule Application Jar file to API instance in API Manager",
          d: "Register the same API implementation in Runtime manager to connect to API Manager"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer the Exhibits. A web client submit request to HTTP Listener and HTTP request throws an error.What payload and status code returned to Web Client?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_16-23-12-6b981aa4d9800eea6151fe5d1466bfc5.PNG",
        answers: {
          a: "Response Body: ”Success-End” - Default response status code = 200",
          b: "Error response body: error.description - Default Error response status code = 500",
          c: "Response Body: ”Success-begin” - Default response status code = 200",
          d: "Response body: error - Default response status code = 200"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to Exhibits. The batch job process, filter and aggregate records. What is output from logger components?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_18-03-17-7268e60728252844a7ca1f561ee7356d.PNG",
        answers: {
          a: "<br/>[10,20,30]<br/>[30,60]<br/>[50,60]",
          b: "[20,40,60]",
          c: "<br/>20,40]<br/>[60]",
          d: "[10,30,50]"
        },
        correctAnswer: "c"
      },
      {
        question: "What is payload shown in debugger at this breakpoint?<br/>Orders.csv<br/>Orderid, account<br/>100, partnerA <br/>200, Acme.com",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_18-32-52-a2e4ddc0bb0b2d54157aee81c21def14.PNG",
        answers: {
          a: "Database response",
          b: "The entire CSV files",
          c: "“none”",
          d: "100"
        },
        correctAnswer: "d"
      },
      {
        question: "How many mule applications can deploy on a CH worker?",
        image: "",
        answers: {
          a: "1",
          b: "3",
          c: "5",
          d: "8"
        },
        correctAnswer: "d"
      },
      {
        question: "A Mule application contains a Choice router. What is logged when the flow completes?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_20-43-25-57eb48455db0c2a31597dcc1d5d73842.PNG",
        answers: {
          a: "[”US”, ”EU”]",
          b: "EU",
          c: "”REGION”",
          d: "US"
        },
        correctAnswer: "d"
      },
      {
        question: "An on-Table Row database Listener retrieves data from the table that contain record_id, an increasing Number? How Should the Listener be configured so it retrieves a new row at most one time?",
        image: "",
        answers: {
          a: "Set the target to store the last retrieved Record_id value",
          b: "Set The target to the record_id Column",
          c: "Set the watermark column to the record id column",
          d: "Set the Object Store to store the last retrieved Record_id value"
        },
        correctAnswer: "c"
      },
      {
        question: "The flow need to combine and return data from two different data sources. It contains a database select operation followed by an HTTP request operation?",
        image: "",
        answers: {
          a: "Nothing, Previous payloads combined into next payload",
          b: "Put the database SELECT operation inside a message Enricher Scope ",
          c: "Save the payload from the database SELECT operation to a variable",
          d: "Put the database SELECT operation inside a message a cache Scope"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to Exhibits. Web Clients submit request to http://localhost:8081/bank? zipcode = 92104 and Web Service consumer throws WSC: bad request error. What is the next step to fix the error?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_20-14-08-49703567a4d4d4ff326fd139b8df068a.PNG",
        answers: {
          a: "Set Json payload before consumer operation that contains zipcode query parameter",
          b: "Set SOAP payload before consumer operation that contains zipcode query parameter",
          c: "Set  a property in consumer operation equal to zipcode query parameter",
          d: "Set  a header property of consumer operation equal to zipcode query parameter"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to Exhibits. What payload is returned from a request to http://localhost:8081/?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_17-50-52-2234c74ea7acc5a7c4fefbc1e4b49b0a.PNG",
        answers: {
          a: "3",
          b: "1",
          c: "4",
          d: "2"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to Exhibits. What is the Valid Expression for Choice Router’s when expression route events to domesticShipping flow?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_23-36-27-60d1f006eb00622d86051d2390993000.PNG",
        answers: {
          a: "# [if payload == 'US']",
          b: "# [payload == 'US']",
          c: "# [payload = 'US']",
          d: "# [if payload = 'US']"
        },
        correctAnswer: "b"
      },
      {
        question: "In application network, if the implementation but not the interface of a product API changes. What need to be done to the other APIS that consume the product API?",
        image: "",
        answers: {
          a: "The Other API must be updated to consume the updated product API",
          b: "The Application associated with other API must be restarted",
          c: "The Application associated with another API must be recorded",
          d: "Nothing Needs to changed in the other APIS or their associated application"
        },
        correctAnswer: "d"
      },
      {
        question: "The error occurs when a project is run in Anypoint Studio. The project, which has a dependency that is not in the MuleSoft Maven repository, was created and successfully run on a different computer.<br/>What is the next step to fix the error to get the project to run successfully?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_20-37-19-ad9e0250a1d126eb3a79fbfb77e298e6.PNG",
        answers: {
          a: "Edit the dependency in the Mule project's pom.xml file",
          b: "Install the dependency to the computer's local Maven repository",
          c: "Deploy the dependency to MuleSoft's Maven repository",
          d: "Add the dependency to the MULE_HOME/bin folder"
        },
        correctAnswer: "b"
      },
      {
        question: "Refer to exhibits. What is the out put after web clients submit request to http://localhost:8081/?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_19-06-00-f3958dbfc4def02a70e0505ae5aa7153.PNG",
        answers: {
          a: " [order1, order2, order3, order4]",
          b: " [1,2,3,4]",
          c: " Order1order2order3order4order5",
          d: " Order4"
        },
        correctAnswer: "b"
      },
      {
        question: "What  MuleSoft product enables publishing,Sharing and searching of APIS",
        image: "",
        answers: {
          a: "API Notebook",
          b: "API Munit",
          c: "Anypoint Exchange",
          d: "API Designer"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to exhibits. Web Client submit request to http://localhost:8081/flights What is the result at the end of the flow get typeOf [payload] ? (create your own XML)",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_20-01-47-34e2bdc09cdaea8eedaef9f2be4955ff.PNG",
        answers: {
          a: "XML",
          b: "OBject",
          c: "String",
          d: "Java"
        },
        correctAnswer: "c"
      },
      {
        question: "What Execution Model used for batch jobs scope?",
        image: "",
        answers: {
          a: "Single and Multi Threading",
          b: "Multi Threading",
          c: "Single Threading",
          d: "None Of the Above"
        },
        correctAnswer: "b"
      },
      {
        question: "A mule project contains a MYSQL database Dependency.The project is exported from anypoint studio so it can be deployed into cloudHub? What export options create the smallest deployable archieve that is succesfully deployed to cloudHub?",
        image: "",
        answers: {
          a: "Nothing to choice",
          b: "Attach project sources",
          c: "Include project modules and dependencies",
          d: "Attach project resource  and include modules and project dependencies"
        },
        correctAnswer: "c"
      },
      {
        question: "What API MuleSoft Connectivity layer intend to expose a part of business Logic",
        image: "",
        answers: {
          a: "System and experience layer",
          b: "Experience  Layer",
          c: "System Layer",
          d: "process Layer"
        },
        correctAnswer: "d"
      },
      {
        question: "RAML Specification defined to Mange customers with unique identifier for each customer record. What URI Does MuleSoft recommend to uniquely access the customer identified with the unique ID 1234?",
        image: "",
        answers: {
          a: "/customers/custid = 1234",
          b: "/customers?custid=true&custid = 1234",
          c: "/customers? Operation=get &custid=1234",
          d: "/customers/1234"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to Exhibit. In the execution of scatter-gather the flow1 route complete after 10 seconds and the  route complete after 20 seconds. How many seconds does it take for scatter-gather flow to complete?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_19-29-41-95c9a811ff747ce9445ff58d4a0a521f.PNG",
        answers: {
          a: "0",
          b: "10",
          c: "20",
          d: "30"
        },
        correctAnswer: "c"
      },
      {
        question: "HTTP Request Operation Sends an HTTP request with a non- empty JSON object payload to external HTTP endpoint. The response from external HTTP endpoint returns an XML body. The result stored in the target named theResult. What is the payload at the event processor after HTTP request?",
        image: "",
        answers: {
          a: "The XML Response body",
          b: "A non-empty Java Object",
          c: "The original Json request Body",
          d: "Null"
        },
        correctAnswer: "c"
      },
      {
        question: "Why would a mule application use the ${http.port} property placeholder for its HTTP Listener port when it is deployed to CloudHub?",
        image: "",
        answers: {
          a: "Allows CloudHub to automatically change the HTTP port to allow external clients to connect to HTTP Listener",
          b: "Allows CloudHub to automatically register the application with API manager",
          c: "Allows MuleSoft Support to troubleshoot the application by connecting directly to HTTP Listener",
          d: "Allows clients to VPN directly to the application at the mule application’s configured HTTP port."
        },
        correctAnswer: "a"
      },
      {
        question: "What is the payload is returned by a Database SELECT operation that does not match any in rows in the database?",
        image: "",
        answers: {
          a: " ",
          b: "Null",
          c: "False",
          d: "Exception"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to exhibits. What is written to record.csv file when flow execute? payload = {”firstName”: ”aaa”}",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_17-22-10-2d4c81974443ca1ff4b6690f6d644c9e.PNG",
        answers: {
          a: "The payload convert to CSV",
          b: "Nothing",
          c: "Json Payload",
          d: "An Error Message"
        },
        correctAnswer: "c"
      },
      {
        question: "An SLA based policy has been enabled in API Manager. What is the next Step to configure the API proxy to enforce a new SLA Policy?",
        image: "",
        answers: {
          a: "Add new Environment variable and restart the API Proxy",
          b: "Restart the API Policy to clear the API Policy Cache",
          c: "Add new Property place holder and redeploy the API Proxy",
          d: "Add required header to RAML Specification and redeploy a new API proxy"
        },
        correctAnswer: "a"
      },
      {
        question: "Refer to Exhibits. What is the correct synthax to add an employeeID as a URI parameter in HTTP Listiner path ?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_19-49-35-280f3084c253fff6bacb479badd391b0.PNG",
        answers: {
          a: "${employeeID}",
          b: "#[employeeID]",
          c: "(employeeID)",
          d: "{employeeID}"
        },
        correctAnswer: "d"
      },
      {
        question: "Refer to the exhibit. The main flow configured with three error handlers. A web Clients submits request to HTTP Listener and HTTP request throws an HTTP: Not Found error.",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_00-47-59-4794390d1b6eca1879e58f7eb2cd1b94.PNG",
        answers: {
          a: "Other error",
          b: "Success – main flow",
          c: " APP: API Resource Not Found",
          d: "HTTP: Not Found"
        },
        correctAnswer: "c"
      },
      {
        question: "Refer to the Exhibits. What is the output in on the complete phase?",
        image: "https://i.udemycdn.com/redactor/raw/2020-01-09_18-06-13-a81fe96b4ed06ffadcf7d0ca957abbc2.PNG",
        answers: {
          a: "The records processed by all batch steps: [StepTwoStepOne1, StepTwoStepOne2, StepTwoStepOne3]",
          b: "The records processed by the last batch step: [StepTwo1, StepTwo2, StepTwo3]",
          c: "The Original payload is: [1,2,3]",
          d: "Summary Statistics with No record Data"
        },
        correctAnswer: "d"
      },
      {
        question: "What valid RAML retrieves details on specific order by its orderid as a URI Parameter?",
        image: "",
        answers: {
          a: "<br/>orders:<br/>Get:<br/>/orderid",
          b: "<br/>/order<br/>/oderir<br/>Get:",
          c: "<br/>oders:<br/>Get:<br/>/{orderid}",
          d: "<br/>/orders:<br/>/{orderid}<br/>Get:"
        },
        correctAnswer: "d"
      },
      {
        question: "Web client Submit a request to http://localhost:8081?accountType = personal. The Query parameter captured using a set variable Transformer to variable named accountType.<br/>What is the correct Dataweave expression to log accountType?",
        image: "",
        answers: {
          a: "Account Type: #[attributes.accountType]",
          b: "Account Type: #[message.inboundProperties.accountType]",
          c: " Account Type: #[vars.accountType]",
          d: " Account Type: #[flowvars.accountType]"
        },
        correctAnswer: "c"
      },
      {
        question: "A web client sends a new order record { ”0id”: ”100” , ”custid”: ”annie@acme.com”, ”status”: ”NEW ORDER” } in the payload of a POST request to the Mule application.<br/>What value must be used in the input Parameters field of the Database insert operation to properly pass the order record values to the SQL statement?",
        image: "https://i.imgur.com/veWHJnG.png",
        answers: {
          a: "<br/>#[<br/> [<br/>  payload.0id,<br/>  payload.custid,<br/>  payload.status<br/> ]<br/>]",
          b: "<br/>#[<br/> [<br/>  oid: payload.0id,<br/>custid: payload.custid,<br/> status: payload.status<br/> ]<br/>]",
          c: "<br/>#[<br/> [<br/>  orderId: payload.0id,<br/>customerName: payload.custid,<br/> status: payload.status<br/> ]<br/>]",
          d: "<br/>#[<br/> inputParams:[<br/>  payload.0id,<br/>  payload.custid,<br/>  payload.status<br/> ]<br/>]"
        },
        correctAnswer: "b"
      },
      {
        question: "A Mule application contains two HTTP Listeners, each configured for different API endpoints:http://acme.com/apis/orders and http://acme.com/apis/customers.<br/>What base path value should be set in an HTTP Listener config element so that it can be used to configure both HTTP Listeners?",
        image: "",
        answers: {
          a: "/apis/*",
          b: "/apis/?",
          c: "/apis/",
          d: "/apis/orders|customers"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the correct syntax to add customer ID as a URI parameter in an HTTP Listener path?",
        image: "https://i.imgur.com/mnQqFcl.png",
        answers: {
          a: "(customerID)",
          b: "${customerID}",
          c: "#[customerID]",
          d: "{customerID}"
        },
        correctAnswer: "d"
      },
      {
        question: "The error occurs when a project is run in Anypoint Studio. The project, which has a dependency that is not in the MuleSoft maven repository was created and successfully run on a different computer.<br/>What is the next step to fix the error to get the project to run successfully?",
        image: "https://i.imgur.com/OXMxomW.png",
        answers: {
          a: "Install the dependency to the computer's local Maven repository",
          b: "Edit the dependency in the Mule project's pom.xml file",
          c: "Deploy the dependency to the computer's local Maven repository",
          d: "Add dependency to the MULE_HOME/bin folder"
        },
        correctAnswer: "a"
      },
      {
        question: "This RAML specification includes a resource and method to retrieve accounts by account_type and industry.<br/>What is the correct URI to get all retail finance accounts?",
        image: "https://i.imgur.com/QWjdZbl.png",
        answers: {
          a: "/accounts?account_type=retail&industry=finance",
          b: "/accounts/account_type=retail/industry=finance",
          c: "/accounts/retail/finance",
          d: "/accounts?account_type:retail&industry:finance"
        },
        correctAnswer: "c"
      },
      {
        question: "To avoid hard-coding values, a flow uses some property placeholders and the corresponding values are stored in a configuration file.<br/>Where does the configuration files location need to be specified in the Mule application?",
        image: "",
        answers: {
          a: "A flow attribute",
          b: "A global element",
          c: "The mule-artifact.json",
          d: "The pom.xml file"
        },
        correctAnswer: "b"
      },
      {
        question: "What payload and quantity are logged at the end of the main flow?",
        image: "https://i.imgur.com/fnwB3Zr.png",
        answers: {
          a: "[[1,2,3,4],10]",
          b: "[[1,2,3,4],14]",
          c: "[[order1,order2,order3,order4],14]",
          d: "[order1,order2,order3,order4,14]"
        },
        correctAnswer: "a"
      },
      {
        question: "An API implementation has been deployed to CloudHub and now needs to be governed.IT will not allocate additional vCores for a new Mule application to act as an API proxy.<br/>What is the next step to preserve the current vCore usage, but still allow the Mule application to be managed by API Manager?",
        image: "",
        answers: {
          a: "Register the same API implementation in Runtime Manager to connect to API Manager",
          b: "Modify the API implementation to use auto-discovery to register with API Manager",
          c: "Upload the Mule application's JAR file to the API instance in API Manager",
          d: "Deploy the same API implementation behind a VPC and configure the VPC to connect to PI Manager"
        },
        correctAnswer: "b"
      },
      {
        question: "An SLA based policy has been enabled in the API Manager. What is the next step to configure the API proxy to enforce the new SLA policy?",
        image: "",
        answers: {
          a: "Restart the API proxy to clear the API policy cache",
          b: "Add new property placeholders and redeploy the API proxy",
          c: "Add new environment variables and restart the PAI proxy",
          d: "Add required headers to the RAML specification and redeploy the new API proxy"
        },
        correctAnswer: "a"
      },
      {
        question: "A Web client sends a POST request with the payload {”0id”:”1000”,”itemid”:”AC200”, ”qty”:”4”} to the Mule application. The File write operation throws a FILE:CONNECTIVITY error.<br/>What response message is returned to the web client?",
        image: "https://i.imgur.com/1FXQop6.png",
        answers: {
          a: "”OTHER ERROR”",
          b: "”ORDER: NOT_CREATED”",
          c: "”FILE: CONNECTIVITY”",
          d: "”File written”"
        },
        correctAnswer: "c"
      },
      {
        question: "A Web client sends sale data in a POST request to the Mule application. The Transform Message component then enriches the payload by prepending a vendor name to the sale data.<br/>What is written to the sales.csv file when the flow executes?",
        image: "https://i.imgur.com/vSXfukh.png",
        answers: {
          a: "The enriched payload in JSON format",
          b: "The enriched payload in XML format",
          c: "An error message",
          d: "The enriched payload in CSV format"
        },
        correctAnswer: "c"
      },
      {
        question: "The input array of strings is processed by the batch job that processes, filters and aggregates the values.<br/>What is the last message logged by the Logger component after the batch job completes processing?",
        image: "https://i.imgur.com/f2wUxV6.png",
        answers: {
          a: "[[”A”,”C”,”D”],[”E”]]",
          b: "[”E”]",
          c: "[”D”,”E”]",
          d: "[”A”,”C”,”D”,”E”]"
        },
        correctAnswer: "a"
      },
      {
        question: "A flow needs to combine and return data from two different data sources. It contains a Database SELECT operation followed by an HTTP Request operation.<br/>What is the method to capture both payloads so the payload from the second request does not overwrite that from the first?",
        image: "",
        answers: {
          a: "Nothing, previous payloads are combined into the next payload",
          b: "put the Database SELECT operation inside a Cache scope",
          c: "Save the payload from the Database SELECT operation to a variable",
          d: "Save the payload from the Database SELECT operation to a variable"
        },
        correctAnswer: "d"
      },
      {
        question: "The <when> expression for the Choice router needs to be written.<br/>What is a valid <When> expression to route Mule events to the non-default flow?",
        image: "https://i.imgur.com/vEBGu92.png",
        answers: {
          a: "#[if(company=”Mulesoft”)]",
          b: "#[”Mulesoft”==payload.”company”]",
          c: "#[if(”Mulesoft”==payload.company)]",
          d: "#[company=”Mulesoft”]"
        },
        correctAnswer: "c"
      },
      {
        question: "The main flow contains a Flow Reference to the child flow.<br/>A web client sends a GET request to the main flow's HTTP LIstener that includes a make query parameter.<br/>What values are accessible in the child flow?",
        image: "https://i.imgur.com/NvzddEA.png",
        answers: {
          a: "payload",
          b: "<br/>payload<br/>model var",
          c: "<br/>payload<br/>make query param",
          d: "<br/>payload<br/>make query param<br/>model var"
        },
        correctAnswer: "d"
      },
      {
        question: "A database OnTableRow listener retrieves data from a CUSTOMER table that contains a primary key user_id column and an increasing login_date_time column. Neither column allows duplicate values<br/>How should the listener be configured do it retrieves each row at most one time?",
        image: "",
        answers: {
          a: "Set the target value to the last retrieved login_date_time value",
          b: "Set the watermark column to the last retrieved user_id value",
          c: "Set the target value to the last retrieved user_id value",
          d: "Set the watermark column to the last retrieved login_date_time value"
        },
        correctAnswer: "b"
      },
      {
        question: "The Mule application has multiple HTTP Listeners contained in various configuration XML files. Each HTTP Listener is configured with the same host and with the port number, path, and operation shown in its display name.<br/>What is the minimum number of global elements that must be defined to support all these HTTP Listener?",
        image: "https://i.imgur.com/heyoUaU.png",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        correctAnswer: "b"
      },
      {
        question: "A function named newProdCode needs to be defined accepts to input parameters, an integer value for itemID and a string value for productCategory, and return a new product code.<br/>What is the correct DataWeave code to define the newProdCode function?",
        image: "",
        answers: {
          a: "function newProdCode(itemID: Number, productCategory: String ) = ”PC-” ++ productCategory ++ (itemID as string) ",
          b: "fun newProdCode(itemID: Number, productCategory: String ) = ”PC-” ++ productCategory ++ (itemID as string) ",
          c: "fun newProdCode(itemID: Number, productCategory: String ) -> ”PC-” ++ productCategory ++ (itemID as string) ",
          d: "var newProdCode(itemID: Number, productCategory: String ) -> ”PC-” ++ productCategory ++ (itemID as string) "
        },
        correctAnswer: "d"
      },
      {
        question: "A Mule event is composed of a hierarchy of objects. Where in the hierarchy are variables stored?",
        image: "",
        answers: {
          a: "Mule message",
          b: "Mule message payload",
          c: "Mule event",
          d: "Mule message attributes"
        },
        correctAnswer: "c"
      },
      {
        question: "The Mule application is debugged in Anypoint Studio and stops at the breakpoint.<br/>What is the value of the payload displayed in the debugger<br/>at this breakpoint?",
        image: "https://i.imgur.com/d3XaK2v.png",
        answers: {
          a: "Processing",
          b: "Start",
          c: "0",
          d: "Complete"
        },
        correctAnswer: "b"
      },
      {
        question: "Web client Submit a request to http://localhost:8081?accountType = personal. The Query parameter captured using a set variable Transformer to variable named account type. What is the correct Dataweave expression to log the account type?",
        image: "",
        answers: {
          a: "Account Type: #[flowvars.accountType] ",
          b: "Account Type: #[vars.accountType] ",
          c: "Account Type: ++ flowvars.accountType ",
          d: "Account Type: + flowvars.accountType "
        },
        correctAnswer: "b"
      },
      {
        question: "The web client sends a POST request to the ACME Order API with an XML payload. An error is returned.<br/>What should be changed in the request so that a success response code is returned to the web client?",
        image: "https://i.imgur.com/qk7khPu.png",
        answers: {
          a: "Set a request header with the name Content-Type to a value of application/octet-stream",
          b: "Set a response header with the name Content-Type to a value of application/XML",
          c: "Set a request header wit the name Content-Type to a value of application/XML",
          d: "Set a response header with the name Content-Type to a value of application/octet-stream"
        },
        correctAnswer: "c"
      },
      {
        question: "The main flow contains an HTTP Request in the middle of the flow. The HTTP Listeners and HTTP Request use default configurations.<br/>A web client sends a GET request to the main flows HTTP Listener. The GET request includes query parameters for the pedigree of a piano.<br/>What values are accessible to the Logger component at the main flow?",
        image: "https://i.imgur.com/JMt3GtZ.png",
        answers: {
          a: "<br/>payload<br/>pedigree query params<br/>producer var",
          b: "payload",
          c: "<br/>payload <br/> pedigree query params",
          d: "<br/>payload<br/>producer var"
        },
        correctAnswer: "d"
      },
      {
        question: "The Set Payload transformer in the additem child flow uses DataWeave to create an order object. What is the correct DW code for the Set Payload transformer in the createOrder flow to use the additem child flow to add a row cable with the price of 100 to the order?",
        image: "https://i.imgur.com/qtfDH8R.png",
        answers: {
          a: "additem ({price : ”100”,  item: ”router”, itemType: ”cable”})",
          b: "lookup(”additem”,  {price : ”100”,  item: ”router”, itemType: ”cable”})",
          c: "lookup(”additem”, {payload: {price : ”100”,  item: ”router”, itemType: ”cable”}})",
          d: "additem ({payload: {price : ”100”,  item: ”router”, itemType: ”cable”}})"
        },
        correctAnswer: "b"
      },
      {
        question: "What execution model is used by For Each and Batch Job scopes?",
        image: "",
        answers: {
          a: "Both are multi-threaded",
          b: "For Each is Single-threaded and Batch Job is multi-threaded",
          c: "Both are Single-threaded",
          d: "Batch Job is Single-threaded and For Each is multi-threaded"
        },
        correctAnswer: "b"
      },
      {
        question: "What DataWeave expression transforms the example XML input to the CSV output?",
        image: "https://i.imgur.com/pn5lItk.png",
        answers: {
          a: "<br/>payLoad.sale.*item map( (value,index) ->  {<br/>index:index,<br/>sale: value.saleId,<br/>itemName:value.desc,<br/>itemPrice:(value.price) *(value.quantity), <br/>item: value.@itemId<br/>})",
          b: "<br/>payLoad.sale.item map( (value,index) ->  {<br/>index:index,<br/>sale: value.@saleId,<br/>itemName:value.desc,<br/>itemPrice:(value.price) * (value.quantity),<br/>item: value.@itemId<br/>})",
          c: "<br/>payLoad.sale.*item map( (value,index) ->  {<br/>index:index,<br/>sale: value.@saleId,<br/>itemName:value.desc,<br/>itemPrice:(value.price) * (value.quantity),<br/>item: value.@itemId<br/>})",
        },
        correctAnswer: "c"
      },
      {
        question: "A web client sends a POST request to the HTTP Listener and the validation component in the Try scope throws an error.<br/>What response message is returned to the web client?",
        image: "https://i.imgur.com/dAgglHs.png",
        answers: {
          a: "”END”",
          b: "”ERROR2”",
          c: "”ERROR1”",
          d: "validation Error"
        },
        correctAnswer: "b"
      },
      {
        question: "The Set Payload transformer's value is set to {'Year': '2020'}. What message value should be added to the logger component to output the message 'The year is 2020', without hardcoding 2020?",
        image: "https://i.imgur.com/MAIB33t.png",
        answers: {
          a: "'#[”The year is ++payload.year”]'",
          b: "'#[The year is $(payload.year)]'",
          c: "'The year is #[payload.year]'",
          d: "'#[”The year is ”+payload.year]'"
        },
        correctAnswer: "c"
      },
      {
        question: "The input array of strings is passed to the batch job, which does NOT do any filtering or aggregating.<br/>What payload is logged by the Logger component?",
        image: "https://i.imgur.com/aJ8EO4y.png",
        answers: {
          a: "[ ”Apple”, ”Banana” ]",
          b: "[ ”Apple12”, ”Banana12” ]",
          c: "[ ”Apple1”, ”Banana1”,2 ]",
          d: "Summary report of processed records"
        },
        correctAnswer: "d"
      },
      {
        question: "In the requestFlow an HTTP Request operation is configured to send an HTTP request with an XML payload. The request is sent t to the HTTP LIstener in the transformFlow.<br/>That flow transforms the incoming payload into JSON format and returns the response to the HTTP request. The response of the request is stored in a target variable named the Result.<br/>What is the payload at the Logger component after the HTTP Request?",
        image: "https://i.imgur.com/T9Ti5h3.png",
        answers: {
          a: "null",
          b: "The original XML payload",
          c: "A non-empty Java object",
          d: "The returned JSON response"
        },
        correctAnswer: "b"
      },
      {
        question: "A JSON payload is set in the Set Payload transformer.<br/>what is logged by the Logger?",
        image: "https://i.imgur.com/jk4TAcY.png",
        answers: {
          a: "JSON",
          b: "String",
          c: "Array",
          d: "Object"
        },
        correctAnswer: "b"
      },
      {
        question: "A Mule application contains a global error handler configured to catch any errors.<br/>Where must the global error handler be specified so that the global error handler catches all errors from flows without their own error handlers?",
        image: "",
        answers: {
          a: "Nowhere, the global error handler is automatically used",
          b: "A global element",
          c: "The pom.xml file",
          d: "A configuration properties file"
        },
        correctAnswer: "b"
      },
      {
        question: "How many private flows does APIkit generate from the RAML specification?<br/>#RAML 1.0<br/>title: ACME Car Rentals API<br/>version: 1.0<br/>/rentals:<br/>get:<br/>responses:<br/>200:<br/>400:<br/>/customers:<br/>get:<br/>responses:<br/>200:<br/>400:<br/>post:<br/>responses:<br/>201:<br/>",
        image: "",
        answers: {
          a: "5",
          b: "3",
          c: "2",
          d: "1"
        },
        correctAnswer: "b"
      },
      {
        question: "Mule project contains a DataWeave module called MyModule.dwo that defines a function named formatString.The module is located in the project's src/main/resources/modules folder.<br/>What is the correct way in DataWeavw code to import MyModule using a wildcard and then call the module's formatString function?",
        image: "",
        answers: {
          a: "<br/>%dw 2.0<br/>output application/JSON<br/>import*from modules::<br/>MyModule<br/>---<br/>MyModule::formatString(”annie point”)",
          b: "<br/>%dw 2.0<br/>output application/JSON<br/>import*from modules.MyModule<br/>---<br/>formatString(”annie point”)",
          c: "<br/>%dw 2.0<br/>output application/JSON<br/>import*from modules::<br/>MyModule<br/>---<br/>MyModule.formatString(”annie point”)",
          d: "<br/>%dw 2.0<br/>output application/JSON<br/>import*from modules::MyModule<br/>---<br/>MyModule.formatString(”annie point”)"
        },
        correctAnswer: "a"
      },
      {
        question: "The main flow contains an HTTP Request. The HTT{ Listeners and HTTP Request default configurations.<br/>A Web client sends a GET request to the main flows HTTP Listener that includes a modelName query parameter.<br/>What values are accessible in the child flow?",
        image: "https://i.imgur.com/yzrednD.png",
        answers: {
          a: "<br/>payload<br/>modelName query param <br/>planeModel var",
          b: "<br/>payload<br/>planeModel var <br/>",
          c: "<br/>payload<br/>modelName query param <br/>",
          d: "payload"
        },
        correctAnswer: "c"
      },
      {
        question: "What DataWeave expression transforms the conductorIDs array to the XML output?",
        image: "https://i.imgur.com/KB9AcCG.png",
        answers: {
          a: "<br/>{(<br/>trains :  conductorIds map{ (engId, index) - > <br/>       train : {engineerId : engId}<br/>}<br/>)}",
          b: "<br/>{<br/>trains :  conductorIds map{ (engId, index) - > <br/>       train : {engineerId : engId}<br/>}<br/>}",
          c: "<br/>trains:{(<br/>trains :  conductorIds map( (engId, index) - > <br/>       train : {engineerId : engId}<br/>})<br/>)}",
          d: "<br/>trains:<br/>conductorIds map((engId, index) - > <br/>       train : {engineerId : engId}<br/>})<br/>)}",
        },
        correctAnswer: "a"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    
  })();

