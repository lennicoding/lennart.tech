fetch(`https://cors-proxy.htmldriven.com/?url=https://api.instagram.com/v1/users/self/?access_token=EAAZAHwoUpy8YBAH98v2H6pyI7wtthn3wVtQN0XAQTTJNYknA80FZAlpAYiZCC4ZAMF53w5z1QCjKNrrFXgp5wORWzKZBAmZBYt79FsVClgF5Ec6wc12TiPTOUiJ5Ci4YUwK51SbP4oqSIHSGNnuwhiYLfXWyUqhGlZCfyVYTZAuP4DfYlyUINJLloXqxtNCPQZA1TxMXoyt2ZCZCaMl4ngP0Hn6`)
  .then(response => response.json())
  .then(data => console.log(data.data.counts.followed_by))
