const surveyResults = [];

function generateResult(percentages) {
  const result = {};
  for (let q in percentages) {
    const options = Object.keys(percentages[q]);
    let randomIndex = Math.floor(Math.random() * options.length);
    while (Math.random() * 100 > percentages[q][options[randomIndex]]) {
      randomIndex = Math.floor(Math.random() * options.length);
    }
    result[q] = options[randomIndex];
  }
  return result;
}

const questionPercentages = {
  Q1: { "Yes": 98 },
  Q2: { "5-7 days": 65 },
  Q3: { "3-5 days": 50 },
  Q4: { "5-7 days": 60, "7 days+": 20 },
  Q5: { "5-7 days": 30, "7 days+": 55 },
  Q6: { "3-5 days": 66 },
  Q7: { "2-3 days": 80 },
  Q8: { "Often": 63 },
  Q9: { "Always": 42, "Often": 33 },
  Q10: { "Sometimes": 55, "Rarely": 23, "Never": 11 },
  Q11: { "Sometimes": 17, "Rarely": 47, "Never": 16 },
  Q12: { "Always": 12, "Often": 62 },
  Q13: { "Always": 44, "Often": 27 },
  Q14: { "Very satisfied": 12, "Satisfied": 38, "Neutral": 26 },
  Q15: { "Very satisfied": 22, "Satisfied": 45 },
  Q16: { "Neutral": 29, "Dissatisfied": 36, "Very dissatisfied": 23 },
  Q17: { "Dissatisfied": 47, "Very dissatisfied": 22 },
  Q18: { "Very satisfied": 39, "Satisfied": 28, "Neutral": 12 },
  Q19: { "Very satisfied": 21, "Satisfied": 66, "Neutral": 8 },
};

for (let i = 0; i < 200; i++) {
  surveyResults.push(generateResult(questionPercentages));
}
console.log(JSON.stringify(surveyResults, null, 2)); 
