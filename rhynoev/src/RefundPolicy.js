// src/RefundPolicy.js
import React from 'react';
import './RefundPolicy.css'; // Common CSS for the Refund Policy page

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <h1>Refund Policy</h1>
      <p><strong>Last Updated: [Date]</strong></p>

      <p><strong>Introduction</strong></p>
      <p>At RHYNOEV, we strive to ensure our customers are satisfied with our products and services. If you’re not completely happy with your purchase, please review our refund policy below.</p>
      
      <p><strong>Eligibility for Refunds</strong></p>
      <p><strong>Products:</strong> Refund requests for physical products must be made within 30 days of receipt. The product must be unused, in its original packaging, and in a condition suitable for resale.</p>
      <p><strong>Services:</strong> Refunds for services are considered on a case-by-case basis. Please contact us within 7 days of the service to request a refund.</p>
      
      <p><strong>How to Request a Refund</strong></p>
      <p>Contact Us: Email us at <a href="mailto:support@rhynoev.com">support@rhynoev.com</a> with your order number and reason for the refund.</p>
      <p>Return Instructions: For product returns, we will provide you with instructions on how to return the item.</p>
      <p>Processing: Once we receive and inspect the returned item or verify your refund request, we will process the refund. Refunds will be issued to the original payment method.</p>
      
      <p><strong>Non-Refundable Items</strong></p>
      <p>Certain items and services may be non-refundable, including but not limited to:</p>
      <ul>
        <li>Digital downloads</li>
        <li>Customized or personalized products</li>
        <li>Shipping and handling fees</li>
      </ul>
      
      <p><strong>Changes to This Policy</strong></p>
      <p>We may update this Refund Policy as needed. Changes will be posted on our website, and your continued use of our services signifies acceptance of the updated policy.</p>
      
      <p><strong>Contact Us</strong></p>
      <p>For any questions or concerns regarding refunds, please reach out to us at <a href="mailto:support@rhynoev.com">support@rhynoev.com</a>.</p>
    </div>
  );
};

export default RefundPolicy;
