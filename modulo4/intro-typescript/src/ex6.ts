function operacoes(num1: number, num2: number): void {
    console.log(`A soma dos números é: ${num1 + num2}`)
    console.log(`A diferença dos números é: ${num1 - num2}`)
    console.log(`O produto dos números é: ${num1 * num2}`)
    console.log("O maior deles é", num1 > num2 ? num1 : num2)
}

operacoes(10, 5)