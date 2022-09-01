import { Request, Response } from "express";
import { insertAddressDB } from "../data/insertAddressDB";
import { getAddressInfo } from "../services/getAdressInfo";

export const insertAddress = async (req: Request, res: Response) => {
    try {
        const { cep, numero, complemento } = req.body;
        
        if(!cep || !numero) {
            throw new Error("Verifique os campos cep e numero. Os dados devem estar preenchidos.");            
        } 

        const address = await getAddressInfo(cep);

        if (!address || address === undefined) {
            throw new Error("CEP inválido.");
        }

        await insertAddressDB(cep, numero, complemento, address);

        res.status(200).send("Endereço criado com sucesso!");

    } catch (error: any) {
        switch(error.message) {
            case "Verifique os campos cep e numero. Os dados devem estar preenchidos.":
                res.status(422).send({ message: error.message });
                break;
            case "CEP inválido.":
                res.status(404).send({ message: error.message });
                break;
            default:
                res.status(500).send(error.sqlMessage || { message: "Erro inesperado!" });
                break;
        }
    }
}