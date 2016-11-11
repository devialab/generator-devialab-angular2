{
  "host": "localhost",
  "port": "3000",
  "config": {
    <% if (webtranslateit) { %>"webtranslateit": {
           "base_url": "https://webtranslateit.com/api/projects/",
           "project_token": "<%= webtranslateitProjectToken %>",
           "langs": ["es", "en"]
     }<% } %>
  }
}
