{
  "host": "localhost",
  "port": "3000",
  "config": {
  <% if (corbel) { %>"corbel": {
      "urlBase": "http://api.<%= domain %>.com/",
      "clientId": "<%= clientId %>",
      "clientSecret": "<%= clientSecret %>",
      "domain": "<%= domain %>",
      "scopes": "<%= domain %>:comp",
      "userScopes": "<%= domain %>:comp:user",
      "audience": "http://iam.corbel.io",
       }<% } %>
  }
}
