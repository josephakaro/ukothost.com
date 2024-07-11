CREATE DATABASE IF NOT EXISTS ukothost;

DROP DATABASE ukothost;

USE ukothost;

CREATE USER IF NOT EXISTS 'ukothost'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL ON ukothost.* TO 'ukothost'@'localhost';


FLUSH PRIVILEGES;

-- ==============================================================================================
-- User Tables:

CREATE TABLE IF NOT EXISTS users(
    userId INT AUTO_INCREMENT,
    authId VARCHAR(100) NOT NULL,
    userImage VARCHAR(100) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    userRole ENUM('admin', 'client') NOT NULL,
    userStatus ENUM('active', 'inactive') NOT NULL,
    userOnline ENUM('online', 'offline') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(userId)
)

DROP TABLE users;
ALTER TABLE tickets DROP FOREIGN KEY userId;

-- Ticket Tables:
CREATE TABLE IF NOT EXISTS tickets(
    ticketId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    ticketTitle VARCHAR(50) NOT NULL,
    ticketContent TEXT NOT NULL,
    ticketStatus ENUM('open', 'closed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(ticketId),
    FOREIGN KEY (userId) REFERENCES users(userId)
)

-- Ticket Comment Tables:
CREATE TABLE IF NOT EXISTS ticketComments(
    commentId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    ticketId INT NOT NULL,
    commentContent TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(commentId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (ticketId) REFERENCES tickets(ticketId)
)

-- Ticket Attachment Tables:
CREATE TABLE IF NOT EXISTS ticketAttachments(
    attachmentId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    ticketId INT NOT NULL,
    attachmentName VARCHAR(50) NOT NULL,
    attachmentPath VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(attachmentId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (ticketId) REFERENCES tickets(ticketId)
)

-- Order Tables:
CREATE TABLE IF NOT EXISTS orders(
    orderId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    orderTitle VARCHAR(50) NOT NULL,
    orderContent TEXT NOT NULL,
    orderamount DECIMAL(10, 2) NOT NULL,
    orderStatus ENUM('pending', 'filled','rejected') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(orderId),
    FOREIGN KEY (userId) REFERENCES users(userId)
)

-- Comment Tables:
CREATE TABLE IF NOT EXISTS userComments(
    commentId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    commentContent TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(commentId),
    FOREIGN KEY (userId) REFERENCES users(userId)
)

-- KnowledgeBase Tables:
CREATE TABLE IF NOT EXISTS knowledgeBase(
    baseId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    Title VARCHAR(50) NOT NULL,
    baseContent TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY(baseId),
    FOREIGN KEY (userId) REFERENCES users(userId)
)

-- Blog Post Tables:
CREATE TABLE IF NOT EXISTS blogPost(
    postId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    commentId INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    postContent TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(postId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (commentId) REFERENCES userComments(commentId)
)

-- VPS Tables:
CREATE TABLE IF NOT EXISTS product(
    productId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    productName VARCHAR(50) NOT NULL,
    productDescription TEXT NOT NULL,
    productStatus ENUM('active', 'inactive') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(productId),
    FOREIGN KEY (userId) REFERENCES users(userId)
)