import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function ShiftsLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Shifts in Supply and Demand</h2>
        <p className="text-lg mb-4">
          Changes in factors other than price cause the entire supply or demand curve to shift, leading to new equilibrium points in the market.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Demand Shifts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Income changes (normal vs. inferior goods)</li>
              <li>Prices of related goods (substitutes and complements)</li>
              <li>Consumer preferences and tastes</li>
              <li>Number of buyers in the market</li>
              <li>Consumer expectations about future prices</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Supply Shifts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Input prices and production costs</li>
              <li>Technology and productivity</li>
              <li>Number of sellers in the market</li>
              <li>Prices of related goods in production</li>
              <li>Producer expectations about future prices</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <DemandSupplyGraph type="both" />
        </div>
      </div>
    </div>
  );
} 