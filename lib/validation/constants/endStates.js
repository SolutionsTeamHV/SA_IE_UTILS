const internalEndStates = ["dismissToParent", "resumeCPR"];
const endStates = [
  "approve",
  "decline",
  "manualReview",
  "auto_approved",
  "auto_declined",
  "needs_review",
  "user_cancelled",
  "manually_approved",
  "manually_declined",
];

module.exports = {
  internalEndStates,
  endStates,
};
