import axios from "axios";

export default {

	getCustomers: function() {
		return axios.get("/customers")
	},

	getCertainCustomer: function(id) {
		return axios.get("/customers/" + id);
	},

	getAppointments: function() {
		return axios.get("/appointments");
	}

	getCertainAppointment: function() {
		return axios.get("/appointments/" + id);
	}

	getTechnicians: function() {
		return axios.get("/appointments");
	}

	getCertainTechnician: function() {
		return axios.get("/technicians/" + id);
	}

}