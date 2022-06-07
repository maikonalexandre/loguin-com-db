const Database = require('./config');
const initDb = {
    async init(){
        const db = await Database();

        await db.exec(`CREATE TABLE loguin(
            nome TEXT PRIMARY KEY,
            pass TEXT
        )`);
        await db.close();
    }
}
initDb.init();
