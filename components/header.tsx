import React from "react";
import Button from "./Button/button";

export default function Header() {
  return (
    <>
      <h1>Hey there!</h1>
      <div>
        This page is here to help you find the best credit card. You can answer
        few questions and let us filter the cards or look at our airtable and
        filter based on your preferences
      </div>
      <Button
        buttonText="FAQsasdfasdf"
        //   className="float-right"
      />
    </>
  );
}
