import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function EquilibriumLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Market Equilibrium</h2>
        <p className="text-lg mb-4">
          Market equilibrium occurs when the quantity demanded equals the quantity supplied at a particular price. This is the point where the supply and demand curves intersect.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Equilibrium Price: The price at which quantity demanded equals quantity supplied</li>
              <li>Equilibrium Quantity: The quantity bought and sold at the equilibrium price</li>
              <li>Market Clearing: When all goods produced are sold at the equilibrium price</li>
              <li>Surplus and Shortage: Situations when price is above or below equilibrium</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Market Adjustments</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Price adjusts to eliminate surpluses and shortages</li>
              <li>Markets tend to move toward equilibrium</li>
              <li>Changes in supply or demand affect equilibrium</li>
              <li>Time needed for adjustment varies by market</li>
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