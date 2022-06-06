import { Psicologos } from "../models/psicologos"; 
import bcrypt from "bcryptjs";
import { ViaCepAPI } from "../../../infrastructure/viaCep";

export class PsicologoService {

    async registerPsicologo(data: any) {
        const { senha, cep } = data;
        const newSenha = bcrypt.hashSync(senha, 10);

        const registeredPsicologo = await Psicologos.create({
            ...data,
            senha: newSenha,
            bairro: await this.getBairro(cep),
        });
        return registeredPsicologo;
    }

    async getBairro(cep:string){
        const fullAddress = await ViaCepAPI.getAddress(cep);
        return fullAddress.bairro;
    }
}