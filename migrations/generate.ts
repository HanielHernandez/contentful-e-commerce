import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Define the function to generate a new file from a template
function generateFile(fileName: string, name: string): void {
  // Path to the template
  const templatePath: string = path.join(__dirname, "base.ts");

  // Read the template file asynchronously
  fs.readFile(templatePath, "utf8", (err, template) => {
    if (err) {
      console.error("Error reading the template:", err);
      return;
    }

    // Replace the placeholder {{name}} with the provided name
    const content: string = template.replace("{{name}}", name);

    // Path where the new file will be created
    const outputFilePath: string = path.join(__dirname, `${fileName}.ts`);

    // Write the generated content to the new file
    fs.writeFile(outputFilePath, content, (err) => {
      if (err) {
        console.error("Error writing the file:", err);
        return;
      }

      console.log(`File "${fileName}.ts" has been generated!`);
    });
  });
}

// Get the file name and name to replace from the command line arguments
const args: string[] = process.argv.slice(2);
const fileName: string = args[0];
const name: string = args[1];

// Call the function to generate the file
if (fileName && name) {
  generateFile(fileName, name);
} else {
  console.log("Please provide both the file name and the name to replace.");
}
