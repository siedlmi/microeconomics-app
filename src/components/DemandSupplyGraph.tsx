import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

type LessonType = 'supply' | 'demand' | 'both';

export default function DemandSupplyGraph({ type }: { type: LessonType }) {
  const [demandShift, setDemandShift] = useState(0);
  const [supplyShift, setSupplyShift] = useState(0);

  const quantities = [10, 20, 30, 40, 50];
  const data = quantities.map((q) => ({
    quantity: q,
    // Original curves
    demandPrice: (120 - 2 * q) / 2,
    supplyPrice: (40 + 2 * q) / 2,
    // Shifted curves
    shiftedDemandPrice: (120 + demandShift - 2 * q) / 2,
    shiftedSupplyPrice: (40 - supplyShift + 2 * q) / 2,
  }));

  const equilibrium = useMemo(() => {
    const eqQuantity = (160 + demandShift - supplyShift) / 8;
    const eqPrice = (120 + demandShift - 2 * eqQuantity) / 2;
    return {
      eqQuantity: Math.round(eqQuantity),
      eqPrice: Math.round(eqPrice),
    };
  }, [demandShift, supplyShift]);

  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {type !== 'supply' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block font-medium mb-2 text-gray-700">Demand Shift</label>
            <input
              type="range"
              min={-40}
              max={40}
              value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
        {type !== 'demand' && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block font-medium mb-2 text-gray-700">Supply Shift</label>
            <input
              type="range"
              min={-40}
              max={40}
              value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      {type === 'both' && (demandShift !== 0 || supplyShift !== 0) && (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <p className="text-sm sm:text-base">
            <strong>New Equilibrium:</strong> Price ${equilibrium.eqPrice}, Quantity {equilibrium.eqQuantity}
          </p>
        </div>
      )}

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <ResponsiveContainer width="100%" height={300} minWidth={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="quantity"
              label={{ value: 'Quantity', position: 'bottom', offset: 0 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: 'Price ($)', angle: -90, position: 'left', offset: 20 }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{ fontSize: '12px' }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            {type !== 'supply' && (
              <>
                <Line
                  type="monotone"
                  dataKey="demandPrice"
                  name="Original Demand"
                  stroke="#8884d8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
                {demandShift !== 0 && (
                  <Line
                    type="monotone"
                    dataKey="shiftedDemandPrice"
                    name="Shifted Demand"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                )}
              </>
            )}
            {type !== 'demand' && (
              <>
                <Line
                  type="monotone"
                  dataKey="supplyPrice"
                  name="Original Supply"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
                {supplyShift !== 0 && (
                  <Line
                    type="monotone"
                    dataKey="shiftedSupplyPrice"
                    name="Shifted Supply"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={false}
                  />
                )}
              </>
            )}
            {type === 'both' && demandShift === 0 && supplyShift === 0 && (
              <ReferenceDot
                x={20}
                y={30}
                r={6}
                fill="red"
                label={{ value: 'Original Equilibrium', position: 'top', fill: 'red', fontSize: 12 }}
              />
            )}
            {type === 'both' && (demandShift !== 0 || supplyShift !== 0) && (
              <ReferenceDot
                x={equilibrium.eqQuantity}
                y={equilibrium.eqPrice}
                r={6}
                fill="red"
                label={{ value: 'New Equilibrium', position: 'top', fill: 'red', fontSize: 12 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
