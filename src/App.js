/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Header from 'components/Header'
import LandingPage from 'components/LandingPage';
import NotFound from 'components/NotFound';
import SedMagma from 'components/fictitialPages/SedMagma';
import UltriciesLigula from 'components/fictitialPages/UltriciesLigula';
import Curabitur from 'components/fictitialPages/Curabitur';
import Login from 'components/Login';
import ProinEgetTorto from 'components/fictitialPages/ProinEgetTorto';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sed-magma" element={<SedMagma />} />
        <Route path="/ultricies-ligula" element={<UltriciesLigula />} />
        <Route path="/curabitur" element={<Curabitur />} />
        <Route path="/proin-eget-torto" element={<ProinEgetTorto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </BrowserRouter>
  )
}
