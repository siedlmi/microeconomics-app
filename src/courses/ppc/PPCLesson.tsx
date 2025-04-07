import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function PPCGraph() {
  const [shift, setShift] = useState(0);

  const data = Array.from({ length: 11 }, (_, i) => {
    const butter = i * 10;
    const guns = 100 - Math.pow(i * 10 - 50, 2) / 25 + shift;
    return { butter, guns: Math.max(0, guns) };
  });

  return (
    <div className="mt-4">
      <input
        type="range"
        min={-30}
        max={30}
        value={shift}
        onChange={(e) => setShift(Number(e.target.value))}
        className="w-full mb-4"
      />
      <div className="text-sm mb-4">Shift: {shift}</div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="butter" label={{ value: 'Butter', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Guns', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="guns" stroke="#8884d8" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
