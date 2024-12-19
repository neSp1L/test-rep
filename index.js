function integrate(fn, a, b, n = 1000) {
    if (a >= b) throw new Error("Нижний предел должен быть меньше верхнего.");
    if (n <= 0) throw new Error("Число разбиений должно быть положительным.");

    const h = (b - a) / n; // Шаг
    let result = 0;

    for (let i = 1; i < n; i++) {
        result += fn(a + i * h);
    }

    result += (fn(a) + fn(b)) / 2;
    result *= h;

    return result;
}

module.exports = integrate;