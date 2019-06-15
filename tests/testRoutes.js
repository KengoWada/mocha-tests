const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Get response.', () => {
	it('This one should fail.', () => {
		return chai
			.request(app)
			.get('/')
			.then(res => {
				chai.expect(res.body.message).to.not.equal('me');
			})
			.catch(err => {
				throw err;
			});
	});

	it('This one should pass', () => {
		return chai
			.request(app)
			.get('/')
			.then(res => {
				chai.expect(res.body.message).to.equal('We have launched');
			})
			.catch(err => {
				throw err;
			});
	});
});
