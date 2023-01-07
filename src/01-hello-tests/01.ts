
export const sum = (a: number, b: number) => {
    return a + b;
}
export const mult = (a: number, b: number) => {
    return a * b;
}
export const splitIntoWords = (sentence: string) => {

    const words = sentence.toLowerCase().split(' ')

        return words.filter(e => e !== '' && e !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
        .replace('-', '')
        .replace(',', ''))

}