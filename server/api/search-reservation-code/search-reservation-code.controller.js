import axios from 'axios';
import moment from 'moment';

export async function searchReservationCode(req, res) {
  try {
    const data = {};

    data.reservation_guest_first_name = req.body.params.first_name;
    data.reservation_guest_last_name = req.body.params.last_name;
    data.reservation_start_date = moment(req.body.params.checkin).format("YYYY-MM-DD");
    data.reservation_end_date = moment(req.body.params.checkout).format("YYYY-MM-DD");
    data.reservation_guest_phone_number = req.body.params.phone_number;

    const options = {
      method: "POST",
      data,
      url: `${process.env.ADMIN_PAGE_API_BASE_URL}/api/reservation`,
    };

    axios(options)
      .then((response) => {
        res.json(response.data);
      })
  } catch(e) {
    res.status(e.status).send(e.message);
  }
}

// Exported controller methods
export default {
  searchReservationCode,
};