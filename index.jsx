import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP = "https://wa.me/21999629228"; // 🔁 TROCAR PELO SEU NÚMERO

const telas = {
  menu: null,

  "Catraca travada": {
    tipo: "Mecânico / Elétrico",
    passos: [
      "Verifique objeto preso nas hastes",
      "Desligue por 30 segundos",
      "Liberação manual no sistema",
      "Verifique alarmes",
      "Modo emergência",
    ],
    alerta: "Nunca force o giro",
  },

  "Luz vermelha": {
    tipo: "Software / Configuração",
    passos: [
      "Verifique cadastro ativo",
      "Confira horário de acesso",
      "Liberação manual",
      "Reinicie o sistema",
      "Reinicie rede se geral",
    ],
    alerta: "Verifique quantas pessoas foram afetadas",
  },

  "Sem comunicação": {
    tipo: "Rede",
    passos: [
      "Verifique cabos",
      "Confira LED de rede",
      "Reconectar no software",
      "Reinicie roteador",
      "Troque o cabo",
    ],
    alerta: "Não desconecte equipamentos em uso",
  },

  "Beep constante": {
    tipo: "Sensor",
    passos: [
      "Verifique posição da catraca",
      "Confira alertas",
      "Verifique software",
      "Giro completo",
      "Reinicie",
    ],
    alerta: "Anote horário do beep",
  },

  "Biometria": {
    tipo: "Leitura",
    passos: [
      "Teste outro usuário",
      "Verifique cadastro",
      "Limpe o leitor",
      "Recadastre",
      "Reinicie",
    ],
    alerta: "Não molhe o leitor",
  },

  "Sem energia": {
    tipo: "Elétrico",
    passos: [
      "Teste tomada",
      "Verifique disjuntor",
      "Confira cabo",
      "Verifique nobreak",
      "Não abra o equipamento",
    ],
    alerta: "Risco de choque",
  },
};

export default function GuiaC7Completo() {
  const [tela, setTela] = useState("menu");

  if (tela !== "menu") {
    const dados = telas[tela];

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto">
          <Button className="mb-4" onClick={() => setTela("menu")}>
            ← Voltar
          </Button>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-2">{tela}</h1>
              <p className="text-gray-500 mb-4">{dados.tipo}</p>

              <ul className="space-y-2 mb-4">
                {dados.passos.map((p, i) => (
                  <li key={i}>✅ {p}</li>
                ))}
              </ul>

              <p className="text-red-500 mb-6">⚠ {dados.alerta}</p>

              <Button
                className="w-full text-lg rounded-xl"
                onClick={() => window.open(WHATSAPP)}
              >
                📞 Falar com Técnico
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">
          🔧 Diagnóstico de Catracas
        </h1>
        <p className="text-center text-gray-600 mb-6">
          C7 Automação — Resolva problemas em segundos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(telas)
            .filter((t) => t !== "menu")
            .map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-1">
                      {item}
                    </h2>
                    <Button
                      className="w-full rounded-xl mt-2"
                      onClick={() => setTela(item)}
                    >
                      Acessar solução
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            className="rounded-2xl px-6 py-3 text-lg"
            onClick={() => window.open(WHATSAPP)}
          >
            📞 Falar com Técnico
          </Button>
        </div>
      </div>
    </div>
  );
}
