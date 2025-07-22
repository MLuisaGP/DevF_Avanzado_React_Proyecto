import {  useState } from "react"

export const OllamaChat= ()=>{
    const [response,setResponse]=useState('');
    const [input, setInput]=useState('');
    const [enviando, setEnviando] = useState(false);

const chatWithOllama = async () => {
      try {
        setEnviando(true);
        setResponse('');
        const res = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gemma3:latest",
            prompt: input,
            stream: false,
          }),
        });

        const data = await res.json();
        setResponse(data.response);
      } catch (error) {
        console.error("Error al conectar con Ollama:", error);
      }
    setEnviando(false);
    };
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <div className="flex items-center space-x-2 p-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Preguntale a Ollamad"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={chatWithOllama}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </div>
        <h1>Ollama (Gemma) dice:</h1>
        <p>{response || (enviando && "Cargando...")}</p>
      </div>
    );
}