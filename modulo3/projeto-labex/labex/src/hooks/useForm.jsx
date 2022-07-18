import { useState } from "react";

export const useForm = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial);

    const controlaCampo = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    const limpaCampos = () => {
        setForm(estadoInicial);
    }

    return [form, controlaCampo, limpaCampos];
}