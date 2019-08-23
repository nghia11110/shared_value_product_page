import axios from 'axios';

export async function searchReservationCode(req, res) {
  try {
     const options = {
        method: "GET",
        data: req.body.params,
        url: `${process.env.ADMIN_PAGE_API_BASE_URL}/api/`,
        // url: `${process.env.API_BASE_URL}/api/todos`,
      };

      axios(options)
        .then((response) => {
          res.json(response.data);
          // res.json(response.data[0].text);
        })
  } catch(e) {
    res.status(e.status).send(e.message);
  }
}

// Exported controller methods
export default {
  searchReservationCode,
};