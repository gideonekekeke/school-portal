import React from "react";
import "./Pricing.css";
import { Button } from "antd";

function Pricing() {
  return (
    <div>
      <div className="priceContainer">
        <div className="priceIns">
          <h1>Choose a Plan to Access all Home Courses</h1>
        </div>
        <div className="pricePlans">
          <div className="plan1">Individual Plans</div>
          <div className="plan2">Family plans</div>
          <div className="plan3">Gift plans</div>
        </div>
        <div className="allPriceCards">
          <div className="priceCard">
            <div className="Time">
              <h2>Quarterly</h2>
            </div>
            <div className="priceContent">
              <div className="CurrentPrice">
                <h2>$</h2>
                <h1>25</h1>
                <h3>/month</h3>
              </div>
              <div className="mainPrice">$ 75 Billed Quarterly</div>
              <div className="wishButton">
                <Button>ADD TO CART</Button>
              </div>
              <div className="billtype">recurring</div>
            </div>
          </div>
          <div className="priceCard">
            <div className="Time">
              <h2>1-Year</h2>
            </div>
            <div className="priceContent">
              <div className="CurrentPrice">
                <h2 className="coloredprice">$</h2>
                <h1 className="coloredprice">10.5</h1>
                <h3 className="coloredprice">/month</h3>
              </div>
              <div className="oldPrice">
                <h2>$15/month</h2>
              </div>
              <div className="mainPrice">$126 billed annually</div>
              <div className="wishButton">
                <Button>ADD TO CART</Button>
              </div>
              <div className="billtype">recurring</div>
            </div>
          </div>
          <div className="priceCard">
            <div className="Time">
              <h2>3-Year</h2>
            </div>
            <div className="priceContent">
              <div className="CurrentPrice">
                <h2 className="coloredprice">$</h2>
                <h1 className="coloredprice">7</h1>
                <h3 className="coloredprice">/month</h3>
              </div>
              <div className="oldPrice">
                <h2>$10/month</h2>
              </div>
              <div className="mainPrice">$252 for 3 years</div>
              <div className="wishButton">
                <Button>ADD TO CART</Button>
              </div>
              <div className="billtype">one time payment</div>
            </div>
          </div>
        </div>
        <div className="gateWay">
          President’s Day Sale Ends in 1 day Now accepting
        </div>
        <div className="offerPlan">
          <div className="premiumplan">
            <h2>All premium plans include:</h2>
          </div>
          <div className="premiumContent">
            <div className="pressOn">
              <div>✔️ 40+ Programming Courses</div>
              <div>✔️ 16 iPad Courses, 7 iPhone Courses</div>
              <div>✔️ Minecraft Java Edition server</div>
            </div>
            <div className="pressOn">
              <div>✔️ 3700+ coding activities</div>
              <div>✔️ Advanced Minecraft modding</div>
              <div>✔️ Daily coding missions</div>
            </div>
            <div className="pressOn">
              <div>✔️ Exclusive access to new features</div>
              <div>✔️ 5x faster skills mastery</div>
              <div>✔️ Monthly skill assessment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
