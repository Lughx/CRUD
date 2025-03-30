# CRUD

## Método de utilización
### 1. Inicializar un nuevo codespace

### 2. Descargar las dependencias
```sh
npm i
```

### 3. Crear una instancia de SQL Server con Docker  
```sh
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=YourPassword123!' \
    -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest
```
### 4. Instalar sqlcmd
```sh
sudo apt update
sudo apt install mssql-tools unixodbc-dev
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
```

### 5. Inicializar la base de datos
Se usa el siguiente comando para inicializar la base de datos
```sh
sqlcmd -S localhost -U sa -P YourPassword123! -i init.sql
```

### 7. Iniciar el servidor 
```sh
npm run dev
```

### 6. Insertar datos a la base de datos
Se pueden insertar usuarios mediante el metodo post a la ruta ```http://localhost:8080/api/users```, incluyendo los datos de ```firstName```, ```lastName``` y ```email```

### 6. Ver datos a la base de datos
Para ver los datos que insertamos podemos verlos en la ruta  ```http://localhost:8080/api/users``` pero con el metodo get