const checkIn = document.querySelector('#check-in');
const checkOut = document.querySelector('#check-out');
const nights = document.querySelector('#nights');
const price = document.querySelector('#price');
const roomType = document.querySelector('#room-type');

const prices = {
	standard: 350,
	premium: 550,
	deluxe: 800,
};

function calculate() {
	if (checkIn.value && checkOut.value) {
		const start = new Date(checkIn.value);
		const end = new Date(checkOut.value);
		const diffTime = end - start;
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		nights.value = diffDays > 0 ? diffDays : 0;

		if (roomType.value && diffDays > 0) {
			const total = diffDays * prices[roomType.value];
			price.textContent = `${total.toLocaleString('pl-PL')} zł`;
		} else {
			price.textContent = '0 zł';
		}
	}
}

checkIn.addEventListener('change', calculate);
checkOut.addEventListener('change', calculate);
roomType.addEventListener('change', calculate);
