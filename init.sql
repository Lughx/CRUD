IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'Lienzo')
BEGIN
    CREATE DATABASE Lienzo;
END;
GO

USE Lienzo;
GO

CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    user_email VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

CREATE TABLE Tickets (
    ticket_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    created_at DATETIME DEFAULT GETDATE(),
    expires_at DATETIME,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Tile (
    tile_id INT IDENTITY(1,1) PRIMARY KEY,
    x_axis INT,
    y_axis INT,
    state BIT
);

CREATE TABLE Questions (
    question_id INT IDENTITY(1,1) PRIMARY KEY,
    text VARCHAR(255),
    correct_answer VARCHAR(255)
);

CREATE TABLE Answers (
    answer_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    question_id INT REFERENCES Questions(question_id),
    text VARCHAR(255)
);

CREATE TABLE Tries (
    try_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    tile_id INT REFERENCES Tile(tile_id),
    date DATETIME DEFAULT GETDATE(),
    was_successful BIT
);

