import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h2>Home</h2>
    <section>
      <h3>Why Donate Blood?</h3>
      <p>
        Donating blood is a simple, yet powerful act that can save lives. Here are some key reasons why you should consider donating blood:
      </p>
      <ul>
        <li>
          <strong>Save Lives:</strong> Every donation can help save up to three lives, making a significant impact on patients in need.
        </li>
        <li>
          <strong>Support Medical Treatments:</strong> Blood is essential for surgeries, cancer treatments, chronic illnesses, and traumatic injuries.
        </li>
        <li>
          <strong>Maintain Healthy Blood Levels:</strong> Regular blood donation can help regulate your own blood levels and stimulate blood cell production.
        </li>
        <li>
          <strong>Community Solidarity:</strong> Donating blood fosters a sense of community and mutual support, showing that we care for one another.
        </li>
      </ul>
    </section>
    
    <section>
      <h3>Importance of a Blood Donation Database System</h3>
      <p>
        A blood donation database system is crucial for the efficient and effective management of blood donations and transfusions. Here’s why:
      </p>
      <ul>
        <li>
          <strong>Track Donor Information:</strong> It helps in maintaining accurate records of donors, their blood types, and donation history.
        </li>
        <li>
          <strong>Ensure Availability:</strong> The system ensures that there is always an adequate supply of all blood types, reducing shortages during emergencies.
        </li>
        <li>
          <strong>Match Patients and Donors:</strong> It allows for quick matching of donors with patients in need, facilitating faster response times.
        </li>
        <li>
          <strong>Enhance Safety:</strong> By tracking donor eligibility and screening results, it ensures the safety and quality of the blood supply.
        </li>
        <li>
          <strong>Improve Efficiency:</strong> Streamlining the process from donation to transfusion minimizes delays and optimizes resource utilization.
        </li>
      </ul>
    </section>
  </div>
);

export default Home;
