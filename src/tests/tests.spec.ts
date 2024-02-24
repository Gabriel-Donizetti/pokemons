import { describe } from 'node:test'
import { expect, test } from 'vitest'
import UserService from '../service/userService'

describe("Testes unitários", () => {
    const userService = new UserService()

    test('Criar um novo treinador pokemon', async () => {
        const result = await userService.create({ name: 'Gabriel', type: 'Gengar' })
        expect(result).toHaveProperty('id')
        expect(result.trainer).toEqual('Gabriel')
        expect(result.type).toEqual('Gengar')
        expect(result.level).toEqual(1)
    })


})