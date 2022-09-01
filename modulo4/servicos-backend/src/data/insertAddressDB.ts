import { Address } from "../types/types";
import { connection } from "./connection";

export const insertAddressDB = async (cep: string, numero: string, complemento: string | undefined, address: Address): Promise<void> => {
    const { logradouro, bairro, cidade, estado } = address;
    const id_user: string = Date.now().toString();

    await connection("exercicios_servicos_address").insert({
        id_user,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    });
}