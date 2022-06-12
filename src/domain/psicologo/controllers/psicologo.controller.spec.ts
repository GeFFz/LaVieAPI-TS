import supertest from "supertest";
import app from "../../..";

describe('No controller, ao executar functions', () => {

    describe('create', () => {
        test('em caso de sucesso, deve retornar 201', async () => {

            const response = await supertest(app)

            .post('/psicologos')

            .send({
                nome: "aloha",
                email: "test1@gmail.com", //UNIQUE
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            });

            expect(response.status).toBe(201);
            expect(response.body.nome).toBe("aloha");
        })

    })

})