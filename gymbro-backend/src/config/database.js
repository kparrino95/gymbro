const { Surreal } = require('surrealdb');

const db = new Surreal();

async function connectDB() {
  try {
    // Connessione al database in locale
    await db.connect('ws://localhost:20988/rpc');
    await db.signin({
        username: 'root',
        password: 'root',
    });
    await db.use({
        namespace: 'devns',
        database: 'devdb'
    });
    console.log('Connected to SurrealDB!');
  } catch (error) {
    console.error('Error connecting to SurrealDB:', error);
  }
}

module.exports = { db, connectDB };