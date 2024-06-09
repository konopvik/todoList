import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// Set some defaults (required if your JSON file is empty)
db.data ||= { posts: [] };

// Write to the file
await db.write();

export default db;
