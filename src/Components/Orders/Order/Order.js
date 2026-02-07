import React from "react";

const Order = (props) => {
console.log("Order 16 ingredients:", props.order.ingredients);

  // Create ingredient summary from array
  const ingridientSummary = (props.order.ingridients || [])
    .filter(item => item.amount > 0)
    .map(item => (
      <span
        key={item.type}
        style={{
          border: "1px solid #d1d5db",
          borderRadius: "999px",
          padding: "6px 12px",
          marginRight: "8px",
          marginBottom: "6px",
          display: "inline-block",
          backgroundColor: "#f9fafb",
          fontSize: "13px",
          color: "#374151"
        }}
      >
        {item.amount}×{" "}
        <span style={{ textTransform: "capitalize" }}>
          {item.type}
        </span>
      </span>
    ));


  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "18px",
        margin: "14px 0",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        maxWidth: "520px"
      }}
    >

      {/* Order ID */}
      <h4
        style={{
          margin: "0 0 10px 0",
          color: "#1f2937",
          fontWeight: "600"
        }}
      >
        Order #{props.order.id}
      </h4>


      {/* Delivery Address */}
      <p style={{ margin: "6px 0", color: "#374151" }}>
        <strong>📍 Delivery Address:</strong><br />
        {props.order.customer?.deliveryAddress || "Not provided"}
      </p>


      {/* Contact Number */}
      <p style={{ margin: "6px 0", color: "#374151" }}>
        <strong>📞 Contact Number:</strong><br />
        {props.order.customer?.contactNumber || "Not provided"}
      </p>


      {/* Payment Method */}
      <p style={{ margin: "6px 0", color: "#374151" }}>
        <strong>💳 Payment Method:</strong><br />
        {props.order.customer?.paymentMethod || "Not provided"}
      </p>


      {/* Items */}
      <div style={{ marginTop: "10px" }}>
        <strong style={{ color: "#1f2937" }}>🍔 Items:</strong><br />

        {ingridientSummary.length > 0 ? (
          <div style={{ marginTop: "6px" }}>
            {ingridientSummary}
          </div>
        ) : (
          <span style={{ color: "#6b7280" }}>
            No items in this order
          </span>
        )}
      </div>


      {/* Divider */}
      <hr
        style={{
          margin: "14px 0",
          border: "none",
          borderTop: "1px solid #e5e7eb"
        }}
      />


      {/* Total Price */}
      <p
        style={{
          margin: "0",
          fontSize: "17px",
          fontWeight: "bold",
          color: "#16a34a"
        }}
      >
        Total: ¥{props.order.price}
      </p>

    </div>
  );
};

export default Order;
