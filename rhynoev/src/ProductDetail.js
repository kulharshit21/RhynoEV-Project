// src/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const productDetails = {
  'se03-lite': {
    name: 'Rhyno SE03 Lite',
    battery: '1.8 kWh, LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '3 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    warrantyOnElectronics: '1 year',
    maxRange30: '100 km',
    maxRange45: '90 km',
    maxRangeFull: '60 km',
    otherKeyBenefits: 'Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe'
  },
  'se03': {
    name: 'Rhyno SE03',
    battery: '2.7 kWh, LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '4 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    warrantyOnElectronics: '1 year',
    maxRange30: '150 km',
    maxRange45: '110 km',
    maxRangeFull: '90 km',
    otherKeyBenefits: 'Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe'
  },
  'se03-max': {
    name: 'Rhyno SE03 Max',
    battery: '2.7 kWh, LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '4 hours (12A)',
    motor: '2000W',
    maxSpeed: '65 km/h',
    warrantyOnElectronics: '1 year',
    maxRange30: '120 km',
    maxRange45: '100 km',
    maxRangeFull: '80 km',
    otherKeyBenefits: 'Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe'
  }
};

const ProductDetail = () => {
  const { productName } = useParams();
  const product = productDetails[productName];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <div className="specifications">
        <h2>Specifications</h2>
        <ul>
          <li><strong>Battery:</strong> {product.battery}</li>
          <li><strong>Battery Warranty:</strong> {product.batteryWarranty}</li>
          <li><strong>Charging Time:</strong> {product.chargingTime}</li>
          <li><strong>Motor:</strong> {product.motor}</li>
          <li><strong>Max Speed:</strong> {product.maxSpeed}</li>
          <li><strong>Max Range (@30km/h):</strong> {product.maxRange30}</li>
          <li><strong>Max Range (@45km/h):</strong> {product.maxRange45}</li>
          <li><strong>Max Range (@Full Speed):</strong> {product.maxRangeFull}</li>
        </ul>
      </div>
      <div className="other-benefits">
        <h2>Other Key Benefits</h2>
        <ul>
          {product.otherKeyBenefits.split(', ').map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default ProductDetail;
