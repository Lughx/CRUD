# CRUD

Para ejecutar esta API se necesita crear un nuevo codespace

### 1. Dependencias
Para instalar las dependencias de nod ese usa el siguiente comando
```sh
npm i
```

### 2. SQL Server
Se necesita crear una nueva instancia de SQL Server con el siguiente comando  
```sh
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=YourPassword123!' \
    -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest
```
### 3. Instalar sqlcmd
```sh
sudo apt update
sudo apt install mssql-tools unixodbc-dev
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
```

### 4. Inicializar la base de datos
Se usa el siguiente comando para inicializar la base de datos
```sh
sqlcmd -S localhost -U sa -P YourPassword123! -i init.sql
```

### 5. Iniciar el servidor 
```sh
npm run dev
```

### 6. Insertar datos a la base de datos
Se pueden insertar usuarios mediante el metodo post a la ruta publica de nuestro servidor ```/api/users```, incluyendo los datos de ```firstName```, ```lastName``` y ```email```

### 7. Ver datos a la base de datos
Para ver los datos que insertamos podemos verlos en la ruta a la ruta publica de nuestro servidor ```/api/users``` pero con el metodo get