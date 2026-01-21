const fs = require("fs");

const jobId = 448768;

try {
  // Read raw jobs
  const rawData = fs.readFileSync("jobs.json", "utf8");
  const jobs = JSON.parse(rawData);
  const rawJob = jobs.find((j) => j.id == jobId);

  let output = "";
  if (rawJob) {
    output += "=== RAW JOB DATA ===\n";
    output += "Title: " + rawJob.title + "\n";
    output +=
      "Comp & Benefits: " +
      extractCompSection(
        rawJob.full_description + " " + rawJob.application_info
      ) +
      "\n";
    output += "\n--- Full Description Snippet ---\n";
    output += rawJob.full_description.slice(0, 500) + "...\n";
  }

  if (parsedJob) {
    output += "\n=== PARSED JOB DATA ===\n";
    output += "Salary: " + JSON.stringify(parsedJob.salary, null, 2) + "\n";
  }

  fs.writeFileSync("inspect_output.txt", output);
  console.log("Output written to inspect_output.txt");
} catch (error) {
  fs.writeFileSync("inspect_output.txt", "Error: " + error.message);
}

function extractCompSection(text) {
  if (!text) return "N/A";
  const compMatch = text.match(
    /Compensation\s*(?:and|&)?\s*Benefits?:?\s*([\s\S]*?)(?:\n\n|\n[A-Z][a-z]+:|Targeted Degrees|$)/i
  );
  if (compMatch) return compMatch[1].trim();
  return "Could not extract specific Comp & Benefits section via regex";
}
