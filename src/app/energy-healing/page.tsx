"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Zap } from "lucide-react";

const energyFlows = [
  {
    title: "Kundalini Activation",
    duration: "30 min",
    description: "Awaken and channel your spiritual energy upward",
  },
  {
    title: "Chakra Balancing Flow",
    duration: "25 min",
    description: "Harmonize your energy centers through guided practice",
  },
  {
    title: "Quantum Energy Field",
    duration: "20 min",
    description: "Expand and strengthen your personal energy field",
  },
];

export default function EnergyFlow() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <Zap className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl font-bold">Energy Flow</h1>
        <p className="text-muted-foreground">
          Channel and direct life force energy for healing and transformation
        </p>
      </div>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="grid gap-4">
          {energyFlows.map((session, i) => (
            <motion.div
              key={session.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{session.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {session.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{session.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
