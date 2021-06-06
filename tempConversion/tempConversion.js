const ctof = function(C) {
  let F = 0;
    F = C * 9/5 + 32;
    F = F.toFixed(1);
    F = parseFloat(F);
  return F;
};

const ftoc = function(F) {
  let C = 0;
  C = (F - 32) * 5/9;
  C = C.toFixed(1);
  C = parseFloat(C);
  return C;
};

module.exports = {
  ftoc,
  ctof
};
