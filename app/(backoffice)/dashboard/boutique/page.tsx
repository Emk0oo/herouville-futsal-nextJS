import React from 'react'
import {Metadata} from 'next'
import BoutiqueDashboard from '@/components/dashboard/boutique/BoutiqueDashboard'

export const metadata: Metadata = {
  title: 'Herouville Futsal - Dashboard - Boutique',
  description: 'Gestion de la boutique.'
}

export default function Boutique() {
  return (
    <BoutiqueDashboard />
  )
}
