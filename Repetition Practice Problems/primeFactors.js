let n = parseInt(process.argv[2]);
for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}
if (n > 1) console.log(n);
