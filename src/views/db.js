import lowdb from "lowdb";
import FileSync from "lowdb/adapters/LocalStorage";

const adapter = new FileSync("db.json");
const db = lowdb(adapter);

db.defaults({
    users: [],
    events: []
}).write();

export default db;
