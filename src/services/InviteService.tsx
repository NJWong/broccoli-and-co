import axios from 'axios';

const requestInvite = async (name: string, email: string) => {
	if (!process.env.REACT_APP_REQUEST_INVITE_ENDPOINT) {
		throw(Error('Endpoint is not defined'));
	}

	const url = process.env.REACT_APP_REQUEST_INVITE_ENDPOINT;

	const payload = {
		name,
		email,
	};

	try {
		const response = await axios.post(url, payload);
		return response;
	} catch (error) {
		throw(Error(error.response.data.errorMessage));
	}
}

export default requestInvite;