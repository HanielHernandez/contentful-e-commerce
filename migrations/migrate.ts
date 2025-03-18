import Migration, { MigrationFunction, runMigration } from "contentful-migration";
import dotenv from "dotenv";
// import addAcategory from "./01-add-category";
// import addProducts from "./02-add-product-content-type";
import addLinks from "./03-add-link-content-type";
// import yargs from "yargs/yargs";
// import { hideBin } from 'yargs/helpers'

dotenv.config();

export interface ContentFulMigration {
  name: string,
  migrateFunction: MigrationFunction
}

const migrations: ContentFulMigration[] = [
  //addAcategory,
  //addProducts,
  addLinks];

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

// const argv = yargs(hideBin(process.argv) ).option("only", {
//   alias: "only",
//   description: "rouns only one file",
//   type: "string",
//   demandOption: true, // Ensures this argument is required
// }).help().parse();

async function migrateContent(){
 try {
   await runMigration({
     migrationFunction: (migration: Migration) => {


       for (const migrationFile of migrations) {
         const { name, migrateFunction } = migrationFile;
         console.log("runing migration", name);
         migrateFunction(migration);
       }
     },
     spaceId: SPACE_ID,
     accessToken: ACCESS_TOKEN,
   });
 } catch (e) {
   console.error(e);
 }
}

migrateContent();