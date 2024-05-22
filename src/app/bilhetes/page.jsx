"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Botao from "../shared/button/button";
import "./bilhete.css";

export default function Bilhetes() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            console.log("Fetching notes...");
            const response = await axios.get("http://localhost:3001/notes");
            console.log("Fetched notes:", response.data);
            setNotes(response.data);
        } catch (error) {
            console.error("Erro ao buscar os bilhetes:", error);
        }
    };

    const addNote = async () => {
        try {
            console.log("Adding note:", newNote);
            const response = await axios.post("http://localhost:3001/notes", { note: newNote });
            console.log("Added note:", response.data);
            setNotes([...notes, response.data]);
            setNewNote("");
        } catch (error) {
            console.error("Erro ao adicionar bilhete:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            console.log(`Deleting note with id: ${id}`);
            await axios.delete(`http://localhost:3001/notes/${id}`);
            setNotes(notes.filter(note => note.id !== id));
            console.log(`Deleted note with id: ${id}`);
        } catch (error) {
            console.error("Erro ao excluir bilhete:", error);
        }
    };

    return (
        <div>
            <h1>BILHETES POSITIVOS</h1>
            <div className="note-container">
                {notes.map(note => (
                    <Card key={note.id} note={note.note} onDelete={() => deleteNote(note.id)} />
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addNote();
                }}
            >
                <textarea
                    placeholder="Escreva uma mensagem positiva..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="azul">Adicionar bilhete</button>
            </form>
        </div>
    );
}

function Card({ note, onDelete }) {
    return (
        <div className="note">
            {note}
            <button onClick={onDelete} className="delete-button">x</button>
        </div>
    );
}
