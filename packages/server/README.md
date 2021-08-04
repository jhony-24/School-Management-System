### Setup local development

Create mysql environments.
Before to put these you need create a name for your database

```
ENVIRONMENT=DEVELOPMENT
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_PORT=

```

To use firebase you need to create a **firestore_secret_key.json** file

```
/src
  /config
    /private
      firestore_secret_key.json
```

[https://console.firebase.google.com/u/0/](https://console.firebase.google.com/u/0/)

### Code Rules

- Pascal Case -> Class , Types , Interfaces
- Camel Case -> Functions
- Snake Case -> Variables , objetos , object properties
