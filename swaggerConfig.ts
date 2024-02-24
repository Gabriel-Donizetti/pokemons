import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Pokémon',
            version: '1.0.0',
            description: 'Documentação da API de Pokémon',
        },
        servers: [
            {
                url: 'http://localhost:4000', // Altere para o URL correto da sua aplicação
                description: 'Servidor local',
            },
        ],
    },
    apis: ['src/routes/*.ts'], // Altere para o caminho correto dos seus arquivos de rotas
};

const specs = swaggerJsdoc(options);

export default specs;
