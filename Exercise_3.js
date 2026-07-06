const students = [
  { name: "Wei", score: 88 },
  { name: "Fatima", score: 95 },
  { name: "Diego", score: 72 },
  { name: "Nia", score: 64 },
  { name: "Sam", score: 91 },
];

function getAboveAverageStudents(students) {
  // Step 1: Calculated the total sum of all scores using .reduce()
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  
  // Step 2: Calculated the raw average and round it to 2 decimal places using parseFloat and .toFixed()
  const rawAverage = totalScore / students.length;
  const average = parseFloat(rawAverage.toFixed(2));
  
  // Logged the average to verify the calculation (Optional/Useful for debugging)
  console.log(`Class Average: ${average}`);

  // Step 3: Filtered out only the student objects whose score is strictly greater than the average
  const topStudents = students.filter(student => student.score > average);
  
  // Step 4: Mapped over the filtered array to extract just the string names
  const studentNames = topStudents.map(student => student.name);

  // Step 5: Returned the final clean array of names
  return studentNames;
}

console.log(getAboveAverageStudents(students)); 
