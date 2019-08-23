// import gmoPaymentServie from './gmo-payment.service';

// Exported controller methods
export default {
  searchReservationCode,
};

export async function searchReservationCode(req, res) {
  try {
    // const result = await gmoPaymentServie._charge(req.body.params);
    console.log(req.body.params);
    res.json("success");
  } catch(e) {
    res.status(e.status).send(e.message);
  }
}
