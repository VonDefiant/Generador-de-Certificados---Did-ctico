/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import HomeMenu, { CertificateType } from './components/HomeMenu';
import DeathCertificateApp from './components/DeathCertificateApp';
import BirthCertificateApp from './components/BirthCertificateApp';
import MarriageCertificateApp from './components/MarriageCertificateApp';

export default function App() {
  const [currentView, setCurrentView] = useState<'menu' | CertificateType>('menu');

  const handleBackToMenu = () => {
    setCurrentView('menu');
  };

  if (currentView === 'death') {
    return <DeathCertificateApp onBack={handleBackToMenu} />;
  }

  if (currentView === 'birth') {
    return <BirthCertificateApp onBack={handleBackToMenu} />;
  }

  if (currentView === 'marriage') {
    return <MarriageCertificateApp onBack={handleBackToMenu} />;
  }

  return <HomeMenu onSelect={setCurrentView} />;
}
