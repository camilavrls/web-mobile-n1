"use client";

import React, { useState, useEffect } from "react";
import "./bilhete.css";

export default function Bilhetes() {
    const [bilhetes, setBilhetes] = useState([]);
    const [novoBilhete, setNovoBilhete] = useState("");

    useEffect(() => {
        buscarBilhetes();
    }, []);

    const buscarBilhetes = async () => {
        try {
            console.log("Buscando bilhetes...");
            const response = await fetch("http://localhost:8000/notes");
            if (!response.ok) {
                throw new Error("Erro ao buscar os bilhetes");
            }
            const data = await response.json();
            console.log("Bilhetes buscados:", data);
            setBilhetes(data);
        } catch (error) {
            console.error("Erro ao buscar os bilhetes:", error);
        }
    };

    const adicionarBilhete = async () => {
        try {
            console.log("Adicionando bilhete:", novoBilhete);
            const response = await fetch("http://localhost:8000/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ note: novoBilhete }),
            });
            if (!response.ok) {
                throw new Error("Erro ao adicionar bilhete");
            }
            const data = await response.json();
            console.log("Bilhete adicionado:", data);
            setBilhetes([...bilhetes, data]);
            setNovoBilhete("");
        } catch (error) {
            console.error("Erro ao adicionar bilhete:", error);
        }
    };

    const excluirBilhete = async (id) => {
        try {
            console.log(`Excluindo bilhete com id: ${id}`);
            const response = await fetch(`http://localhost:8000/notes/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Erro ao excluir bilhete");
            }
            setBilhetes(bilhetes.filter(bilhete => bilhete.id !== id));
            console.log(`Bilhete excluído com id: ${id}`);
        } catch (error) {
            console.error("Erro ao excluir bilhete:", error);
        }
    };

    return (
        <div>
            <h1>BILHETES POSITIVOS</h1>
            <div className="note-container">
                {bilhetes.map(bilhete => (
                    <Cartao key={bilhete.id} bilhete={bilhete.note} onDelete={() => excluirBilhete(bilhete.id)} />
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    adicionarBilhete();
                }}
            >
                <textarea
                    placeholder="Escreva uma mensagem positiva..."
                    value={novoBilhete}
                    onChange={(e) => setNovoBilhete(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="azul">Adicionar bilhete</button>
            </form>
        </div>
    );
}

function Cartao({ bilhete, onDelete }) {
    return (
        <div className="note">
            {bilhete}
            <button onClick={onDelete} className="delete-button">x</button>
        </div>
    );
}
