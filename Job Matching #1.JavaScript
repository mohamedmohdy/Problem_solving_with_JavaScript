function match(candidate, job) {
  if (candidate.minSalary * 0.9 <= job.maxSalary) {
    return true;
  } else if (!candidate.minSalary || !job.maxSalary) {
    return error;
  } else {
    return false;
  }
}
