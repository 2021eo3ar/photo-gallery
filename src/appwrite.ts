import { Client, Account, ID, Locale } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_PROJECT_ID);

export const account = new Account(client);

export const locale = new Locale(client);

export { ID };