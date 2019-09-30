import { isInternalLink } from '../main'
import { sum } from '../sum'

//Matcher Comuns

test('should return false given external link', () => {
  expect(isInternalLink('https://google.com')).toBe(false)
})

test('should return true given internal link', () => {
  expect(isInternalLink('/some-page')).toBe(true)
})

test('Should return 15 adding 5 plus 10', () => {
    expect((sum(5, 10))).toBe(15)
})

//Números

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adicionando números de ponto flutuante', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3)    Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3) // Isso funciona.
})

//Strings

test('não existe I em team', () => {
    expect('team').not.toMatch(/I/)
})

test('mas existe "stop" em Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

//Arrays and Iterables

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
]

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})
