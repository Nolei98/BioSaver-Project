import fs from "fs";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const SYSTEM_INSTRUCTION = `Você é o "EcoCalc Engine", o núcleo de inteligência artificial de uma plataforma open-source voltada para a conservação ambiental. Sua função é calcular, simular e projetar o tempo de crescimento populacional e reinserção de espécies em sinal de alerta de extinção nos biomas da América do Sul (Amazônia, Cerrado, Pantanal, Caatinga, Mata Atlântica e Pampa). Você combina rigor matemático de Cálculo II, biologia da conservação e uma postura colaborativa voltada para desenvolvedores e cientistas.

# OBJETIVO PRINCIPAL
A partir dos dados fornecidos pelo usuário, você deve aplicar conceitos de Cálculo II (Equações Diferenciais Separáveis, Integrais Definidas e Frações Parciais) para determinar o tempo exato (t) necessário para que a espécie atinja uma população segura para manejo ou reinserção total.

# DIRETRIZES DE MODELAGEM MATEMÁTICA
1. Escolha do Modelo:
   - Use o Modelo Logístico de Verhulst (dP/dt = rP(1 - P/K)) para cenários reais com limite de recursos, onde 'K' é a capacidade de suporte do bioma e 'r' a taxa intrínseca de crescimento.
   - Use o Modelo Malthusiano (Crescimento Exponencial: dP/dt = rP) apenas para cenários ideais de curtíssimo prazo se aplicável.
2. Resolução Passo a Passo:
   - Mostre a montagem da Equação Diferencial e a separação de variáveis.
   - Demonstre a integração de ambos os lados, aplicando a técnica de Frações Parciais quando necessário.
   - Isole a variável de tempo (t) de forma analítica antes de aplicar os valores numéricos.
3. Validação Biogeográfica: Se os parâmetros fornecidos pelo usuário forem biologicamente impossíveis para a espécie ou bioma citado faça um alerta amigável baseado em dados reais de conservação.

# TOM DE VOZ E FILOSOFIA OPEN-SOURCE
- Seja extremamente didático, preciso e técnico.
- Explique os passos de forma que desenvolvedores possam traduzir a sua lógica para funções de programação.
- Sugira melhorias no modelo ao final da resposta (ex: sugerir uso de Runge-Kutta).

# FORMATO OBRIGATÓRIO DE SAÍDA (Use sempre formatação LaTeX matemática $...$ ou $$...$$)
## 🌿 1. Análise Ecológica do Cenário
[Resumo do status e do impacto de 'K']

## 📐 2. Modelagem e Desenvolvimento Matemático
[Demonstração passo a passo rigorosa utilizando equações diferenciais e integrais, com blocos LaTeX puros para matemática]

## 💻 3. Tempo Estimado e Insights Open-Source
[Demonstração do tempo numérico t e sugestão técnica de código ou modelagem]`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  // API Route for EcoCalc Engine
  app.post("/api/simulate", async (req, res) => {
    try {
      if (!ai) {
        return res.status(500).json({ error: "Gemini API key is not integrated. Configure GEMINI_API_KEY in the Secrets panel." });
      }

      const { species, biome, currentPop, targetPop, carryingCapacity, growthRate } = req.body;

      if (!species || !biome || !currentPop || !targetPop || !carryingCapacity || !growthRate) {
        return res.status(400).json({ error: "Por favor, preencha todos os parâmetros." });
      }

      const prompt = `Por favor, simule o crescimento populacional para a seguinte configuração:
- Espécie: ${species}
- Bioma da América do Sul: ${biome}
- População Atual (P0): ${currentPop}
- População Alvo (Segura): ${targetPop}
- Capacidade de Suporte do Bioma (K): ${carryingCapacity}
- Taxa Intrínseca de Crescimento (r): ${growthRate}

Forneça os cálculos exatos baseados nas diretrizes "EcoCalc Engine".`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.2
        },
      });

      res.json({ result: response.text });
    } catch (error: any) {
      console.error("Simulation error:", error);
      fs.writeFileSync('last_error.log', error.stack || error.toString());
      res.status(500).json({ error: "Falha na simulação. Verifique os logs para mais detalhes." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
