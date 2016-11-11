{
  "host": "localhost",
  "port": "3000",
  "config": {
  <% if (corbel) { %>"corbel": {
         "domain": "<%= domain %>",
         "clientId": "<%= clientId %>",
         "clientSecret": "<%= clientSecret %>",
         "urlBase": "http://api-int.<%= domain %>.com/",
         "scopes": "<%= domain %>:comp",
         "userScopes": "<%= domain %>:comp:user",
         "audience": "http://iam.corbel.io",
         "resourcesEndpoint": "http://api-int.<%= domain %>.com:8080/v1.0/",
         "iamEndpoint": "http://api-int.<%= domain %>.com:8082/v1.0/"
       }<% } %>
  }
}
