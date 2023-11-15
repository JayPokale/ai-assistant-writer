export function randomId(n: number) {
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split("");
  var res = Array(n);
  res[0] = str[Math.floor(Math.random() * 52)];

  for (var i = 1; i < n; ++i) {
    res[i] = str[Math.floor(Math.random() * 62)];
  }

  return res.join("");
}
