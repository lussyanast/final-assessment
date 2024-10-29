function fibonacciSeries(n) {
    const series = [];
    for (let i = 0; i <= n; i++) {
        series.push(fibonacci(i));
        console.log(`[ ${series.join(', ')} ]`);
    }
    return series;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacciSeries;
