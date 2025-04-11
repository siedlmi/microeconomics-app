import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function ElasticityLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Elasticity of Supply and Demand</h2>
        <p className="text-lg mb-4">
          Elasticity measures how responsive quantity demanded or supplied is to changes in price or other factors. It helps us understand how markets will react to changes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Price Elasticity of Demand</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Elastic demand: Quantity demanded is very responsive to price changes</li>
              <li>Inelastic demand: Quantity demanded is not very responsive to price changes</li>
              <li>Factors affecting elasticity:
                <ul className="list-disc pl-6 mt-2">
                  <li>Availability of substitutes</li>
                  <li>Necessity vs. luxury</li>
                  <li>Proportion of income spent</li>
                  <li>Time period considered</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Price Elasticity of Supply</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Elastic supply: Quantity supplied is very responsive to price changes</li>
              <li>Inelastic supply: Quantity supplied is not very responsive to price changes</li>
              <li>Factors affecting elasticity:
                <ul className="list-disc pl-6 mt-2">
                  <li>Production time</li>
                  <li>Availability of inputs</li>
                  <li>Storage possibilities</li>
                  <li>Production capacity</li>
                </ul>
              </li>
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