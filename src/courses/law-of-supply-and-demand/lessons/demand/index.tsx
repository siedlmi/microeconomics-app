import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function DemandLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Demand</h2>
        <p className="text-lg mb-4">
          Demand represents the quantity of a good or service that consumers are willing and able to purchase at various prices during a given period of time.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Law of Demand: As price increases, quantity demanded decreases</li>
              <li>Demand Schedule: Table showing price-quantity relationships</li>
              <li>Demand Curve: Graphical representation of the demand schedule</li>
              <li>Market Demand: Sum of all individual demands</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Factors Affecting Demand</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consumer income</li>
              <li>Prices of related goods</li>
              <li>Consumer preferences</li>
              <li>Number of buyers</li>
              <li>Consumer expectations</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <DemandSupplyGraph type="demand" />
        </div>
      </div>
    </div>
  );
} 