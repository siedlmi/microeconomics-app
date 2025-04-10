import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DemandPoint {
  price: number;
  quantity: number;
}

export default function DemandScheduleLesson() {
  const [demandPoints, setDemandPoints] = useState<DemandPoint[]>([
    { price: 10, quantity: 100 },
    { price: 20, quantity: 80 },
    { price: 30, quantity: 60 },
    { price: 40, quantity: 40 },
    { price: 50, quantity: 20 },
  ]);

  const handlePriceChange = (index: number, value: number) => {
    const newPoints = [...demandPoints];
    newPoints[index].price = value;
    setDemandPoints(newPoints);
  };

  const handleQuantityChange = (index: number, value: number) => {
    const newPoints = [...demandPoints];
    newPoints[index].quantity = value;
    setDemandPoints(newPoints);
  };

  const addPoint = () => {
    const lastPoint = demandPoints[demandPoints.length - 1];
    setDemandPoints([
      ...demandPoints,
      { price: lastPoint.price + 10, quantity: Math.max(0, lastPoint.quantity - 20) },
    ]);
  };

  const removePoint = (index: number) => {
    if (demandPoints.length > 2) {
      setDemandPoints(demandPoints.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2>Demand Schedule and Curve</h2>
        <p>
          A demand schedule is a table that shows the quantity demanded of a good at different price levels.
          The demand curve is a graphical representation of this relationship, showing how the quantity
          demanded changes as price changes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Demand Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price ($)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity Demanded
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {demandPoints.map((point, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        value={point.price}
                        onChange={(e) => handlePriceChange(index, Number(e.target.value))}
                        className="w-20 px-2 py-1 border rounded"
                        min="0"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        value={point.quantity}
                        onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                        className="w-20 px-2 py-1 border rounded"
                        min="0"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => removePoint(index)}
                        className="text-red-600 hover:text-red-900"
                        disabled={demandPoints.length <= 2}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={addPoint}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add Point
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Demand Curve</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={demandPoints}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
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
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3>Key Concepts</h3>
        <ul>
          <li>
            <strong>Law of Demand:</strong> As price increases, quantity demanded decreases, and vice versa.
          </li>
          <li>
            <strong>Demand Schedule:</strong> A table showing the relationship between price and quantity demanded.
          </li>
          <li>
            <strong>Demand Curve:</strong> A downward-sloping curve representing the inverse relationship
            between price and quantity demanded.
          </li>
        </ul>
      </div>
    </div>
  );
} 