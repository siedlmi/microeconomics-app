import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function SupplyLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Supply</h2>
        <p className="text-lg mb-4">
          Supply represents the quantity of a good or service that producers are willing and able to offer for sale at various prices during a given period of time.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Law of Supply: As price increases, quantity supplied increases</li>
              <li>Supply Schedule: Table showing price-quantity relationships</li>
              <li>Supply Curve: Graphical representation of the supply schedule</li>
              <li>Market Supply: Sum of all individual supplies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Factors Affecting Supply</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Production costs</li>
              <li>Technology</li>
              <li>Number of sellers</li>
              <li>Prices of related goods</li>
              <li>Producer expectations</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <DemandSupplyGraph type="supply" />
        </div>
      </div>
    </div>
  );
} 