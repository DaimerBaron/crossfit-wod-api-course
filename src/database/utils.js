import fs from "fs";

export const saveDatabase = (db) => {
  fs.writeFileSync(
    "./src/database/db.json",
    JSON.stringify(db, null, 2),
    "utf-8"
  );
};

