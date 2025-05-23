import React from 'react'
import { Metadata } from "next";
import ProductsList from '@/components/shared/products/products-list';
import { getproducts } from '@/db/actions/product';
export const metadata: Metadata = {
    title: "Home"
};

export default async function homePage() {
  const lestaproducts = await getproducts();
  return (
    <div>
      <ProductsList data={lestaproducts} title='Latest Arrivals' />
    </div>
  )
}
