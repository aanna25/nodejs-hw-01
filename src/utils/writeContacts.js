import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

// export const writeContacts = async (updatedContacts) => {};

export const writeContacts = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
