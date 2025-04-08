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
    <div className="mt-4">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {type !== 'supply' && (
          <div>
            <label className="block font-medium mb-1">Demand Shift</label>
            <input
              type="range"
              min={-40}
              max={40}
              value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}
        {type !== 'demand' && (
          <div>
            <label className="block font-medium mb-1">Supply Shift</label>
            <input
              type="range"
              min={-40}
              max={40}
              value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}
        {type === 'both' && (
          <div className="text-sm bg-yellow-100 p-2 rounded">
            <p><strong>Equilibrium:</strong> Price ${equilibrium.eqPrice}, Quantity {equilibrium.eqQuantity}</p>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="quantity" 
            label={{ value: 'Quantity', position: 'bottom' }}
          />
          <YAxis 
            label={{ value: 'Price ($)', angle: -90, position: 'left' }}
          />
          <Tooltip />
          {type !== 'supply' && (
            <>
              <Line 
                type="monotone" 
                dataKey="demandPrice" 
                name="Original Demand" 
                stroke="#8884d8" 
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              {demandShift !== 0 && (
                <Line 
                  type="monotone" 
                  dataKey="shiftedDemandPrice" 
                  name="Shifted Demand" 
                  stroke="#8884d8" 
                  strokeWidth={2}
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
              />
              {supplyShift !== 0 && (
                <Line 
                  type="monotone" 
                  dataKey="shiftedSupplyPrice" 
                  name="Shifted Supply" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
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
              label={{ value: 'Original Equilibrium', position: 'top', fill: 'red' }}
            />
          )}
          {type === 'both' && (demandShift !== 0 || supplyShift !== 0) && (
            <ReferenceDot
              x={equilibrium.eqQuantity}
              y={equilibrium.eqPrice}
              r={6}
              fill="red"
              label={{ value: 'New Equilibrium', position: 'top', fill: 'red' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
