import { useParams } from "react-router";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  // parseInt because data lookups use a number type but URL params are always string
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}