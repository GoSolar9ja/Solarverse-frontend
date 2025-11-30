import { openDB, IDBPDatabase } from "idb";

export enum DatabaseStoreNames {
  INSTALLER_DETAILS = "installer-details",
}

export enum DatabaseKeyNames {
  BUSINESS_DETAILS = "business-details",
}

const initDB = async () => {
  return openDB("solarverse-details", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(DatabaseStoreNames.INSTALLER_DETAILS)) {
        db.createObjectStore(DatabaseStoreNames.INSTALLER_DETAILS);
      }
    },
  });
};

let dbInstance: IDBPDatabase | null = null;

export const getDB = async () => {
  if (!dbInstance) {
    dbInstance = await initDB();
  }
  return dbInstance;
};
