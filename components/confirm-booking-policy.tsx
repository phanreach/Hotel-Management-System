import React from "react";

export default function ConfirmBookingPolicy() {
  return (
    <div>
      <div className="text-center px-4">
        <p className="text-xs text-[#9aa2ac]">
          By clicking "Complete Booking", you agree to our{" "}
          <a className="text-primary hover:underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-primary hover:underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
