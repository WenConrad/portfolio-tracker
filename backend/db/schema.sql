DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS portfolios CASCADE;
DROP TABLE IF EXISTS positions CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  settings JSON
);

CREATE TABLE portfolios (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE positions (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  book_cost INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  portfolio_id INTEGER REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  portfolio_id INTEGER REFERENCES portfolios(id) ON DELETE CASCADE
);