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
            expect(error.message).toEqual('Trainer not found');
        }
    })

    test('Deletar um treinador pokemon', async () =>{
        const trainer = await userService.create({ name: 'Gabriel', type: 'Gengar' })
        const trainerId = trainer.id;

        const result = await userService.delete(trainerId)

        expect(result).toEqual('Trainer deleted')
    })

    test('Deletar um treinador pokemon inexistente', async() => {
        try {
            await userService.delete(10000)
        } catch (error: any) {
            expect(error.message).toEqual('Trainer not found')
        }
    })

    test('Buscar um treinador pokemon', async () =>{
        const result = await userService.getTrainer(15)

        expect(result.id).toEqual(15)
        expect(result.level).toEqual(1)
        expect(result.trainer).toEqual('Gabriel')
        expect(result.type).toEqual('Gengar')
    })

    test('Buscar um treinador pokemon inexistente', async () =>{
        try {
            await userService.getTrainer(10000)
        } catch (error: any) {
            expect(error.message).toEqual('Trainer not found')
        }
    })

    test('Buscar todos os treinadores', async () =>{
        const result = await userService.getAllTrainers()

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
    })

    test('Batalha entre treinadores pokemon', async () =>{
        const trainer1 = await  userService.create({ name: 'Gabriel', type: 'Gengar' })
        const trainer2 = await userService.create({ name: 'Tereza', type: 'Umbreon' })

        const level1 = trainer1.level
        const level2 = trainer2.level

        const result =  await userService.battle(trainer1.id, trainer2.id)
        const idwinner = result.id


        const winner = await userService.getTrainer(idwinner)

        if(idwinner == trainer1.id){
        expect(winner.level).toBeGreaterThan(level1)
        try {
            const loser = await userService.getTrainer(trainer2.id)
            expect(loser.level).toBeLessThan(level2)
        } catch (error:any) {
            expect(error.message).toEqual('Trainer not found')
        }
        }else {
        expect(winner.level).toBeGreaterThan(level2)
        try {
            const loser = await userService.getTrainer(trainer1.id)
            expect(loser.level).toBeLessThan(level1)
        } catch (error:any) {
            expect(error.message).toEqual('Trainer not found')
        }
        }
    })

    test('Batalha entre treinadores pokemon inexistente', async () =>{
        try {
            await userService.battle(-1, -2)
        } catch (error:any) {
            expect(error.message).toEqual('Trainer not found')
        }
    })
})