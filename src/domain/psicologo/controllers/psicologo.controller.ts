import { Psicologos } from "../models/psicologos";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { psicologoService } from "../services";

export const PsicologoController = {
  async create(req: Request, res: Response) {
    try {
      const newPsicologo = await psicologoService.registerPsicologo(req.body);
      return res.status(201).json(newPsicologo);
    } catch (error) {

      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const alteredPsicologo = await psicologoService.alterPsicologo(req.body, req.params);
      return res.status(200).json(alteredPsicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },

  async delete(req: Request, res: Response) {
    try {      
      await psicologoService.excludePsicologo(req.params);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async getAll(req: Request, res: Response) {
    try {
      const psicologos = await psicologoService.allPsicologo();
      return res.json(psicologos);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const psicologo = await psicologoService.onePsicologo(req.params);
      return res.json(psicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  
};
