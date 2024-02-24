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

    test('Alterar o nome de um treinador pokemon', async () => {
        const result = await userService.update('Maria', 13)

        expect(result).toEqual('Trainer updated')
    })

    test('Alterar o nome de um treinador pokemon inexistente', async () => {
        try {
            await userService.update('Maria', 1);
        } catch (error: any) {
            expect(error.message).toEqual('Trainer not find');
        }
    })
})