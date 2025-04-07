import { useState, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
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
  const [price, setPrice] = useState(30);
  const [demandShift, setDemandShift] = useState(0);
  const [supplyShift, setSupplyShift] = useState(0);

  const demand = 120 + demandShift - price * 2;
  const supply = -40 + supplyShift + price * 2;
  const elasticity = (price / demand).toFixed(2);

  const equilibrium = useMemo(() => {
    const eqPrice = (160 + demandShift - supplyShift) / 4;
    const eqQuantity = 120 + demandShift - eqPrice * 2;
    return {
      eqPrice: Math.round(eqPrice),
      eqQuantity: Math.round(eqQuantity),
    };
  }, [demandShift, supplyShift]);

  const prices = [10, 20, 30, 40, 50];
  const data = prices.map((p) => ({
    price: p,
    demand: 120 + demandShift - p * 2,
    supply: -40 + supplyShift + p * 2,
  }));

  const springProps = useSpring({ number: price });

  return (
    <div className="mt-4">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
        <label className="block font-medium mb-1">Adjust Price: <animated.span>{springProps.number.to((n) => Math.round(n).toString())}</animated.span></label>
          <input
            type="range"
            min={10}
            max={50}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
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
            <p><strong>Elasticity:</strong> {elasticity}</p>
            <p><strong>Equilibrium:</strong> Price ${equilibrium.eqPrice}, Quantity {equilibrium.eqQuantity}</p>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" />
          <YAxis />
          <Tooltip />
          {type !== 'supply' && (
            <Line type="monotone" dataKey="demand" stroke="#8884d8" strokeWidth={2} />
          )}
          {type !== 'demand' && (
            <Line type="monotone" dataKey="supply" stroke="#82ca9d" strokeWidth={2} />
          )}
          {type === 'both' && (
            <ReferenceDot
              x={equilibrium.eqPrice}
              y={equilibrium.eqQuantity}
              r={6}
              fill="red"
              label={{ value: 'Equilibrium', position: 'top', fill: 'red' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
