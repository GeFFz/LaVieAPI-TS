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

    async getBairro(cep: string) {
        const fullAddress = await ViaCepAPI.getAddress(cep);
        return fullAddress.bairro;
    }

    async alterPsicologo(data: any, params: any) {
        const { id } = params;
        const { senha, cep } = data;
        const payloadUpdate = {};

        Object.assign(payloadUpdate, data);

        if (senha) {
            const newSenha = bcrypt.hashSync(senha, 10);
            Object.assign(payloadUpdate, { senha: newSenha });
        }

        await Psicologos.update({
            ...payloadUpdate,
            bairro: await this.getBairro(cep),
        }, {
            where: { id },
        });

        const psicologo = await Psicologos.findByPk(id);
        return psicologo;
    }

    async excludePsicologo(params: any) {
        const { id } = params;
        // const hasAtendimentos = await Atendimentos.count({
        //   where: {
        //     psicologo_id: id,
        //   },
        // });

        // if (hasAtendimentos) {
        //   return res
        //     .status(401)
        //     .json(
        //       "Existe atendimentos associados a esse psicologo, não é possivel deletar!"
        //     );
        // }

        await Psicologos.destroy({
            where: {
                id,
            },
        });
        return
    }

    async allPsicologo() {
        const fullPsicologos = await Psicologos.findAll();
        return fullPsicologos;

    }

    async onePsicologo(params: any) {
        const { id } = params;
        const unitPsicologo = await Psicologos.findByPk(id);
        return unitPsicologo;
    }

}