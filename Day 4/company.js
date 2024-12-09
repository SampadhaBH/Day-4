function calculateBonus(yearsOfExperience, performanceScore) {
    let bonusPercentage = 0;
  
    if (yearsOfExperience > 5 && performanceScore > 8) {
      bonusPercentage = 20;
    } else if (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) {
      bonusPercentage = 10;
    } else if (yearsOfExperience <= 3) {
      bonusPercentage = 5;
    }
  
    return bonusPercentage;
  }
  
  // Example: Employee with 4 years of experience and a performance score of 9
  const yearsOfExperience = 4;
  const performanceScore = 9;
  
  const bonusPercentage = calculateBonus(yearsOfExperience, performanceScore);
  console.log(The bonus percentage is: ${bonusPercentage}%);