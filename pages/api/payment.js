export default async (req, res) => {
  const { amount, currency } = req.body;

  const response = await fetch("https://apirone.com/api/v2/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount,
      currency,
      callback_url: "https://yourdomain.com/api/payment-callback",
      success_url: "https://yourdomain.com/success",
      fail_url: "https://yourdomain.com/fail"
    })
  });

  const data = await response.json();
  res.status(200).json(data);
};
