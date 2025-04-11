import React from 'react';
import { useLang } from '../../../../i18n';
import DemandSupplyGraph from '../../../../components/DemandSupplyGraph';

export default function ExternalitiesLesson() {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Externalities</h2>
        <p className="text-lg mb-4">
          Externalities occur when the production or consumption of a good affects third parties who are not directly involved in the transaction. These effects can be either positive or negative.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Negative Externalities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pollution from factories</li>
              <li>Noise from construction</li>
              <li>Second-hand smoke</li>
              <li>Traffic congestion</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Positive Externalities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Education benefits to society</li>
              <li>Vaccination programs</li>
              <li>Research and development</li>
              <li>Public parks and green spaces</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Market Failure and Externalities</h3>
          <p className="mb-4">
            When externalities exist, the market equilibrium does not reflect the true social costs or benefits. This leads to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Overproduction of goods with negative externalities</li>
            <li>Underproduction of goods with positive externalities</li>
            <li>Inefficient allocation of resources</li>
          </ul>
        </div>

        <div className="mt-6">
          <DemandSupplyGraph type="both" />
        </div>
      </div>
    </div>
  );
} 